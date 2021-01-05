import Field from "./Field"


function EmailDecorator(field:Field): Field{
  let origValidator = field.validate

  field.validate = function(){
    origValidator()
    let value = field.input.value

    if(value.indexOf('@') === -1)
      field.errors.push("The email is malformed")
  }

  return field
}

export default EmailDecorator