import React from 'react'

export default function class_truongdinhtuyen() {
    constuctor(props){
        super(props);
        this.state={
            fullname:"Truong Dinh Tuyen",
            class:"k22ct3"
        }
        

    }
    user = {
        name:"Truong Dinh Tuyen",
        age:20
    }
    render(){
  return (
    <div>
    <h1>this is a class Component</h1>
    {user.name} - {this.user.age}
    <hr/>
    <h3>
        info: {this.props.info}
        <h3>time:{this.props.time}</h3>
        <hr/>
        <h3 >state:
            fullName:{this.state.fullname}-
            class:{this.state.class}
        </h3>
        <button>Change name</button>
    </h3>
</div>
  )
}
}
