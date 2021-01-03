import Observer from "./IObserver";

interface Subject {
  suscribe: (observer: Observer) => void
  unsuscribe: (observer: Observer) => void
}

export default Subject