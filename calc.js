function count(id, num){
    if (id != "" && num != 0) {
        value = document.getElementById(id)
        value.innerHTML = parseInt(value.textContent)+num
    }

    cost = (parseInt(document.getElementById("pudding").textContent) * 300) + (parseInt(document.getElementById("cider_can").textContent) * 300)
    if(parseInt(document.getElementById("pudding").textContent) < 3){
        cost += (document.getElementById("take_out").checked * 50) 
    }
    else{
        cost += (document.getElementById("take_out").checked * 100)
    }
    document.getElementById("cost_display"). textContent = "¥" + cost
}

function send(){
    pudding = document.getElementById("pudding").textContent
    takeout = document.getElementById("take_out").checked
    cidercan = document.getElementById("cider_can").textContent
    
    fetch("https://script.google.com/macros/s/AKfycbwi_jcWyZl6tGOe-sigfRDPIwde_jatPjlbKjSW_Iqf7i3nV1vHCe9TWiu-EnbEsWEE/exec?pudding="+pudding+"&takeout="+takeout+"&cidercan="+cidercan)
    document.getElementById("cost_display").textContent = "¥0"
    document.getElementById("pudding").textContent = "0"
    document.getElementById("take_out").checked = false
    document.getElementById("cider_can").textContent = "0"
}
