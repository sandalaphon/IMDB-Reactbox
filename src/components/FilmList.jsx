import React from 'react'
import Film from './Film'

const FilmList = (props) => {


  const filmNodes = props.data.map((film) => {
      return (
    
        <Film title={film.title} url={film.url}>
        </Film>
        )
    })
    return(
      <div className="commentList">
        {filmNodes}
        </div>
      )


}

export default FilmList