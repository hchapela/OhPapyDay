module.exports = class Result {
  constructor(_game) {
    this.game = _game
    this.$result = document.querySelector('.js-game-result')
    this.$score = this.$result.querySelector('.js-score p span')
    this.$replay = this.$result.querySelector('.js-replay')
    this.$sentence = this.$result.querySelector('.js-sentence p')

    this.initSentences()
  }

  initSentences() {
    this.sentences = [
      "La vieillesse arrive brusquement, comme la neige. Un matin au réveil, on s'aperçoit que tout est blanc. Jules Renard",
      "Le travail de la jeunesse fait le repos de la vieillesse. Proverbe Grec Antique.",
      "La jeunesse a une belle face et la vieillesse une belle âme. Proverbe Suédois",
      "Le plus bel âge de l'amitié est la vieillesse. Proverbe Français",
      "La jeunesse est le temps d'étudier la sagesse, la vieillesse est le temps de la pratiquer. Jean Jacques Rousseau",
      "La vieillesse bien comprise est l'âge de l'espérance. Victor Hugo",
      "La jeunesse est une ivresse sans vin et la vieillesse un vin sans ivresse. Proverbe Allemand"
    ]
  }

  initResult() {
    this.$result.classList.remove('hidden')
    this.$score.innerText = this.game.score
    this.$sentence.innerText = this.sentences[Math.floor(Math.random() * this.sentences.length)]
    this.$replay.addEventListener('click', () => {
      console.log('replay');
      location.reload()
    })
  }
}
