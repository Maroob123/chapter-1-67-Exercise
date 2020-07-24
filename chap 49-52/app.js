var modal = document.getElementById("id01");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
    var pera = "Seylani Welfare International Trust is a Pakistani charity focusing primarily on feeding the homeless. It was established in May 1999 and is headquartered at Bahadurabad,Karachi,PAkistan.<br> It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri. With an estimated monthly expenditure of PAkistani Rupees above 30 million, Seylani Trust, provides food twice its centers(generally known as Dastar-Khawan), most of them are serving in karachi in April, 2011 with the help of members of Karachi bussiness community."
    document.getElementById("read").innerHTML = pera;
}

var count =1;
function addinfo(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var clas = document.getElementById("cl").value;
    var table = document.getElementById("mynewTable");
    var coun = table.rows.length;
    var row = table.insertRow(coun);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 =row.insertCell(5);
    cell1.innerHTML=count;
    cell2.innerHTML=fname;
    cell3.innerHTML=lname;
    cell4.innerHTML=clas;
    cell5.innerHTML="<button onclick='deleteRow(this);'>Delete</button>"
    cell6.innerHTML="<button onclick='letschange();'>Modify</button>"
    count++;
}
function letschange(){
    var inde =prompt("Enter index");
    inde=Number(inde);
function modify(inde){
    var fn = prompt("Enter first Name");
    var ln =prompt("Enter LAst name");
    var cls =prompt("Enter class ");
    // var x = document.getElementById("mynewTable");
    document.getElementById("mynewTable").rows[inde].cells[1].innerHTML=fn;
    document.getElementById("mynewTable").rows[inde].cells[2].innerHTML=ln;
    document.getElementById("mynewTable").rows[inde].cells[3].innerHTML=cls;
}
modify(inde);
}

function deleteRow(r)
{
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mynewTable").deleteRow(i);
}