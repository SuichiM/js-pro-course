import Field from "./Field"


function RequiredDecorator(field:Field): Field{
  let origValidator = field.validate

  field.validate = function(){
    origValidator()
    let value = field.input.value

    if(!value)
      field.errors.push("This Field is Required")
  }

  return field
}

export default RequiredDecorator