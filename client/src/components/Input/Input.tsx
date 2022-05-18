import { InputContainer } from './Input.styled'

type propTypes={
    type:string,
    changeHandler:(e:string)=>void
}
const Input = ({type, changeHandler}:propTypes) => {
  return (
    <InputContainer 
    type={type}
    onChange={(e) => changeHandler(e.target.value)}
    required
    />
  )
}

export default Input