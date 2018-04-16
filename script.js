var submitForm = function () {
    if (document.getElementById("user").value.length < 5){
        var txt = document.createTextNode("The supplied username is too short, try again using 5 or more characters.");
        var div = document.createElement("div");
        div.appendChild(txt);
        form1.appendChild(div);
        div.setAttribute("id","divid");
    }
    else {
        alert("Thank you " + document.getElementById("user").value);
        //form1.removeChild(divid);
    }
}

var submitPass = function () {
    if (document.getElementById("pass").value.length < 6){
        var txt = document.createTextNode("The supplied password is too short, try again using 6 or more characters.");
        var div = document.createElement("div");
        div.appendChild(txt);
        form1.appendChild(div);
        div.setAttribute("id","divid");
}
    else {
        alert("Thank you password is long enough!");
        //form1.removeChild(divid2);
    }
}

var passwordSame = function () {
    if (document.getElementById("pass").value !== document.getElementById("pass2").value) {
        var txt = document.createTextNode("Passwords are not the same.");
        var div = document.createElement("div");
        div.appendChild(txt);
        form1.appendChild(div);
        div.setAttribute("id","divid");
    }
}

var country = function () {
    if (document.getElementById("country2").value !== "USA" || document.getElementById("country2").value !== "Israel"){
        var txt = document.createTextNode("Wrong Country!");
        var div = document.createElement("div");
        div.appendChild(txt);
        form1.appendChild(div);
        div.setAttribute("id","divid");
    }
}

var phone = function () {
    if (document.getElementById("phone2").value.length < 15) {
        var txt = document.createTextNode("The supplied phone number is too short, try again using 15 or more characters.");
        var div = document.createElement("div");
        div.appendChild(txt);
        form1.appendChild(div);
        div.setAttribute("id","divid");
    }
}

var resetDiv = function (){
    form1.removeChild(divid);
}

var total = function () {
    submitForm();
    submitPass();
    passwordSame();
    country();
    phone ();
    resetDiv ();
}