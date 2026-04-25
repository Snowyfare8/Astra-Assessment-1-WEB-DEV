// Function to calculate total price of petrol purchased
function calculateTotal () {
    let c = Number(document.getElementById("cost").value); // Cost of petrol per litre, default 1.72
    let n = Number(document.getElementById("number").value); // Number of litres purchased
    let total = c * n; 
    document.getElementById("total").innerText = total;
}