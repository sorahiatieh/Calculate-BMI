const bmiResult=document.querySelector('#result');
const categorytElem=document.querySelector('#category');
const weightInput=document.getElementById('weight');
const heightInput=document.getElementById('height');
const weightVal=document.querySelector('#weight-val')
const heightVal=document.querySelector('#height-val')



function bmiCalculator(){
   let weightInputValue=weightInput.value
   let heightInputValue=heightInput.value

   weightVal.innerHTML=weightInputValue;
   heightVal.innerHTML=heightInputValue;

   let bmiValue=(weightInputValue/(Math.pow(heightInputValue/100 , 2))).toFixed(1)

   console.log(bmiValue)
   bmiResult.innerHTML=bmiValue;

   if(bmiValue < 18.5){
    categorytElem.innerHTML='Under Weight';
    bmiResult.style.color='#ffc44d'
   }else if(bmiValue >= 18.5 && bmiValue <24.9){
    categorytElem.innerHTML='Normal Weight';
    bmiResult.style.color='#0be881'
   }else if(bmiValue >= 25 && bmiValue < 29.9){
    categorytElem.innerHTML='Over Weight'
    bmiResult.style.color='#ff884d'
   }else{
    categorytElem.innerHTML='Obese!'
    bmiResult.style.color='#ff5e4d'
   }
 
}

weightInput.addEventListener('input',bmiCalculator)
heightInput.addEventListener('input',bmiCalculator)