function displayPoem(response) {
    console.log("poem generatated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();

    let instractionsInput = document.querySelector("#user-instraction");
    let apiKey = "1c9f0908bct7baa95o23fa41fc51b703";
    let prompt = 'User instractions are: Generate a Ukrainian poem about ${instractionsInput.value}';
    let context = 
    "You are a romantic Poem expert and love to wtite short poems. Your mission to generate a 4 line poem in basic HTML and separete each line with a <br/>>. Make sure to follow the user instractions. Don't include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element. Don't write 'html' at the beggining";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating Poem");
 console.log(`Prompt:${prompt}`);
 console.log(`Context:${context}`);


axios.get(apiURL).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

