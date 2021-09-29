const box = document.querySelectorAll('.boxSlide');
const next = document.querySelector('.next');
const img = document.querySelectorAll('.container img');
const prev = document.querySelector('.prev');
let number = document.querySelector('.number');
const dot = document.querySelector('.dotEl');
const model = document.querySelector('.model');
const modelImg = document.querySelector('.model img');
const closex = document.querySelector('.close');
let current = 0 ;
number.textContent = `${current +1}/${box.length}`
next.addEventListener('click',()=>{
    nextFunction();
});
prev.addEventListener('click',()=>{
    prevFunction();
})
const nextFunction = ()=> {
    box.forEach(el => {
        el.classList.remove('active');
    })
 current++;
 if(current>box.length -1)
 {
     current = 0;
 }
 box[current].classList.add('active');
 number.textContent = `${current +1}/${box.length}`
 
}
const prevFunction = ()=>{
    box.forEach(el => {
        el.classList.remove('active');
    })
 current--;
 if(current< 0 )
 {
     current = box.length-1;
 }
 box[current].classList.add('active');
 
}
for(let i=0; i<box.length;i++)
{
   let el = document.createElement('li');
   el.addEventListener('click',()=> {
    current= i;
    box.forEach(el => {
        el.classList.remove('active');
    })
    box[current].classList.add('active');
    number.textContent = `${current +1}/${box.length}`
   })
   dot.appendChild(el);
}
img.forEach((photo,index) => {
   photo.addEventListener('click',()=>{
       let bx = [...img]
       console.log(bx[index].src);
       model.style.display = `block`
       modelImg.src = bx[index].src;
       console.log(model);
       document.querySelector('.container').style.opacity = `0.5`
   })
})
closex.addEventListener('click',()=>{
    model.style.display = `none`
       document.querySelector('.container').style.opacity = `1`
})
