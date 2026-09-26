class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'square', duration = 0.1, startVol = 0.25, endVol = 0.01) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(startVol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(endVol, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  jump() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, this.ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch (e) {}
  }

  hurt() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(70, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  ballCrash() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.45);
      gain.gain.setValueAtTime(0.45, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.45);
    } catch (e) {}
  }

  fireShoot() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch (e) {}
  }

  fireErupt() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(360, this.ctx.currentTime + 0.1);
      osc.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }

  landCrumble() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(90, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(40, this.ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {}
  }

  fallAbyss() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.65);
      gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.65);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.65);
    } catch (e) {}
  }

  victory() {
    if (!this.enabled) return;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.25, 0.25, 0.01);
      }, idx * 120);
    });
  }

  gameOver() {
    if (!this.enabled) return;
    const notes = [392.00, 369.99, 349.23, 311.13];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sawtooth', 0.35, 0.25, 0.01);
      }, idx * 220);
    });
  }
}

const sound = new SoundFX();

const assets = {
  bg: new Image(),
  char: new Image(),
  land: new Image(),
  ball: new Image(),
  fire: new Image(),
  heal: new Image(),
  gameover: new Image()
};

assets.bg.src = 'background.jpg';
assets.char.src = 'nhanvat.png';
assets.land.src = 'land.png';
assets.ball.src = 'ball.png';
assets.fire.src = 'fire.png';
assets.heal.src = 'heal.png';
assets.gameover.src = 'gameover.png';

assets.char.onerror = () => { assets.char.src = 'nhanvat.jpg'; };
assets.land.onerror = () => { assets.land.src = 'land.jpg'; };
assets.ball.onerror = () => { assets.ball.src = 'ball.jpg'; };
assets.fire.onerror = () => { assets.fire.src = 'fire.jpg'; };
assets.heal.onerror = () => { assets.heal.src = 'heal.jpg'; };

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;
const LEVEL_WIDTH = 3200;
const GROUND_Y = 460;
const GRAVITY = 0.58;
const MAX_FALL_SPEED = 14;

const CHAR_FRAME_W = 147.2;
const CHAR_FRAME_H = 274.25;

const STATE_IDLE = 'idle';
const STATE_WALK = 'walk';
const STATE_RUN = 'run';
const STATE_JUMP = 'jump';

class Particle {
  constructor(x, y, vx, vy, color, size, life) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.size = size;
    this.maxLife = life;
    this.life = life;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.15;
    this.life--;
  }

  draw(ctx, cameraX) {
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - cameraX, this.y, this.size, this.size);
    ctx.restore();
  }
}

const particles = [];
function spawnParticles(x, y, count, color = '#f59e0b', speed = 3, size = 4) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = (Math.random() * 0.8 + 0.2) * speed;
    const vx = Math.cos(angle) * spd;
    const vy = Math.sin(angle) * spd - Math.random() * 2;
    particles.push(new Particle(x, y, vx, vy, color, Math.random() * size + 2, Math.floor(Math.random() * 25 + 15)));
  }
}

