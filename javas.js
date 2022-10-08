const flight=document.getElementById('flight');
const check=document.getElementById('check');
const stat=document.getElementById('status');
const fli1=document.getElementById('fli1');
const fli2=document.getElementById('fli2');
const fli3=document.getElementById('fli3');


flight.addEventListener('click',()=>{
    flight.classList='nav-link active'
    fli1.classList='form-class'
    fli2.classList='form-class'
    check.classList='nav-link'
    stat.classList='nav-link'
    fli2.style.display="none";
    fli1.style.display="block"
    fli3.style.display="none";
});
check.addEventListener('click',()=>{
    check.classList='nav-link active'
    flight.classList='nav-link'
    stat.classList='nav-link'
    fli1.style.display="none";
    fli2.style.display="block"
    fli3.style.display="none";
});
stat.addEventListener('click',()=>{
    stat.classList='nav-link active'
    check.classList='nav-link'
    flight.classList='nav-link'
    fli1.style.display="none";
    fli2.style.display="none"
    fli3.style.display="block"
});