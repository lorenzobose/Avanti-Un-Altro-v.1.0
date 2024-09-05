////Questo file si occupa di gestire la parte dello stato e delle statistiche base di ogni giocatore
const main = {
    current: "Start",
    index: 0,
    time: 60,
}

const Prototype = {
    nome : "X",
    max : 0,
}

let index = 0;
let intervalId = null;
let domande = [];
let currentIndex = 0;
let max = 0;
let nome = "";
let isMax = false;

const tool = {
    //verifica l'esistenza del nome scelto dal giocatore
    namecheck(){
        let name = insNome.value;
        let find = false;
        for(let n = 0; n < Players.length; n++){
            if (Players[n].nome == name){
                find = true;
                main.index = n;
                return;
            }
        }
        main.index = Players.length;
        const obj = Object.create(Prototype);
        obj.nome = name;
        Players.push(obj);
    }, 

    //funzione che crea i cubetti
    createcube(){
        const x = document.createElement("img");
        x.src = "img/cuboblu.png";
        grafica.cube(x);
        return x;
    },
    
    //sceglie l'immagine della freccia
    calctime(){
        const time = new Date
        const now = time.getHours()
        if(now > 18 || now < 7)
            return "img/back.png"
        else{
            return "img/background.png"
        }
    },

    //si occupa di aggiornare il Timer
    updateTimer(){
        if(main.time > 0){
            main.time--;
            if(!index){
                timert.innerHTML = main.time;
            }
            else{
                counter.innerHTML = main.time + ".000 €";
            }
        }else{
            if(!index){
                index = 1;
                main.time = 200;
                grafica.highmoney();
            }
            else{
                grafica.puliscifield();
                grafica.ending();
                main.current = "Finale";
                clearInterval(intervalId);
            }

        }
    },

    //avvia il timer
    startTimer(){
        if(!intervalId){
            intervalId = setInterval(this.updateTimer, 1000);
        }
    },

    //ferma il timer
    pauseTimer(){
        clearInterval(intervalId);
        intervalId = null;
    },

    //inizia la funzione del gioco
    startGame(){
        tool.shuffle();
        for(let i = 0; i < 20; i++){
            domande.push(quest[i]);
        }
        grafica.scriviquest();
    },

    //shuffola le domande
    shuffle(){
        for(let i = 0; i < quest.length; i++){
            let changeIndex = Math.floor((Math.random() * (quest.length - i )) + i);
            [quest[i], quest[changeIndex]] = [quest[changeIndex], quest[i]];
        }
    },

    /**
     * verifica se la risposta è giusta
     * @param {Number} choice
     */
    checkrisposta(choice){
        if(domande[currentIndex].giusta === choice){
            grafica.giusto();
        }
        else{
            grafica.sbagliato();
        }
    },

    //si occupa di calcolare il punteggio del giocatore
    calcscore(){
        if(!index){
            return 200;
        }
        return main.time;
    },
    
    //funzione che calcola il massimo tra i punteggi dei giocatori
    calcmax(){
        for(let x = 0; x < Players.length; x++){
            if(x == main.index){
                continue;
            }
            if(Players[x].max > max){
                max = Players[x].max;
                nome = Players[x].nome;
            }
        }
        console.log([Players[main.index].max, max])
        if(Players[main.index].max > max){
            isMax = true;
            return Players[main.index].max;
        }
        return max;
    },

    /** salva il file
     * @param {string | Blob} data 
     * @param {string} name
     * @param {string} type
     **/
    saveFile(data, name, type){
        let file = new Blob([data], {type});
        let a = document.createElement("a");
        let url = URL.createObjectURL(file);
        a.href = url;
        a.download = `${name}.${type}`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

