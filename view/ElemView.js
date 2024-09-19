class ElemView {
  #index; //egész szám

  constructor(szuloElem, index) {
    this.szuloElem = szuloElem;
    this.#index = index;
    this.kattinthato = true; //
    //HTML tag létrehozása
    this.#htmlOsszerak();
    //meg kell fogni a gombokat
    this.elem = $(".elem:last-child");
    this.pElem = this.elem.children("p");
    this.elem.on("click", () => {
      if (this.kattinthato) {
        this.#sajatEsemenykezelo("kivalaszt");
        this.kattinthato = false;
      }
     
    });
  }
  #htmlOsszerak() {
    let txt = "";
    txt += `
            <div class="elem ">
            <p></p>
            </div>
        `;
    txt += "";
    this.szuloElem.append(txt);
  }
  setErtek(jel) {
    this.pElem.html(jel);
  }
  getIndex() {
    return this.#index;
  }
  #sajatEsemenykezelo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default ElemView;
