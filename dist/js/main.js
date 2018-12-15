(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }

      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) s(r[o]);

  return s;
})({
  1: [function (require, module, exports) {
    class Game {
      constructor() {
        console.log('New Game'); // Get HTML Elements
        // erase span here

        this.$statuses = document.querySelector('.js-statuses');
        this.$tired = this.$statuses.querySelector('.js-tired span');
        this.$bored = this.$statuses.querySelector('.js-bored span');
        this.$lonely = this.$statuses.querySelector('.js-lonely span');
        this.$main = document.querySelector('.js-main');
        this.$score = this.$main.querySelector('.js-score span');
        this.$picture = this.$main.querySelector('.js-picture');
        this.$time = this.$main.querySelector('.js-time span');
        this.$controls = document.querySelector('.controls');
        this.$tv = this.$controls.querySelector('.js-tv');
        this.$cook = this.$controls.querySelector('.js-cook');
        this.$goOut = this.$controls.querySelector('.js-go-out');
        this.$phone = this.$controls.querySelector('.js-phone'); // Get variables

        this.score = 0;
        this.timeLeft = 30;
        this.tired = 0;
        this.bored = 0;
        this.lonely = 0;
        this.difficulty = 1; // Fix scope issues with methods

        this.initScope(); // Init Game

        this.initGame();
        this.initButtons();
      }

      initScope() {
        this.tick = this.tick.bind(this);
        this.tvAction = this.tvAction.bind(this);
        this.goOutAction = this.goOutAction.bind(this);
        this.cookAction = this.cookAction.bind(this);
        this.phoneAction = this.phoneAction.bind(this);
        this.isLoosed = this.isLoosed.bind(this);
      }

      initGame() {
        // Put game variables in HTML
        this.changeValues(); // First tick

        this.isPlaying = window.setInterval(this.tick, 1000);
      }

      changeValues() {
        this.$score.textContent = this.score;
        this.$time.textContent = this.timeLeft;
        this.$bored.textContent = this.bored;
        this.$tired.textContent = this.tired;
        this.$lonely.textContent = this.lonely;
      }

      tick() {
        // Chec if game is Loosed
        this.isLoosed(); // One tick

        this.timeLeft -= 1;
        this.difficulty++;
        this.bored = this.bored + 1 * this.difficulty + Math.floor(Math.random() * 5);
        this.tired = this.tired + 1 * this.difficulty + Math.floor(Math.random() * 5);
        this.lonely = this.lonely + 1 * this.difficulty + Math.floor(Math.random() * 5);
        this.changeValues();
      }

      isLoosed() {
        if (this.timeLeft === 1 || this.bored + this.difficulty > 100 || this.tired + this.difficulty > 100 || this.lonely + this.difficulty > 100) {
          window.clearInterval(this.isPlaying);
          console.log('This is the end');
        }
      }

      initButtons() {
        this.$tv.addEventListener('click', this.tvAction);
        this.$goOut.addEventListener('click', this.goOutAction);
        this.$cook.addEventListener('click', this.cookAction);
        this.$phone.addEventListener('click', this.phoneAction);
        this.tvActive = true;
        this.goOutActive = true;
        this.cookActive = true;
        this.phoneActive = true;
      }

      tvAction() {
        if (this.tvActive) {
          this.score += 100;
          this.tired -= 30;
          this.bored += 20;
          this.lonely += 20;
          this.changeValues();
          this.setCoolDown('tv');
        }
      }

      goOutAction() {
        if (this.goOutActive) {
          this.score += 800;
          this.tired += 30;
          this.bored -= 20;
          this.lonely -= 10;
          this.changeValues();
          this.setCoolDown('goOut');
        }
      }

      cookAction() {
        if (this.cookActive) {
          this.score += 250;
          this.tired += 20;
          this.bored -= 10;
          this.lonely += 10;
          this.changeValues();
          this.setCoolDown('cook');
        }
      }

      phoneAction() {
        if (this.phoneActive) {
          this.score += 400;
          this.tired -= 20;
          this.bored -= 10;
          this.lonely -= 20;
          this.changeValues();
          this.setCoolDown('phone');
        }
      }

      setCoolDown(action) {
        switch (action) {
          case 'tv':
            this.tvActive = false;
            window.setTimeout(() => {
              this.tvActive = true;
            }, 1000);
            break;

          case 'goOut':
            this.goOutActive = false;
            window.setTimeout(() => {
              this.goOutActive = true;
            }, 6000);
            break;

          case 'cook':
            this.cookActive = false;
            window.setTimeout(() => {
              this.cookActive = true;
            }, 4000);
            break;

          case 'phone':
            this.phoneActive = false;
            window.setTimeout(() => {
              this.phoneActive = true;
            }, 6000);
            break;
        }
      }

    }

    const game = new Game();
    console.log(game);
  }, {}]
}, {}, [1]);