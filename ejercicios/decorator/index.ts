import Field from "./Field"
import RequiredDecorator from './RequiredDecorator' 
import EmailDecorator from './EmailDecorator'


let input:HTMLInputElement = document.querySelector('#email')
let field = new Field(input)
field = RequiredDecorator(field)
field = EmailDecorator(field)
