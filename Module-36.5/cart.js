const handleAddtoCart = ()=> {
    const productName = document.getElementById('productName')
    const productQuantity = document.getElementById('productQuantity')

    const Name = productName.value

    const quantity = productQuantity.value;

    console.log(Name,quantity);

    displayProduct(Name, quantity); 
    
    productName.value=''
    productQuantity.value=''
}



const displayProduct = (productName,productQuantity) =>{
    const productContainer = document.getElementById('product-Container')

    const li = document.createElement('li')
    li.innerText=`
    ${productName} : ${productQuantity}`;

    productContainer.appendChild(li);

    handleSetToLocalStorage(productName,productQuantity)
}


const getProductfromLocalStorage = () =>{
    let cart = {};
    const getProduct= localStorage.getItem('cart');

    if(getProduct){
        cart = JSON.parse(getProduct);
    }
    return cart;

}


const displayProductfromLocalStorage = () =>{
     const products = getProductfromLocalStorage();
     for(const product in products){
        displayProduct(product,products[product])
     }
}


const handleSetToLocalStorage = (productName,Quantity) =>{
    
    const cart = getProductfromLocalStorage();

    cart[productName] = Quantity;

    const cartString = JSON.stringify(cart);

    localStorage.setItem('cart',cartString)

}


displayProductfromLocalStorage()