function showTip(){
    let input = document.getElementById("amount").value;
    let tipPercent = document.getElementById("tip").value;
    let total = tipPercent / 100;

    if(input <= 0 || tipPercent <= 0 ){
        if(input <= 0){
            document.getElementById("amountinfo").textContent = ("Input valid amount")
            document.getElementById("amountinfo").style.color = ("red")
        }
        else{
            document.getElementById("amountinfo").textContent = ("");
        }
        if(tipPercent <= 0){
            document.getElementById("percentinfo").textContent = ("Input valid %")
            document.getElementById("percentinfo").style.color = ("red")
        }
        else{
            document.getElementById("percentinfo").textContent = ("");
        }

    }
    else{
        let totalTip = input * total;
        document.getElementById("ans").textContent = (`Your tip is ${totalTip.toFixed(2)}`);
    };


}