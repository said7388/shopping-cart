//  Function for memory extra cost.
function memoryCost(price){
    document.getElementById("memory-cost").innerText = price;
    updateSubTotal();
}

// Function for Delivery extra charge.
function deliveryCost(cost){
    document.getElementById("delivery-cost").innerText = cost;
    updateSubTotal();
}

// Function for extra SSD price
function storageCost(cost){
    document.getElementById("storage-cost").innerText = cost;
    updateSubTotal();
}

// Update subtotsal
function updateSubTotal (){
    const storageCostPrice = parseInt(document.getElementById("storage-cost").innerText);
    const memoryCostPrice = parseInt(document.getElementById("memory-cost").innerText);
    const deliveryCostPrice = parseInt(document.getElementById("delivery-cost").innerText);
    const bestPrice = parseInt(document.getElementById("best-price").innerText);
    const subTotalCost = storageCostPrice + memoryCostPrice + deliveryCostPrice + bestPrice;
    document.getElementById("sub-total").innerText = subTotalCost;
    document.getElementById("totalCost").innerText = subTotalCost;
    return subTotalCost;
}

// Update total amount after using discount
document.getElementById("pomo-button").addEventListener("click", function(){
    const pomoCode = document.getElementById("pomo-input").value;
    const subTotal = updateSubTotal();
    console.log(subTotal);
    if (pomoCode == "stevekaku"){
        const pomoDiscount = subTotal - (subTotal/5);
        document.getElementById("totalCost").innerText = pomoDiscount;
        document.getElementById("pomo-input").value = '';
    }
})