import React from 'react'

const NewsItem = (props)=> {

    let{title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className='my-3'>
        <div className="card">
         <img src={!imageUrl?"https://imageio.forbes.com/specials-images/imageserve/68d1577959e8fde9312987aa/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds":imageUrl} className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">{title}{(new Date() - new Date(date) < 7*24*60*60*1000 && <span className="badge text-bg-secondary">New</span>)}</h5>
         <p className="card-text">{description}...</p>
         <p className="card-text"><small className="text-body-secondary">By {author? author: "Unknown"} on {new Date(date).toGMTString()} </small></p>
         <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem

