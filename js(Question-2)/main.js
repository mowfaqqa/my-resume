// Queustion 2
const name = 'Muwaffaq Aliyu'
const nameInput = document.getElementById('name')

console.log(`My name is ${name}`)
nameInput.innerHTML = `<h2>${name}</h2>`;




// skills card
const clc = document.querySelector(".cancel")
const arr = document.querySelector(".arr_container")
const leftContainer = document.querySelector(".left-container")

arr.addEventListener("click", ()=> {
   arr.classList.add("active_arr");
   if(leftContainer.classList.contains("off")){
      leftContainer.classList.remove("off")
      leftContainer.classList.add("active")
   }
})

clc.addEventListener("click", ()=>{
   arr.classList.remove("active_arr");
   if(leftContainer.classList.contains("active")){
      leftContainer.classList.remove("active");
      leftContainer.classList.add("off")
   }
})

VanillaTilt.init(document.querySelectorAll(".bg-glass"), {
   max: 15,
   speed: 400,
   glare : true,
   "max-glare" : 1,
})