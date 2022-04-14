import React, { useState } from 'react'

const User = () => {
  const [data, setData] = useState('');
  console.log({str:data});
  return (
    <div>User


<textarea value={data} onChange={(e)=>setData(e.target.value)}>

</textarea>

    </div>
  )
}

export default User