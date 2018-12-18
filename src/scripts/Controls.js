module.exports = class Controls {
    constructor(_game) {
        this.game = _game
        this.$hamburger = document.querySelector('.menu-wrapper')
        this.$hamburgerToggle = this.$hamburger.querySelector('.hamburger-menu')

        this.initHamburger()
    }

    // Init Hamburger toggle
    initHamburger() {
        this.$hamburger.addEventListener('click', () => {
            this.$hamburgerToggle.classList.toggle('animate')
        })
    }
}