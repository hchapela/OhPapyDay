/* TODO
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
        this.$bonuses = document.querySelector('.js-bonuses')
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
                // Stop the game while on shop
                this.game.pause()
                this.isClosed = false
                this.$shopItems.classList.remove('shop-hidden')
            } else if (!this.isClosed) {
                // Start the game again when leaving shop
                this.game.play()
                this.isClosed = true
                this.$shopItems.classList.add('shop-hidden')
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

    // Show new bonus bought
    showBonus(_str) {
        console.log('Show bonus!');
        
        // Create div of new bonus
        this.$newBonus = document.createElement('div')
        this.$newBonus.classList.add('bonus')
        this.$newBonus.classList.add('js-bonus')
        // Create text of new bonus
        this.$newBonusTitle = document.createElement('p')
        this.$newBonusTitle.innerText = _str
        // Input elements in HTML
        this.$bonuses.appendChild(this.$newBonus)
        this.$newBonus.appendChild(this.$newBonusTitle)
    }

    // Factorisation of function initItems for similar lines
    shoppedEvent(_cost) {
        // Close shop after buying anything
        this.isClosed = true
        this.$shopItems.classList.add('shop-hidden')
        // Disable multiple buying for each item
        this.game.score -= _cost
        // Start the game again when leaving shop
        this.game.isPlaying = window.setInterval(this.game.tick, 1000)
    }


    // Event on each item bought
    initItems() {
        this.$smartTv.addEventListener('click', () => {
            const cost = 5000
            if (this.game.score > cost && !this.smartTV) {
                this.shoppedEvent(cost)
                // Iterm cost and bonuses implemented
                this.tvBonus = {
                    score: 30,
                    tired: -20,
                    bored: -10,
                    lonely: -10
                }
                this.showBonus('Smart TV')
            }
        })
        this.$smartPhone.addEventListener('click', () => {
            const cost = 5000
            if (this.game.score > cost && !this.smartPhone) {
                this.shoppedEvent(cost)
                // Iterm cost and bonuses implemented
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
                this.shoppedEvent(cost)
                // Iterm cost and bonuses implemented
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
                this.shoppedEvent(cost)
                // Iterm cost and bonuses implemented
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