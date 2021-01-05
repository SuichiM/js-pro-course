import IObserver from "./IObserver";

class Observer implements IObserver{
  private value : any
  private element: HTMLElement;

  constructor(el: HTMLElement) {
    /**
     * en el constructor recibimos el elemento que tenemos que actualizar cada vez que
     * se llama al metodo update, desde el subject
     */
    this.element = el 
    
    
  }

  update(data:any){
    this.element.innerText = data
  }
}

export default Observer