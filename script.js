/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Hello 🌎");

const display = document.getElementById("motivato");

const motivation = [
  {
    quote: "The best way out is always through.lanting popcorn does not produce more popcorn",
    person: "Robert Frost",
  },
  {
    quote: "If there is no struggle, there is no progress",
    person: "Frederick Douglass",
  },
  {
    quote: "You carry the passport to your own happiness.",
    person: "Diane von Furstenberg",
  },
  {
    quote: "If you don’t risk anything, you risk even more",
    person: "Erica Jong",
  },
  {
    quote: "I never dreamed about success. I worked for it",
    person: "Estée Lauder",
  },
];

function motivateMe() {
  const listLength = motivation.length;
  const randVal = motivation[Math.floor(Math.random() * listLength)];
  display.innerHTML = `<blockquote>"${randVal.quote}"</blockquote><cite>${randVal.person}</cite>`;
}

motivateMe();

var changeThemeButton = document.querySelector("#change-theme");

changeThemeButton.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");
  console.log(document.body.classList.contains("dark-theme"));
});
