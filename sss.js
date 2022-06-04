let a = document.querySelector('.form');
//let x = document.getElementById('fname');

let lol = document.querySelectorAll('input');
let msg=document.querySelector('h2');


a.addEventListener('submit', function(e){
    try{

        var verif=true;

        lol.forEach(function(item){
            if(item.value=="")
            {
                e.preventDefault()
                verif=false
                msg.textContent="error"
                throw BreakException;
            }
        })

    }catch(e){

    }
    if(verif)
    this.submit()
})