"use strict";
//creo una lista della spesa con array//
let shoppingList=[`Vino`, `Pane`, `Borghetti`, `Pasta`, `Riso`];
//faccio una querySelector del  id # list//
const ulList=document.querySelector("list");
//faccio una variante impostando la i=0//
let i = 0;
//effetuo un ciclo while//
while ( i<=shoppingList.length) {
    console.log(i)
    i++;
}
const liList=document.createElement("li");
liList.innerHTML=shoppingList[i];

