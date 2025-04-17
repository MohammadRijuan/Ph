import React,{ use, useEffect, useState } from "react"
import Bottle from "../bottle/bottle"
import './bottles.css'
import { addItemToLocalStorage, getCartFromLocalStorage, removeFromLocalStorage } from "../../utilities/localStorage"
import Cart from "../Cart/cart"

const Bottles = ({waterBottlePromise})=>{
    const [cart,setCart] = useState([])
    
    const waterBottle = use(waterBottlePromise)
    console.log(waterBottle)



    useEffect(()=>{
    const StoredCartIds = getCartFromLocalStorage()
    console.log(StoredCartIds,waterBottle);

    const storedCart=[]
    for(const id of StoredCartIds){
        console.log(id)
        const cartBottle = waterBottle.find(bottle => bottle.id === id)
        if (cartBottle ){
            storedCart.push(cartBottle) 
            
        }

        console.log('stored cart',storedCart)
        setCart(storedCart)
    }
    },
    [Bottles])

    const handleAddtoCart = (bottle) =>{
        // console.log('bottle info clicked',bottle)
        const newcart = [...cart,bottle]
        setCart(newcart)


        addItemToLocalStorage(bottle.id)
    }


    const handleRemoveFromCart = (id)=>{
        console.log('remove item',id)

        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromLocalStorage(id)
    }


    return(
        <div>
            <h3>Bottle : {waterBottle.length}</h3>
            <p>Added to cart : {cart.length}</p>

            <Cart cart = {cart}
                handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>

            <div className="Bottles"> 
            {
                waterBottle.map(bottle=><Bottle
                    key={bottle.id} 
                    handleAddtoCart={handleAddtoCart}
                    bottle={bottle}
                >
                </Bottle>)
            }
            </div>

        </div>
    )
}

export default Bottles
