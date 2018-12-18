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
    module.exports = class Controls {
      constructor(_game) {
        this.game = _game;
        this.$hamburger = document.querySelector('.js-menu-wrapper');
        this.$menu = document.querySelector('.js-menu-container');
        this.$hamburgerToggle = this.$hamburger.querySelector('.js-hamburger-menu');
        this.$replay = this.$menu.querySelector('.js-replay');
        this.isPaused = false;
        this.initHamburger();
      } // Init Hamburger toggle


      initHamburger() {
        this.$hamburger.addEventListener('click', () => {
          if (this.isPaused) {
            this.$hamburgerToggle.classList.remove('animate');
            this.$menu.classList.add('hamburger-deploy');
            this.game.play();
            this.isPaused = false;
          } else {
            this.$hamburgerToggle.classList.add('animate');
            this.$menu.classList.remove('hamburger-deploy');
            this.game.pause();
            this.isPaused = true;
          }
        });
        this.$replay.addEventListener('click', () => {
          location.reload();
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
        Better dom manipulation
    */
    module.exports = class Shop {
      constructor(_game) {
        this.game = _game;
        this.$shop = document.querySelector('.js-shop');
        this.$shopButton = this.$shop.querySelector('.js-open-shop');
        this.$shopItems = this.$shop.querySelector('.js-shop-items');
        this.$shopMenu = this.$shop.querySelector('.js-shop-menu');
        this.$shopHamburger = this.$shop.querySelector('.js-hamburger-shop');
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
        this.isOpened = false;
        this.initScope();
        this.toggleShop();
        this.initBonuses();
        this.initItems();
        this.initHamburger();
      }

      showBonus() {}

      initScope() {
        this.toggleShop = this.toggleShop.bind(this);
      }

      toggleShop() {
        this.$shopButton.addEventListener('click', () => {
          // Stop the game while on shop
          this.$shopHamburger.classList.add('animate');
          this.game.pause();
          this.isClosed = false;
          this.$shopItems.style.transform = `translateY(0%)`;
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

      initHamburger() {
        this.$shopHamburger.addEventListener('click', () => {
          this.$shopHamburger.classList.remove('animate');
          window.setTimeout(() => {
            // animate hamburger
            this.$shopHamburger.classList.add('animate');
            this.isOpened = true; // Start the game again when leaving shop

            this.game.play();
            this.isClosed = true;
            this.$shopItems.style.transform = `translateY(100%)`;
          }, 300);
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
    module.exports = class Controls {
      constructor(_game) {
        this.game = _game;
        this.$hamburger = document.querySelector('.js-menu-wrapper');
        this.$menu = document.querySelector('.js-menu-container');
        this.$hamburgerToggle = this.$hamburger.querySelector('.js-hamburger-menu');
        this.$replay = this.$menu.querySelector('.js-replay');
        this.isPaused = false;
        this.initHamburger();
      } // Init Hamburger toggle


      initHamburger() {
        this.$hamburger.addEventListener('click', () => {
          if (this.isPaused) {
            this.$hamburgerToggle.classList.remove('animate');
            this.$menu.classList.add('hamburger-deploy');
            this.game.play();
            this.isPaused = false;
          } else {
            this.$hamburgerToggle.classList.add('animate');
            this.$menu.classList.remove('hamburger-deploy');
            this.game.pause();
            this.isPaused = true;
          }
        });
        this.$replay.addEventListener('click', () => {
          location.reload();
        });
      }

    };
  }, {}],
  3: [function (require, module, exports) {
    /* TODO
        Better dom manipulation
    */
    module.exports = class Shop {
      constructor(_game) {
        this.game = _game;
        this.$shop = document.querySelector('.js-shop');
        this.$shopButton = this.$shop.querySelector('.js-open-shop');
        this.$shopItems = this.$shop.querySelector('.js-shop-items');
        this.$shopMenu = this.$shop.querySelector('.js-shop-menu');
        this.$shopHamburger = this.$shop.querySelector('.js-hamburger-shop');
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
        this.isOpened = false;
        this.initScope();
        this.toggleShop();
        this.initBonuses();
        this.initItems();
        this.initHamburger();
      }

      showBonus() {}

      initScope() {
        this.toggleShop = this.toggleShop.bind(this);
      }

      toggleShop() {
        this.$shopButton.addEventListener('click', () => {
          // Stop the game while on shop
          this.$shopHamburger.classList.add('animate');
          this.game.pause();
          this.isClosed = false;
          this.$shopItems.style.transform = `translateY(0%)`;
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

      initHamburger() {
        this.$shopHamburger.addEventListener('click', () => {
          this.$shopHamburger.classList.remove('animate');
          window.setTimeout(() => {
            // animate hamburger
            this.$shopHamburger.classList.add('animate');
            this.isOpened = true; // Start the game again when leaving shop

            this.game.play();
            this.isClosed = true;
            this.$shopItems.style.transform = `translateY(100%)`;
          }, 300);
        });
      }

    };
  }, {}],
  4: [function (require, module, exports) {
    /* TODO
        Show cooldowns on buttons
        Events
        Hamburger Menu
        Starting cinematics
        Sounds
        Webview
        Calibrer
        End of the game screen score recap
        favicon
    */
    const Shop = require('./Shop');

    const Card = require('./Card');

    const Controls = require('./Controls');

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
        this.$tv = this.$controls.querySelector('.js-tv .activity');
        this.$cook = this.$controls.querySelector('.js-cook .activity');
        this.$goOut = this.$controls.querySelector('.js-go-out .activity');
        this.$phone = this.$controls.querySelector('.js-phone .activity'); // Get variables

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
        this.controls = new Controls(this);
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

      decrement(_value) {
        if (_value > 0) {
          return _value - 1;
        }

        return _value;
      }

      tick() {
        // Chec if game is Loosed
        this.isLost(); // One tick on time and cooldowns

        this.time += 1;
        this.tvActive = this.decrement(this.tvActive);
        this.cookActive = this.decrement(this.cookActive);
        this.phoneActive = this.decrement(this.phoneActive);
        this.goOutActive = this.decrement(this.goOutActive); // Check if cooldowns need controls update

        this.checkCoolDown(); // Difficulty raise every 10s

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

        this.tvActive = this.goOutActive = this.cookActive = this.phoneActive = 0;
      }

      tvAction() {
        if (this.tvActive === 0) {
          this.score += 100 + this.shop.tvBonus.score;
          this.tired -= 30 + this.shop.tvBonus.tired;
          this.bored += 20 + this.shop.tvBonus.bored;
          this.lonely += 20 + this.shop.tvBonus.lonely;
          this.changeValues();
          this.setCoolDown('tv');
        }
      }

      goOutAction() {
        if (this.goOutActive === 0) {
          this.score += 800 + this.shop.goOutBonus.score;
          this.tired += 30 + this.shop.goOutBonus.tired;
          this.bored -= 20 + this.shop.goOutBonus.bored;
          this.lonely -= 10 + this.shop.goOutBonus.lonely;
          this.changeValues();
          this.setCoolDown('goOut');
        }
      }

      cookAction() {
        if (this.cookActive === 0) {
          this.score += 250 + this.shop.cookBonus.score;
          this.tired += 20 + this.shop.cookBonus.tired;
          this.bored -= 10 + this.shop.cookBonus.bored;
          this.lonely += 10 + this.shop.cookBonus.lonely;
          this.changeValues();
          this.setCoolDown('cook');
        }
      }

      phoneAction() {
        if (this.phoneActive === 0) {
          this.score += 400 + this.shop.phoneBonus.score;
          this.tired -= 20 + this.shop.phoneBonus.tired;
          this.bored -= 10 + this.shop.phoneBonus.bored;
          this.lonely -= 20 + this.shop.phoneBonus.lonely;
          this.changeValues();
          this.setCoolDown('phone');
        }
      }

      checkCoolDown() {
        if (this.tvActive === 0) {
          this.$tv.classList.remove('disabled');
        }

        if (this.cookActive === 0) {
          this.$cook.classList.remove('disabled');
        }

        if (this.phoneActive === 0) {
          this.$phone.classList.remove('disabled');
        }

        if (this.goOutActive === 0) {
          this.$goOut.classList.remove('disabled');
        }
      }

      setCoolDown(action) {
        switch (action) {
          case 'tv':
            this.tvActive = 1;
            this.$tv.classList.add('disabled');
            break;

          case 'goOut':
            this.goOutActive = 6;
            this.$goOut.classList.add('disabled');
            break;

          case 'cook':
            this.cookActive = 4;
            this.$cook.classList.add('disabled');
            break;

          case 'phone':
            this.phoneActive = 6;
            this.$phone.classList.add('disabled');
            break;
        }
      }

    }

    const game = new Game();
    console.log(game);
  }, {
    "./Card": 1,
    "./Controls": 2,
    "./Shop": 3
  }]
}, {}, [4]);