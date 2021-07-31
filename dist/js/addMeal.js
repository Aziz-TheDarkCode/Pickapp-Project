const mealSection = document.querySelector(".meal__card--section")
const plusCard = document.querySelector(".plus")
const meal = document.querySelector(".meal")
const details = document.querySelector(".meal-detail")
console.log(details)
plusCard.addEventListener("click",()=>{
   let item = meal.cloneNode(true)
    mealSection.insertBefore(item,details)
})
