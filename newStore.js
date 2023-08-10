// Menu bar Visible

const display = document.getElementById("productList");
const getdata = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    // console.log(data);
    return data.products;
  } catch (error) {
    console.log("Error Fetching data:", error);
    throw error;
  }
};

// All product display from here

const displayUsers = async () => {
  const allproducts = await getdata();
  // console.log(payload)

  const dataDisplay = allproducts.map(
    (products) =>
      `<div class="col-md-4 mb-3 columns"onclick="sender(${products.id})">
      <a href="./productdetail.html">
    <div class="card" style="width: 20rem;" >
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
  </a>
    </div>`
  );

  display.innerHTML = dataDisplay.join("");
};
displayUsers();

// Filter the item BY Price

//  Product price between 1-100 start

const filterOne_hun = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.price >= 1 && products.price <= 100)
    .map(
      (products) =>
        `<div class="col-md-4 mb-3 columns"  onclick="sender(${products.id})">
        <a href="./productdetail.html">
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
  </a>
    </div>`
    );

  display.innerHTML = dataDisplay.join("");
};
//  Product price between 1-100 end

//  Product price between 100-500 start

const filterOnehun_Fivehun = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.price > 100 && products.price <= 500)
    .map(
      (products) =>
        `<div class="col-md-4 mb-3 columns" onclick="sender(${products.id})">
        <a href="./productdetail.html">
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
  </a>
    </div>`
    );

  display.innerHTML = dataDisplay.join("");
};
//  Product price between 100-500 end
//  Product price between 500-1000 start

// const filterFivehun_Oneth = async () => {
//   const allproducts = await getdata();
//   const dataDisplay = allproducts
//     .filter((products) => products.price > 500 && products.price <= 1000)
//     .map(
//       (products) =>
//         `<div class="col-md-4 mb-3">
//   <div class="card" style="width: 20rem;">
//   <img src=${products.thumbnail} class="card-img-top"  alt="..." style="height:250px">
//   <div class="card-body" style="height:250px">
//     <h5 class="card-title ">${products.title}</h5>
//     <p class="card-text des">${products.description}</p>
//     <p class="card-text price">$${products.price}</p>
//     <div class="button-box">
//     <a href="#" class="button add-cart"> <i class="fa-solid fa-cart-shopping "></i>    Add Cart</a>
//     <a href="#" class="button buy-now">Buy Now</a>
//     </div>
//   </div>
// </div>
//   </div>`
//     );

//   display.innerHTML = dataDisplay.join("");
// };

//  Product price between 500-1000 end
//  Product price between 1000-Above start

const filterOneth_Above = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.price > 500)
    .map(
      (products) =>
        `<div class="col-md-4 mb-3 columns" onclick="sender(${products.id})">
        <a href="./productdetail.html">
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
  </a>
    </div>`
    );

  display.innerHTML = dataDisplay.join("");
};
//  Product price between 1000-Above end

// Filter the item BY Price End

// ------------------------------------------------------------------

// Filter the item by Category Start

// Filter the item by Smartphones Start
const filterSmartPhones = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.category == "smartphones")
    .map(
      (products) =>
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
 </div>`
    );
  display.innerHTML = dataDisplay.join("");
};
// Filter the item by Smartphones End

// Filter the item by Laptops Start
const filterLaptops = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.category == "laptops")
    .map(
      (products) =>
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
 </div>`
    );
  display.innerHTML = dataDisplay.join("");
};
// Filter the item by Laptops End

// Filter the item by Fragrances Start
const filterFragrances = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.category == "fragrances")
    .map(
      (products) =>
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
 </div>`
    );
  display.innerHTML = dataDisplay.join("");
};
// Filter the item by Fragrances End
// Filter the item by Skin Care Start
const filterSkincare = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.category == "skincare")
    .map(
      (products) =>
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
 </div>`
    );
  display.innerHTML = dataDisplay.join("");
};
// Filter the item by Skin Care End
// Filter the item by Groceries Start
const filterGroceries = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.category == "groceries")
    .map(
      (products) =>
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
 </div>`
    );
  display.innerHTML = dataDisplay.join("");
};
// Filter the item by Groceries End
// Filter the item by Home-Decoration Start
const filterHomeDec = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.category == "home-decoration")
    .map(
      (products) =>
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
 </div>`
    );
  display.innerHTML = dataDisplay.join("");
};
// Filter the item by Home-Decoration End

// Filter the item by Category End

// Filter by rating start

// Filter by rating above 4.5

const filterAboveFourPointFive = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.rating >= 4.5)
    .map(
      (products) =>
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
  </div>`
    );
  display.innerHTML = dataDisplay.join("");
};

// Filter by rating above 4.5 End

// Filter by rating 4 to 4.5

const filterAboveFourtoFourPointFive = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.rating >= 4 && products.rating < 4.5)
    .map(
      (products) =>
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
  </div>`
    );
  display.innerHTML = dataDisplay.join("");
};

// Filter by rating 4 to  4.5 End

// Filter by rating 3.5 to 4

const filterAboveThreePointFiveToFour = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.rating >= 3.5 && products.rating < 4)
    .map(
      (products) =>
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
  </div>`
    );

  display.innerHTML = dataDisplay.join("");
};

// Filter by rating 3.5 to  4 End

const filterBelowThreePointFive = async () => {
  const allproducts = await getdata();
  const dataDisplay = allproducts
    .filter((products) => products.rating < 3.5)
    .map(
      (products) =>
        `<div class="col-md-4 mb-3" onclick="sender(${products.id})">
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
  </div>`
    );

  display.innerHTML = dataDisplay.join("");
};


async function  sender(a){
  const dataToSend = a;
  localStorage.setItem('data', dataToSend);

  const apiDataSend = await getdata();
  localStorage.setItem('apiData', apiDataSend)
}



// Filter by rating 3.5 to  4 End
