import IObserver from "./IObserver";
import ISubject from "./ISubject";

/**
 * THIS CLASS IMPLEMENTS THE INTERFACE SUBJECT
 * IS THE CONCRETE CLASS
 */
class BitcoinPrice implements ISubject {
  private observers: IObserver[] = [];
  private element: HTMLInputElement;

  constructor(el: HTMLInputElement) {
    /**
     * en el constructor recibimos que input es el que vamos a escuchar,
     * y cada vez que cambia, llamamos al metodo update,
     */
    el.addEventListener("input", () => {
      this.notify(el.value);
    });
  }

  suscribe(observer: IObserver) {
    this.observers.push(observer);
  }

  unsuscribe(observer: IObserver) {
    const observerIdx = this.observers.findIndex((el) => el === observer);
    this.observers.splice(observerIdx);
  }

  notify(data: any) {
    this.observers.forEach((obs) => obs.update(data));
  }
}

export default BitcoinPrice;
