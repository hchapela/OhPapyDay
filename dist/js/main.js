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
    module.exports = class Card {
      constructor(game) {
        this.initScope();
        this.initCards();
      }

      initScope() {// this.newCard = this.newCard.bind(this)
      }

      newCard() {
        this.newCard = document.createElement(div);
      }

      initCards() {
        window.setInterval(this.newCard, 10000);
      }

    };
  }, {}]
}, {}, [1]);
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
    module.exports = class Shop {
      constructor(game) {
        this.$shop = document.querySelector('.js-shop');
        this.$shopButton = this.$shop.querySelector('.js-open-shop');
        this.$shopItems = this.$shop.querySelector('.js-shop-items');
        this.$item1 = this.$shop.querySelector('.js-item-1');
        this.isClosed = true;
        this.initScope();
        this.initShop();
        this.initBonuses();
        this.initItems();
      }

      initScope() {
        this.smartTv = this.smartTv.bind(this);
      }

      initShop() {
        this.$shopButton.addEventListener('click', () => {
          if (this.isClosed) {
            this.isClosed = false;
            this.$shopItems.classList.remove('shop-hidden');
          } else if (!this.isClosed) {
            this.isClosed = true;
            this.$shopItems.classList.add('shop-hidden');
          }
        });
      }

      initBonuses() {
        this.tvBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
        this.goOutBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
        this.cookBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
        this.phoneBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
      }

      smartTv() {
        this.tvBonus = {
          score: 30,
          tired: -20,
          bored: -10,
          lonely: -10
        };
      }

      initItems() {
        this.$item1.addEventListener('click', this.smartTv);
      }

    };
  }, {}]
}, {}, [1]);
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
    module.exports = class Card {
      constructor(game) {
        this.initScope();
        this.initCards();
      }

      initScope() {// this.newCard = this.newCard.bind(this)
      }

      newCard() {
        this.newCard = document.createElement(div);
      }

      initCards() {
        window.setInterval(this.newCard, 10000);
      }

    };
  }, {}],
  2: [function (require, module, exports) {
    module.exports = class Shop {
      constructor(game) {
        this.$shop = document.querySelector('.js-shop');
        this.$shopButton = this.$shop.querySelector('.js-open-shop');
        this.$shopItems = this.$shop.querySelector('.js-shop-items');
        this.$item1 = this.$shop.querySelector('.js-item-1');
        this.isClosed = true;
        this.initScope();
        this.initShop();
        this.initBonuses();
        this.initItems();
      }

      initScope() {
        this.smartTv = this.smartTv.bind(this);
      }

      initShop() {
        this.$shopButton.addEventListener('click', () => {
          if (this.isClosed) {
            this.isClosed = false;
            this.$shopItems.classList.remove('shop-hidden');
          } else if (!this.isClosed) {
            this.isClosed = true;
            this.$shopItems.classList.add('shop-hidden');
          }
        });
      }

      initBonuses() {
        this.tvBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
        this.goOutBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
        this.cookBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
        this.phoneBonus = {
          score: 0,
          tired: 0,
          bored: 0,
          lonely: 0
        };
      }

      smartTv() {
        this.tvBonus = {
          score: 30,
          tired: -20,
          bored: -10,
          lonely: -10
        };
      }

      initItems() {
        this.$item1.addEventListener('click', this.smartTv);
      }

    };
  }, {}],
  3: [function (require, module, exports) {
    const Shop = require('./Shop');

    const Card = require('./Card');

    class Game {
      constructor() {
        console.log('New Game'); // Get HTML Elements

        this.$statuses = document.querySelector('.js-statuses');
        this.$tired = this.$statuses.querySelector('.js-tired');
        this.$bored = this.$statuses.querySelector('.js-bored');
        this.$lonely = this.$statuses.querySelector('.js-lonely');
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
        this.difficulty = 1;
        this.coolDownRatio = 0; // Fix scope issues with methods

        this.initScope(); // Init Game

        this.initGame();
        this.initButtons();
        this.initTick();
        this.shop = new Shop(this);
        this.card = new Card(this);
      }

      initScope() {
        this.tick = this.tick.bind(this);
        this.isLoosed = this.isLoosed.bind(this);
        this.tvAction = this.tvAction.bind(this);
        this.goOutAction = this.goOutAction.bind(this);
        this.cookAction = this.cookAction.bind(this);
        this.phoneAction = this.phoneAction.bind(this);
        this.initTick = this.initTick.bind(this);
      }

      initGame() {
        // Put game variables in HTML
        this.changeValues(); // First tick

        this.isPlaying = window.setInterval(this.tick, 1000);
      }

      normalizeValue(value) {
        if (value > 100) {
          return 100;
        } else if (value < 0) {
          return 0;
        }

        return value;
      }

      changeValues() {
        this.tired = this.normalizeValue(this.tired);
        this.bored = this.normalizeValue(this.bored);
        this.lonely = this.normalizeValue(this.lonely);
        this.$tired.style.transform = `scaleX(${this.tired / 100})`;
        this.$bored.style.transform = `scaleX(${this.bored / 100})`;
        this.$lonely.style.transform = `scaleX(${this.lonely / 100})`;
        this.$score.textContent = this.score;
        this.$time.textContent = this.timeLeft;
      }

      tick() {
        // Chec if game is Loosed
        this.isLoosed(); // One tick

        this.timeLeft -= 1;
        this.difficulty++;
        this.coolDownRatio += 1000;
        this.bored = this.bored + this.difficulty;
        this.tired = this.tired + this.difficulty;
        this.lonely = this.lonely + this.difficulty;
        this.changeValues();
      }

      initTick() {// window.requestAnimationFrame(this.tick)
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
          this.score += 100 + this.shop.tvBonus.score;
          this.tired -= 30 + this.shop.tvBonus.tired;
          this.bored += 20 + this.shop.tvBonus.bored;
          this.lonely += 20 + this.shop.tvBonus.lonely;
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
            }, 1000 - this.coolDownRatio);
            break;

          case 'goOut':
            this.goOutActive = false;
            window.setTimeout(() => {
              this.goOutActive = true;
            }, 6000 - this.coolDownRatio);
            break;

          case 'cook':
            this.cookActive = false;
            window.setTimeout(() => {
              this.cookActive = true;
            }, 4000 - this.coolDownRatio);
            break;

          case 'phone':
            this.phoneActive = false;
            window.setTimeout(() => {
              this.phoneActive = true;
            }, 6000 - this.coolDownRatio);
            break;
        }
      }

    }

    const game = new Game();
    console.log(game);
  }, {
    "./Card": 1,
    "./Shop": 2
  }]
}, {}, [3]);