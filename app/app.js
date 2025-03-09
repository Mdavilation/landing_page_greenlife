document.addEventListener("DOMContentLoaded", function () {
    const materialInput = document.querySelector(".material");
    const cantidadInput = document.querySelector(".cantidad");
    const addButton = document.querySelector(".add-btn");
    const itemList = document.getElementById("item-list");
    const totalAmount = document.getElementById("total-amount");
    const facturaNumber = document.getElementById("factura-number");

    let items = JSON.parse(localStorage.getItem("items")) || [];
    let factura = localStorage.getItem("factura") || Math.floor(Math.random() * 10000);
    localStorage.setItem("factura", factura);
    facturaNumber.textContent = factura;
    function renderItems() {
        itemList.innerHTML = "";
        let total = 0;
        items.forEach((item, index) => {
            const li = document.createElement("li");
            li.classList.add("item-entry");
            li.innerHTML = `<span class="item-name">${item.material}</span>  
                            <span class="item-quantity">${item.cantidad}</span> 
                            <button class="delete-btn" data-index="${index}">X</button>`;
            itemList.appendChild(li);
            total += parseInt(item.cantidad, 10);
        });
        totalAmount.textContent = total;
        localStorage.setItem("items", JSON.stringify(items));
    }
});