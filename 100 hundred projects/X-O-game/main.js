let items = [
 ['*','*','*'],
 ['*','*','*'],
 ['*','*','*'],
]
let play = false;
let windowFinal = document.querySelector('.final')
let box = document.querySelector('.box');
let result = document.querySelectorAll('.result')
let count = 0;
let closet = false;
let smallBox1 = document.querySelector('.box1');
let smallBox2 = document.querySelector('.b2')
let p = document.querySelectorAll('.box1 input');
let namex = document.querySelectorAll('.name');
let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
  if(closet == false){
    if(p[0].value !== ''){
      namex[0].textContent= p[0].value
    }
    else{
      namex[0].textContent= 'unknown'
    }
    p[0].value = '';
    smallBox1.style.display = 'none';
    smallBox2.style.display = 'block '
  }
  else{
    if(p[1].value !== ''){
      namex[1].textContent= p[1].value
    }
    else{
      namex[1].textContent= 'unknown'
    }
    p[1].value = '';
    document.querySelector('.popup').style.transform= 'translate(-50%,-50%) scale(0)'
  }
  closet = true
})
function render(){
  items.map((item,index) =>{
    for(let i=0; i<item.length; i++){
     let row = document.createElement('div');
     row.classList.add('row');
     row.textContent= item[i]
     box.appendChild(row)
     row.addEventListener('click',()=>{
       console.log(`[${index}][${i}]`)
       if(items[index][i] == '*'){
        count++
        console.log(count);
        if(!play){
         items[index][i]= 'O';
         row.textContent= item[i]
         play = !play
        }
        else{
         items[index][i]= 'x';
         row.textContent= item[i]
         play = !play
        }
       }
        if(winner(items,'O')){
         
         result[0].textContent =parseInt(result[0].textContent) + 1
         windowFinal.style.display = 'flex';
         document.querySelector('.final span').textContent = 'O win'
        }
        if(winner(items,'x')){
         
         result[1].textContent =parseInt(result[1].textContent) + 1
         windowFinal.style.display = 'flex';
         document.querySelector('.final span').textContent = 'X win'
        }
        if(count == (items.length*3) &&(!winner(items,'0') || !winner(items,'x'))){
         windowFinal.style.display = 'flex';
         document.querySelector('.final span').textContent = 'Draw'
         console.log('hello');
        }
     })
    }
   })
}
render();
function checkRow (rowArr,letter)
{
 for(let i=0; i<3; i++){
  if(rowArr[i] != letter){
   return false
  }
 }
 return true
}
function checkColumn (board,colIndex,letter){
 for (let i=0; i<3; i++){
  if(board[i][colIndex] != letter){
   return false
  }
 }
 return true
}
function winner (board,letter){
 let rowWins = checkRow(board[0],letter) ||
 checkRow(board[1],letter) ||
 checkRow(board[2],letter);
 let colwin = checkColumn(board,0,letter) ||
 checkColumn(board,1,letter) ||
 checkColumn(board,2,letter);
 let winLeftToRight = (items[0][0] == letter &&items[1][1] == letter &&items[2][2] == letter )
 let winRightToLeft =  (items[0][2] == letter &&items[1][1] == letter &&items[2][0] == letter )
 return rowWins || colwin || winLeftToRight || winRightToLeft
}
document.querySelector('.final button').addEventListener('click',()=>{
  count=0;
  play = false;
  items =  [
    ['*','*','*'],
    ['*','*','*'],
    ['*','*','*'],
   ];
  box.textContent = ''
  render();
  windowFinal.style.display = 'none'
})