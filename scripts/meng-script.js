document.addEventListener("DOMContentLoaded", function() {
    addButton();
    addColumn(); 
    hiddenFeedback(); 
    hideError();
})

function addButton(){
    const pricerows = document.querySelectorAll('.mochaprice table tr');
    for (let i=1; i < pricerows.length; i++) {
        let price = pricerows[i].getElementsByTagName('td')[2];
        const button = document.createElement("button");
        button.innerHTML =  "Buy";
        price.appendChild(document.createTextNode('  '));
        price.appendChild(button);

        button.addEventListener('click',function(){
            updateOrder(pricerows[i]);
        })
    }
}

function addColumn() {
    // add new head: order
    let newhead = document.createElement('th');
    let head = document.querySelector('thead tr');
    head.appendChild(newhead)
    newhead.innerHTML = 'Order'
    // add new head: totalprice
    let totalprice = document.createElement('th');
    head.appendChild(totalprice);
    totalprice.innerHTML = 'Total Price'

    // add item into order and total price
    const pricerows = document.querySelectorAll('.mochaprice tbody tr');
    for(let i =0; i<pricerows.length; i++) {
        let newdata = document.createElement('td');
        pricerows[i].appendChild(newdata);
        newdata.innerHTML = 'None'

        let newtotalprice = document.createElement('td');
        pricerows[i].appendChild(newtotalprice)
        newtotalprice.innerHTML = '$'
    }   
}




function updateOrder(row) {
    let orderCell = row.querySelectorAll('.mochaprice td')[3];
    orderCell.innerHTML = (parseInt(orderCell.innerHTML) || 0) + 1;
    orderAmount = orderCell.innerHTML;
    updatePrice(row, orderAmount);
}

function updatePrice(row, orderAmount) {
    let totalPriceCell = row.querySelectorAll('.mochaprice td')[4];
    let priceCell = row.querySelectorAll('.mochaprice td')[2];
    let priceValue = parseFloat(priceCell.innerText.replace('$',''))
    let totalPrice = priceValue * orderAmount
    totalPriceCell.innerHTML ='$' + totalPrice.toFixed(2);
}

function hiddenFeedback(){
    document.getElementById("cafeform").style.display="none"
}


document.getElementById("cfeedback").addEventListener("click", showFeedback)

function showFeedback(){
    if(document.getElementById("cafeform").style.display==="none"){
        document.getElementById("cafeform").style.display="block";
        document.getElementById("feedbackMessage").style.display="block";
        document.getElementById("feedbackMessage").innerText = "Click again to close feedback"
        document.getElementById("cfeedback").insertAdjacentElement("afterend", text)
    }
    else{
        document.getElementById("cafeform").style.display="none";
        document.getElementById("feedbackMessage").style.display="none";
    }
}

function hideError(){
    const cafeerror = document.getElementsByClassName("cafeerror")
    for(i=0; i<cafeerror.length; i++ )
    cafeerror[i].style.display="none";
}

document.getElementById("cafeform").addEventListener("submit", validate);
function validate(e){
    if (showErrors()){
        e.preventDefault();
        return false
    };
    return true;
}

function showErrors(){
    let errorFlag=false;
    if(!radioSelect()){
        document.getElementById("rate_error").style.display = "block"
        errorFlag=true
    }
    if(!dropdownSelect()){
        document.getElementById("product_error").style.display = "block"
        errorFlag=true
    }
    return errorFlag
}

function radioSelect(){
    const rate = document.getElementsByName("caferate")
    for(i=0; i<rate.length; i++){
        if(rate[i].checked){
            return true;
        }
    }
    return false
}

function dropdownSelect(){
    let product = document.getElementById("cafeproduct").value.trim()
    return product !== ""
}

function clearErrors(errorId){
    let error = document.getElementById(errorId);
    error.style.display = "none";
}

document.getElementById("caferadio").addEventListener("input", function(){clearErrors("rate_error")})
document.getElementById("cafeproduct").addEventListener("input", function(){clearErrors("product_error")})

//hackthon5: api
document.getElementById("randomrecipe").style.display = "none"

function showRecipe(){
    if(document.getElementById("randomrecipe").style.display === "none"){
        document.getElementById("randomrecipe").style.display = "block"
    }
    else{
        document.getElementById("randomrecipe").style.display = "none"
    }
}
document.getElementById("apibutton").addEventListener("click", showRecipe)

