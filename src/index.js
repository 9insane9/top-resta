import './style.css';

import { HomeContent } from './HomeContent';
import { MenuContent } from './MenuContent';
import { contactContent } from "./ContactContent";

(function navHandler() {
    const buttonList = document.querySelectorAll("button");

    function loadPage(content) {
        const contentEl = document.querySelector("#content");

        contentEl.innerHTML = "";
        contentEl.appendChild(content);
        console.log("content loaded")
    }

    loadPage(HomeContent()) ///initial load

    buttonList.forEach(button => {
        button.addEventListener("click", e => {

            switch (button.getAttribute("id")) {
                case "home":
                    loadPage(HomeContent());
                    break;
                case "menu":
                    loadPage(MenuContent());
                    break;
                case "contact":
                    loadPage(contactContent());
                    break;
            }

            e.stopImmediatePropagation()
        })
    })
}())
