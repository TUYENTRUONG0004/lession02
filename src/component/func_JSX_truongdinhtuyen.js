import React from 'react'

export default function func_JSX_truongdinhtuyen() {
    const users = {
        name:" Truong Dinh Tuyen",
        age:20
    }
  return (
    <div>
        <h2> Function Component Demo</h2>
        <h3> 
            Wellcome to ,{use1.name} - {users.age} 
        </h3>
        <hr/>
        <h3>
            Props:
            <br/> fullName:{process.fullName}
            <br/> age:{process.age}
            
        </h3>
    </div>
  )
}
