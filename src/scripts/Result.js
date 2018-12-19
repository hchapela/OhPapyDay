module.exports = class Result {
  constructor(_game) {
    this.game = _game
    this.$result = document.querySelector('.js-game-result')
    this.$score = this.$result.querySelector('.score p span')
    this.$replay = this.$result.querySelector('button.replay')
  }

  initResult() {
    this.$result.classList.remove('hidden')
    this.$score.innerText = this.game.score
    console.log(this.$replay);
    this.$replay.addEventListener('click', () => {
      location.reload()
    })
  }
}
