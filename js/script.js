"use strict";
//creo una lista della spesa con array//
let shoppingList=[`Vino`, `Pane`, `Borghetti`, `Pasta`, `Riso`];
//faccio una querySelector del  id # list//
const ulList=document.querySelector("#list");
//stampo il mio elemento con innerHtml//
//faccio una variante impostando la i=0//
let i = 0;
//effetuo un ciclo while//
while ( i< shoppingList.length) {
    const liList=document.createElement("li");
    console.log(shoppingList[i]);
    liList.innerHTML=shoppingList[i];
    ulList.append(liList);
    i++;
}

//creo un elemento(li)//
//appendo la mia costante shoppinList alla costante ulList//
