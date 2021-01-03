import BtcSubject from './Suject'
import BtcObserver from './Observer'

const elSubject:HTMLInputElement = document.querySelector('#value')
const elObserver:HTMLElement = document.querySelector('#price')


const bitcoinSubject = new BtcSubject(elSubject)
const bitcoinObserver = new BtcObserver(elObserver)

bitcoinSubject.suscribe(bitcoinObserver)