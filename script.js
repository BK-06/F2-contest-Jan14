"use strict";

const texts = document.querySelectorAll(".texts");
const errorEL = document.querySelector(".error");
const successEL = document.querySelector(".success");
const empContainer = document.querySelector("#emp-container");

//console.log(texts);
const length = texts.length;
//console.log(length);
const addUserBtnEl = document.querySelector(".add-user-btn");

let count = 0;
let counter = 1;

const resetDOM = () => {
  errorEL.classList.add("hidden");
  successEL.classList.add("hidden");
};

const addHidden = (e) => {
  e.classList.add("hidden");
};
const removeHidden = (e) => {
  e.classList.remove("hidden");
};

const appendUser = (data) => {
  console.log(data);

  const newDiv = document.createElement("div");
  newDiv.className = "emp-parent";
  const elements = data.map((e) => {
    const eDiv = document.createElement("div");
    counter++;
    eDiv.className = `employee${counter}`;
    eDiv.innerText = e.name + ": " + e.value;
    return eDiv;
  });
  console.log(elements);
  elements.map((e) => newDiv.appendChild(e));
  // newDiv.innerText = text.value;
  // newDiv.className = `employee${counter}`;
  empContainer.appendChild(newDiv);
  //resetDOM();
  // emp-container
};

const addUser = () => {
  //   console.log(texts);
  resetDOM();
  const values = Array.from(texts)
    .map((t) => t.value)
    .filter((e) => e && e.trim && e.trim());
  const isFilled = texts.length === values.length;
  if (!isFilled) {
    return removeHidden(errorEL);
  }
  addHidden(errorEL);
  removeHidden(successEL);
  const data = ["name", "job", "age"].map((e, i) => ({
    name: e,
    value: values[i],
  }));

  appendUser(data);
};

addUserBtnEl.addEventListener("click", addUser);

// deleteUser(){
//   // I'll do tomorrow submitting this for today.
// }
