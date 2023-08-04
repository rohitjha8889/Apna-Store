// const products = [
//   {
//     id: 1,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/1/1.jpg",
//       "https://i.dummyjson.com/data/products/1/2.jpg",
//       "https://i.dummyjson.com/data/products/1/3.jpg",
//       "https://i.dummyjson.com/data/products/1/4.jpg",
//       "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 2,
//     title: "iPhone X",
//     description:
//       "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//     price: 899,
//     discountPercentage: 17.94,
//     rating: 4.44,
//     stock: 34,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/2/1.jpg",
//       "https://i.dummyjson.com/data/products/2/2.jpg",
//       "https://i.dummyjson.com/data/products/2/3.jpg",
//       "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//     ],
//   },
  
//   {
//     id: 4,
//     title: "OPPOF19",
//     description: "OPPO F19 is officially announced on April 2021.",
//     price: 280,
//     discountPercentage: 17.91,
//     rating: 4.3,
//     stock: 123,
//     brand: "OPPO",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/4/1.jpg",
//       "https://i.dummyjson.com/data/products/4/2.jpg",
//       "https://i.dummyjson.com/data/products/4/3.jpg",
//       "https://i.dummyjson.com/data/products/4/4.jpg",
//       "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 5,
//     title: "Huawei P30",
//     description:
//       "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//     price: 499,
//     discountPercentage: 10.58,
//     rating: 4.09,
//     stock: 32,
//     brand: "Huawei",
//     category: "smartphones",
//     thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/5/1.jpg",
//       "https://i.dummyjson.com/data/products/5/2.jpg",
//       "https://i.dummyjson.com/data/products/5/3.jpg",
//     ],
//   },
//   {
//     id: 6,
//     title: "MacBook Pro",
//     description:
//       "MacBook Pro 2021 with mini-LED display may launch between September, November",
//     price: 1749,
//     discountPercentage: 11.02,
//     rating: 4.57,
//     stock: 83,
//     brand: "Apple",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
//     images: [
//       "https://i.dummyjson.com/data/products/6/1.png",
//       "https://i.dummyjson.com/data/products/6/2.jpg",
//       "https://i.dummyjson.com/data/products/6/3.png",
//       "https://i.dummyjson.com/data/products/6/4.jpg",
//     ],
//   },
//   {
//     id: 7,
//     title: "Samsung Galaxy Book",
//     description:
//       "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
//     price: 1499,
//     discountPercentage: 4.15,
//     rating: 4.25,
//     stock: 50,
//     brand: "Samsung",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/7/1.jpg",
//       "https://i.dummyjson.com/data/products/7/2.jpg",
//       "https://i.dummyjson.com/data/products/7/3.jpg",
//       "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 8,
//     title: "Microsoft Surface Laptop 4",
//     description:
//       "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
//     price: 1499,
//     discountPercentage: 10.23,
//     rating: 4.43,
//     stock: 68,
//     brand: "Microsoft Surface",
//     category: "laptops",
//     thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
//     images: [
//       "https://i.dummyjson.com/data/products/8/1.jpg",
//       "https://i.dummyjson.com/data/products/8/2.jpg",
//       "https://i.dummyjson.com/data/products/8/3.jpg",
//       "https://i.dummyjson.com/data/products/8/4.jpg",
//       "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
//     ],
//   },
// ];


var allproducts ={};

function fetchDataFromAPI(){
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        allproducts = data.products
        console.log(allproducts);
        generateProductCards(allproducts);
    })

    .catch(error=> console.error(error));
}


fetchDataFromAPI();



// Function to generate the product cards using map
function generateProductCards(allproducts) {
  const productListElement = document.getElementById("productList");

  // Using map to generate product cards
  const productCards = allproducts.map(
    (product) => `
        <div class="col-md-4 mb-3">
        <div class="card" style="width: 18rem;">
        <img src=${product.thumbnail} class="card-img-top"  alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Add Cart</a>
          <a href="#" class="btn btn-primary mx-4">Buy Now</a>
        </div>
      </div>
        </div>
    `
      
  );
  }
//   // Join the product cards and add them to the product list element

// }
productListElement.innerHTML = productCards.join("");
// // Call the function to generate the product cards on page load

  