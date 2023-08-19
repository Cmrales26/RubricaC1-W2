import React from 'react'

const Navegacion = (props) => {

  const Voverview = () =>{
    props.setOverview(true)
    props.setContent(false)
    props.setCreate(false)
  }
  const Vcontent = () =>{
    props.setOverview(false)
    props.setContent(true)
    props.setCreate(false)
  }
  const Vcreate = () =>{
    props.setOverview(false)
    props.setContent(false)
    props.setCreate(true)
  }

  return (
    <div className='Botones-Navegacion'>
        <button onClick={Voverview} >Overview</button>
        <button onClick={Vcontent} >Content</button>
        <button onClick={Vcreate} >Create</button>
    </div>
  )
}

export default Navegacion