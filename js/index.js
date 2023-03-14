const name1= []
var button = document.getElementById("clickme");
var star = document.getElementById("rating");
function data(event){
    event.preventDefault();
	const product = {
		producttitle: document.getElementById("title").value,
		productdes: document.getElementById("des").value,
		mrp: document.getElementById("mrp").value,
		price: document.getElementById("price").value,
		stock: document.getElementById("stock").value,
		currency: "USD",
		rating: [],
		likes: [],
		SKU: generateRandomString(10)
	};
    document.getElementById("sku").innerHTML = product.SKU;
    // console.log(product);
    
	name1.push(product); 
	console.log(name1);
   data.push(star)
}


function generateRandomString(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
function sub1(event) {
	event.preventDefault()
	const inputData = document.getElementById("title").value; // Get input data
document.getElementById("card-producttitle").innerHTML=inputData
const inputData1 = document.getElementById("des").value; // Get input data
document.getElementById("productdes").innerHTML=inputData1 
const inputData2 = document.getElementById("mrp").value; // Get input data
document.getElementById("mrp1").innerHTML=inputData2  
const inputData3 = document.getElementById("price").value; // Get input data
document.getElementById("price1").innerHTML=inputData3       

}

function onClick() {
    document.getElementById("like1").innerHTML= "Liked"
}

function onDblClick() {
    document.getElementById("like1").innerHTML= ""
}

var count = 0;
button.onclick = function() {
  if (count < 5) {
    count += 1;
    star.innerHTML = count;
  } else {
  }
};