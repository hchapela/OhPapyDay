/* TODO
    show Bonuses icons
    Better dom manipulation
*/ 

module.exports = class Shop {
    constructor(_game) {
        this.game = _game
        this.$shop = document.querySelector('.js-shop')
        this.$shopButton = this.$shop.querySelector('.js-open-shop')
        this.$shopItems = this.$shop.querySelector('.js-shop-items')
        this.$smartTv = this.$shop.querySelector('.js-smart-tv')
        this.$smartPhone = this.$shop.querySelector('.js-smartphone')
        this.$scooter = this.$shop.querySelector('.js-scooter')
        this.$cooker = this.$shop.querySelector('.js-cooker')
        this.isClosed = true
        this.smartTv = false
        this.smartPhone = false
        this.scooter = false
        this.cooker = false

        this.initScope()
        this.toggleShop()
        this.initBonuses()
        this.initItems()
    }

    showBonus() {

    }

    initScope() {
        this.toggleShop = this.toggleShop.bind(this)
    }

    toggleShop() {
        this.$shopButton.addEventListener('click', () => {
            if (this.isClosed) {
                this.isClosed = false
                this.$shopItems.classList.remove('shop-hidden')
            } else if (!this.isClosed) {
                this.isClosed = true
                this.$shopItems.classList.add('shop-hidden')
            }
        })
    }

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

    initItems() {
        this.$smartTv.addEventListener('click', () => {
            const cost = 5000
            if (this.game.score > cost && !this.smartTV) {
                // Close shop after buying anything
                this.isClosed = true
                this.$shopItems.classList.add('shop-hidden')
                // Disable multiple buying for each item
                this.game.score -= cost
                // Iterm cost and bonuses implemented
                this.tvBonus = {
                    score: 30,
                    tired: -20,
                    bored: -10,
                    lonely: -10
                }
            }

        })
        this.$smartPhone.addEventListener('click', () => {
            const cost = 5000
            if (this.game.score > cost && !this.smartPhone) {
                // Close shop after buying anything
                this.isClosed = true
                this.$shopItems.classList.add('shop-hidden')
                // Disable multiple buying for each item
                this.smartPhone = true
                // Iterm cost and bonuses implemented
                this.game.score -= cost
                this.phoneBonus = {
                    score: 30,
                    tired: -20,
                    bored: -10,
                    lonely: -10
                }
            }

        })
        this.$scooter.addEventListener('click', () => {
            const cost = 5000
            if (this.game.score > cost && !this.scooter) {
                // Close shop after buying anything
                this.isClosed = true
                this.$shopItems.classList.add('shop-hidden')
                // Disable multiple buying for each item
                this.scooter = true
                // Iterm cost and bonuses implemented
                this.game.score -= cost
                this.goOutBonus = {
                    score: 30,
                    tired: -20,
                    bored: -10,
                    lonely: -10
                }
            }

        })
        this.$cooker.addEventListener('click', () => {
            const cost = 5000
            if (this.game.score > cost && !this.cooker) {
                // Close shop after buying anything
                this.isClosed = true
                this.$shopItems.classList.add('shop-hidden')
                // Disable multiple buying for each item
                this.cooker = true
                // Iterm cost and bonuses implemented
                this.game.score -= cost
                this.cookBonus = {
                    score: 30,
                    tired: -20,
                    bored: -10,
                    lonely: -10
                }
            }
        })
    }
}