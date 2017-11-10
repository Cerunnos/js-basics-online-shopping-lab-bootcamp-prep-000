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
  switch(outputArray.length){
    case 1:
      break;
    case 2:
      outputArray=outputArray.join(" and ")
      break;
    default:
      outputArray[cart.length-1]="and ".concat(outputArray[cart.length-1])
      outputArray=outputArray.join(", ")
  }
  console.log(`In your cart, you have ${outputArray}.`)
}
function total() {
  
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
