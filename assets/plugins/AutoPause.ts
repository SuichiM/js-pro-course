import MediaPlayer from '../MediaPlayer'

class AutoPause {
  private THRESHOLD: number
  player: MediaPlayer


  constructor() {
    this.THRESHOLD = 0.25;

    // con esto hacemos que siempre que se llame a _handleIntersection el this
    // esta instancia de la la clase
    this._handleIntersection = this._handleIntersection.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;

    const observer = new IntersectionObserver(this._handleIntersection, {
      threshold: this.THRESHOLD,
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this._handleVisibilityChange);
  }

  private _handleIntersection(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;

    const isVisible = entry.intersectionRatio >= this.THRESHOLD;

    if (isVisible) this.player.play();
    else this.player.pause();
  }

  private _handleVisibilityChange = ()=> {
    console.log(document.visibilityState)
    const isVisible = document.visibilityState === 'visible';

    if (isVisible) this.player.play();
    else this.player.pause();
  }
}

export default AutoPause;
