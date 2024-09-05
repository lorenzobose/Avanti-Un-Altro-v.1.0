//La variabile Step contiene tutte le fasi del gioco 
/*
 * Start : Inizio del Gioco con inserimento del nome (creazione del giocatore)
 * Regole : Breve Spiegazione delle Regole
 * Gioco : Gioco vero e proprio, risposte giuste o sbagliate
 * Risultato : Vittoria o sconfitta del Giocatore
 * Saving : Salvataggio e Mostra dei dati
 */

const Step = {
    "Start":{
        Enter(){
            tool.namecheck();
            grafica.scorri();
            main.current = "Regole";
            main.tranState = "stop";
        },
    },
    "Regole":{
        a(){
            grafica.puliscifield();
            grafica.istruzioni();
        },

        Enter(){
            grafica.puliscifield();
            grafica.gioco();
            main.current = "Grafica"
        },
    },
    "Grafica": {
        o(){
            main.current = "Gioco";
            tool.startTimer();
            tool.startGame();
        },
    },
    "Gioco": {
        o(){
            tool.startTimer();
        },
        p(){
            tool.pauseTimer();
        },
        s(){
            tool.checkrisposta(0);
        },
        d(){
            tool.checkrisposta(1);
        }
    },
    "Finale": {
        Enter(){
            tool.saveFile("let Players = " + JSON.stringify(Players, null, "\t"), "players", "js");
            main.current = "Save";
        }
    },
    "Save": {
        Enter(){
            grafica.puliscifield();
            grafica.inizio();
            main.current = "Start";
        }
    }
}

grafica.inizio();

/**
 * il file si occupa di prendere gli input dell'utente e gestirli per proseguire con il gioco.
 * @param {KeyboardEvent} event
*/

function control(event){
    let key = event.key;
    let state = main.current;
    if(key in Step[state])
        Step[state][key]();
}


document.addEventListener("keypress", control);