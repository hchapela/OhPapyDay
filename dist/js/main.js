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
        this.$sad = this.$statuses.querySelector('.js-sad span');
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
        this.sad = 0;
        this.difficulty = 1; // Fix scope issues with methods

        this.initScope(); // Init Game

        this.initGame();
        this.initButtons();
      }

      initScope() {
        this.tick = this.tick.bind(this);
        this.tvAction = this.tvAction.bind(this);
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
        this.$sad.textContent = this.sad;
      }

      tick() {
        // Chec if game is Loosed
        if (this.timeLeft === 1 || this.bored > 100 || this.tired > 100 || this.sad > 100) {
          window.clearInterval(this.isPlaying);
          console.log('This is the end');
        } // One tick


        this.timeLeft -= 1;
        this.difficulty++;
        this.bored = this.bored + 1 * this.difficulty + Math.floor(Math.random() * 5);
        this.tired = this.tired + 1 * this.difficulty + Math.floor(Math.random() * 5);
        this.sad = this.sad + 1 * this.difficulty + Math.floor(Math.random() * 5);
        this.changeValues();
      }

      initButtons() {
        this.$tv.addEventListener('click', this.tvAction);
        this.$goOut.addEventListener('click', this.goOutAction);
        this.$cook.addEventListener('click', this.cookAction);
        this.$phone.addEventListener('click', this.phoneAction);
      }

      tvAction() {
        this.score += 10;
      }

      goOutAction() {
        this.score += 10;
      }

      cookAction() {
        this.score += 10;
      }

      phoneAction() {
        this.score += 10;
      }

    }

    const game = new Game();
    console.log(game);
  }, {}]
}, {}, [1]);