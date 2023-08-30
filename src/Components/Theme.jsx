import React, {useEffect, useState} from 'react'

const Theme = (props) => {

    useEffect(() => {
      const currentheme = JSON.parse(localStorage.getItem('Theme'))|| false
      props.setTheme(currentheme)
    }, [])
    

    const setthememodo = () =>{
        const newtheme = !props.theme
        props.setTheme(newtheme)
        localStorage.setItem('Theme',JSON.stringify(newtheme))
    }

  return (
    <button onClick={setthememodo} className='Likeordark'>
        {props.theme ? <i className="fa-solid fa-lightbulb modoclaro"></i> : <i className="fa-regular fa-lightbulb"></i> }
    </button>
  )
}

export default Theme