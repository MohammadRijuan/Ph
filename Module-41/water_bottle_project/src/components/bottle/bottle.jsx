import React from "react"
import "./bottle.css"

const Bottle = ({bottle,handleAddtoCart})=>{
    // console.log(bottle)
    const {img,name,price,stock,ratings} = bottle
    
    return(
        <div className="card bottle">
            {/* <img src={bottle.img} alt="" /> */}
            <img src={img} alt="" />
            <h3>name : {name}</h3>
            <p>price : {price}</p>
            <p>stock : {stock} remaining</p>
            <p>rating : {ratings}</p>
            <button onClick={()=> handleAddtoCart(bottle)}>Buy Now</button>
        </div>    
    )
}

export default Bottle