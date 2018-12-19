/* TODO
    show item bought bug
    show money in shop
*/

module.exports = class Shop {
  constructor(_game) {
    this.game = _game
    this.$shop = document.querySelector('.js-shop')
    this.$shopButton = this.$shop.querySelector('.js-open-shop')
    this.$shopItems = this.$shop.querySelector('.js-shop-items')
    this.$shopMenu = this.$shop.querySelector('.js-shop-menu')
    this.$shopHamburger = this.$shop.querySelector('.js-hamburger-shop')
    this.$smartTv = this.$shop.querySelector('.js-smart-tv')
    this.$smartPhone = this.$shop.querySelector('.js-smartphone')
    this.$scooter = this.$shop.querySelector('.js-scooter')
    this.$cooker = this.$shop.querySelector('.js-cooker')
    this.$bonuses = document.querySelector('.js-bonuses')
    this.$bonusTv = this.$bonuses.querySelector('.smart-tv')
    this.$bonusPhone = this.$bonuses.querySelector('.smart-phone')
    this.$bonusCook = this.$bonuses.querySelector('.cooker')
    this.$bonusOut = this.$bonuses.querySelector('.scooter')

    this.isClosed = true
    this.smartTv = false
    this.smartPhone = false
    this.scooter = false
    this.cooker = false
    this.isOpened = false

    // Items prices
    this.tvCost = 5000
    this.phoneCost = 5000
    this.scooterCost = 5000
    this.cookerCost = 5000

    this.initScope()
    this.toggleShop()
    this.initBonuses()
    this.initItems()
    this.initHamburger()
  }

  checkBuyable() {
    // Check if you have the money and don't have it already
    if (this.smartTv) {
      this.$smartTv.classList.add('disabled')
      this.$smartTv.innerText = 'Already Bought'
    } else if (this.smartPhone) {
      this.$smartPhone.classList.add('disabled')
      this.$smartPhone.innerText = 'Already Bought'
    } else if (this.cooker) {
      this.$cooker.classList.add('disabled')
      this.$cooker.innerText = 'Already Bought'
    } else if (this.scooter) {
      this.$scooter.classList.add('disabled')
      this.$scooter.innerText = 'Already Bought'
    }
  }

  showBonus(_bonus) {
    switch (_bonus) {
      case 'smartTv':
        this.$bonusTv.classList.remove('hidden')
        break
      case 'smartPhone':
        this.$bonusPhone.classList.remove('hidden')
        break
      case 'cooker':
        this.$bonusCook.classList.remove('hidden')
        break
      case 'scooter':
        this.$bonusOut.classList.remove('hidden')
        break
    }
  }

  initScope() {
    this.toggleShop = this.toggleShop.bind(this)
    this.closeShop = this.closeShop.bind(this)
  }

  toggleShop() {
    console.log('init toggle');
    this.$shopButton.addEventListener('click', () => {
      if (this.isClosed) {
        this.openShop()
      } else {
        this.closeShop()
      }
    })
  }

  // Init bonuses at 0
  initBonuses() {
    this.tvBonus = {
      score: 0,
      tired: 0,
      bored: 0,
      lonely: 0
    }
    this.goOutBonus = {
      score: 0,
      tired: 0,
      bored: 0,
      lonely: 0
    }
    this.cookBonus = {
      score: 0,
      tired: 0,
      bored: 0,
      lonely: 0
    }
    this.phoneBonus = {
      score: 0,
      tired: 0,
      bored: 0,
      lonely: 0
    }
  }

  // Factorisation of function initItems for similar lines
  shoppedEvent(_cost) {
    // Close shop after buying anything
    this.isClosed = true
    this.$shopItems.classList.add('shop-hidden')
    // Disable multiple buying for each item
    this.game.score -= _cost
    // Start the game again when leaving shop
  }


  // Event on each item bought
  initItems() {
    this.$smartTv.addEventListener('click', () => {
      if (this.game.score > this.tvCost && !this.smartTV) {
        this.shoppedEvent(this.tvCost)
        this.smartTV = true
        this.$smartTv.innerText = 'Already Bought'

        // Iterm cost and bonuses implemented
        this.tvBonus = {
          score: 50,
          tired: 0,
          bored: +20,
          lonely: -0
        }
        this.closeShop()
        this.showBonus('smartTv')
      }
    })
    this.$smartPhone.addEventListener('click', () => {
      if (this.game.score > this.phoneCost && !this.smartPhone) {
        this.shoppedEvent(this.phoneCost)
        this.smartPhone = true
        // Iterm cost and bonuses implemented
        this.phoneBonus = {
          score: 200,
          tired: -10,
          bored: 0,
          lonely: 0
        }
        this.closeShop()
        this.showBonus('smartPhone')
      }
    })
    this.$scooter.addEventListener('click', () => {
      if (this.game.score > this.scooterCost && !this.scooter) {
        this.shoppedEvent(this.scooterCost)
        this.scooter = true
        // Iterm cost and bonuses implemented
        this.goOutBonus = {
          score: 500,
          tired: -20,
          bored: 0,
          lonely: 0
        }
        this.closeShop()
        this.showBonus('scooter')
      }
    })
    this.$cooker.addEventListener('click', () => {
      if (this.game.score > this.cookerCost && !this.cooker) {
        this.shoppedEvent(this.cookerCost)
        this.cooker = true
        // Iterm cost and bonuses implemented
        this.cookBonus = {
          score: 300,
          tired: 0,
          bored: -10,
          lonely: -10
        }
        this.closeShop()
        this.showBonus('cooker')
      }
    })
  }

  openShop() {
    this.$shopHamburger.classList.add('animate')
    window.setTimeout(() => {
      // animate hamburger
      this.isOpened = true
      // Start the game again when leaving shop
      this.game.pause()
      this.isClosed = false
      this.$shopItems.style.transform = `translateY(0%)`
    }, 300)
  }

  closeShop() {
    this.$shopHamburger.classList.remove('animate')
    window.setTimeout(() => {
      // animate hamburger
      this.$shopHamburger.classList.add('animate')
      this.isOpened = true
      // Start the game again when leaving shop
      this.game.play()
      this.isClosed = true
      this.$shopItems.style.transform = `translateY(100%)`
    }, 300)
  }

  initHamburger() {
    this.$shopHamburger.addEventListener('click', this.closeShop)
  }
}
