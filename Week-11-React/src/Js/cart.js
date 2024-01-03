function updateTable() {
    let cartItems = {};
    //Loads the cart from the JSON in device storage.
    if (localStorage.getItem("cart")) {
        try{
            cartItems = JSON.parse(localStorage.getItem("cart"));
        }
        catch{
            localStorage.clear();
            cartItems = JSON.parse(localStorage.getItem("cart"));
        }
        
    }

    let tablebody = document.getElementById("tbody");

    // Remove all rows from the table before adding new ones
    var rowCount = tablebody.rows.length; 
    var counter = 0;
    while(counter < rowCount){
        tablebody.deleteRow(rowCount[counter]);
        counter++;
    }

    //Fill the table with new data
    for (let id in cartItems) {
        let item = cartItems[id];

        let tr = document.createElement("tr")

        let name_thread = document.createElement("td")
        name_thread.textContent = item.name
        tr.appendChild(name_thread)

        let amount_thread = document.createElement("td");
        amount_thread.textContent = item.amount;
        tr.appendChild(amount_thread);

        let price_thread = document.createElement("td");
        price_thread.textContent = "€"+(item.price * item.amount);
        tr.appendChild(price_thread);

        tablebody.prepend(tr)

    }
    createsummary()
}

//creates a summary of the cart contents at the bottom of the table
function createsummary() {
    let totalprice = document.getElementById("totalprice");
    totalprice.textContent = "€" + localStorage.getItem("sum");
    let totalitems = document.getElementById("totalitems");
    totalitems.textContent = parseInt(localStorage.getItem("count")) + " Items";
}


export default updateTable;