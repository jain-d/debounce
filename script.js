let addItems= document.body.querySelector(".add-items");
let list = document.body.querySelector(".list");
let clearButton = document.body.querySelector(".clear");

let timestamp;

let agentMarkup = document.body.querySelector(".agent");
let agent = navigator.userAgent;
if (agent.includes("Safari")) {
   agentMarkup.innerText = `This could be safari`;
   if (!agent.includes("Chrome")) {
      agentMarkup.innerText = `This is Safari`;
   }
}

const handlerFunction = event => {
   if (timestamp === undefined) {
      addElements();
      timestamp = new Date().getSeconds();
   }
   else if (new Date().getSeconds() >= (timestamp + 1) || new Date().getSeconds() < timestamp) {
      addElements();
      timestamp = new Date().getSeconds();
   }
   else {
      console.log(`ClICK DEBOUNCED: for timestamp: ${timestamp}`);
      event.preventDefault();
      //timestamp = new Date().getSeconds();
   }

}

addItems.addEventListener("click", handlerFunction);
function addElements() {
   let item = document.createElement("li");
   item.innerText = "Adding one option";
   list.appendChild(item);
}
let clk = new Event("click");
let automatedClick = setInterval(() => {
   addItems.dispatchEvent(clk);
   console.log(`\n button clicked`);
}, 500);

clearButton.addEventListener("click", () => {
   clearInterval(automatedClick);
   addItems.removeEventListener("click", handlerFunction);
   });
