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
        form1.removeChild(divid);
    }
}