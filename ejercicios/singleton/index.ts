import Singleton from './singleton'

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log(`is the same instance a and b: ${a===b}`)