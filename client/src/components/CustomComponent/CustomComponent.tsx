interface Idata{
    content:string,

}
type propsType={
    data:Idata|any,

}


const CustomComponent = ({data}:propsType) => {
    
  return (
    <pre>
        <code>
           {data.content}
        </code>
    </pre>
  )
}

export default CustomComponent;