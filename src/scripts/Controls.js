module.exports = class Controls {
    constructor(_game) {
        this.game = _game
        this.$hamburger = document.querySelector('.js-menu-wrapper')
        this.$menu = document.querySelector('.js-menu-container')
        this.$hamburgerToggle = this.$hamburger.querySelector('.js-hamburger-menu')
        this.$replay = this.$menu.querySelector('.js-replay')
        this.isPaused = false
        this.initHamburger()
    }

    // Init Hamburger toggle
    initHamburger() {
        this.$hamburger.addEventListener('click', () => {
            if (this.isPaused) {
                this.$hamburgerToggle.classList.remove('animate')
                this.$menu.classList.add('hamburger-deploy')
                this.game.play()
                this.isPaused = false
            } else {
                this.$hamburgerToggle.classList.add('animate')
                this.$menu.classList.remove('hamburger-deploy')
                this.game.pause()
                this.isPaused = true
            }
        })

        this.$replay.addEventListener('click', () => {
            location.reload()
        })
    }
}