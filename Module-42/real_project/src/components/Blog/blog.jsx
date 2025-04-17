import React from "react";

const Blog = ({blog,handleBookmark,handleMarkAsReading})=>{
    // console.log(handleBookmark)
    // console.log(blog)
    const{id,name,description,coverPhoto,authorName,authorImage,readingTime}=blog
    return (
        <div>
            
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={coverPhoto}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex">
        <h3>{authorName}</h3>
        <img className="w-[50px] rounded-lg space-between" src={authorImage} alt="" />
    </div>
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsReading(readingTime)} className="btn btn-primary">mark as read</button>
      <button onClick={()=>handleBookmark(blog)}>bookmark</button>
    </div>
  </div>
</div>

        </div>
    )
}

export default Blog;