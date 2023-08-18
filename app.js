const drinks = {

    mango: {
        flavor: "Mango Tea",
    },

    cherry: {
        flavor: "Cherry Tea",

    },

    raspberry: {
        flavor: "Raspberry Tea",

    },

    strawberry: {
        flavor: "Strawberry Tea",

    },

};

function update(){
    document.getElementById("drink-flavor").textContent = drinks.cherry.flavor;
}

const update = document.getElementsByClassName("update");
update.addEventListener("click", changeName);
