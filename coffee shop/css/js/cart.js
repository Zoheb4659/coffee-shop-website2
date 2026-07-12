document.addEventListener("DOMContentLoaded", function(){


/* ================= CART STORAGE ================= */


let cart = JSON.parse(localStorage.getItem("coffeeCart")) || [];




/* ================= ADD TO CART ================= */


const addButtons = document.querySelectorAll(
".card button, .menu-card button"
);



addButtons.forEach(button=>{


button.addEventListener("click",function(){



const product =
this.closest(".card, .menu-card");



const name =
product.querySelector("h3").innerText;



const priceText =
product.querySelector("h4, p").innerText;



const price =
parseFloat(
priceText.replace("$","")
);



const image =
product.querySelector("img").src;





const existing =
cart.find(item=>item.name===name);





if(existing){


existing.quantity++;


}

else{


cart.push({

name:name,

price:price,

image:image,

quantity:1

});


}





saveCart();



showCartMessage(
name+" added to cart"
);



});



});









/* ================= SAVE CART ================= */


function saveCart(){


localStorage.setItem(
"coffeeCart",
JSON.stringify(cart)
);



updateCartCount();



}








/* ================= CART COUNT ================= */


function updateCartCount(){


const count =
document.getElementById("cart-count");



if(count){


let total=0;



cart.forEach(item=>{


total += item.quantity;


});



count.innerText=total;



}



}



updateCartCount();









/* ================= DISPLAY CART ================= */


const cartContainer =
document.getElementById("cartItems");



if(cartContainer){


displayCart();


}





function displayCart(){


cartContainer.innerHTML="";



if(cart.length===0){


cartContainer.innerHTML=`

<div class="empty-cart">

<i class="fas fa-cart-shopping"></i>

<h2>Your Cart Is Empty</h2>

<a href="menu.html" class="btn">
Order Coffee
</a>

</div>

`;


updateTotal();


return;


}







cart.forEach((item,index)=>{


cartContainer.innerHTML += `


<div class="cart-item">


<img src="${item.image}">


<div class="cart-details">


<h3>${item.name}</h3>


<p>
$${item.price.toFixed(2)}
</p>



<div class="quantity">


<button onclick="decreaseQuantity(${index})">
-
</button>



<span>
${item.quantity}
</span>



<button onclick="increaseQuantity(${index})">
+
</button>


</div>



</div>





<button class="remove-btn"
onclick="removeItem(${index})">


<i class="fas fa-trash"></i>


</button>



</div>


`;



});



updateTotal();



}









/* ================= QUANTITY CONTROL ================= */


window.increaseQuantity=function(index){


cart[index].quantity++;


saveCart();


displayCart();


};





window.decreaseQuantity=function(index){



if(cart[index].quantity>1){


cart[index].quantity--;


}

else{


cart.splice(index,1);


}



saveCart();


displayCart();



};









/* ================= REMOVE ITEM ================= */


window.removeItem=function(index){


cart.splice(index,1);



saveCart();


displayCart();



};








/* ================= TOTAL PRICE ================= */


function updateTotal(){


const totalElement =
document.getElementById("cartTotal");



if(totalElement){


let total=0;



cart.forEach(item=>{


total += item.price * item.quantity;


});



totalElement.innerHTML =
"$"+total.toFixed(2);



}



}









/* ================= CHECKOUT ================= */


const checkoutBtn =
document.getElementById("checkoutBtn");



if(checkoutBtn){


checkoutBtn.addEventListener("click",()=>{



if(cart.length===0){


alert(
"Your cart is empty!"
);


return;


}



window.location.href="checkout.html";



});


}








/* ================= CLEAR CART ================= */


window.clearCart=function(){


cart=[];


saveCart();


displayCart();


};









/* ================= CART MESSAGE ================= */


function showCartMessage(message){



const toast =
document.createElement("div");



toast.className="cart-toast";



toast.innerHTML=`

<i class="fas fa-check"></i>

${message}

`;



document.body.appendChild(toast);




setTimeout(()=>{


toast.classList.add("active");


},100);




setTimeout(()=>{


toast.classList.remove("active");



setTimeout(()=>{


toast.remove();


},500);



},2500);



}



});