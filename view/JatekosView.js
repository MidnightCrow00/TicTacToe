class JatekosView {
    constructor(szuloElem) {
      this.szuloElem = szuloElem;
      this.jatekosLetrehoz();
      this.#init();
    }
  
    jatekosLetrehoz() {
      // Játékosok mezőinek létrehozása
      const jatekos = this.szuloElem;
      jatekos.empty();
  
      let txt = "";
      
       // X játékos div
       txt += `
       <div id="player2" class="mb-3">
         <label for="player2-name" class="form-label">X játékos: </label>
         <input type="text" id="player2-name" class="form-control" placeholder="x Men" required >
       </div>
        <div id="player1" class="mb-3">
          <label for="player1-name" class="form-label">O játékos: </label>
          <input type="text" id="player1-name" class="form-control" placeholder="O Men" required>
        </div>
        <input type="submit" id="jatekKezd" class="btn btn-primary mt-3" value="Játék indítása">
      `;
  
      jatekos.append(txt);
    }
  
    #init() {
      // Játék indítása gomb eseménykezelő
      $('#jatekKezd').on('click', () => {
        // Itt lehet például ellenőrizni a játékosok neveit és elkezdeni a játékot
        this.showResult('Játék elkezdve!');
      });
    }
  
    showResult(result) {
      $('.info').text(result);
    }
  }
  
  export default JatekosView;
  