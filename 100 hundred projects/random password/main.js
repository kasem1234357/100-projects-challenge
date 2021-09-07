var val = document.querySelector('.r');
let option = document.querySelectorAll('input[type="checkbox"]');
let final= 'abcdefghijklmnobqrstuvwxyz';
const randomBtn = document.querySelector('.random');
const saveBtn = document.querySelector('.save');
let numbers = {
 type: false,
 elNum:"1234567890"
};
let big = {
 type: false,
 elBig:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};
let symbols  = {
 type: false,
 elSym:"@#$%^&*?/|"
};
function check(e){
let data = e.target.getAttribute('data-type');
//console.log(data);
 switch (data) {
  case data='number':
      if(numbers.type == true){
         final = final.replace(numbers.elNum,"");
         numbers.type = false
      }
      else{
       numbers.type = true;
       final += numbers.elNum
      }
      console.log(numbers);
   break;
   case data='big':
      if(big.type == true){
         final = final.replace(big.elBig,"")
         big.type = false;
      }
      else{
       big.type = true;
       final += big.elBig 
      }
      console.log(big);
   break;
   case data='symbol':
      if(symbols.type == true){
         final = final.replace(symbols.elSym,"");
         symbols.type = false;
      }
      else{
       symbols.type = true;
       final += symbols.elSym
      }
      console.log(symbols);
      break;
 }
 console.log(final);
 
}
option.forEach(btn=>{
 btn.addEventListener('click',(e)=>check(e))
})
randomBtn.addEventListener('click',()=>{
   let finalArray = final.split("");
   //console.log(finalArray);
   let password = []
   for(let i=0;i<parseInt(document.querySelector('.number').value);i++){
      let value = Math.floor(Math.random()*finalArray.length) ;
      password.push(finalArray[value]);
   }
   //console.log(password);
   val.textContent = password.join('');
   
})
saveBtn.addEventListener('click',()=>{
   navigator.clipboard.writeText("");
   navigator.clipboard.writeText(val.textContent);
   alert(`copy successfully => ${val.textContent}`);
   val.textContent = ""
})
   

