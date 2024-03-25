export function contactContent () {
    const container = document.createElement("div");
    container.classList.add("container");

    const callUsInfo = "Ready to enjoy the best iced creams in the galaxy? Call us for a reservation at 999-999-BEST-ICE-CREAM"
    const callUsEl = document.createElement("h2");

    callUsEl.textContent = callUsInfo;

    container.appendChild(callUsEl);
    return container;
}