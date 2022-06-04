let a = document.querySelector('form');
let x = document.getElementById('fname');

a.addEventListener('submit',function(e){
    if(x.value ==""){
        alert("enter name please ");
        e.preventDefault();
    }
})