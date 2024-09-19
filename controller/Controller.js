import Modell from "../model/Modell.js";
import ElemView from "../view/ElemView.js";
import JatekosView from "../view/JatekosView.js";

class Controller {
  constructor() {
    // Példányosítjuk a modellt
    this.MODELL = new Modell();
    // Példányosítjuk a játékos nézetét
    this.jatekosView = new JatekosView($(".jatekos"));

    // Példányosítjuk a mezőket a játékterületen
    this.cells = []; // Az ElemView objektumok tárolására
    for (let index = 0; index < 9; index++) {
      const cell = new ElemView($(".jatekter"), index);
      this.cells.push(cell);
    }

    // Feliratkozunk a view eseményeire
    $(window).on("kivalaszt", (event) => {
      // A modell megfelelő tagfüggvényeinek meghívása
      console.log(event.detail); // Az az objektum, amelyik kiváltotta az eseményt
      this.MODELL.setAllapot(event.detail.getIndex());
      event.detail.setErtek(this.MODELL.getErtek());

      // Játék vége ellenőrzése
      const eredmeny = this.MODELL.getVegeVanE();
      if (eredmeny !== "tovabb") {
        console.log(eredmeny);
        this.jatekVege(eredmeny); // Játék végének kezelése
      }
    });
  }

  jatekVege(eredmeny) {
    // Játék vége kezelése, pl. eredmény kiírása és a cellák kattinthatóságának letiltása
    $(".info").text(eredmeny); // Eredmény megjelenítése az info div-ben

    // A cellák kattinthatóságának letiltása
    this.cells.forEach((cell) => {
      cell.kattinthato = false;
    });
  }
}

export default Controller;
