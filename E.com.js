let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";
    }

})


let shops = document.getElementById("shops");
let shreviewsps = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", ()=>{
    shops.style.color="rgb(4,219 ,219)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(4,219 ,219)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(4,219 ,219)";
    reviews.style.color="white";
    shops.style.color="white";
    contacts.style.color="white";
})

contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(4,219 ,219)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})

//card js

let crd = document .querySelectorAll(".crd")
let itempage = document.querySelector(".itempage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");



console.log(crd);


    crd.forEach(function(curValue){
       curValue.addEventListener("click",function(){
        itempage.style.display="flex";
        container.style.display="none";

        let imgSrc = curValue.firstElementChild.src ;
        itemImg.src=imgSrc;

        buyBtn.addEventListener("click", function(){
            document.querySelector(".byuPage").style.display="block";
           document.querySelector(".buyText").innerHTML=`
           <h3>Enter Details :</h3>
        <input type="text"placeholder="Enter Your Name"> <br>
        <input type="text"placeholder="Enter Your Address"> <br>
        <input type="text"placeholder="Enter Your Mobile Number"> <br>
        <h3>Payment Option :</h3>
        <select>
            <option value="Google-Pay">Google-Pay</option>
            <option value="Phone-Pay">Phone-Pay</option>
            <option value="Bharat-Pay">Bharat-Pay</option>
            <option value="Cash-On-Delivery">Cash-On-Delivery</option>
        </select> <br>
       

           `

           let button = document.createElement("button");
           button.innerText="Submit";
           buyText.appendChild(button);

           let cross = document.querySelector(".cross");
           cross.addEventListener("click", function(){
            document.querySelector(".buyPage").style.display="none";
           }
           )

          
        })

      })

    })

