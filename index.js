var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let cost=Math.floor(Math.random()*100)+1
 cart.push({[item]: cost})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length===0){
    return console.log("Your shopping cart is empty.")
  }
  let outputArray=[]
  for (let i=0;i<cart.length;i++){
    let cartInstance=cart[i]
    let item=Object.keys(cartInstance)[0]
    let price=cartInstance[item]
    outputArray.push(`${item} at $${price}`)
  }
  if (outputArray.length===1){
    return console.log(`In your cart you have ${outputArray}.`)
  }
  else if (outputArray.length===2){
    outputArray=outputArray.join("and")
    return console.log(`In your cart you have ${outputArray}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
