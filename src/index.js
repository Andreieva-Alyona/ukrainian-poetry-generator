function generatePoem(event) {
    event.preventDefault();

  
   new Typewriter('#poem', {
    strings: ["На неї не можна було не звернути увагу - вона сміялася уві сні."],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
