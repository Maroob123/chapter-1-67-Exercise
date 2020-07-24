var ma = document.getElementById("main-content");
var c = ma.children;
function chill (){
    var txt = "";
    for(var i=0;i<c.length;i++){
        txt = txt + c[i].nodeName + "<br>";
    }
    document.getElementById("show").innerHTML = txt;
}

function chill2 (){
    var so="";
    for(var j = 1;j<=ma.children.length;j++){
        var p = ma.childNodes[j];
        so = so + p.innerHTML + "<br>";
    }
    document.getElementById("so2").innerHTML = so;
}
 function fname(){
     var fname = ma.childNodes[1].innerHTML;
    document.getElementById("first-name").value = fname;
 }

 function lnameEmail(){
    var lname = ma.childNodes[2].innerHTML;
    var eMAil = ma.childNodes[3].innerHTML;
    document.getElementById("last-name").value = lname;
    document.getElementById("email").value = eMAil;
 }




//  second Exercise


function show(){
    var ty = document.getElementById("form-content").nodeType;
    document.getElementById("sho").innerHTML =ty;
}

function show1(){
    var las = document.getElementById("lastName");
    document.getElementById("sh1").innerHTML ="Node type of id Last name is "+las.nodeType+"<br>The length of its childs are "+las.children.length

}

function show2(){
        var node = document.createElement("P"); 
        var textnode =  
            document.createTextNode("A great person"); 
        node.appendChild(textnode); 
        document.getElementById("lastName").appendChild(node); 
}

function show3(){
    var f = document.getElementById("main-content").firstElementChild.innerHTML;
    var e = document.getElementById("main-content").lastElementChild.innerHTML;
    document.getElementById("sh2").innerHTML="first Child = " +f +"<br>last child = "+e;
}

function show4(){
    var s = document.getElementById("lastName").nextElementSibling.innerHTML;
    var m = document.getElementById("lastName").previousElementSibling.innerHTML;
    document.getElementById("sh3").innerHTML ="Next Sibling ="+s +"<br>"+"Previous Sibling"+m;
   
}

function show5(){
     var siii = document.getElementById("email").parentNode.innerHTML;
     var nn=document.getElementById("email").nodeType;
     document.getElementById("sh4").innerHTML =siii +"<br>"+"The nodetype is "+nn;
}