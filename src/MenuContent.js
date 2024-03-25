export function MenuContent () {
    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

    const menuItemList = [
        {
            name: "Classic Mint Eyescream",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus necessitatibus rerum eum tenetur, aperiam nesciunt cum, assumenda officia expedita enim ipsam iusto quo laborum dicta fuga omnis excepturi totam.",
            imageURL: "https://i.imgur.com/gm8r3Yc.jpeg"
        },
        {
            name: "Vanilla Chocolate Eye cream",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus necessitatibus rerum eum tenetur, aperiam nesciunt cum, assumenda officia expedita enim ipsam iusto quo laborum dicta fuga omnis excepturi totam.",
            imageURL: "https://i.imgur.com/oIuEPaL.jpeg"
        },
        {
            name: "Ribeye Scream",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus necessitatibus rerum eum tenetur, aperiam nesciunt cum, assumenda officia expedita enim ipsam iusto quo laborum dicta fuga omnis excepturi totam.",
            imageURL: "https://i.imgur.com/xjL5Sr9.png"
        },
    ]

    function fillGrid () {
        menuItemList.forEach((item) => {
            const menuItemEl = document.createElement("div");
            menuItemEl.classList.add("menu-item");

            const imageEl = document.createElement("img");
            imageEl.classList.add("menu-item-img");
            imageEl.setAttribute("src", item.imageURL);
            imageEl.setAttribute("alt", "picture of delicious ice cream");

            const nameEl = document.createElement("h3");
            nameEl.classList.add("menu-item-name");
            const name = item.name;
            nameEl.textContent = name;

            const descEl = document.createElement("p");
            descEl.classList.add("menu-item-desc");
            const desc = item.desc;
            descEl.textContent = desc;

            menuItemEl.appendChild(imageEl);
            menuItemEl.appendChild(nameEl);
            menuItemEl.appendChild(descEl);
            grid.appendChild(menuItemEl);
        })
    }

    fillGrid()

    return grid;
}