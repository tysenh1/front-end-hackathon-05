document.addEventListener("DOMContentLoaded", addButton);

function addButton(){
    const button = document.createElement("button");
    button.innerHTML =  "Add to Cart";
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

addColumn();


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

