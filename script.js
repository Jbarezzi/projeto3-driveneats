function select() {
    const order = document.querySelector(".product");
    order.classList.toggle("selected-box");
    order.children[4].classList.toggle("hidden")
}