'use strict'

const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const btn = document.querySelector('.showAge');
const resultYear = document.querySelector('.yearsAge');
const resultMonth = document.querySelector('.monthAge');
const resultDay = document.querySelector('.dayAge');

const dayValue = day.value;
const monthValue = month.value;
const yearValue = year.value;

btn.addEventListener('click', function(){

    if(dayValue === '' && monthValue==='' && yearValue===''){
        alert('Please enter your birhday correctly.');
    }else{
        ageCalc();
    }

    
})

const ageCalc = function(){
    const currentDate = new Date();
    const currDay = Math.abs(currentDate.getDay() - dayValue);
    const currMonth = currentDate.getMonth() - monthValue ;
    const currYear = currentDate.getFullYear() - yearValue ;
 

    // console.log(currentDate.getDay());
    resultDay.textContent = currDay;
    resultDay.style.marginRight = '10px';
    resultDay.style.color= "var(--purple)";

    resultMonth.textContent = currMonth;
    resultMonth.style.marginRight = '10px';
    resultMonth.style.color= "var(--purple)";

    resultYear.textContent = currYear;
    resultYear.style.marginRight = '10px';
    resultYear.style.color= "var(--purple)";


}