class FireBullet {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = 12;
    this.life = 120;
    this.dead = false;
  }

  update(player) {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.12; 
    this.life--;

    if (this.life <= 0 || this.y > GROUND_Y + 40) {
      this.dead = true;
      spawnParticles(this.x, this.y, 4, '#f97316', 2, 3);
      return;
    }

    if (Math.random() < 0.6) {
      particles.push(new Particle(
        this.x + (Math.random() * 6 - 3),
        this.y + (Math.random() * 6 - 3),
        -this.vx * 0.2,
        -this.vy * 0.2,
        Math.random() < 0.5 ? '#fde047' : '#ef4444',
        Math.random() * 3 + 2,
        14
      ));
    }

    if (!player.isDead && player.invulnerableTimer <= 0 && !player.isDying) {
      const px = player.x + player.width / 2;
      const py = player.y + player.height / 2;
      const dist = Math.hypot(this.x - px, this.y - py);
      if (dist < this.radius + player.width / 2) {
        this.dead = true;
        spawnParticles(this.x, this.y, 15, '#ef4444', 4, 4);
        player.takeDamage(-player.facing * 6, -6, "Bị trúng đạn lửa trên không!");
      }
    }
  }

  draw(ctx, cameraX) {
    const drawX = this.x - cameraX;
    const drawY = this.y;

    ctx.save();
    const glow = ctx.createRadialGradient(drawX, drawY, 2, drawX, drawY, this.radius + 6);
    glow.addColorStop(0, '#fef08a');
    glow.addColorStop(0.4, '#f97316');
    glow.addColorStop(0.8, '#ef4444');
    glow.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(drawX, drawY, this.radius + 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(drawX, drawY, this.radius * 0.45, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Player {
  constructor(x, y) {
    this.startX = x;
    this.startY = y;
    this.reset();
  }

  reset() {
    this.x = this.startX;
    this.y = this.startY;
    this.vx = 0;
    this.vy = 0;
    this.width = 44;   
    this.height = 76;  

    this.walkSpeed = 5.0;
    this.runSpeed = 7.0;
    this.jumpForce = -13.8;

    this.facing = 1;
    this.onGround = false;
    this.coyoteTimer = 0;
    this.jumpBuffer = 0;
    this.isRunning = false;

    this.state = STATE_IDLE;
    this.frameIndex = 0;
    this.frameTimer = 0;
    this.landingTimer = 0;

    this.lives = 3;
    this.invulnerableTimer = 0;
    this.isDead = false;
    this.isDying = false; 
    this.dyingReason = "";
  }

  takeDamage(knockbackX = 0, knockbackY = -6, reason = "") {
    if (this.invulnerableTimer > 0 || this.isDead || this.isDying) return;

    this.isDying = true;
    this.dyingReason = reason;
    this.lives--;
    updateHeartsHUD(this.lives);

    if (this.y < CANVAS_HEIGHT) {
      this.vx = 0;
      this.vy = -12; 
    }

    this.state = STATE_JUMP;
    this.frameIndex = 3;

    sound.hurt();
    if (typeof game !== 'undefined') game.screenShake = 14;
  }

  update(keys, solidSurfaces) {
    if (this.isDead) return;

    if (this.isDying) {
      this.vy += GRAVITY;
      this.y += this.vy;
      
      if (this.y > CANVAS_HEIGHT + 150) {
        if (this.lives <= 0) {
          this.isDead = true;
          if (typeof game !== 'undefined') game.triggerGameOver(this.dyingReason);
        } else {
          this.x = this.startX;
          this.y = this.startY;
          this.vx = 0;
          this.vy = 0;
          this.isDying = false;
          this.invulnerableTimer = 90;
          this.facing = 1;
          this.state = STATE_IDLE;
          
          if (typeof game !== 'undefined') {
            game.ballTrap.reset();
            game.fireHazard.reset();
            game.collapsingLand.reset();
            game.cameraX = 0; 
          }
        }
      }
      return; 
    }

    if (this.invulnerableTimer > 0) this.invulnerableTimer--;
    if (this.coyoteTimer > 0) this.coyoteTimer--;
    if (this.jumpBuffer > 0) this.jumpBuffer--;
    if (this.landingTimer > 0) this.landingTimer--;

    this.isRunning = keys.run;
    const currentSpeed = this.isRunning ? this.runSpeed : this.walkSpeed;

    let moveDir = 0;
    if (keys.left) moveDir -= 1;
    if (keys.right) moveDir += 1;

    if (moveDir !== 0) {
      this.vx = moveDir * currentSpeed;
      this.facing = moveDir;

      if (this.onGround && this.isRunning && Math.random() < 0.3) {
        particles.push(new Particle(
          this.x + (this.facing === 1 ? 4 : this.width - 4),
          this.y + this.height - 2,
          -this.facing * (Math.random() * 1.5 + 0.5),
          -Math.random() * 1.5,
          '#d1d5db',
          Math.random() * 3 + 2,
          15
        ));
      }
    } else {
      this.vx *= this.onGround ? 0.55 : 0.92;
      if (Math.abs(this.vx) < 0.15) this.vx = 0;
    }

    if (keys.jumpJustPressed) {
      this.jumpBuffer = 6;
    }

    if (this.jumpBuffer > 0 && (this.onGround || this.coyoteTimer > 0)) {
      this.vy = this.jumpForce;
      this.onGround = false;
      this.coyoteTimer = 0;
      this.jumpBuffer = 0;
      sound.jump();
      spawnParticles(this.x + this.width / 2, this.y + this.height, 5, '#cbd5e1', 2, 3);
    }

    if (!keys.jump && this.vy < -4) {
      this.vy = -4;
    }

    this.vy += GRAVITY;
    if (this.vy > MAX_FALL_SPEED) this.vy = MAX_FALL_SPEED;

    this.x += this.vx;
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > LEVEL_WIDTH) this.x = LEVEL_WIDTH - this.width;

    this.y += this.vy;
    const wasOnGround = this.onGround;
    this.onGround = false;

    for (const surface of solidSurfaces) {
      if (this.x + this.width > surface.x && this.x < surface.x + surface.w) {
        if (this.vy >= 0 && (this.y + this.height) >= surface.y && (this.y + this.height - this.vy) <= surface.y + 18) {
          this.y = surface.y - this.height;
          this.vy = 0;
          this.onGround = true;
          this.coyoteTimer = 6;

          if (!wasOnGround) {
            this.landingTimer = 5;
            spawnParticles(this.x + this.width / 2, this.y + this.height, 6, '#94a3b8', 2.5, 3);
          }
          break;
        }
      }
    }

    if (this.y > CANVAS_HEIGHT + 70 && !this.isDying) {
      sound.fallAbyss();
      this.takeDamage(0, 0, "Bạn đã rơi xuống vực thẳm do đất bị sụp!");
    }

    this.updateAnimation();
  }

  updateAnimation() {
    if (!this.onGround) {
      this.state = STATE_JUMP;
    } else if (Math.abs(this.vx) > 0.4) {
      this.state = this.isRunning ? STATE_RUN : STATE_WALK;
    } else {
      this.state = STATE_IDLE;
    }

    let frameSpeed = 8;
    if (this.state === STATE_RUN) frameSpeed = 5;
    if (this.state === STATE_WALK) frameSpeed = 7;
    if (this.state === STATE_IDLE) frameSpeed = 10;

    this.frameTimer++;
    if (this.frameTimer >= frameSpeed) {
      this.frameTimer = 0;
      this.frameIndex = (this.frameIndex + 1) % 5;
    }
  }

  draw(ctx, cameraX) {
    if (this.isDead) return;
    if (this.invulnerableTimer > 0 && Math.floor(this.invulnerableTimer / 4) % 2 === 0 && !this.isDying) return;

    let row = 0;
    let col = this.frameIndex;

    if (this.state === STATE_IDLE) {
      row = 0;
    } else if (this.state === STATE_WALK) {
      row = 1;
    } else if (this.state === STATE_RUN) {
      row = 2;
    } else if (this.state === STATE_JUMP) {
      row = 3;
      if (this.landingTimer > 0) {
        col = 4;
      } else if (this.vy < -5) {
        col = 1;
      } else if (Math.abs(this.vy) <= 5) {
        col = 2;
      } else {
        col = 3;
      }
    }

    const sx = col * CHAR_FRAME_W;
    const sy = row * CHAR_FRAME_H;
    const sw = CHAR_FRAME_W;
    const sh = CHAR_FRAME_H;

    const scale = 0.58;
    const dw = CHAR_FRAME_W * scale;
    const dh = CHAR_FRAME_H * scale;

    const drawX = Math.round(this.x - cameraX - (dw - this.width) / 2);
    const drawY = Math.round(this.y + this.height - dh + 28);

    ctx.save();
    
    if (this.isDying) {
      ctx.translate(drawX + dw / 2, drawY + dh / 2);
      ctx.rotate(Math.PI);
      ctx.translate(-(drawX + dw / 2), -(drawY + dh / 2));
      ctx.drawImage(assets.char, sx, sy, sw, sh, drawX, drawY, dw, dh);
    } 
    else if (this.facing === -1) {
      ctx.translate(drawX + dw, drawY);
      ctx.scale(-1, 1);
      ctx.drawImage(assets.char, sx, sy, sw, sh, 0, 0, dw, dh);
    } 
    else {
      ctx.drawImage(assets.char, sx, sy, sw, sh, drawX, drawY, dw, dh);
    }
    
    ctx.restore();
  }
}

function checkCircleRectCollision(cx, cy, r, rx, ry, rw, rh) {
  const closestX = Math.max(rx, Math.min(cx, rx + rw));
  const closestY = Math.max(ry, Math.min(cy, ry + rh));
  const dx = cx - closestX;
  const dy = cy - closestY;
  return (dx * dx + dy * dy) <= (r * r);
}

class FallingBallTrap {
  constructor(x, groundY) {
    this.x = x;
    this.targetGroundY = groundY;
    this.y = -180;
    this.radius = 42;
    this.vy = 0;
    this.triggered = false;
    this.hasHitGround = false;
    this.active = true;
    this.groundTimer = 0;      
    this.groundLingerTime = 40; 
    this.fadeAlpha = 1;        
  }

  reset() {
    this.y = -180;
    this.vy = 0;
    this.triggered = false;
    this.hasHitGround = false;
    this.active = true;
    this.groundTimer = 0;
    this.fadeAlpha = 1;
  }

  update(player) {
    if (!this.active) return;

    if (!this.triggered && player.x >= this.x - 220 && player.x <= this.x + 180) {
      this.triggered = true;
    }

    if (this.triggered) {
      if (!this.hasHitGround) {
        const prevY = this.y;
        this.vy += 0.95;
        this.y += this.vy;

        if (this.y + this.radius >= this.targetGroundY) {
          this.y = this.targetGroundY - this.radius;
          this.hasHitGround = true;
          this.vy = 0;
          sound.ballCrash();
          if (typeof game !== 'undefined') game.screenShake = 18;
          spawnParticles(this.x, this.targetGroundY, 26, '#94a3b8', 5, 5);
          spawnParticles(this.x, this.targetGroundY, 14, '#38bdf8', 4, 3);
        }

        const steps = Math.max(1, Math.ceil(Math.abs(this.y - prevY) / 8));
        for (let s = 1; s <= steps; s++) {
          const testY = prevY + (this.y - prevY) * (s / steps);
          if (checkCircleRectCollision(this.x, testY, this.radius, player.x, player.y, player.width, player.height)) {
            player.takeDamage(-player.facing * 8, -6, "Bị quả cầu rơi bất ngờ đè trúng!");
            break;
          }
        }
      } else {
        this.groundTimer++;
        const fadeStart = this.groundLingerTime * 0.5;
        if (this.groundTimer > fadeStart) {
          this.fadeAlpha = Math.max(0, 1 - (this.groundTimer - fadeStart) / (this.groundLingerTime - fadeStart));
        }
        if (this.groundTimer >= this.groundLingerTime) {
          this.active = false; 
        }

        if (!player.isDead && player.invulnerableTimer <= 0 && !player.isDying) {
          if (checkCircleRectCollision(this.x, this.y, this.radius, player.x, player.y, player.width, player.height)) {
            player.takeDamage(-player.facing * 8, -6, "Bị quả cầu đè trúng!");
          }
        }
      }
    }
  }

  draw(ctx, cameraX) {
    if (!this.active) return;
    if (this.triggered || this.hasHitGround) {
      const drawX = Math.round(this.x - cameraX - this.radius);
      const drawY = Math.round(this.y - this.radius);
      const size = this.radius * 2;

      ctx.save();
      ctx.globalAlpha = this.fadeAlpha;
      if (this.hasHitGround) {
        ctx.fillStyle = `rgba(0,0,0,${0.35 * this.fadeAlpha})`;
        ctx.beginPath();
        ctx.ellipse(this.x - cameraX, this.targetGroundY, this.radius * 0.9, 10, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.drawImage(assets.ball, drawX, drawY, size, size);
      ctx.restore();
    }
  }
}

class FireHazard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 64;
    this.h = 88;
    this.state = 'erupting';
    this.timer = 0;
    this.cycle = 140;
    this.bullets = [];
    this.hasShotThisJump = false;
  }

  reset() {
    this.timer = 0;
    this.bullets = [];
    this.hasShotThisJump = false;
  }

  update(player) {
    this.timer = (this.timer + 1) % this.cycle;

    let isDangerous = false;
    if (this.timer < 30) {
      this.state = 'dormant';
    } else if (this.timer < 55) {
      this.state = 'warning';
      if (this.timer % 6 === 0) {
        spawnParticles(this.x + this.w / 2 + (Math.random() * 20 - 10), this.y + this.h - 10, 2, '#fbbf24', 1.5, 3);
      }
    } else if (this.timer < 125) {
      this.state = 'erupting';
      isDangerous = true;
      if (this.timer === 56 && Math.abs(player.x - this.x) < 450) {
        sound.fireErupt();
      }
      if (Math.random() < 0.4) {
        spawnParticles(
          this.x + Math.random() * this.w,
          this.y + Math.random() * (this.h / 2) + this.h / 2,
          1,
          Math.random() < 0.5 ? '#f97316' : '#ef4444',
          3,
          4
        );
      }
    } else {
      this.state = 'cooling';
    }

    if (!player.onGround && !this.hasShotThisJump) {
      const playerCenterX = player.x + player.width / 2;
      const fireCenterX = this.x + this.w / 2;
      const isParallel = Math.abs(playerCenterX - fireCenterX) <= 40;

      if (isParallel && this.state !== 'dormant') {
        this.hasShotThisJump = true;
        sound.fireShoot();
        this.bullets.push(new FireBullet(fireCenterX, this.y + 10, 0, -8.5));
      }
    }

    for (let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].update(player);
      if (this.bullets[i].dead) {
        this.bullets.splice(i, 1);
      }
    }

    if (isDangerous && !player.isDying) {
      const fireHitbox = {
        x: this.x + 10,
        y: this.y + 14,
        w: this.w - 20,
        h: this.h - 14
      };

      if (
        player.x < fireHitbox.x + fireHitbox.w &&
        player.x + player.width > fireHitbox.x &&
        player.y < fireHitbox.y + fireHitbox.h &&
        player.y + player.height > fireHitbox.y
      ) {
        const knockDir = player.x < this.x ? -7 : 7;
        player.takeDamage(knockDir, -6, "Bị thiêu đốt bởi ngọn lửa ma thuật!");
      }
    }
  }

  draw(ctx, cameraX) {
    const drawX = Math.round(this.x - cameraX);
    const drawY = Math.round(this.y);

    ctx.save();
    ctx.fillStyle = '#334155';
    ctx.fillRect(drawX + 4, drawY + this.h - 12, this.w - 8, 12);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(drawX + 8, drawY + this.h - 10, this.w - 16, 6);

    if (this.state === 'warning') {
      const scale = 0.4 + Math.sin(Date.now() / 70) * 0.1;
      const sh = this.h * scale;
      ctx.globalAlpha = 0.7;
      ctx.drawImage(assets.fire, drawX + (this.w - this.w * scale) / 2, drawY + this.h - sh - 10, this.w * scale, sh);
    } else if (this.state === 'erupting') {
      const wobble = Math.sin(Date.now() / 60) * 4;
      const pulseH = this.h + Math.sin(Date.now() / 90) * 8;
      ctx.drawImage(assets.fire, drawX + wobble / 2, drawY + this.h - pulseH - 10, this.w, pulseH);
    } else if (this.state === 'cooling') {
      ctx.globalAlpha = 0.4;
      ctx.drawImage(assets.fire, drawX + 12, drawY + this.h - 40, this.w - 24, 32);
    }
    ctx.restore();

    for (const b of this.bullets) {
      b.draw(ctx, cameraX);
    }
  }
}

class CollapsingLandTrap {
  constructor(x, y, w, h) {
    this.startX = x;
    this.startY = y;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vy = 0;
    this.shakeTimer = 0;
    this.isCollapsing = false;
    this.falling = false;
    this.hasFallenOff = false;
  }

  reset() {
    this.x = this.startX;
    this.y = this.startY;
    this.vy = 0;
    this.shakeTimer = 0;
    this.isCollapsing = false;
    this.falling = false;
    this.hasFallenOff = false;
  }

  isFalling() {
    return this.falling;
  }

  update(player) {
    if (!this.isCollapsing) {
      const playerCenterX = player.x + player.width / 2;
      
      const jumpingOverHole = playerCenterX >= this.x - 70 && playerCenterX <= this.x + 20 && player.y < GROUND_Y;
      
      const steppingOnTrap = playerCenterX >= this.x && playerCenterX <= this.x + this.w && player.y + player.height >= GROUND_Y - 5;
      
      if (jumpingOverHole || steppingOnTrap) {
        this.isCollapsing = true;
        this.shakeTimer = 12; 
        sound.landCrumble();
        spawnParticles(this.x, this.y, 12, '#854d0e', 2.5, 4);
        spawnParticles(this.x + this.w, this.y, 12, '#854d0e', 2.5, 4);
      }
    }

    if (this.isCollapsing && !this.hasFallenOff) {
      if (this.shakeTimer > 0) {
        this.shakeTimer--;
        if (Math.random() < 0.6) {
          spawnParticles(this.x + Math.random() * this.w, this.y + 10, 2, '#854d0e', 2, 3);
        }
        if (this.shakeTimer === 0) {
          this.falling = true;
        }
      } else {
        this.vy += 0.9;
        this.y += this.vy;

        if (Math.random() < 0.5) {
          spawnParticles(this.x + Math.random() * this.w, this.y, 2, '#854d0e', 1.5, 3);
        }

        if (this.y > CANVAS_HEIGHT + 160) {
          this.hasFallenOff = true;
        }
      }
    }
  }

  getSurface() {
    if (!this.falling) {
      return { x: this.x, y: this.y, w: this.w, h: this.h };
    }
    return null;
  }

  draw(ctx, cameraX) {
    if (this.hasFallenOff) return; 

    let drawX = Math.round(this.x - cameraX);
    let drawY = Math.round(this.y);

    if (this.isCollapsing && !this.falling && this.shakeTimer > 0) {
      drawX += (Math.random() - 0.5) * 6;
      drawY += (Math.random() - 0.5) * 6;
    }

    ctx.save();
    const land = assets.land;
    if (land.complete && land.naturalWidth > 0) {
      const tileW = 400;
      let curX = drawX;
      while (curX < drawX + this.w) {
        const chunk = Math.min(tileW, drawX + this.w - curX);
        const srcW = 830 * (chunk / tileW);
        ctx.drawImage(land, 40, 0, srcW, 168, curX, drawY, chunk, this.h);
        curX += chunk;
      }
    } else {
      ctx.fillStyle = '#15803d';
      ctx.fillRect(drawX, drawY, this.w, 14);
      ctx.fillStyle = '#854d0e';
      ctx.fillRect(drawX, drawY + 14, this.w, this.h - 14);
    }
    ctx.restore();
  }
}

function buildGroundSurfaces() {
  return [
    { x: 0, y: GROUND_Y, w: 2100, h: 80 },
    { x: 2480, y: GROUND_Y, w: LEVEL_WIDTH - 2480, h: 80 }
  ];
}

class GameEngine {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');

    this.keys = {
      left: false,
      right: false,
      jump: false,
      jumpJustPressed: false,
      run: false
    };

    this.cameraX = 0;
    this.screenShake = 0;

    this.staticGround = buildGroundSurfaces();
    this.player = new Player(100, GROUND_Y - 90);

    this.ballTrap = new FallingBallTrap(1200, GROUND_Y);
    this.fireHazard = new FireHazard(1700, GROUND_Y - 80);

    this.collapsingLand = new CollapsingLandTrap(2160, GROUND_Y, 320, 80);

    this.isPlaying = false;
    this.isVictory = false;
    this.goalX = 2950;

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => {
      sound.init();

      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = true;
      if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        if (!this.keys.jump) this.keys.jumpJustPressed = true;
        this.keys.jump = true;
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.keys.run = true;
      if (e.code === 'KeyR') this.restart();
    });

    window.addEventListener('keyup', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = false;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = false;
      if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        this.keys.jump = false;
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.keys.run = false;
    });

    const setupTouchBtn = (id, onDown, onUp) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      const start = (e) => {
        e.preventDefault();
        sound.init();
        onDown();
        btn.classList.add('active');
        btn.blur();
      };
      const end = (e) => {
        e.preventDefault();
        onUp();
        btn.classList.remove('active');
        btn.blur();
      };
      btn.addEventListener('pointerdown', start);
      btn.addEventListener('pointerup', end);
      btn.addEventListener('pointerleave', end);
      btn.addEventListener('pointercancel', end);
    };

    setupTouchBtn('touchLeft', () => { this.keys.left = true; }, () => { this.keys.left = false; });
    setupTouchBtn('touchRight', () => { this.keys.right = true; }, () => { this.keys.right = false; });
    setupTouchBtn('touchJump', () => {
      if (!this.keys.jump) this.keys.jumpJustPressed = true;
      this.keys.jump = true;
    }, () => { this.keys.jump = false; });
    setupTouchBtn('touchRun', () => { this.keys.run = true; }, () => { this.keys.run = false; });

    const setupClickBtn = (id, callback) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        sound.init();
        btn.blur();
        if (document.activeElement) document.activeElement.blur();
        callback();
      });
    };

    setupClickBtn('btnStartGame', () => {
      document.getElementById('modalStart').classList.remove('show');
      this.isPlaying = true;
    });

    setupClickBtn('btnRestart', () => {
      this.restart();
    });

    setupClickBtn('btnRestartTop', () => {
      this.restart();
    });

    setupClickBtn('btnPlayAgain', () => {
      this.restart();
    });

    const soundBtn = document.getElementById('btnSound');
    const soundIcon = document.getElementById('soundIcon');
    soundBtn.addEventListener('click', () => {
      sound.enabled = !sound.enabled;
      soundIcon.textContent = sound.enabled ? '🔊' : '🔇';
      soundBtn.title = sound.enabled ? 'Tắt âm thanh' : 'Bật âm thanh';
      soundBtn.blur();
    });
  }

  restart() {
    if (document.activeElement) document.activeElement.blur();

    this.player.reset();
    this.ballTrap.reset();
    this.fireHazard.reset();
    this.collapsingLand.reset();
    this.cameraX = 0;
    
    particles.length = 0;
    this.isVictory = false;
    this.isPlaying = true;

    document.getElementById('modalGameOver').classList.remove('show');
    document.getElementById('modalVictory').classList.remove('show');
    document.getElementById('modalStart').classList.remove('show');

    updateHeartsHUD(3);
  }

  triggerGameOver(reason = "") {
    this.isPlaying = false;
    sound.gameOver();
    if (reason) {
      document.getElementById('gameOverReason').textContent = reason;
    }
    setTimeout(() => {
      document.getElementById('modalGameOver').classList.add('show');
      if (document.activeElement) document.activeElement.blur();
    }, 450);
  }

  triggerVictory() {
    if (this.isVictory) return;
    this.isVictory = true;
    this.isPlaying = false;
    sound.victory();

    for (let i = 0; i < 80; i++) {
      spawnParticles(
        this.player.x + (Math.random() * 200 - 100),
        this.player.y - Math.random() * 200,
        1,
        ['#f59e0b', '#38bdf8', '#4ade80', '#ec4899', '#eab308'][Math.floor(Math.random() * 5)],
        4,
        5
      );
    }

    setTimeout(() => {
      document.getElementById('modalVictory').classList.add('show');
      if (document.activeElement) document.activeElement.blur();
    }, 600);
  }

  update() {
    if (!this.isPlaying) return;

    if (this.screenShake > 0) this.screenShake--;

    const solidSurfaces = [...this.staticGround];
    const collapsingSurface = this.collapsingLand.getSurface();
    if (collapsingSurface) {
      solidSurfaces.push(collapsingSurface);
    }

    this.player.update(this.keys, solidSurfaces);
    this.keys.jumpJustPressed = false;

    this.ballTrap.update(this.player);
    this.fireHazard.update(this.player);
    this.collapsingLand.update(this.player);

    if (this.player.x >= this.goalX) {
      this.triggerVictory();
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      if (particles[i].life <= 0) {
        particles.splice(i, 1);
      }
    }

    if (!this.player.isDying) {
      const targetCameraX = this.player.x - CANVAS_WIDTH * 0.35;
      this.cameraX += (targetCameraX - this.cameraX) * 0.08;
      if (this.cameraX < 0) this.cameraX = 0;
      if (this.cameraX > LEVEL_WIDTH - CANVAS_WIDTH) this.cameraX = LEVEL_WIDTH - CANVAS_WIDTH;
    }

    const progressPercent = Math.min(100, Math.max(0, (this.player.x / this.goalX) * 100));
    document.getElementById('progressFill').style.width = `${progressPercent.toFixed(1)}%`;
    document.getElementById('distanceText').textContent = `QUÃNG ĐƯỜNG: ${Math.round(this.player.x)}m / ${this.goalX}m`;
  }

  draw() {
    this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let shakeX = 0;
    let shakeY = 0;
    if (this.screenShake > 0) {
      shakeX = (Math.random() - 0.5) * this.screenShake;
      shakeY = (Math.random() - 0.5) * this.screenShake;
    }

    this.ctx.save();
    this.ctx.translate(shakeX, shakeY);

    this.drawBackground();
    this.drawAbyssArea();
    this.drawStaticGround();
    
    this.collapsingLand.draw(this.ctx, this.cameraX);
    this.drawGoal();
    this.ballTrap.draw(this.ctx, this.cameraX);
    this.fireHazard.draw(this.ctx, this.cameraX);
    this.player.draw(this.ctx, this.cameraX);

    for (const p of particles) {
      p.draw(this.ctx, this.cameraX);
    }

    this.ctx.restore();
  }

  drawBackground() {
    const bg = assets.bg;
    if (!bg.complete || bg.naturalWidth === 0) {
      this.ctx.fillStyle = '#60a5fa';
      this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      return;
    }

    const parallaxFactor = 0.3;
    const bgWidth = CANVAS_WIDTH;
    const bgHeight = CANVAS_HEIGHT;
    const offsetX = (this.cameraX * parallaxFactor) % bgWidth;

    this.ctx.drawImage(bg, -offsetX, 0, bgWidth, bgHeight);
    this.ctx.drawImage(bg, bgWidth - offsetX, 0, bgWidth, bgHeight);
  }

  drawAbyssArea() {
    const startX = 2100 - this.cameraX;
    const endX = 2480 - this.cameraX; 
    const w = endX - startX;

    if (startX < CANVAS_WIDTH && endX > 0) {
      const grad = this.ctx.createLinearGradient(0, GROUND_Y, 0, CANVAS_HEIGHT);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.5)');
      grad.addColorStop(0.5, 'rgba(2, 6, 23, 0.9)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0.99)');

      this.ctx.fillStyle = grad;
      this.ctx.fillRect(startX, GROUND_Y, w, CANVAS_HEIGHT - GROUND_Y);
    }
  }

  drawStaticGround() {
    const land = assets.land;
    const isLandReady = land.complete && land.naturalWidth > 0;

    for (const plat of this.staticGround) {
      const drawX = Math.round(plat.x - this.cameraX);
      const drawY = Math.round(plat.y);

      if (drawX + plat.w < 0 || drawX > CANVAS_WIDTH) continue;

      if (isLandReady) {
        const chunkW = 434;
        let curX = drawX;
        while (curX < drawX + plat.w) {
          const w = Math.min(chunkW, drawX + plat.w - curX);
          this.ctx.drawImage(
            land,
            0, 0, 911 * (w / chunkW), 168,
            curX, drawY, w, plat.h
          );
          curX += w;
        }
      } else {
        this.ctx.fillStyle = '#15803d';
        this.ctx.fillRect(drawX, drawY, plat.w, 14);
        this.ctx.fillStyle = '#854d0e';
        this.ctx.fillRect(drawX, drawY + 14, plat.w, plat.h - 14);
      }
    }
  }

  drawGoal() {
    const drawX = Math.round(this.goalX - this.cameraX);
    const drawY = GROUND_Y;

    this.ctx.save();
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.fillRect(drawX, drawY - 100, 8, 100);

    const wave = Math.sin(Date.now() / 150) * 6;
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.beginPath();
    this.ctx.moveTo(drawX + 8, drawY - 100);
    this.ctx.lineTo(drawX + 48 + wave, drawY - 82);
    this.ctx.lineTo(drawX + 8, drawY - 64);
    this.ctx.closePath();
    this.ctx.fill();

    if (Math.random() < 0.25) {
      spawnParticles(drawX + 8, drawY - 80, 1, '#fde047', 1.5, 3);
    }

    this.ctx.fillStyle = '#0284c7';
    this.ctx.fillRect(drawX - 12, drawY - 8, 32, 8);
    this.ctx.restore();
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }
}

function updateHeartsHUD(lives) {
  const h1 = document.getElementById('heart1');
  const h2 = document.getElementById('heart2');
  const h3 = document.getElementById('heart3');

  if (h1 && h2 && h3) {
    h1.className = 'heart-icon' + (lives < 1 ? ' lost' : (lives === 1 ? ' pulse' : ''));
    h2.className = 'heart-icon' + (lives < 2 ? ' lost' : '');
    h3.className = 'heart-icon' + (lives < 3 ? ' lost' : '');
  }
}

let game;
window.addEventListener('DOMContentLoaded', () => {
  game = new GameEngine();
  game.loop();
});