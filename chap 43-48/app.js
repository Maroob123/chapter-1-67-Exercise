function deleteRow(r)
{
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);
}
function mouseOverImage(){
    document.getElementById("change").src="images/macbook-air-13-inc-siyah-sert-kilif.jpg";
}
function mouseOutImage(){
    document.getElementById("change").src="images/surface-pro-6-hero-aqua.jpg";
}
var k = document.getElementById("output").value;
k = Number(k);
function increment(){
    ++k;
    document.getElementById("output").innerHTML=k;

}
function decrement(){
    --k;
    document.getElementById("output").innerHTML=k;


}