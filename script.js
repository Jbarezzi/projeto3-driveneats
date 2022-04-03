let food, drink, dessert;

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

    food = foodBox;
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

    drink = drinkBox;
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

    dessert = dessertBox;
}

function order() {
    if ( food && drink && dessert) {
        const disabledButton = document.querySelector("button")
        disabledButton.toggleAttribute("disabled")
        alert("SIM")
    }
}