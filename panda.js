// all h1 tag color change
const heading2Color = document.getElementsByTagName('h1');
// console.log(heading2Color);
for(const heading of heading2Color){
  heading.style.color='lightblue';
}

// bagpack background color change
const bagpack = document.getElementById('bagpack');
bagpack.style.backgroundColor='tomato';

// all card class name set border redius 
const cards=document.getElementsByClassName('card');
// console.log(cards);
for(const card of cards){
 card.style.borderRadius='30px'; 
}

// function for console.log
document.getElementById('panda');
function panda(){
  console.log('you clicked on panda');
}

// when clicked on buy now button the card will be remove
const btns = document.getElementsByClassName('btn');
for(const btn of btns){
 btn.addEventListener('click',function(event){
  event.target.parentNode.parentNode.remove(event.target);
 }) 
}

// when write submit the button are visabled
document.getElementById('text-input').addEventListener('keyup',function(event){
  const text=event.target.value;
  const submitButton=document.getElementById('submit-btn');
  if(text==='email'){
    submitButton.removeAttribute('disabled');
  }
  else{
    submitButton.setAttribute('disabled',true)
  }
})


//image change when mouse enter
document.getElementById('tv').addEventListener('mouseenter',function(){
  document.getElementById('tv').src='./images/banner-images/tv.png';
})

// lets er asepase kono khali jaygay double click korle sekhaner kono ekta color change hobe
document.getElementById('empty-click').addEventListener('click',function(){
  document.getElementById('empty-click').style.backgroundColor='tomato';
})