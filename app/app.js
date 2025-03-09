document.addEventListener("DOMContentLoaded", function () {
    const materialSelect = document.getElementById("material");
    const cantidadInput = document.getElementById("cantidad");
    const addButton = document.getElementById("add-btn");
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
            li.innerHTML = `<span id="material-spn">${item.material}</span><span id="cantidad-spn">${item.cantidad}</span> 
                            <button class="delete-btn" data-index="${index}">X</button>`;
            itemList.appendChild(li);
            total += parseInt(item.cantidad, 10);
        });
        totalAmount.textContent = total;
        localStorage.setItem("items", JSON.stringify(items));
    }

    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        const material = materialSelect.value.trim();
        const cantidad = cantidadInput.value.trim();
        
        if (material && cantidad && !isNaN(cantidad) && cantidad > 0) {
            items.push({ material, cantidad });
            renderItems();
            materialSelect.value = "";
            cantidadInput.value = "";
        }
    });

    itemList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.getAttribute("data-index");
            items.splice(index, 1);
            renderItems();
        }
    });

    renderItems();
});
