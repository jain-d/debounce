let addItems= document.body.querySelector(".add-items");
let list = document.body.querySelector(".list");

addItems.addEventListener("click", () => {
   let item = document.createElement("li");
   item.innerText = "Adding one option";
   list.appendChild(item);
});
