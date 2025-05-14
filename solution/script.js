document.addEventListener("DOMContentLoaded", () => {
    console.log("House of Rotunda website loaded.");

    // 1. Change text content dynamically
    const heading = document.querySelector("header h1");
    heading.textContent = "House of Rotunda: AW25 Drop Live";

    // 2. Modify CSS styles via JavaScript
    const formSection = document.querySelector("#form form");
    formSection.style.border = "2px dashed #ff4081";
    formSection.style.backgroundColor = "#333";

    // 3. Add or remove an element when a button is clicked
    const button = document.createElement("button");
    button.textContent = "Toggle Extra Info";
    button.style.margin = "20px auto";
    button.style.display = "block";

    const extraInfo = document.createElement("p");
    extraInfo.textContent = "Experience the fusion of heritage and high fashion.";
    extraInfo.style.textAlign = "center";
    extraInfo.style.display = "none";

    document.body.appendChild(button);
    document.body.appendChild(extraInfo);

    button.addEventListener("click", () => {
        if (extraInfo.style.display === "none") {
            extraInfo.style.display = "block";
        } else {
            extraInfo.style.display = "none";
        }
    });
});
