"use strict";
//creo una lista della spesa con array//
let shoppingList=[`Vino`, `Pane`, `Borghetti`, `Pasta`, `Riso`];
const ulList=document.querySelector("list");
let i = 0;
while ( i<=shoppingList.length) {
    console.log(i)
    i++;
}
const liList=document.createElement("li");
liList.innerHTML=shoppingList[i];

