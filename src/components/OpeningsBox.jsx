import React from 'react'
// import MoreOpeningThisWeekLink from './MoreOpeningThisWeekLink.jsx'
import FilmList from './FilmList.jsx'

class OpeningsBox extends React.Component{

constructor(props){
  super(props)
  this.state = {
    openingsURL: "http://www.imdb.com/",
    showtimesURL: "http://google.co.uk",
    filmdata: [{id:1, title:" A Dog's Purpose", url: "http://www.bbc.co.uk/"}, {id:2, title:"  Sleepless", url: "http://www.bbc.co.uk/news/0"}, {id:3, title:"  Mindhorn", url: "http://www.bbc.co.uk/news/world"}, {id:4, title:"Unlocked", url: "http://www.bbc.co.uk/news/business"}, {id:5, title:" The Journey", url: "http://www.bbc.co.uk/news/politics"}]
  }
}

render(){
  return(
    <div className="openings-box">
      
      <FilmList data={this.state.filmdata}/>
     
      </div>
    )
  }
}

// <div class="opening-this-week"><a href={this.state.openingsURL}>UK Opening This Week</a></div>
// <div></div>
// <div class = "film-list">

// </div>
// <div class="more-opening-this-week"><a href={this.state.openingsURL}>See more opening this week</a></div>


export default OpeningsBox