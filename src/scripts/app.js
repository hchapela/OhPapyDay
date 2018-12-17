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
        this.timeLeft = 30
        this.tired = 0
        this.bored = 0
        this.lonely = 0
        this.difficulty = 1

        // Fix scope issues with methods
        this.initScope()
        // Init Game
        this.initGame()
        this.initButtons()
        this.initTick()
        this.initBonus()
    }

    initScope() {
        this.tick = this.tick.bind(this)
        this.isLoosed = this.isLoosed.bind(this)
        this.tvAction = this.tvAction.bind(this)
        this.goOutAction = this.goOutAction.bind(this)
        this.cookAction = this.cookAction.bind(this)
        this.phoneAction = this.phoneAction.bind(this)
        this.bonusCard = this.bonusCard.bind(this)
        this.initTick = this.initTick.bind(this)
    }

    initGame() {
        // Put game variables in HTML
        this.changeValues()

        // First tick
        this.isPlaying = window.setInterval(this.tick, 1000)
    }

    normalizeValue(value) {
        if (value > 100) {
            return 100
        }
        else if (value < 0) {
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
        this.$time.textContent = this.timeLeft
        // this.$bored.textContent = this.bored
        // this.$tired.textContent = this.tired
        // this.$lonely.textContent = this.lonely
    }

    tick() {
        // Chec if game is Loosed
        this.isLoosed()
        // One tick
        this.timeLeft -= 1
        this.difficulty++
        this.bored = this.bored + this.difficulty + Math.floor(Math.random() * 2)
        this.tired = this.tired + this.difficulty + Math.floor(Math.random() * 2)
        this.lonely = this.lonely + this.difficulty + Math.floor(Math.random() * 2)
        this.changeValues()
    }

    initTick() {
        // window.requestAnimationFrame(this.tick)
    }

    isLoosed() {
        if (this.timeLeft === 1 ||
            this.bored + this.difficulty > 100 ||
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

        this.tvActive = true
        this.goOutActive = true
        this.cookActive = true
        this.phoneActive = true
    }

    tvAction() {
        if (this.tvActive) {
            this.score += 100
            this.tired -= 30
            this.bored += 20
            this.lonely += 20
            this.changeValues()
            this.setCoolDown('tv')
        }
    }

    goOutAction() {
        if (this.goOutActive) {
            this.score += 800
            this.tired += 30
            this.bored -= 20
            this.lonely -= 10
            this.changeValues()
            this.setCoolDown('goOut')
        }
    }

    cookAction() {
        if (this.cookActive) {
            this.score += 250
            this.tired += 20
            this.bored -= 10
            this.lonely += 10
            this.changeValues()
            this.setCoolDown('cook')
        }
    }

    phoneAction() {
        if (this.phoneActive) {
            this.score += 400
            this.tired -= 20
            this.bored -= 10
            this.lonely -= 20
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

    initBonus() {
        const intervalCards = window.setInterval(this.bonusCard, 5000)
    }

    bonusCard() {
        console.log('card!');
    }
}

const game = new Game()
console.log(game);