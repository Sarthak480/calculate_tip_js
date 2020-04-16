document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";


document.getElementById("calculate").onclick = function() {
  calculateTip();

};


function calculateTip(){
	var billAmt=document.getElementById("billamt").value;
	var ServiceQual=document.getElementById("serviceQual").value;
	var numOfPeople=document.getElementById("peopleamt").value;

	if(billAmt==="" || ServiceQual===0){
		alert("Please enter values");
    	return;
	}
	if(numOfPeople==="" || numOfPeople<=1){
		numOfPeople=1;
		document.getElementById("each").style.display="none";
	}
	else{
		document.getElementById("each").style.display="block";
	}
	var total=(billAmt* ServiceQual)/numOfPeople;
	total=Math.round(total*100)/100;
	total=total.toFixed(2);
	document.getElementById("totalTip").style.display = "block";
  	document.getElementById("tip").innerHTML = total;

}