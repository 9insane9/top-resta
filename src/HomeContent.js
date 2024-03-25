export function HomeContent() {
    const content = document.createElement("div");
    content.classList.add("container");

    const intro = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus necessitatibus rerum eum tenetur, aperiam nesciunt cum, assumenda officia expedita enim ipsam iusto quo laborum dicta fuga omnis excepturi totam.";
    const title = "Welcome to the best ice cream restaurant in the universe";
    const titleEl = document.createElement("h2");
    const introEl = document.createElement("p");
    titleEl.textContent = title;
    introEl.textContent = intro;

    content.appendChild(titleEl);
    content.appendChild(introEl);

    console.log("HomePage created")
    return content;    
};