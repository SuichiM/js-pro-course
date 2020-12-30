/**
 * 
 *  TIPOS BASICOS 
 * 
 * */

// Booleans
let muted : boolean = true;
muted = false

// Numeros
let numerador : number = 42
let denominador : number = 6
let resultado = numerador / denominador

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push("9000")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };

/**
 * 
 *  FUNCIONES 
 * 
 * */

// tipando parametros y retorno 
function add(a: number, b:number): number{
  return a+b
}

// retornando funciones
function createAdder(a: number): (number) => number{
  return function(b:number){
    return b + a
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

// parametros opcionales

function fullName(firstName:string, lastName?:string):string{
  return `${firstName}${lastName}`
}

const richard = fullName('Richard')

/**
 * 
 *  INTERFACES 
 * 
 * */

 interface Rectangulo {
   ancho: number;
   alto: number;
   color?: Color;
 }

 let rect: Rectangulo ={
   alto:4,
   ancho:6
 }

 function area(r:Rectangulo):number{
   return r.alto*r.alto
 }

 const areaRect= area(rect)
 console.log(areaRect)

 rect.toString = function(){
   return this.color ? `Un rectangulo de color ${this.color}`: `Un rectangulo`
 }

 console.log(rect.toString())