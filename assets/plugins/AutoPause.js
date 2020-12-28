class AutoPause {
  constructor(){
    this.THRESHOLD = 0.25
    // con esto hacemos que siempre que se llame a _handleIntersection el this 
    // esta instancia de la la clase
    this._handleIntersection = this._handleIntersection.bind(this)
  }

  run(player) {
    this.player = player 

    const observer = new IntersectionObserver(this._handleIntersection, {
      threshold: this.THRESHOLD,
    });

    observer.observe(this.player.media)
  }

  _handleIntersection(entries) {
    const [entry] = entries

    const isVisible = entry.intersectionRatio >= this.THRESHOLD

    if(isVisible) this.player.play()
    else
    this.player.pause()
  }
}

export default AutoPause;
