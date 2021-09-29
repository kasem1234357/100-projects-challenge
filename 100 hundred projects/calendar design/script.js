let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById('year');
let selectMonth = document.getElementById('month');
let date = 1;
let data = [];
let nameOfDay = ['S',"M","T","W","T","F","S"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let number= numberDaysInMonth(currentYear,currentMonth);
let days = dayOfTheMonth(currentYear,currentMonth);
 function dayOfTheMonth(year,month){
  let dayOfTheMonth = new Date(year,month).getDay()+1;
  return dayOfTheMonth
 }
function numberDaysInMonth(year,month){
 let numberDaysInMonth= new Date(year, month+1, 0).getDate();
 return numberDaysInMonth
}
for(let i = 0; i<months.length;i++)
{
 let option = document.createElement("option");
 option.setAttribute("value",i);
 option.textContent = months[i];
 document.querySelector("#month").appendChild(option)
}
for(let i = 0; i<2031-1920;i++)
{
 let option = document.createElement("option");
 option.setAttribute("value",1920+i);
 option.textContent = 1920+i;
 document.querySelector("#year").appendChild(option)
}
for(let i=0; i<7;i++){
 let smallDayBox = document.createElement("div");
 smallDayBox.classList.add('day');
 smallDayBox.textContent = nameOfDay[i]
 //console.log(smallDayBox);
 document.querySelector('.box .dayBox').appendChild(smallDayBox)
}
function createItem(number,days,year,month){
 document.querySelectorAll('.items').forEach(it=>it.remove());
 date=1
 //console.log(month);
 for(let i=0; i<35;i++){
  let num = document.createElement("div");
  num.classList.add('items');
  if(date == today.getDate()&& year == today.getFullYear() && month == today.getMonth()){
    num.style.background = `#2a9d8f`
    num.style.color = `#fff`
  }

  if(days>i+1){
   num.textContent = numberDaysInMonth(year-1,month-1)+1+i-days+1
   num.style.opacity = 0.5;
   num.style.background = `#ff5d8f`
   num.style.color = `#fff`
  }
  else {
   num.textContent = date;
   date++
  }
  if(number<date-1){
   //console.log(date);
   num.textContent = date-number-1;
   num.style.opacity = 0.5;
   num.style.background = `#ff5d8f`
   num.style.color = `#fff`
  }
  document.querySelector('.box .itemsBox').appendChild(num)
 }
 dataColor(year,month)
}
createItem(number,days,currentYear,currentMonth);
selectYear.value = currentYear;
selectMonth.value = currentMonth;
document.querySelector('h1').textContent = `${currentYear} ${months[currentMonth]}`;
document.querySelectorAll("select").forEach(sel=>{
 sel.addEventListener('change',()=>{
  document.querySelector('h1').textContent = `${selectYear.value} ${months[selectMonth.value]}`;
   number= numberDaysInMonth(parseInt(selectYear.value),parseInt(selectMonth.value));
   ////console.log(typeof selectMonth.value);
   days = dayOfTheMonth(parseInt(selectYear.value),parseInt(selectMonth.value));
  createItem(number,days,selectYear.value,selectMonth.value)
 })
})
prev.addEventListener("click",()=>{
 if(parseInt(selectMonth.value) == 0){
  selectMonth.value = 11
  selectYear.value = parseInt(selectYear.value)-1 
 }
 else{
  selectMonth.value = parseInt(selectMonth.value)-1
  selectYear.value = selectYear.value
 }
 number = numberDaysInMonth(parseInt(selectYear.value),parseInt(selectMonth.value));
  days = dayOfTheMonth(parseInt(selectYear.value),parseInt(selectMonth.value));
  selectMonth.value = parseInt(selectMonth.value);
  createItem(number,days,selectYear.value,selectMonth.value);
 document.querySelector('h1').textContent = `${selectYear.value} ${months[selectMonth.value]}`;
})
next.addEventListener("click",()=>{
 if(parseInt(selectMonth.value) == 11 ){
  selectMonth.value = 0
  selectYear.value = parseInt(selectYear.value)+1
 }
 else{
  selectMonth.value = parseInt(selectMonth.value)+1
  selectYear.value = selectYear.value
 }
 number = numberDaysInMonth(parseInt(selectYear.value),parseInt(selectMonth.value));
  days = dayOfTheMonth(parseInt(selectYear.value),parseInt(selectMonth.value));
  selectMonth.value = parseInt(selectMonth.value);
  createItem(number,days,selectYear.value,selectMonth.value);
  document.querySelector('h1').textContent = `${selectYear.value} ${months[selectMonth.value]}`;
})

function dataColor(year,month){
  let val = document.querySelectorAll(".box .items");
    //console.log(val);
  if(data.length != 0){
   // console.log("hello");
    
    let xx = data.filter(dat =>{
      for(let i = 0;i<35;i++){
        if( dat.id == `${year}/${month}/${parseInt(val[i].textContent)}`){
          //console.log(dat.id);
          val[i].classList.add('check') 
        }
       
      }
    });
  }
}




