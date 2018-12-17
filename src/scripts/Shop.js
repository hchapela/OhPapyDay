module.exports = class Shop {
    constructor(game) {
        this.$shop = document.querySelector('.js-shop')
        this.$shopButton = this.$shop.querySelector('.js-open-shop')
        this.$shopItems = this.$shop.querySelector('.js-shop-items')
        this.$item1 = this.$shop.querySelector('.js-item-1')
        this.isClosed = true

        this.initScope()
        this.initShop()
        this.initBonuses()
        this.initItems()
    }

    initScope() {
        this.smartTv = this.smartTv.bind(this)
    }

    initShop() {
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

    smartTv() {
        this.tvBonus = {
            score: 30,
            tired: -20,
            bored: -10,
            lonely: -10
        }
    }

    initItems() {
        this.$item1.addEventListener('click', this.smartTv)
    }
}