module.exports = class Card {
    constructor(game) {
        this.initScope()
        this.initCards()
    }

    initScope() {
        // this.newCard = this.newCard.bind(this)
    }

    newCard() {
        this.newCard = document.createElement(div)
        
    }

    initCards() {
        window.setInterval(this.newCard, 10000)
    }
}