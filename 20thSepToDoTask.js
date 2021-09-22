function calculateTip(){
    var billAmt = Number(document.getElementById("billamt").value);
    var tipPercent = Number(document.getElementById("tipPercent").value);
    var numOfPeople = Number(document.getElementById("peopleamt").value);

    //validate input
    if (billAmt === "" || tipPercent == 0) 
    {
        alert("Please enter values");
        return;
    }

    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        //document.getElementById("each").style.display = "none";
    } 
    //else {
    //    document.getElementById("each").style.display = "block";
    // }

    //Calculate tip
    var tip = billAmt * tipPercent;
    var total = (tip+billAmt) / numOfPeople;
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
    
}

