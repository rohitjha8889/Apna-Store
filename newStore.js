

const display = document.getElementById('productList');




const getdata = async() => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    // console.log(data);
    return data.products
}




const displayUsers = async () => {
    const allproducts = await getdata();
    // console.log(payload)

    const dataDisplay = allproducts.map((products) =>
    `<div class="col-md-4 mb-3">
    <div class="card" style="width: 20rem;">
    <img src=${products.thumbnail} class="card-img-top"  alt="..." style="height:250px">
    <div class="card-body" style="height:250px">
      <h5 class="card-title ">${products.title}</h5>
      <p class="card-text des">${products.description}</p>
      <p class="card-text price">$${products.price}</p>
      <div class="button-box">
      <a href="#" class="button add-cart"> <i class="fa-solid fa-cart-shopping "></i>    Add Cart</a>
      <a href="#" class="button buy-now">Buy Now</a>
      </div>
    </div>
  </div>
    </div>`);

    display.innerHTML = dataDisplay.join('')
}
displayUsers()


const filterOne_hun = async () =>{
    const allproducts = await getdata();
    const dataDisplay = allproducts.filter(products => products.price >= 1 && products.price <=100).map((products)=>
    `<div class="col-md-4 mb-3">
    <div class="card" style="width: 20rem;">
    <img src=${products.thumbnail} class="card-img-top"  alt="..." style="height:250px">
    <div class="card-body" style="height:250px">
      <h5 class="card-title ">${products.title}</h5>
      <p class="card-text des">${products.description}</p>
      <p class="card-text price">$${products.price}</p>
      <div class="button-box">
      <a href="#" class="button add-cart"> <i class="fa-solid fa-cart-shopping "></i>    Add Cart</a>
      <a href="#" class="button buy-now">Buy Now</a>
      </div>
    </div>
  </div>
    </div>`);

    display.innerHTML = dataDisplay.join('')
}

const filterOnehun_Fivehun = async () =>{
    const allproducts = await getdata();
    const dataDisplay = allproducts.filter(products => products.price > 100 && products.price <=500).map((products)=>
    `<div class="col-md-4 mb-3">
    <div class="card" style="width: 20rem;">
    <img src=${products.thumbnail} class="card-img-top"  alt="..." style="height:250px">
    <div class="card-body" style="height:250px">
      <h5 class="card-title ">${products.title}</h5>
      <p class="card-text des">${products.description}</p>
      <p class="card-text price">$${products.price}</p>
      <div class="button-box">
      <a href="#" class="button add-cart"> <i class="fa-solid fa-cart-shopping "></i>    Add Cart</a>
      <a href="#" class="button buy-now">Buy Now</a>
      </div>
    </div>
  </div>
    </div>`);

    display.innerHTML = dataDisplay.join('')
}
const filterFivehun_Oneth = async () =>{
    const allproducts = await getdata();
    const dataDisplay = allproducts.filter(products => products.price > 500 && products.price <=1000).map((products)=>
    `<div class="col-md-4 mb-3">
    <div class="card" style="width: 20rem;">
    <img src=${products.thumbnail} class="card-img-top"  alt="..." style="height:250px">
    <div class="card-body" style="height:250px">
      <h5 class="card-title ">${products.title}</h5>
      <p class="card-text des">${products.description}</p>
      <p class="card-text price">$${products.price}</p>
      <div class="button-box">
      <a href="#" class="button add-cart"> <i class="fa-solid fa-cart-shopping "></i>    Add Cart</a>
      <a href="#" class="button buy-now">Buy Now</a>
      </div>
    </div>
  </div>
    </div>`);

    display.innerHTML = dataDisplay.join('')
}
const filterOneth_Above = async () =>{
    const allproducts = await getdata();
    const dataDisplay = allproducts.filter(products => products.price > 1000 ).map((products)=>
    `<div class="col-md-4 mb-3">
    <div class="card" style="width: 20rem;">
    <img src=${products.thumbnail} class="card-img-top"  alt="..." style="height:250px">
    <div class="card-body" style="height:250px">
      <h5 class="card-title ">${products.title}</h5>
      <p class="card-text des">${products.description}</p>
      <p class="card-text price">$${products.price}</p>
      <div class="button-box">
      <a href="#" class="button add-cart"> <i class="fa-solid fa-cart-shopping "></i>    Add Cart</a>
      <a href="#" class="button buy-now">Buy Now</a>
      </div>
    </div>
  </div>
    </div>`);

    display.innerHTML = dataDisplay.join('')
}
