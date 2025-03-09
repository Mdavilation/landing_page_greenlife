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
});