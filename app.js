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

const getUpdate = document.getElementsByClassName("update");
getUpdate.addEventListener("click", update);
