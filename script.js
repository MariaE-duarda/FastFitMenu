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
        price: 8,
        img: "./images/mousseMaracuja.jpg",
        desc: "Leite vegetal, leite de coco, xilitol, poupa de maracujá.",
    },
    {
        id: 2,
        title: "Pudim Fit",
        category: "sobremesas",
        price: 13,
        img: "./images/pudimFit.webp",
        desc: "Leite vegetal, leite de soja, ovo orgânico.",
    },
    {
        id: 3,
        title: "Sufle de banana",
        category: "sobremesas",
        price: 11,
        img: "./images/sufleBanana.jpg",
        desc: "Leite vegetal, canela, claras em neve.",
    },
    {
        id: 4,
        title: "Petit gâteau fit",
        category: "sobremesas",
        price: 15,
        img: "./images/PetitFit.jpg",
        desc: "Farinha de amêndoas, flavo de baunilha, açúcar demerara.",
    },
    {
        id: 5,
        title: "Crème Brûlée",
        category: "sobremesas",
        price: 10,
        img: "./images/cremeBrulee.jpg",
        desc: "Gema de ovos, leite de soja, essência de baunilha.",
    },
    {
        id: 6,
        title: "Bolo de Chuva fit",
        category: "sobremesas",
        price: 5,
        img: "./images/boloChuva.jpg",
        desc: "Leite de amêndoas, farinha sem glúten, cacau em pó.",
    },
    {
        id: 7,
        title: "Mousse de limão",
        category: "sobremesas",
        price: 6,
        img: "./images/mousseLimao.jpg",
        desc: "Leite vegetal, limão siciliano, flor de sal.",
    },
    {
        id: 8,
        title: "Sanduíche funcional",
        category: "pratos",
        price: 15,
        img: "./images/sanduicheFuncional.ashx",
        desc: "Pão integral, queijo vegetal, alface, rúcula.",
    },
    {
        id: 9,
        title: "Empadão Fit",
        category: "pratos",
        price: 30,
        img: "./images/empadaFit.webp",
        desc: "Creme de frango, farinha sem glúten, requeijão vegano, manteiga orgânica.",
    },
    {
        id: 10,
        title: "Omelete de carne",
        category: "pratos",
        price: 18,
        img: "./images/omeleteCarne.jpg",
        desc: "Ovos orgânicos, leite de soja, mistura de tempeiros.",
    },
    {
        id: 11,
        title: "Panqueca de frango",
        category: "pratos",
        price: 12,
        img: "./images/panquecaFrango.jpg",
        desc: "Leite vegetal, frango desfiado, milho-verde.",
    },
    {
        id: 12,
        title: "Pizza de frango",
        category: "pizzas",
        price: 45,
        img: "./images/pizzaFrango.jpg",
        desc: "Frango desfiado, queijo vegetal, fermento biológico.",
    },
    {
        id: 13,
        title: "Hambúguer Fit",
        category: "pratos",
        price: 15,
        img: "./images/hambuguerFit.webp",
        desc: "Porção sem glúten, hambúguer de carne, mistura de tempeiros.",
    },
    {
        id: 14,
        title: "Batata Assada",
        category: "acompanhamentos",
        price: 20,
        img: "./images/batataAssada.png",
        desc: "Batata, azeite, mistura de tempeiros, sal de rosa.",
    },
    {
        id: 15,
        title: "Croissant",
        category: "pratos",
        price: 7,
        img: "./images/croissant.webp",
        desc: "Pão sem glúten, azeitona fresca, peito de peru.",
    },
    {
        id: 16,
        title: "Pizza de peito de peru",
        category: "pizzas",
        price: 40,
        img: "./images/pizzaPeru.jpg",
        desc: "",
    },
    {
        id: 17,
        title: "Pizza de Brócolis",
        category: "pizzas",
        price: 42,
        img: "./images/pizzaBrocolis.webp",
        desc: "",
    },
    {
        id: 18,
        title: "Pizza de Salmão",
        category: "pizzas",
        price: 65,
        img: "./images/pizzaSalmao.webp",
        desc: "",
    },
    {
        id: 19,
        title: "Pizza de Espinafre",
        category: "pizzas",
        price: 40,
        img: "./images/pizzaEspinafre.jpg",
        desc: "",
    },
    {
        id: 20,
        title: "Batata Cremosa",
        category: "acompanhamentos",
        price: 25,
        img: "./images/batataCremosa.jpg",
        desc: "",
    },
    {
        id: 21,
        title: "Purê de abobóra",
        category: "acompanhamentos",
        price: 15,
        img: "./images/pureAbobora.ashx",
        desc: "",
    },
    {
        id: 22,
        title: "Jardineira de Legumes",
        category: "acompanhamentos",
        price: 18,
        img: "./images/jardineiraLegume.jpg",
        desc: "",
    },
    {
        id: 23,
        title: "Caponata de Berinjela",
        category: "acompanhamentos",
        price: 25,
        img: "./images/caponata.jpg",
        desc: "",
    },
    {
        id: 24,
        title: "Couve flor gratinada",
        category: "acompanhamentos",
        price: 20,
        img: "./images/couveFlorGratinada.webp",
        desc: "",
    },
    {
        id: 25,
        title: "Pirão de Banana",
        category: "acompanhamentos",
        price: 15,
        img: "./images/piraoBanana.jpg",
        desc: "",
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
        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category)
            if (category === menuItem.category) {
                return menuItem
            }

        })
        // console.log(menuCategory)
        if (category === "todos") {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }

    })

})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="options" class="japanese">
        <img src=${item.img} alt="">
        <div class="text-content">
            <div class="title">
                <h2>${item.title}</h2>   
                <h2 class="price">R$${item.price},00</h2> 
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