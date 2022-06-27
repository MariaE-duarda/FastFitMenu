// const btnjap = document.querySelector("#japanese")
// const btnita = document.querySelector("#italian")
// const btnmex = document.querySelector("#mexican")
// const btnall = document.querySelector("#all")
// Items
const menu = [
    {
        id: 1,
        title: "Mousse de Maracujá",
        category: "sobremesas",
        price: 15.99,
        img: "./images/mousseMaracuja.jpg",
        desc: "Leite vegetal, leite de coco, xilitol, poupa de maracujá.",
    },
    {
        id: 2,
        title: "Pudim Fit",
        category: "sobremesas",
        price: 16.99,
        img: "./images/pudimFit.webp",
        desc: "Leite vegetal, leite de soja, ovo orgânico.",
    },
    {
        id: 3,
        title: "Sufle de banana",
        category: "sobremesas",
        price: 17.99,
        img: "./images/sufleBanana.jpg",
        desc: "Leite vegetal, canela, claras em neve.",
    },
    {
        id: 4,
        title: "Petit gâteau fit",
        category: "sobremesas",
        price: 26.99,
        img: "./images/PetitFit.jpg",
        desc: "Farinha de amêndoas, flavo de baunilha, açúcar demerara.",
    },
    {
        id: 5,
        title: "Crème Brûlée",
        category: "sobremesas",
        price: 26.99,
        img: "./images/cremeBrulee.jpg",
        desc: "Gema de ovos, leite de soja, essência de baunilha.",
    },
    {
        id: 6,
        title: "Bolo de Chuva fit",
        category: "sobremesas",
        price: 26.99,
        img: "./images/boloChuva.jpg",
        desc: "Leite de amêndoas, farinha sem glúten, cacau em pó.",
    },
    {
        id: 7,
        title: "Mousse de limão",
        category: "sobremesas",
        price: 26.99,
        img: "./images/mousseLimao.jpg",
        desc: "Leite vegetal, limão siciliano, flor de sal.",
    },
    {
        id: 8,
        title: "Sanduíche funcional",
        category: "pratos",
        price: 26.99,
        img: "./images/sanduicheFuncional.ashx",
        desc: "Pão integral, queijo vegetal, alface, rúcula.",
    },
    {
        id: 9,
        title: "Empadão Fit",
        category: "pratos",
        price: 26.99,
        img: "./images/empadaFit.webp",
        desc: "Creme de frango, farinha sem glúten, requeijão vegano, manteiga orgânica.",
    },
    {
        id: 10,
        title: "Omelete de carne",
        category: "pratos",
        price: 26.99,
        img: "./images/omeleteCarne.jpg",
        desc: "Ovos orgânicos, leite de soja, mistura de tempeiros.",
    },
    {
        id: 11,
        title: "Panqueca de frango",
        category: "pratos",
        price: 26.99,
        img: "./images/panquecaFrango.jpg",
        desc: "Leite vegetal, frango desfiado, milho-verde.",
    },
    {
        id: 12,
        title: "Pizza de frango",
        category: "pizzas",
        price: 26.99,
        img: "./images/pizzaFrango.jpg",
        desc: "Frango desfiado, queijo vegetal, fermento biológico.",
    },
    {
        id: 13,
        title: "Hambúguer Fit",
        category: "pratos",
        price: 26.99,
        img: "./images/hambuguerFit.webp",
        desc: "Porção sem glúten, hambúguer de carne, mistura de tempeiros.",
    },
    {
        id: 14,
        title: "Batata Assada",
        category: "pratos",
        price: 26.99,
        img: "./images/batataAssada.png",
        desc: "Batata, azeite, mistura de tempeiros, sal de rosa.",
    },
    {
        id: 15,
        title: "Croissant",
        category: "pratos",
        price: 26.99,
        img: "./images/croissant.webp",
        desc: "Pão sem glúten, azeitona fresca, peito de peru.",
    }
]

const main = document.querySelector("main")
const btns = document.querySelectorAll(".sections")

// Load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
})

// Filter items

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function (menuItem){
            // console.log(menuItem.category)
            if(category === menuItem.category){
               return menuItem 
            }
            
        })
        // console.log(menuCategory)
        if(category === "todos"){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory)
        }

    })
    
})


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div class="options" class="japanese">
        <img src=${item.img} alt="">
        <div class="text-content">
            <div class="title">
                <h2>${item.title}</h2>   
                <h2 class="price">R$${item.price}</h2> 
            </div>
            <hr>
            <p>${item.desc}
            </p>
        </div>
        </div>`
    
        })
        displayMenu = displayMenu.join("")
        main.innerHTML = displayMenu;
}