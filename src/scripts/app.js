/* TODO
    Show cooldowns on buttons
*/ 

const Shop = require('./Shop')
const Card = require('./Card')

class Game {
    constructor() {
        console.log('New Game');
        // Get HTML Elements
        this.$statuses = document.querySelector('.js-statuses')
        this.$tired = this.$statuses.querySelector('.js-tired')
        this.$bored = this.$statuses.querySelector('.js-bored')
        this.$lonely = this.$statuses.querySelector('.js-lonely')
        this.$main = document.querySelector('.js-main')
        this.$score = this.$main.querySelector('.js-score span')
        this.$picture = this.$main.querySelector('.js-picture')
        this.$time = this.$main.querySelector('.js-time span')
        this.$controls = document.querySelector('.controls')
        this.$tv = this.$controls.querySelector('.js-tv')
        this.$cook = this.$controls.querySelector('.js-cook')
        this.$goOut = this.$controls.querySelector('.js-go-out')
        this.$phone = this.$controls.querySelector('.js-phone')

        // Get variables
        this.score = 0
        this.time = 0
        this.tired = 0
        this.bored = 0
        this.lonely = 0
        this.difficulty = 1

        // Fix scope issues with methods
        this.initScope()
        // Init Game
        this.play()
        this.initButtons()
        this.initTick()
        this.shop = new Shop(this)
        this.card = new Card(this)
    }

    initScope() {
        this.tick = this.tick.bind(this)
        this.isLost = this.isLost.bind(this)
        this.tvAction = this.tvAction.bind(this)
        this.goOutAction = this.goOutAction.bind(this)
        this.cookAction = this.cookAction.bind(this)
        this.phoneAction = this.phoneAction.bind(this)
        this.initTick = this.initTick.bind(this)
    }

    play() {
        // Put game variables in HTML
        this.changeValues()

        // play ticks
        this.isPlaying = window.setInterval(this.tick, 1000)
    }

    pause() {
        // Put game variables in HTML
        this.changeValues()

        // pause ticks
        window.clearInterval(this.isPlaying)
    }

    normalizeValue(value) {
        if (value > 100) {
            return 100
        } else if (value < 0) {
            return 0
        }
        return value
    }

    changeValues() {
        this.tired = this.normalizeValue(this.tired)
        this.bored = this.normalizeValue(this.bored)
        this.lonely = this.normalizeValue(this.lonely)
        this.$tired.style.transform = `scaleX(${this.tired / 100})`
        this.$bored.style.transform = `scaleX(${this.bored / 100})`
        this.$lonely.style.transform = `scaleX(${this.lonely / 100})`

        this.$score.textContent = this.score
        this.$time.textContent = this.time
    }

    tick() {
        // Chec if game is Loosed
        this.isLost()
        // One tick
        this.time += 1
        // Difficulty raise every 10s
        this.difficulty += (this.time % 10 === 0 ? 1 : 0)
        this.bored = this.bored + this.difficulty
        this.tired = this.tired + this.difficulty
        this.lonely = this.lonely + this.difficulty
        this.changeValues()
    }

    initTick() {
        // window.requestAnimationFrame(this.tick)
    }

    isLost() {
        if (this.bored + this.difficulty > 100 ||
            this.tired + this.difficulty > 100 ||
            this.lonely + this.difficulty > 100
        ) {
            window.clearInterval(this.isPlaying)
            console.log('This is the end');
        }
    }

    initButtons() {
        this.$tv.addEventListener('click', this.tvAction)
        this.$goOut.addEventListener('click', this.goOutAction)
        this.$cook.addEventListener('click', this.cookAction)
        this.$phone.addEventListener('click', this.phoneAction)

        // Enable controls
        this.tvActive = this.goOutActive = this.cookActive = this.phoneActive = true
    }

    tvAction() {
        if (this.tvActive) {
            this.score += 100 + this.shop.tvBonus.score
            this.tired -= 30 + this.shop.tvBonus.tired
            this.bored += 20 + this.shop.tvBonus.bored
            this.lonely += 20 + this.shop.tvBonus.lonely
            this.changeValues()
            this.setCoolDown('tv')
        }
    }

    goOutAction() {
        if (this.goOutActive) {
            this.score += 800 + this.shop.goOutBonus.score
            this.tired += 30 + this.shop.goOutBonus.tired
            this.bored -= 20 + this.shop.goOutBonus.bored
            this.lonely -= 10 + this.shop.goOutBonus.lonely
            this.changeValues()
            this.setCoolDown('goOut')
        }
    }

    cookAction() {
        if (this.cookActive) {
            this.score += 250 + this.shop.cookBonus.score
            this.tired += 20 + this.shop.cookBonus.tired
            this.bored -= 10 + this.shop.cookBonus.bored
            this.lonely += 10 + this.shop.cookBonus.lonely
            this.changeValues()
            this.setCoolDown('cook')
        }
    }

    phoneAction() {
        if (this.phoneActive) {
            this.score += 400 + this.shop.phoneBonus.score
            this.tired -= 20 + this.shop.phoneBonus.tired
            this.bored -= 10 + this.shop.phoneBonus.bored
            this.lonely -= 20 + this.shop.phoneBonus.lonely
            this.changeValues()
            this.setCoolDown('phone')
        }
    }

    setCoolDown(action) {
        switch (action) {
            case 'tv':
                this.tvActive = false
                window.setTimeout(() => {
                    this.tvActive = true
                }, 1000)
                break
            case 'goOut':
                this.goOutActive = false
                window.setTimeout(() => {
                    this.goOutActive = true
                }, 6000)
                break
            case 'cook':
                this.cookActive = false
                window.setTimeout(() => {
                    this.cookActive = true
                }, 4000)
                break
            case 'phone':
                this.phoneActive = false
                window.setTimeout(() => {
                    this.phoneActive = true
                }, 6000)
                break
        }
    }
}


const game = new Game()
console.log(game);