let card__mujer = document.getElementById("card__mujer");
let card__hombre = document.getElementById("card__hombre");
let card__niña = document.getElementById("card__niña");
let card__accesorios = document.getElementById("card__accesorios");
let product = document.getElementById("product");

card__mujer.addEventListener("mouseover", function(){
    card__mujer.classList.add("cardZoom");
    card__mujer.classList.remove("card__mujer");
});

card__mujer.addEventListener("mouseout", function(){
    card__mujer.classList.remove("cardZoom");
    card__mujer.classList.add("card__mujer");
});

card__hombre.addEventListener("mouseover", function(){
    card__hombre.classList.add("cardZoom");
    card__hombre.classList.remove("card__hombre");
});

card__hombre.addEventListener("mouseout", function(){
    card__hombre.classList.remove("cardZoom");
    card__hombre.classList.add("card__hombre");
});

card__niña.addEventListener("mouseover", function(){
    card__niña.classList.add("cardZoom");
    card__niña.classList.remove("card__niña");
});

card__niña.addEventListener("mouseout", function(){
    card__niña.classList.remove("cardZoom");
    card__niña.classList.add("card__niña");
});

card__accesorios.addEventListener("mouseover", function(){
    card__accesorios.classList.add("cardZoom");
    card__accesorios.classList.remove("card__accesorios");
});

card__accesorios.addEventListener("mouseout", function(){
    card__accesorios.classList.remove("cardZoom");
    card__accesorios.classList.add("card__accesorios");
});

product.addEventListener("mouseover", function(){
    product.classList.add("cardZoom1");
    product.classList.remove("product");
});

product.addEventListener("mouseout", function(){
    product.classList.remove("cardZoom1");
    product.classList.add("product");
});