function validate(){
    let a = document.forms["InscriForm"]["fname"].value;
    let b = document.forms["InscriForm"]["lname"].value;
    let c = document.forms["InscriForm"]["Age"].value;
    let d = document.forms["InscriForm"]["Email"].value;
    let e = document.forms["InscriForm"]["Comment"].value;
    let f = document.forms["InscriForm"]["Sex"].value;
    if (a ==""){
        alert("Enter your first name please");
        return false;
    }
    if (b ==""){
        alert("Enter your last name please");
        return false;
    }
    if (c ==""){
        alert("Enter your age please");
        return false;
    }
    if (d ==""){
        alert("Enter your email please");
        return false;
    }
    if (e ==""){
        alert("Enter some comments please");
        return false;
    }
    if (f ==""){
        alert("Enter your sex please");
        return false;
    }
}