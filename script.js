let food, foodPrice, drink, drinkPrice, dessert, dessertPrice;

function selectFood(foodBox) {

    const selectedFood =  document
        .querySelector(".food")
        .querySelector(".selected-box");

    if (selectedFood !== null) {
        selectedFood.classList.remove("selected-box");
        selectedFood.children[4].classList.add("hidden");
    }

    foodBox.classList.add("selected-box");
    foodBox.children[4].classList.remove("hidden");

    food = foodBox.children[1].innerHTML;
    foodPrice = foodBox.children[3].innerHTML;
    
    order();
}

function selectDrink(drinkBox) {

    const selectedDrink =  document
        .querySelector(".drink")
        .querySelector(".selected-box");

    if (selectedDrink !== null) {
        selectedDrink.classList.remove("selected-box");
        selectedDrink.children[4].classList.add("hidden");
    }

    drinkBox.classList.add("selected-box");
    drinkBox.children[4].classList.remove("hidden");

    drink = drinkBox.children[1].innerHTML;
    drinkPrice = drinkBox.children[3].innerHTML;
    
    order();
}

function selectDessert(dessertBox) {

    const selectedDessert =  document
        .querySelector(".dessert")
        .querySelector(".selected-box");

    if (selectedDessert !== null) {
        selectedDessert.classList.remove("selected-box");
        selectedDessert.children[4].classList.add("hidden");
    }

    dessertBox.classList.add("selected-box");
    dessertBox.children[4].classList.remove("hidden");

    dessert = dessertBox.children[1].innerHTML;
    dessertPrice = dessertBox.children[3].innerHTML;
    
    order();
}

function order() {

    if ( food && drink && dessert) {
        const disabledButton = document.querySelector("button");
        disabledButton.removeAttribute("disabled");
        disabledButton.innerHTML = "Fechar Pedido";
        disabledButton.style.backgroundColor = "#32B72F";
    }

}

function whatsapp() {
    let price = 
        parseFloat(foodPrice.replace("R$ ", "").replace(",", ".")) 
        + parseFloat(drinkPrice.replace("R$ ", "").replace(",", ".")) 
        + parseFloat(dessertPrice.replace("R$ ", "").replace(",", "."));
    price = price.toFixed(2).replace(".", ",")
    let name = prompt("Qual o seu nome?");
    let adress = prompt("Qual o endereço de entrega?");

    let orderText = 
        `Olá, gostaria de fazer o pedido: 
            - Prato: ${food}
            - Bebida: ${drink}
            - Sobremesa: ${dessert}
        Total: R$ ${price}
        
        Nome: ${name}
        Endereço: ${adress}`;
        
    encodedOrderText = encodeURIComponent(orderText);

    let link = `https://wa.me/5532984097756?text=${encodedOrderText}`;

    window.open(link);

}