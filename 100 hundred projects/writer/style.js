//new class
class TypeWriter {
  constructor(txtElement, words, wait) {
    // old constructer class 
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    //this.wait = parseInt(wait,10);
    this.wait = wait;
    this.type();
    this.isDeleting = false;
  }
  type() {
    //اشارة % تعني باقي قسمة القيمتين 
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];
    //console.log(TypeWriter.prototype.isDeleting);
    if (this.isDeleting) {
      //remove char
      //substring !!!
      this.txt = fullTxt.substring(0, this.txt.length - 1);

    }

    else {
      //remove char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    console.log(this.txt);
    this.txtElement.innerHTML = `<span class = "txt"> ${this.txt}</span>`;
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded',init);
function init()
{
  const txtElement = document.getElementById('xs');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement,words,wait );
}
// old class
/*const TypeWriter = function (txtElement,words,wait )
{
  // old constructer class 
  this.txtElement =txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex =0;
  //this.wait = parseInt(wait,10);
  this.wait = wait;
  this.type();
  this.isDeleting = false;
}
TypeWriter.prototype.type = function()
{
  //اشارة % تعني باقي قسمة القيمتين 
  const current = this.wordIndex % this.words.length;

  const fullTxt = this.words[current];
    //console.log(TypeWriter.prototype.isDeleting);

    if(this.isDeleting)
    {
      //remove char
      //substring !!!
      this.txt =fullTxt.substring(0,this.txt.length -1)
      
    }
    else
    {
      //remove char
      this.txt =fullTxt.substring(0,this.txt.length +1)
    }
    console.log(this.txt);
    this.txtElement.innerHTML = `<span class = "txt"> ${ this.txt}</span>`;
    let typeSpeed = 300;
    if(this.isDeleting)
    {
      typeSpeed/=2;
    }
    if(!this.isDeleting && this.txt === fullTxt)
    {
      typeSpeed = this.wait;
      this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ""){
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
  setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded',init);
function init()
{
  const txtElement = document.getElementById('xs');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement,words,wait );
}
*/
