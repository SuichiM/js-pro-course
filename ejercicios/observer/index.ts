import BtcSubject from './Suject'
import BtcObserver from './Observer'

const elSubject:HTMLInputElement = document.querySelector('#value')
const elObserver:HTMLElement = document.querySelector('#price')
const elObserver2:HTMLElement = document.querySelector('#pageTitle')

const bitcoinSubject = new BtcSubject(elSubject)
const bitcoinObserver1 = new BtcObserver(elObserver)
const bitcoinObserver2 = new BtcObserver(elObserver2)

bitcoinSubject.suscribe(bitcoinObserver1)
bitcoinSubject.suscribe(bitcoinObserver2)