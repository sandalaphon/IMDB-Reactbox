import React from 'react'

const Film = (props) => {


  return(
    <div className="film">
    <h4 className= "film-title">
    {props.title}
    </h4>
    {props.children}
    </div>
    )


}

export default Film