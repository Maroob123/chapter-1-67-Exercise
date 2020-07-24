function show1(){
    var array =[];
    document.getElementById('show1').innerHTML="var array =[];"
}
function show2(){
    var array2 = new Array();
    document.getElementById('show2').innerHTML="var array2 = new Array();"
}
function show3(){
    var str = ["Seylani","IT","Tranning","And","Job","Creation","Program"];
    document.getElementById('show3').innerHTML='var str = ["Seylani","IT","Tranning","And","Job","Creation","Program"];';
}
function show4(){
    var num = [1,2,34,57,7,8,6];
    document.getElementById('show4').innerHTML="var num = [1,2,34,57,7,8,6];";
}
function show5(){
    var bool = [true,false];
    document.getElementById('show5').innerHTML="var bool = [true,false]";
}
function show6(){
    var mixed = ["Seylani",786,true,];
    document.getElementById('show6').innerHTML='var mixed = ["Seylani",786,true,];';
}
function show7(){
    var sty = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
    for(var i =0;i<=sty.length;i++){

    }
}
function show8(){
    var std_names =["Michael","John","Tony"];
    var scores =[230,230,480];
    var std1 ="Score of "+std_names[0]+" is "+scores[0]+"percentage"+((scores[0]/500)*100)+"%";
    var std2 ="Score of "+std_names[1]+" is "+scores[1]+"percentage"+((scores[1]/500)*100)+"%";
    var std3 ="Score of "+std_names[2]+" is "+scores[2]+"percentage"+((scores[2]/500)*100)+"%";
    document.getElementById('show8').innerHTML=std1+"<br>"+std2+"<br>"+std3;
}
var colors = [];
function show91(){
    var beg_col= prompt("Enter Color name to add in the begining of array")
    colors.unshift(beg_col);
    document.getElementById('show91').innerHTML="Updated array is = "+colors;
}
function show92(){
    var end_col= prompt("Enter Color name to add in the end of array")
    colors.push(end_col);
    document.getElementById('show92').innerHTML="Updated array is = "+colors;
}
function show93(){
    var co1 = prompt("Enter first color");
    var co2 = prompt("Enter second color");
    colors.unshift(co1,co2);
    document.getElementById('show93').innerHTML="Updated array is = "+colors;
}
function show94(){
    colors.shift();
    document.getElementById('show94').innerHTML="Updated array is = "+colors;
}
function show95(){
    colors.pop();
    document.getElementById('show95').innerHTML="Updated array is = "+colors;
}
function show96(){
    var indEX = Number(prompt("Enter index number where you want to add color name"));
    var choice = prompt("Enter Color name");
    colors.splice(indEX,0,choice);
    document.getElementById('show96').innerHTML="Updated array is = "+colors;
}
function show97(){
    var no = Number(prompt("Enter index number that you want to delete"));
    var sy = Number(prompt("Enter number of colors"));
    colors.splice(no,sy);
    document.getElementById('show97').innerHTML="Updated array is = "+colors;

}
function show10(){
    var rep = [320,230,480,120];
    var srep = rep.slice(0,4);
    srep.sort()
    document.getElementById('show10').innerHTML="Scores of students : "+rep+"<br>Ordered score of students : "+srep;
}
function show11(){
    var citiesList = ["Makkah","Madina","Karachi","Islamabad","Quetta","Peshawer"]
    var thCities = citiesList.slice(0,3);
    document.getElementById('show11').innerHTML="Thi inisialized array is = "+citiesList+"<br>The minimized array is = "+thCities;
}
function show12(){
    var arr = ["This ", " is ", " my ", " cat "];
    var combine = arr.join(" ");
    document.getElementById('show12').innerHTML=combine;
}
function show13(){
    var hardware = ["keyboard","Mouse","Printer","Monitor"]
    var fifo = "";
    for(var i = 0 ; i<hardware.length;i++){
        fifo = fifo + "output<br>"+hardware[i]+"<br>";
    }
    document.getElementById('show13').innerHTML="Devices<br>"+ hardware+"<br><br>"+fifo;
}
function show14(){
    
    var hardware = ["keyboard","Mouse","Printer","Monitor"]
    var lifo = "";
    for(var j = hardware.length-1 ; j>=0 ; j--){
        lifo = lifo + "output<br>"+hardware[j]+"<br>";
    }
    document.getElementById('show14').innerHTML="Devices<br>"+ hardware+"<br><br>"+lifo;
}


    var up = document.getElementById('geeks'); 
        var down = document.getElementById('gfg'); 
        var select = document.getElementById("arr"); 
        var elmts = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
        up.innerHTML = "Click on the button to " 
                    + "perform the operation"+ 
                    ".<br>Array - [" + elmts + "]"; 
  
        // Main function 
        function show15() { 
            for (var i = 0; i < elmts.length; i++) { 
                var optn = elmts[i]; 
                var el = document.createElement("option"); 
                el.textContent = optn; 
                el.value = optn; 
                select.appendChild(el); 
            } 
            down.innerHTML = "Elements Added"; 
        } 