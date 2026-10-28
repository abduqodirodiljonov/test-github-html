/* ========================================================
   COSMOS ODYSSEY — 3D SPACE ENGINE & INTERSTELLAR SIMULATOR
   Author: abduqodirodiljonov
   ======================================================== */

(() => {
  'use strict';

  // --- CELESTIAL DOSSIER DATABASE ---
  const CELESTIAL_DATA = {
    Sun: {
      name: "СОЛНЦЕ",
      class: "Желтый карлик • G2V",
      summary: "Центральная звезда нашей системы, содержащая 99.86% массы всей Солнечной системы. В недрах непрерывно идет термоядерный синтез, превращающий водород в гелий при температуре около 15 миллионов градусов.",
      radius: "696,340 км",
      mass: "1.989 × 10³⁰ кг",
      temp: "5,778 K (поверхность)",
      gravity: "274 м/с² (28g)",
      period: "25–35 дней",
      habitable: "Источник жизни",
      rad: "95%", warp: "18%", mag: "82%"
    },
    BlackHole: {
      name: "ГАРГАНТЮА",
      class: "Сверхмассивная Чёрная Дыра",
      summary: "Релятивистский гравитационный гигант с вращающимся аккреционным диском и выраженным гравитационным линзированием. Скорость убегания на горизонте событий превышает скорость света.",
      radius: "≈ 100 млн км (Rs)",
      mass: "100 млн M☉",
      temp: "≈ 0 K (Диск: >10⁷ K)",
      gravity: "∞ на сингулярности",
      period: "Спин a* ≈ 0.998",
      habitable: "Экстремальная зона",
      rad: "99%", warp: "100%", mag: "94%"
    },
    Nebula: {
      name: "ТУМАННОСТЬ ОРИОН (M42)",
      class: "Эмиссионная туманность",
      summary: "Огромное диффузное облако ионизированного водорода и космической пыли в 1344 световых годах от Земли. Является одной из самых активных областей звездообразования в нашем рукаве Галактики.",
      radius: "≈ 12 св. лет",
      mass: "≈ 2,000 M☉",
      temp: "≈ 10,000 K",
      gravity: "Слабая диффузная",
      period: "Расширение 10 км/с",
      habitable: "Звездная колыбель",
      rad: "40%", warp: "6%", mag: "45%"
    },
    Mercury: {
      name: "МЕРКУРИЙ",
      class: "Планета земной группы",
      summary: "Самая близкая к Солнцу и самая маленькая планета системы. Из-за отсутствия плотной атмосферы перепад температур между дневной и ночной стороной превышает 600 °C.",
      radius: "2,439.7 км",
      mass: "3.301 × 10²³ кг",
      temp: "-180°C ... +430°C",
      gravity: "3.7 м/с² (0.38g)",
      period: "88 земных суток",
      habitable: "Непригодна",
      rad: "75%", warp: "4%", mag: "12%"
    },
    Venus: {
      name: "ВЕНЕРА",
      class: "Сестра Земли • Парниковый ад",
      summary: "Вторая планета от Солнца с чудовищным парниковым эффектом. Атмосферное давление на поверхности в 92 раза выше земного, а облака состоят из концентрированной серной кислоты.",
      radius: "6,051.8 км",
      mass: "4.867 × 10²⁴ кг",
      temp: "+464 °C постоянная",
      gravity: "8.87 м/с² (0.90g)",
      period: "224.7 суток",
      habitable: "Смертоносна",
      rad: "50%", warp: "5%", mag: "8%"
    },
    Earth: {
      name: "ЗЕМЛЯ & ЛУНА",
      class: "Обитаемый оазис • Класс M",
      summary: "Единственное известное во Вселенной тело с подтвержденной биологической жизнью и жидкой водой на поверхности. Обладает мощной магнитосферой и естественным спутником Луной.",
      radius: "6,371.0 км",
      mass: "5.972 × 10²⁴ кг",
      temp: "+15 °C (средняя)",
      gravity: "9.81 м/с² (1.00g)",
      period: "365.25 суток",
      habitable: "Оптимальная (100%)",
      rad: "15%", warp: "3%", mag: "60%"
    },
    Mars: {
      name: "МАРС",
      class: "Красная планета",
      summary: "Четвертая планета с тонкой углекислотной атмосферой и следами древних рек. Здесь расположен Олимп — высочайший потухший вулкан Солнечной системы высотой 21.9 км.",
      radius: "3,389.5 км",
      mass: "6.417 × 10²³ кг",
      temp: "-63 °C (средняя)",
      gravity: "3.72 м/с² (0.38g)",
      period: "687 суток",
      habitable: "Кандидат для базы",
      rad: "60%", warp: "4%", mag: "5%"
    },
    Asteroids: {
      name: "ПОЯС АСТЕРОИДОВ",
      class: "Кольцо протопланетных остатков",
      summary: "Область между Марсом и Юпитером, содержащая миллионы силикатных и металлических тел — осколков формирования планет, не сумевших объединиться из-за приливных сил Юпитера.",
      radius: "Ширина ≈ 1.5 AU",
      mass: "≈ 2.39 × 10²¹ кг",
      temp: "-73 °C ... -108 °C",
      gravity: "Микрогравитация",
      period: "3–6 земных лет",
      habitable: "Добыча ресурсов",
      rad: "42%", warp: "8%", mag: "10%"
    },
    Jupiter: {
      name: "ЮПИТЕР",
      class: "Газовый гигант",
      summary: "Крупнейшая планета системы, обладающая 95 известными спутниками. Знаменитое Большое Красное Пятно — антициклонический гигантский шторм, бушующий как минимум 350 лет.",
      radius: "69,911 км",
      mass: "1.898 × 10²⁷ кг",
      temp: "-110 °C (облака)",
      gravity: "24.79 м/с² (2.53g)",
      period: "11.86 лет",
      habitable: "Непригодна",
      rad: "90%", warp: "12%", mag: "98%"
    },
    Saturn: {
      name: "САТУРН",
      class: "Властелин колец",
      summary: "Второй по величине гигант с потрясающей системой колец толщиной всего от десятков метров до километра, состоящих на 99% из чистейшего водяного льда.",
      radius: "58,232 км",
      mass: "5.683 × 10²⁶ кг",
      temp: "-140 °C (облака)",
      gravity: "10.44 м/с² (1.06g)",
      period: "29.45 лет",
      habitable: "Спутники интересны",
      rad: "40%", warp: "9%", mag: "70%"
    },
    Uranus: {
      name: "УРАН",
      class: "Ледяной гигант",
      summary: "Планета с экстремальным наклоном оси вращения (97.77°), буквально 'катящаяся' по орбите на боку. Атмосфера богата метаном, придающим планете аквамариновый оттенок.",
      radius: "25,362 км",
      mass: "8.681 × 10²⁵ кг",
      temp: "-195 °C (рекорд холода)",
      gravity: "8.69 м/с² (0.89g)",
      period: "84.0 лет",
      habitable: "Непригодна",
      rad: "25%", warp: "6%", mag: "40%"
    },
    Neptune: {
      name: "НЕПТУН",
      class: "Ледяной штормовой гигант",
      summary: "Самая дальняя планета системы. Скорость сверхзвуковых ветров в верхних слоях атмосферы Нептуна достигает рекордных 2,100 км/ч.",
      radius: "24,622 км",
      mass: "1.024 × 10²⁶ кг",
      temp: "-200 °C",
      gravity: "11.15 м/с² (1.14g)",
      period: "164.8 лет",
      habitable: "Непригодна",
      rad: "20%", warp: "5%", mag: "38%"
    }
  };

  // --- PROCEDURAL TEXTURE GENERATORS ---
  function createSunTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#ff9e00');
    grad.addColorStop(0.5, '#ffdd00');
    grad.addColorStop(1, '#ff6000');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Solar granulation
    for (let i = 0; i < 25000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 2 + 1;
      ctx.fillStyle = Math.random() > 0.4 ? 'rgba(255, 255, 230, 0.4)' : 'rgba(200, 50, 0, 0.3)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }

  function createEarthTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Deep oceans
    ctx.fillStyle = '#0b3c6d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Continents
    ctx.fillStyle = '#2d6a4f';
    for (let i = 0; i < 30; i++) {
      const cx = Math.random() * canvas.width;
      const cy = Math.random() * canvas.height * 0.7 + canvas.height * 0.15;
      const rad = Math.random() * 80 + 30;
      ctx.beginPath();
      ctx.arc(cx, cy, rad, 0, Math.PI * 2);
      ctx.fill();

      for (let j = 0; j < 8; j++) {
        const ox = cx + (Math.random() - 0.5) * rad * 1.5;
        const oy = cy + (Math.random() - 0.5) * rad * 1.5;
        ctx.beginPath();
        ctx.arc(ox, oy, rad * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Polar ice caps
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, 35);
    ctx.fillRect(0, canvas.height - 35, canvas.width, 35);

    return new THREE.CanvasTexture(canvas);
  }

  function createEarthCloudsTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    for (let i = 0; i < 200; i++) {
      const cx = Math.random() * canvas.width;
      const cy = Math.random() * canvas.height;
      const w = Math.random() * 120 + 40;
      const h = Math.random() * 30 + 10;
      ctx.beginPath();
      ctx.ellipse(cx, cy, w, h, Math.random() * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }

  function createBandedPlanetTexture(baseColor, bandColor1, bandColor2) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < canvas.height; y += 4) {
      const factor = Math.sin(y * 0.08) * Math.cos(y * 0.02);
      if (factor > 0.2) {
        ctx.fillStyle = bandColor1;
        ctx.fillRect(0, y, canvas.width, 4);
      } else if (factor < -0.3) {
        ctx.fillStyle = bandColor2;
        ctx.fillRect(0, y, canvas.width, 4);
      }
    }

    // Great Red Spot for Jupiter
    if (baseColor === '#c99065') {
      ctx.fillStyle = '#b7410e';
      ctx.beginPath();
      ctx.ellipse(650, 320, 70, 35, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  function createSaturnRingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grad.addColorStop(0, 'rgba(200, 180, 140, 0)');
    grad.addColorStop(0.2, 'rgba(220, 200, 160, 0.8)');
    grad.addColorStop(0.5, 'rgba(180, 160, 120, 0.9)');
    grad.addColorStop(0.65, 'rgba(0, 0, 0, 0)'); // Cassini division
    grad.addColorStop(0.72, 'rgba(230, 210, 170, 0.85)');
    grad.addColorStop(0.95, 'rgba(190, 170, 130, 0.5)');
    grad.addColorStop(1, 'rgba(190, 170, 130, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return new THREE.CanvasTexture(canvas);
  }

  function createBlackHoleDiskTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(512, 512, 100, 512, 512, 500);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(0.25, 'rgba(255, 255, 240, 0.95)');
    grad.addColorStop(0.35, 'rgba(255, 170, 0, 0.85)');
    grad.addColorStop(0.55, 'rgba(255, 60, 0, 0.6)');
    grad.addColorStop(0.85, 'rgba(180, 20, 0, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Spiral accretion wisps
    ctx.strokeStyle = 'rgba(255, 240, 200, 0.15)';
    ctx.lineWidth = 3;
    for (let r = 160; r < 460; r += 12) {
      ctx.beginPath();
      ctx.arc(512, 512, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    return new THREE.CanvasTexture(canvas);
  }

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  class SpaceAudioEngine {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.droneGain = null;
      this.osc1 = null;
      this.osc2 = null;
      this.thrusterNoise = null;
      this.thrusterGain = null;
    }

    init() {
      if (this.ctx) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master ambient drone
      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.001, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 180;

      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sawtooth';
      this.osc1.frequency.value = 55; // A1 deep drone

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.value = 55.4; // Binaural beat

      this.osc1.connect(filter);
      this.osc2.connect(filter);
      filter.connect(this.droneGain);
      this.droneGain.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
    }

    toggle() {
      if (!this.ctx) this.init();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.droneGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 1.5);
      } else {
        this.droneGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
      }
      return this.isPlaying;
    }

    playBeep(freq = 880, duration = 0.08) {
      if (!this.ctx || !this.isPlaying) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    }

    playWarpSound() {
      if (!this.ctx) this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(100, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 1.2);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 2.2);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 2.2);
    }
  }

  // --- MAIN 3D APPLICATION ---
  class CosmosApp {
    constructor() {
      this.container = document.getElementById('canvas-container');
      this.audio = new SpaceAudioEngine();

      this.timeSpeed = 1.0;
      this.isWarping = false;
      this.flightMode = false;
      this.showOrbits = true;
      this.showLabels = true;
      this.showNebula = true;

      this.currentTarget = 'Sun';
      this.targetObject = null;
      this.cameraLerp = { active: false, startPos: null, endPos: null, progress: 0 };

      // Ship flight state
      this.ship = {
        position: new THREE.Vector3(0, 50, 450),
        velocity: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(0, 0, 0, 'YXZ'),
        speed: 0,
        throttle: 0,
        boost: 1.0
      };
      this.keys = {};

      this.planets = [];
      this.orbitLines = [];

      this.initThree();
      this.createUniverse();
      this.initUI();
      this.initEvents();
      this.animate();
    }

    initThree() {
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(0x030712, 0.00008);

      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 35000);
      this.camera.position.set(0, 280, 520);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.2;
      this.container.appendChild(this.renderer.domElement);

      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.maxDistance = 6000;
      this.controls.minDistance = 5;

      // Lights
      this.sunLight = new THREE.PointLight(0xfff5e6, 2.5, 5000, 0.5);
      this.scene.add(this.sunLight);

      this.ambientLight = new THREE.AmbientLight(0x1a2238, 0.8);
      this.scene.add(this.ambientLight);
    }

    createUniverse() {
      // 1. STARFIELD
      const starGeo = new THREE.BufferGeometry();
      const starCount = 12000;
      const starPos = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const rad = 2500 + Math.random() * 4500;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        starPos[i3] = rad * Math.sin(phi) * Math.cos(theta);
        starPos[i3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
        starPos[i3 + 2] = rad * Math.cos(phi);

        // Star spectral colors (blue, white, yellow, orange)
        const rand = Math.random();
        if (rand > 0.8) { starColors[i3] = 0.6; starColors[i3+1] = 0.8; starColors[i3+2] = 1.0; } // Blue
        else if (rand > 0.5) { starColors[i3] = 1.0; starColors[i3+1] = 0.95; starColors[i3+2] = 0.8; } // Yellow
        else if (rand > 0.2) { starColors[i3] = 1.0; starColors[i3+1] = 1.0; starColors[i3+2] = 1.0; } // White
        else { starColors[i3] = 1.0; starColors[i3+1] = 0.6; starColors[i3+2] = 0.4; } // Red
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

      const starMat = new THREE.PointsMaterial({
        size: 2.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.85
      });
      this.starField = new THREE.Points(starGeo, starMat);
      this.scene.add(this.starField);

      // 2. VOLUMETRIC COSMIC NEBULA CLOUDS
      this.nebulaGroup = new THREE.Group();
      const nebulaCount = 1500;
      const nebulaGeo = new THREE.BufferGeometry();
      const nebulaPos = new Float32Array(nebulaCount * 3);
      const nebulaColors = new Float32Array(nebulaCount * 3);

      for (let i = 0; i < nebulaCount; i++) {
        const i3 = i * 3;
        nebulaPos[i3] = 800 + (Math.random() - 0.5) * 1200;
        nebulaPos[i3 + 1] = 200 + (Math.random() - 0.5) * 600;
        nebulaPos[i3 + 2] = -1200 + (Math.random() - 0.5) * 1200;

        const mix = Math.random();
        nebulaColors[i3] = 0.7 * mix + 0.1 * (1 - mix); // Magenta to cyan
        nebulaColors[i3 + 1] = 0.1 * mix + 0.8 * (1 - mix);
        nebulaColors[i3 + 2] = 0.9;
      }
      nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
      nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

      const nebulaMat = new THREE.PointsMaterial({
        size: 32,
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      this.nebulaPoints = new THREE.Points(nebulaGeo, nebulaMat);
      this.nebulaGroup.add(this.nebulaPoints);
      this.scene.add(this.nebulaGroup);

      // 3. SUN
      const sunGeo = new THREE.SphereGeometry(32, 64, 64);
      const sunMat = new THREE.MeshBasicMaterial({
        map: createSunTexture(),
        color: 0xffffff
      });
      this.sun = new THREE.Mesh(sunGeo, sunMat);
      this.sun.name = 'Sun';
      this.scene.add(this.sun);

      // Sun Corona Glow Atmosphere
      const glowGeo = new THREE.SphereGeometry(36, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0xffa000,
        transparent: true,
        opacity: 0.28,
        side: THREE.BackSide
      });
      this.sunCorona = new THREE.Mesh(glowGeo, glowMat);
      this.sun.add(this.sunCorona);

      // 4. PLANETS CONFIGURATION
      const planetConfigs = [
        { name: 'Mercury', radius: 3.2, dist: 55, speed: 0.04, color: '#9e9e9e' },
        { name: 'Venus', radius: 5.5, dist: 80, speed: 0.025, color: '#e0a96d' },
        { name: 'Earth', radius: 6.0, dist: 120, speed: 0.018, isEarth: true },
        { name: 'Mars', radius: 4.2, dist: 165, speed: 0.014, color: '#e63946' },
        { name: 'Jupiter', radius: 18.0, dist: 280, speed: 0.007, isJupiter: true },
        { name: 'Saturn', radius: 14.0, dist: 390, speed: 0.005, isSaturn: true },
        { name: 'Uranus', radius: 8.5, dist: 500, speed: 0.003, color: '#80ed99' },
        { name: 'Neptune', radius: 8.0, dist: 610, speed: 0.002, color: '#4361ee' }
      ];

      planetConfigs.forEach(cfg => {
        const pivot = new THREE.Group();
        pivot.name = cfg.name + '_pivot';
        this.scene.add(pivot);

        let mesh;
        if (cfg.isEarth) {
          const earthGeo = new THREE.SphereGeometry(cfg.radius, 48, 48);
          const earthMat = new THREE.MeshStandardMaterial({
            map: createEarthTexture(),
            roughness: 0.6,
            metalness: 0.1
          });
          mesh = new THREE.Mesh(earthGeo, earthMat);

          // Clouds layer
          const cloudGeo = new THREE.SphereGeometry(cfg.radius * 1.025, 48, 48);
          const cloudMat = new THREE.MeshStandardMaterial({
            map: createEarthCloudsTexture(),
            transparent: true,
            opacity: 0.7
          });
          this.earthClouds = new THREE.Mesh(cloudGeo, cloudMat);
          mesh.add(this.earthClouds);

          // Moon
          const moonGeo = new THREE.SphereGeometry(1.6, 24, 24);
          const moonMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.9 });
          this.moon = new THREE.Mesh(moonGeo, moonMat);
          this.moon.position.set(16, 0, 0);
          mesh.add(this.moon);

        } else if (cfg.isJupiter) {
          const geo = new THREE.SphereGeometry(cfg.radius, 48, 48);
          const mat = new THREE.MeshStandardMaterial({
            map: createBandedPlanetTexture('#c99065', '#965a38', '#dfb892'),
            roughness: 0.8
          });
          mesh = new THREE.Mesh(geo, mat);

        } else if (cfg.isSaturn) {
          const geo = new THREE.SphereGeometry(cfg.radius, 48, 48);
          const mat = new THREE.MeshStandardMaterial({
            map: createBandedPlanetTexture('#e2d0a4', '#bfa77b', '#f5ebd2'),
            roughness: 0.8
          });
          mesh = new THREE.Mesh(geo, mat);

          // Saturn Ring
          const ringGeo = new THREE.RingGeometry(cfg.radius * 1.4, cfg.radius * 2.5, 64);
          const ringMat = new THREE.MeshBasicMaterial({
            map: createSaturnRingTexture(),
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.9
          });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = Math.PI / 2 + 0.35;
          mesh.add(ringMesh);

        } else {
          const geo = new THREE.SphereGeometry(cfg.radius, 32, 32);
          const mat = new THREE.MeshStandardMaterial({
            color: cfg.color,
            roughness: 0.8,
            metalness: 0.1
          });
          mesh = new THREE.Mesh(geo, mat);
        }

        mesh.name = cfg.name;
        mesh.position.set(cfg.dist, 0, 0);
        pivot.add(mesh);

        // Orbit Circle Line
        const orbitCurve = new THREE.EllipseCurve(0, 0, cfg.dist, cfg.dist, 0, 2 * Math.PI, false, 0);
        const orbitPoints = orbitCurve.getPoints(128);
        const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        const orbitMat = new THREE.LineBasicMaterial({
          color: 0x00f3ff,
          transparent: true,
          opacity: 0.15
        });
        const orbitLine = new THREE.Line(orbitGeo, orbitMat);
        orbitLine.rotation.x = Math.PI / 2;
        this.scene.add(orbitLine);
        this.orbitLines.push(orbitLine);

        this.planets.push({
          name: cfg.name,
          mesh: mesh,
          pivot: pivot,
          dist: cfg.dist,
          speed: cfg.speed,
          angle: Math.random() * Math.PI * 2
        });
      });

      // 5. ASTEROID BELT
      this.asteroidsGroup = new THREE.Group();
      this.asteroidsGroup.name = 'Asteroids';
      const asteroidGeo = new THREE.DodecahedronGeometry(0.7, 1);
      const asteroidMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9 });
      this.asteroidCount = 650;
      this.asteroidInstanced = new THREE.InstancedMesh(asteroidGeo, asteroidMat, this.asteroidCount);

      const dummy = new THREE.Object3D();
      this.asteroidData = [];

      for (let i = 0; i < this.asteroidCount; i++) {
        const dist = 210 + Math.random() * 45;
        const angle = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * 14;
        const scale = 0.5 + Math.random() * 1.5;

        dummy.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
        dummy.scale.set(scale, scale, scale);
        dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        dummy.updateMatrix();
        this.asteroidInstanced.setMatrixAt(i, dummy.matrix);

        this.asteroidData.push({ dist, angle, speed: 0.009 + Math.random() * 0.003, y, scale });
      }
      this.asteroidInstanced.instanceMatrix.needsUpdate = true;
      this.asteroidsGroup.add(this.asteroidInstanced);
      this.scene.add(this.asteroidsGroup);

      // 6. BLACK HOLE "GARGANTUA"
      this.blackHoleGroup = new THREE.Group();
      this.blackHoleGroup.name = 'BlackHole';
      this.blackHoleGroup.position.set(-900, 80, -900);

      // Event Horizon (pitch black)
      const horizonGeo = new THREE.SphereGeometry(24, 48, 48);
      const horizonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      this.eventHorizon = new THREE.Mesh(horizonGeo, horizonMat);
      this.blackHoleGroup.add(this.eventHorizon);

      // Gravitational Lensing Photon Ring
      const lensGeo = new THREE.SphereGeometry(27, 48, 48);
      const lensMat = new THREE.MeshBasicMaterial({
        color: 0xffaa00,
        transparent: true,
        opacity: 0.45,
        side: THREE.BackSide
      });
      this.photonRing = new THREE.Mesh(lensGeo, lensMat);
      this.blackHoleGroup.add(this.photonRing);

      // Swirling Relativistic Accretion Disk
      const diskGeo = new THREE.RingGeometry(30, 95, 64);
      const diskMat = new THREE.MeshBasicMaterial({
        map: createBlackHoleDiskTexture(),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending
      });
      this.accretionDisk = new THREE.Mesh(diskGeo, diskMat);
      this.accretionDisk.rotation.x = Math.PI / 2.3;
      this.accretionDisk.rotation.z = 0.2;
      this.blackHoleGroup.add(this.accretionDisk);

      // Accretion Disk Particles
      const diskPartCount = 800;
      const diskPartGeo = new THREE.BufferGeometry();
      const diskPartPos = new Float32Array(diskPartCount * 3);
      for (let i = 0; i < diskPartCount; i++) {
        const rad = 32 + Math.random() * 60;
        const ang = Math.random() * Math.PI * 2;
        diskPartPos[i * 3] = Math.cos(ang) * rad;
        diskPartPos[i * 3 + 1] = (Math.random() - 0.5) * 6;
        diskPartPos[i * 3 + 2] = Math.sin(ang) * rad;
      }
      diskPartGeo.setAttribute('position', new THREE.BufferAttribute(diskPartPos, 3));
      const diskPartMat = new THREE.PointsMaterial({
        size: 3,
        color: 0xffaa33,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      this.diskParticles = new THREE.Points(diskPartGeo, diskPartMat);
      this.accretionDisk.add(this.diskParticles);

      this.scene.add(this.blackHoleGroup);
    }

    initUI() {
      // Celestial quick chips
      const chips = document.querySelectorAll('.target-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const targetKey = chip.getAttribute('data-target');
          this.focusTarget(targetKey);
          this.audio.playBeep(640, 0.05);
        });
      });

      // Warp Jump Button
      const btnWarp = document.getElementById('btn-warp');
      btnWarp.addEventListener('click', () => this.triggerWarpJump());

      // Audio Toggle Button
      const btnAudio = document.getElementById('btn-audio');
      const audioLabel = document.getElementById('audio-btn-label');
      btnAudio.addEventListener('click', () => {
        const active = this.audio.toggle();
        audioLabel.textContent = active ? 'ЗВУК [ВКЛ]' : 'ЗВУК [ВЫКЛ]';
        btnAudio.classList.toggle('active', active);
        this.showToast(active ? 'Генератор космического эмбиента активирован' : 'Аудиосистема переведена в беззвучный режим');
      });

      // Screenshot Button
      const btnScreenshot = document.getElementById('btn-screenshot');
      btnScreenshot.addEventListener('click', () => this.takeScreenshot());

      // Recenter Camera Button
      const btnRecenter = document.getElementById('btn-recenter');
      btnRecenter.addEventListener('click', () => {
        this.focusTarget('Sun', new THREE.Vector3(0, 280, 520));
        this.audio.playBeep(700, 0.06);
      });

      // Flight Mode Toggle Button
      const btnFlight = document.getElementById('btn-flight-mode');
      const flightStatus = document.getElementById('flight-btn-status');
      const flightHud = document.getElementById('flight-hud');
      btnFlight.addEventListener('click', () => {
        this.flightMode = !this.flightMode;
        btnFlight.classList.toggle('active', this.flightMode);
        flightStatus.textContent = this.flightMode ? 'ДЕАКТИВИРОВАТЬ' : 'АКТИВИРОВАТЬ';
        flightHud.classList.toggle('hidden', !this.flightMode);
        this.controls.enabled = !this.flightMode;

        if (this.flightMode) {
          this.ship.position.copy(this.camera.position);
          this.showToast('Режим пилотирования запущен: W/S/A/D + Мышь');
          this.audio.playBeep(920, 0.1);
        } else {
          this.showToast('Возврат к орбитальному навигатору');
        }
      });

      // Time Speed Controls
      const timeBtns = document.querySelectorAll('.time-btn');
      timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          timeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.timeSpeed = parseFloat(btn.getAttribute('data-speed'));
          this.audio.playBeep(520, 0.04);
        });
      });

      // Toggles
      document.getElementById('toggle-orbits').addEventListener('change', (e) => {
        this.showOrbits = e.target.checked;
        this.orbitLines.forEach(line => line.visible = this.showOrbits);
      });

      document.getElementById('toggle-nebula').addEventListener('change', (e) => {
        this.showNebula = e.target.checked;
        this.nebulaGroup.visible = this.showNebula;
      });

      // Collapsible Panels
      const toggleNavBtn = document.getElementById('toggle-nav-btn');
      const navPanel = document.getElementById('nav-panel');
      toggleNavBtn.addEventListener('click', () => {
        navPanel.classList.toggle('collapsed-left');
      });

      const toggleTelBtn = document.getElementById('toggle-telemetry-btn');
      const telPanel = document.getElementById('telemetry-panel');
      toggleTelBtn.addEventListener('click', () => {
        telPanel.classList.toggle('collapsed-right');
      });
    }

    initEvents() {
      window.addEventListener('resize', () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Keyboard for flight mode
      window.addEventListener('keydown', (e) => {
        this.keys[e.key.toLowerCase()] = true;
      });

      window.addEventListener('keyup', (e) => {
        this.keys[e.key.toLowerCase()] = false;
      });

      // Raycaster for clicking planets in 3D scene
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      window.addEventListener('click', (e) => {
        if (this.flightMode || e.target.closest('.hud-top') || e.target.closest('.hud-panel') || e.target.closest('.hud-bottom')) {
          return;
        }

        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);

        const clickable = [this.sun, this.eventHorizon, ...this.planets.map(p => p.mesh)];
        const intersects = this.raycaster.intersectObjects(clickable, false);

        if (intersects.length > 0) {
          const clickedMesh = intersects[0].object;
          const targetName = clickedMesh.name === 'Sun' ? 'Sun' : (clickedMesh.parent && clickedMesh.parent.name === 'BlackHole' ? 'BlackHole' : clickedMesh.name);
          this.focusTarget(targetName);

          // Update active chip in sidebar
          document.querySelectorAll('.target-chip').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-target') === targetName);
          });
          this.audio.playBeep(720, 0.06);
        }
      });
    }

    focusTarget(targetKey, customCamPos = null) {
      this.currentTarget = targetKey;
      const data = CELESTIAL_DATA[targetKey] || CELESTIAL_DATA.Sun;

      // Update HUD elements
      document.getElementById('current-target-name').textContent = data.name;
      document.getElementById('dossier-name').textContent = data.name;
      document.getElementById('dossier-class').textContent = data.class;
      document.getElementById('dossier-summary').textContent = data.summary;
      document.getElementById('spec-radius').textContent = data.radius;
      document.getElementById('spec-mass').textContent = data.mass;
      document.getElementById('spec-temp').textContent = data.temp;
      document.getElementById('spec-gravity').textContent = data.gravity;
      document.getElementById('spec-period').textContent = data.period;
      document.getElementById('spec-habitable').textContent = data.habitable;

      document.getElementById('meter-rad').style.width = data.rad;
      document.getElementById('meter-warp').style.width = data.warp;
      document.getElementById('meter-mag').style.width = data.mag;

      // Compute target position in 3D
      let worldPos = new THREE.Vector3(0, 0, 0);
      let targetDist = 120;

      if (targetKey === 'Sun') {
        worldPos.set(0, 0, 0);
        targetDist = 140;
      } else if (targetKey === 'BlackHole') {
        worldPos.copy(this.blackHoleGroup.position);
        targetDist = 200;
      } else if (targetKey === 'Nebula') {
        worldPos.set(800, 200, -1200);
        targetDist = 350;
      } else if (targetKey === 'Asteroids') {
        worldPos.set(230, 0, 0);
        targetDist = 160;
      } else {
        const p = this.planets.find(pl => pl.name === targetKey);
        if (p) {
          p.mesh.getWorldPosition(worldPos);
          targetDist = Math.max(30, p.mesh.geometry.parameters.radius * 6);
        }
      }

      const endCamPos = customCamPos || new THREE.Vector3(
        worldPos.x + targetDist * 0.7,
        worldPos.y + targetDist * 0.45,
        worldPos.z + targetDist * 0.85
      );

      // Smooth camera transition
      this.cameraLerp = {
        active: true,
        startPos: this.camera.position.clone(),
        endPos: endCamPos,
        startTarget: this.controls.target.clone(),
        endTarget: worldPos,
        progress: 0
      };

      this.showToast(`Курс проложен: ${data.name}`);
    }

    triggerWarpJump() {
      if (this.isWarping) return;
      this.isWarping = true;
      this.audio.playWarpSound();
      this.showToast('ВНИМАНИЕ: ГИПЕРПРОСТРАНСТВЕННЫЙ СКАЧОК');

      const originalFov = this.camera.fov;
      let step = 0;

      const warpInterval = setInterval(() => {
        step++;
        if (step <= 25) {
          this.camera.fov = THREE.MathUtils.lerp(originalFov, 95, step / 25);
          this.starField.rotation.y += 0.08;
          document.getElementById('lightspeed-val').textContent = (1.0 + (step * 0.4)).toFixed(2) + ' c';
        } else if (step <= 50) {
          this.camera.fov = THREE.MathUtils.lerp(95, originalFov, (step - 25) / 25);
          document.getElementById('lightspeed-val').textContent = Math.max(1.0, (11.0 - (step - 25) * 0.4)).toFixed(2) + ' c';
        } else {
          clearInterval(warpInterval);
          this.camera.fov = originalFov;
          this.camera.updateProjectionMatrix();
          this.isWarping = false;
          document.getElementById('lightspeed-val').textContent = '1.00 c';

          // Cycle to a dramatic target like BlackHole or Saturn
          const targets = ['BlackHole', 'Saturn', 'Earth', 'Nebula', 'Jupiter'];
          const next = targets[Math.floor(Math.random() * targets.length)];
          this.focusTarget(next);
          document.querySelectorAll('.target-chip').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-target') === next);
          });
        }
        this.camera.updateProjectionMatrix();
      }, 30);
    }

    takeScreenshot() {
      this.renderer.render(this.scene, this.camera);
      const dataURL = this.renderer.domElement.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `cosmos_odyssey_${Date.now()}.png`;
      link.href = dataURL;
      link.click();
      this.showToast('Снимок космоса успешно сохранен');
      this.audio.playBeep(980, 0.1);
    }

    showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 3200);
    }

    updateFlightControls(delta) {
      if (!this.flightMode) return;

      const maxSpeed = 120;
      const accel = 60;

      // Throttle W / S
      if (this.keys['w']) {
        this.ship.throttle = Math.min(1.0, this.ship.throttle + delta * 1.5);
      } else if (this.keys['s']) {
        this.ship.throttle = Math.max(-0.4, this.ship.throttle - delta * 1.5);
      } else {
        this.ship.throttle = THREE.MathUtils.lerp(this.ship.throttle, 0, delta * 0.8);
      }

      // Boost Shift
      this.ship.boost = this.keys['shift'] ? 2.2 : 1.0;

      // Yaw A / D
      if (this.keys['a']) {
        this.camera.rotation.y += delta * 1.2;
      }
      if (this.keys['d']) {
        this.camera.rotation.y -= delta * 1.2;
      }

      const forward = new THREE.Vector3(0, 0, -1).applyEuler(this.camera.rotation);
      const currentSpeed = this.ship.throttle * maxSpeed * this.ship.boost;
      this.camera.position.addScaledVector(forward, currentSpeed * delta);

      // HUD gauge update
      document.getElementById('flight-speed-num').textContent = Math.round(Math.abs(currentSpeed * 45));
      document.getElementById('throttle-bar').style.height = `${Math.max(0, Math.min(100, (this.ship.throttle + 0.4) / 1.4 * 100))}%`;
    }

    animate() {
      requestAnimationFrame(() => this.animate());

      const delta = 0.016;

      // FPS Counter
      this.frameCount = (this.frameCount || 0) + 1;
      this.lastFpsTime = this.lastFpsTime || performance.now();
      if (performance.now() - this.lastFpsTime >= 1000) {
        document.getElementById('fps-counter').textContent = this.frameCount;
        this.frameCount = 0;
        this.lastFpsTime = performance.now();
      }

      // Celestial rotations & orbits
      if (this.timeSpeed > 0) {
        const factor = this.timeSpeed;

        // Sun spin
        this.sun.rotation.y += 0.002 * factor;
        this.sunCorona.rotation.z -= 0.003 * factor;

        // Planets orbits & spins
        this.planets.forEach(p => {
          p.angle += p.speed * 0.5 * factor;
          p.mesh.position.x = Math.cos(p.angle) * p.dist;
          p.mesh.position.z = Math.sin(p.angle) * p.dist;
          p.mesh.rotation.y += 0.02 * factor;
        });

        // Earth clouds & Moon
        if (this.earthClouds) this.earthClouds.rotation.y += 0.006 * factor;
        if (this.moon) {
          this.moonAngle = (this.moonAngle || 0) + 0.04 * factor;
          this.moon.position.set(Math.cos(this.moonAngle) * 16, 0, Math.sin(this.moonAngle) * 16);
        }

        // Asteroids orbit
        const dummy = new THREE.Object3D();
        for (let i = 0; i < this.asteroidCount; i++) {
          const item = this.asteroidData[i];
          item.angle += item.speed * 0.3 * factor;
          dummy.position.set(Math.cos(item.angle) * item.dist, item.y, Math.sin(item.angle) * item.dist);
          dummy.scale.set(item.scale, item.scale, item.scale);
          dummy.rotation.y += 0.01;
          dummy.updateMatrix();
          this.asteroidInstanced.setMatrixAt(i, dummy.matrix);
        }
        this.asteroidInstanced.instanceMatrix.needsUpdate = true;

        // Black Hole Accretion Disk Swirl
        this.accretionDisk.rotation.z += 0.008 * factor;
        this.diskParticles.rotation.y -= 0.015 * factor;

        // Slow starfield drift
        this.starField.rotation.y += 0.0001;
      }

      // Smooth camera transition if active
      if (this.cameraLerp.active) {
        this.cameraLerp.progress += delta * 1.5;
        if (this.cameraLerp.progress >= 1.0) {
          this.cameraLerp.progress = 1.0;
          this.cameraLerp.active = false;
        }

        const t = THREE.MathUtils.smoothstep(this.cameraLerp.progress, 0, 1);
        this.camera.position.lerpVectors(this.cameraLerp.startPos, this.cameraLerp.endPos, t);
        this.controls.target.lerpVectors(this.cameraLerp.startTarget, this.cameraLerp.endTarget, t);
      }

      if (this.flightMode) {
        this.updateFlightControls(delta);
      } else {
        this.controls.update();
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  // Launch on DOM ready
  window.addEventListener('DOMContentLoaded', () => {
    window.cosmosApp = new CosmosApp();
  });
})();
