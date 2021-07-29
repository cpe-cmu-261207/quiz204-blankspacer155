const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const search_btn = document.querySelector("#search")
const reset_btn = document.querySelector("#reset")
let Alltext = document.querySelector("#text").innerText



// search_btn.onclick = () =>{
//   for(let i= 0;i<Alltext.length;i++)
//   {
//     let word= ""
//     let j=0
//     while(text[i+j]!=" "){
//       word+=text[i+j]
//       j++
//     }
//     if(j+1>length.value)
//     {
//       const highlight = document.createElement("span")
      
//     }
//     i+=j+1
//   }
// }

// reset_btn.onclick = () =>{

// }
let btn_state = true
btn_toggle.onclick = () => {
if(btn_state)
{
   btn_toggle.innerText = "Display Author"
  author.innerText  = String(630610726-length.value)
  btn_state = false
}
else{
  btn_toggle.innerText = "Display Calculation"
  author.innerText  = "630610726 CHANCHAI CHAISALEE"
  btn_state =true
}
 
  // your code here
}

// more codes for Search and Reset buttons here
