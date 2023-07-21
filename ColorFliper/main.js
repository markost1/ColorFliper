let colorContainer = document.getElementsByClassName('container');
let colorBtn = document.getElementsByClassName('btn');
let colorName = document.getElementsByClassName('para'); 
let colorArray = ['red','green','blue','pink','yellow','tomato','brown','orange','black','gold','silver'];

let RandomColor = () => {
    
}

colorBtn[0].addEventListener('click',()=>{
    
    let color = Math.floor(Math.random() * (colorArray.length-1));
   
    colorContainer[0].style.backgroundColor = colorArray[color];
    colorName[0].innerHTML = colorArray[color].toLocaleUpperCase()
    colorName[0].style.color = colorArray[color];
    
})