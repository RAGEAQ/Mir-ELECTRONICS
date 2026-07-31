function searchProducts(){

let input = document.getElementById("searchBox");

let filter = input.value.toLowerCase();

let products = document.getElementsByClassName("product-card");


for(let i=0;i<products.length;i++){

let text = products[i].innerText.toLowerCase();


if(text.includes(filter)){

products[i].style.display="block";

}

else{

products[i].style.display="none";

}

}

}
