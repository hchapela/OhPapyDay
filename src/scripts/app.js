class Game {
    constructor() {
        console.log('New Game');
        // Get HTML Elements
        this.$statuses = document.querySelector('.js-statuses')
        this.$tired = this.$statuses.querySelector('.js-tired')
        this.$bored = this.$statuses.querySelector('.js-bored')
        this.$sad = this.$statuses.querySelector('.js-sad')
        this.$main = document.querySelector('.js-main')
        this.$score = this.$main.querySelector('.js-score')
        this.$picture = this.$main.querySelector('.js-picture')
        this.$time = this.$main.querySelector('.js-time')
        this.$controls = document.querySelector('.controls')
        this.$tv = this.$controls.querySelector('.js-tv')
        this.$cook = this.$controls.querySelector('.js-cook')
        this.$goOut = this.$controls.querySelector('.js-go-out')
        this.$phone = this.$controls.querySelector('.js-phone')
        // Get variables
        this.score = 0
        this.timeLeft = 10
        this.tired = 0
        this.bored = 0
        this.sad = 0
        this.initGame()

    }

    initGame() {
    }
}

const game = new Game()
console.log(game);
