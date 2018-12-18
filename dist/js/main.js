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
    /* TODO
        Create events
        puts values on events random
        how random they are
        act on game
    */
    module.exports = class Card {
      constructor(_game) {
        this.game = _game;
        this.initScope();
        this.initCards();
      }

      initScope() {// this.newCard = this.newCard.bind(this)
      }

      newCard() {
        this.newCard = document.createElement('div');
        this.newCard.classList.add('card-event');
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
    /* TODO
        Better dom manipulation
    */
    module.exports = class Shop {
      constructor(_game) {
        this.game = _game;
        this.$shop = document.querySelector('.js-shop');
        this.$shopButton = this.$shop.querySelector('.js-open-shop');
        this.$shopItems = this.$shop.querySelector('.js-shop-items');
        this.$smartTv = this.$shop.querySelector('.js-smart-tv');
        this.$smartPhone = this.$shop.querySelector('.js-smartphone');
        this.$scooter = this.$shop.querySelector('.js-scooter');
        this.$cooker = this.$shop.querySelector('.js-cooker');
        this.$bonuses = document.querySelector('.js-bonuses');
        this.isClosed = true;
        this.smartTv = false;
        this.smartPhone = false;
        this.scooter = false;
        this.cooker = false;
        this.initScope();
        this.toggleShop();
        this.initBonuses();
        this.initItems();
      }

      showBonus() {}

      initScope() {
        this.toggleShop = this.toggleShop.bind(this);
      }

      toggleShop() {
        this.$shopButton.addEventListener('click', () => {
          if (this.isClosed) {
            // Stop the game while on shop
            window.clearInterval(this.game.isPlaying);
            this.isClosed = false;
            this.$shopItems.classList.remove('shop-hidden'); // Enable controls

            this.game.tvActive = this.game.goOutActive = this.game.cookActive = this.game.phoneActive = false;
          } else if (!this.isClosed) {
            // Start the game again when leaving shop
            this.game.isPlaying = window.setInterval(this.game.tick, 1000);
            this.isClosed = true;
            this.$shopItems.classList.add('shop-hidden'); // Disable controls

            this.game.tvActive = this.game.goOutActive = this.game.cookActive = this.game.phoneActive = true;
          }
        });
      } // Init bonuses at 0


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
      } // Show new bonus bought


      showBonus(_str) {
        console.log('Show bonus!'); // Create div of new bonus

        this.$newBonus = document.createElement('div');
        this.$newBonus.classList.add('bonus');
        this.$newBonus.classList.add('js-bonus'); // Create text of new bonus

        this.$newBonusTitle = document.createElement('p');
        this.$newBonusTitle.innerText = _str; // Input elements in HTML

        this.$bonuses.appendChild(this.$newBonus);
        this.$newBonus.appendChild(this.$newBonusTitle);
      } // Factorisation of function initItems for similar lines


      shoppedEvent(_cost) {
        // Close shop after buying anything
        this.isClosed = true;
        this.$shopItems.classList.add('shop-hidden'); // Disable multiple buying for each item

        this.game.score -= _cost; // Start the game again when leaving shop

        this.game.isPlaying = window.setInterval(this.game.tick, 1000);
      } // Event on each item bought


      initItems() {
        this.$smartTv.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.smartTV) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.tvBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
            this.showBonus('Smart TV');
          }
        });
        this.$smartPhone.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.smartPhone) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.phoneBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
          }
        });
        this.$scooter.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.scooter) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.goOutBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
          }
        });
        this.$cooker.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.cooker) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.cookBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
          }
        });
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
    /* TODO
        Create events
        puts values on events random
        how random they are
        act on game
    */
    module.exports = class Card {
      constructor(_game) {
        this.game = _game;
        this.initScope();
        this.initCards();
      }

      initScope() {// this.newCard = this.newCard.bind(this)
      }

      newCard() {
        this.newCard = document.createElement('div');
        this.newCard.classList.add('card-event');
      }

      initCards() {
        window.setInterval(this.newCard, 10000);
      }

    };
  }, {}],
  2: [function (require, module, exports) {
    /* TODO
        Better dom manipulation
    */
    module.exports = class Shop {
      constructor(_game) {
        this.game = _game;
        this.$shop = document.querySelector('.js-shop');
        this.$shopButton = this.$shop.querySelector('.js-open-shop');
        this.$shopItems = this.$shop.querySelector('.js-shop-items');
        this.$smartTv = this.$shop.querySelector('.js-smart-tv');
        this.$smartPhone = this.$shop.querySelector('.js-smartphone');
        this.$scooter = this.$shop.querySelector('.js-scooter');
        this.$cooker = this.$shop.querySelector('.js-cooker');
        this.$bonuses = document.querySelector('.js-bonuses');
        this.isClosed = true;
        this.smartTv = false;
        this.smartPhone = false;
        this.scooter = false;
        this.cooker = false;
        this.initScope();
        this.toggleShop();
        this.initBonuses();
        this.initItems();
      }

      showBonus() {}

      initScope() {
        this.toggleShop = this.toggleShop.bind(this);
      }

      toggleShop() {
        this.$shopButton.addEventListener('click', () => {
          if (this.isClosed) {
            // Stop the game while on shop
            window.clearInterval(this.game.isPlaying);
            this.isClosed = false;
            this.$shopItems.classList.remove('shop-hidden'); // Enable controls

            this.game.tvActive = this.game.goOutActive = this.game.cookActive = this.game.phoneActive = false;
          } else if (!this.isClosed) {
            // Start the game again when leaving shop
            this.game.isPlaying = window.setInterval(this.game.tick, 1000);
            this.isClosed = true;
            this.$shopItems.classList.add('shop-hidden'); // Disable controls

            this.game.tvActive = this.game.goOutActive = this.game.cookActive = this.game.phoneActive = true;
          }
        });
      } // Init bonuses at 0


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
      } // Show new bonus bought


      showBonus(_str) {
        console.log('Show bonus!'); // Create div of new bonus

        this.$newBonus = document.createElement('div');
        this.$newBonus.classList.add('bonus');
        this.$newBonus.classList.add('js-bonus'); // Create text of new bonus

        this.$newBonusTitle = document.createElement('p');
        this.$newBonusTitle.innerText = _str; // Input elements in HTML

        this.$bonuses.appendChild(this.$newBonus);
        this.$newBonus.appendChild(this.$newBonusTitle);
      } // Factorisation of function initItems for similar lines


      shoppedEvent(_cost) {
        // Close shop after buying anything
        this.isClosed = true;
        this.$shopItems.classList.add('shop-hidden'); // Disable multiple buying for each item

        this.game.score -= _cost; // Start the game again when leaving shop

        this.game.isPlaying = window.setInterval(this.game.tick, 1000);
      } // Event on each item bought


      initItems() {
        this.$smartTv.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.smartTV) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.tvBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
            this.showBonus('Smart TV');
          }
        });
        this.$smartPhone.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.smartPhone) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.phoneBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
          }
        });
        this.$scooter.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.scooter) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.goOutBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
          }
        });
        this.$cooker.addEventListener('click', () => {
          const cost = 5000;

          if (this.game.score > cost && !this.cooker) {
            this.shoppedEvent(cost); // Iterm cost and bonuses implemented

            this.cookBonus = {
              score: 30,
              tired: -20,
              bored: -10,
              lonely: -10
            };
          }
        });
      }

    };
  }, {}],
  3: [function (require, module, exports) {
    /* TODO
        Show cooldowns on buttons
        Hamburger Menu
        Starting cinematics
        Sounds
        Webview
    */
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
        this.time = 0;
        this.tired = 0;
        this.bored = 0;
        this.lonely = 0;
        this.difficulty = 1; // Fix scope issues with methods

        this.initScope(); // Init Game

        this.play();
        this.initButtons();
        this.initTick();
        this.shop = new Shop(this);
        this.card = new Card(this);
      }

      initScope() {
        this.tick = this.tick.bind(this);
        this.isLost = this.isLost.bind(this);
        this.tvAction = this.tvAction.bind(this);
        this.goOutAction = this.goOutAction.bind(this);
        this.cookAction = this.cookAction.bind(this);
        this.phoneAction = this.phoneAction.bind(this);
        this.initTick = this.initTick.bind(this);
      }

      play() {
        // Put game variables in HTML
        this.changeValues(); // play ticks

        this.isPlaying = window.setInterval(this.tick, 1000);
      }

      pause() {
        // Put game variables in HTML
        this.changeValues(); // pause ticks

        window.clearInterval(this.isPlaying);
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
        this.$time.textContent = this.time;
      }

      tick() {
        // Chec if game is Loosed
        this.isLost(); // One tick

        this.time += 1; // Difficulty raise every 10s

        this.difficulty += this.time % 10 === 0 ? 1 : 0;
        this.bored = this.bored + this.difficulty;
        this.tired = this.tired + this.difficulty;
        this.lonely = this.lonely + this.difficulty;
        this.changeValues();
      }

      initTick() {// window.requestAnimationFrame(this.tick)
      }

      isLost() {
        if (this.bored + this.difficulty > 100 || this.tired + this.difficulty > 100 || this.lonely + this.difficulty > 100) {
          window.clearInterval(this.isPlaying);
          console.log('This is the end');
        }
      }

      initButtons() {
        this.$tv.addEventListener('click', this.tvAction);
        this.$goOut.addEventListener('click', this.goOutAction);
        this.$cook.addEventListener('click', this.cookAction);
        this.$phone.addEventListener('click', this.phoneAction); // Enable controls

        this.tvActive = this.goOutActive = this.cookActive = this.phoneActive = true;
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
          this.score += 800 + this.shop.goOutBonus.score;
          this.tired += 30 + this.shop.goOutBonus.tired;
          this.bored -= 20 + this.shop.goOutBonus.bored;
          this.lonely -= 10 + this.shop.goOutBonus.lonely;
          this.changeValues();
          this.setCoolDown('goOut');
        }
      }

      cookAction() {
        if (this.cookActive) {
          this.score += 250 + this.shop.cookBonus.score;
          this.tired += 20 + this.shop.cookBonus.tired;
          this.bored -= 10 + this.shop.cookBonus.bored;
          this.lonely += 10 + this.shop.cookBonus.lonely;
          this.changeValues();
          this.setCoolDown('cook');
        }
      }

      phoneAction() {
        if (this.phoneActive) {
          this.score += 400 + this.shop.phoneBonus.score;
          this.tired -= 20 + this.shop.phoneBonus.tired;
          this.bored -= 10 + this.shop.phoneBonus.bored;
          this.lonely -= 20 + this.shop.phoneBonus.lonely;
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
  }, {
    "./Card": 1,
    "./Shop": 2
  }]
}, {}, [3]);