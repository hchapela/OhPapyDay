/* TODO
    Create events
    puts values on events random
    how random they are
    act on game
*/ 

module.exports = class Card {
    constructor(_game) {
        this.game = _game
        this.initScope()
        this.initCards()
    }

    initScope() {
        // this.newCard = this.newCard.bind(this)
    }

    newCard() {
        this.newCard = document.createElement('div')
        this.newCard.classList.add('card-event')
    }

    initCards() {
        window.setInterval(this.newCard, 10000)
    }
}