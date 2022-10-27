"use strict";
//creo una lista della spesa con array//
let shoppingList=[`Vino`, `Pane`, `Borghetti`, `Pasta`, `Riso`];
//faccio una querySelector del  id # list//
const ulList=document.querySelector("#list");
//faccio una variante impostando la i=0//
let i = 0;
//effetuo un ciclo while//
while ( i< shoppingList.length) {
    //creo un elemento(li)//
    const liList=document.createElement("li");
    console.log(shoppingList[i]);
    //stampo il mio elemento con innerHtml//
    liList.innerHTML=shoppingList[i];
    //appendo la mia costante liList alla costante ulList//
    ulList.append(liList);
    i++;
}

