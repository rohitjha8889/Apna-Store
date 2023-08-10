


// Retrieve data from local storage
const idReceived = (localStorage.getItem('data'));
// console.log(dataReceived); 

let printBox = document.getElementById('print');

// printBox.innerHTML = idReceived;
let cartArr = []

// const cartArrAsString = JSON.stringify(cartArr);
// localStorage.setItem('cartArrayKey', cartArrAsString);


// Presenting data 

let dummtext = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat recusandae praesentium ipsa, enim architecto, obcaecati voluptates suscipit incidunt illo sequi quam accusantium dignissimos ipsam veritatis. Ullam doloremque fugiat consequatur aperiam accusamus, atque laborum dolorum omnis autem illum voluptatibus mollitia, rem ducimus. Veniam velit eaque excepturi, doloribus quis aliquam vel, fugit optio id adipisci non nulla provident repellendus. Sapiente, ducimus recusandae perspiciatis odit id doloremque accusantium sequi ad iure, libero nisi sed. Tenetur explicabo placeat ipsa veniam pariatur ipsam nobis, atque error `



const getdataOn = async() => {
    try{

        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        // console.log(data.products);
        return data.products
    } catch(error){
        console.log("Error Fetching data:" , error);
        throw error;
    }
}

// getdataOn()


const getObjectById = async() =>{
    const apiData = await getdataOn()
    for(let i = 0; i < apiData.length; i++ ){
        if(apiData[i].id == idReceived){
            // console.log(apiData[i])
            return apiData[i]
        }
    }
}

// getObjectById()



const getOtherdata = async() =>{
    const foundData = await getObjectById();
    cartArr.push(foundData);
    // console.log(cartArr);

let data = `<div class="container product_alig" style="margin-top:50px">`
    // console.log(foundData.title)
    for(let i = 0; i < cartArr.length; i++){
        let e = cartArr[i];
        // console.log(e)

        // const viewImage = (a) =>{
        //     let imgSource = a

        //     console.log(viewImage)
        //     // return imgSource
        // }

     data +=`
     <div class="container">
    <div class="row" >

      <div class="col" >
      <div class="card" style="width: 100%; height:auto;">
      <img src="${e.thumbnail}" class="card-img-top" alt="...">
      </div>
      <button style = "margin-top:50px; border:none;" class="btn_img"> <img src="${e.thumbnail}" class="card-img-top" alt="..." style="width:80px "> </button>
      <button style = "margin-top:50px;  border:none; margin-left:20px" class="btn_img"> <img src="${e.images[1]}" class="card-img-top" alt="..." style="width:80px "> </button>
      <button style = "margin-top:50px;  border:none; margin-left:20px" class="btn_img"> <img src="${e.images[2]}" class="card-img-top" alt="..." style="width:80px "> </button>
     
      <button style = "margin-top:50px; border:none; margin-left:20px" class="btn_img"> <img src="${e.images[3]}" class="card-img-top" alt="..." style="width:80px "> </button>
     
      </div>
      <div class="col" style="padding-bottom:50px">
      <div class="card-body">
      <h5 class="card-title" style="font-size:30px; font-weight:700; margin-top:30px;">${e.title}</h5>
      <p class="card-text" style="margin-top:30px">${e.description}</p>
      <p class="card-text" style="margin-top:30px">${dummtext}</p>

      <p class="card-text" style="font-size:40px; margin-left:50px; font-weight:800"> $${e.price}.00 <span class="badge bg-primary" style="font-size:16px; margin-left:50px">50% OFF</span></p>

      <div class="button-box">
    <a href="#" class="button add-cart"> <i class="fa-solid fa-cart-shopping "></i>    Add Cart</a>
    <a href="#" class="button buy-now">Buy Now</a>
    </div>
    </div>
      </div>
      
    </div>
    </div>
 `
    data+=' </div>'
    }

printBox.innerHTML = data;
    // return data;
}

getOtherdata()



