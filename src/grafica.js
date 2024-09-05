/////Il file si occupa di gestire la parte della grafica

//dichiaro variabili globali che servono a identificare le singole parti di testo;
let Nome, insNome, Logo, angl1, angl2, angr1, angr2, rule, head, timerM, timer1, timer2, timert, cubcont, sphere, spherel, solcont, counter, domcont, domtext, answ1cont, answ1text, answ2cont, answ2text, linel, liner, doubleline, bordergame, maxdiv, maxdiv1, maxdiv2, nomedivmax, isRecord;
let d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20;
let cubes = [];
let record = 0;


//La costante grafica contiene tutta la grafica del sito, con css e html.
const grafica = {
    //funzione che si occupa di pulire il field
    puliscifield(){
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
    },
    /** spiega che la variabile indica un'immagine HTML
    * @param {HTMLImageElement} cubo 
    */
    cube(cubo){
        cubo.style.width = "40px";
        cubo.style.marginRight = "25px";
    },
    //funzione che viene chiamata al caricamento del dom, setup iniziale
    inizio(){
        Logo = document.createElement("img");
        Logo.src = tool.calctime();
        Logo.style.width = "700px";
        Logo.style.position = "absolute";
        Logo.style.right = (fieldWidth - 700) / 2 + "px";
        let logotop = 100;
        Logo.style.top = logotop + "px";
        Logo.style.transition = "right 0.5s";

        Nome = document.createElement("p");
        Nome.innerHTML = "INSERIRE IL NOME DEL GIOCATORE:";
        Nome.style.color = "white";
        Nome.style.position = "absolute";
        Nome.style.fontSize ="40px";
        Nome.style.width = "700px";
        Nome.style.textAlign = "center";
        Nome.style.right = (fieldWidth - 700) / 2 + "px";
        Nome.style.top = (logotop + 400) + "px";
        Nome.style.transition = "right 0.5s";

        insNome = document.createElement("input");
        insNome.type = "text";
        insNome.style.position ="absolute";
        insNome.style.width = "250px";
        insNome.style.left = (fieldWidth - 250) / 2 + "px";
        insNome.style.top = (logotop + 500) + "px";;
        insNome.style.fontSize = "40px";
        insNome.style.transition = "left 0.5s";

        field.appendChild(Logo);
        field.appendChild(Nome);
        field.appendChild(insNome);
    },
    //funzione che si occupa dell'animazione della freccia
    scorri(){
        Logo.style.right = (fieldWidth - 800) + "px";
        Nome.style.right = (fieldWidth - 800) + "px";
        insNome.style.left = "100px";

        setTimeout(()=>{
            Logo.style.right = "-800px";
            Nome.style.right = "-800px";
            insNome.style.left = (fieldWidth + 350) + "px"
        }, 500);

    },
    //funzione che si occupa dello styling delle istruzioni
    istruzioni(){
        head = document.createElement("h1");
        head.innerHTML = "ISTRUZIONI";
        head.style.position = "absolute";
        head.style.textAlign = "center";
        head.style.width = "400px";
        head.style.fontSize = "45px";
        head.style.color = "white";
        head.style.left = (fieldWidth - 400) / 2 + "px";
        head.style.top = "100px";


        rule = document.createElement("div");
        rule.innerHTML = "SELEZIONARE TRA LE DUE PROPOSTE LA RISPOSTA SBAGLIATA, ALLO SCADERE DEL TIMER LA QUANTITA' DI SOLDI DIMINUIRA' DI 1000 AL SECONDO";
        rule.style.color = "white";
        rule.style.fontSize = "40px";
        rule.style.width = "600px"; 
        rule.style.position = "absolute";
        rule.style.textAlign = "center";
        rule.style.left = (fieldWidth - 600) / 2 + "px";
        rule.style.top = "400px";
        rule.style.textWrap = "pretty";


        field.appendChild(head);
        field.appendChild(rule);


    },
    //funzione che si occupa del styling del gioco
    gioco(){
        //setting del timer
        timerM = document.createElement("div");
        timer1 = document.createElement("div");
        timer2 = document.createElement("div");
        timert = document.createElement("div");

        timerM.style.width = "450px";
        timerM.style.height = "450px";
        timerM.style.borderRadius = "225px";
        timerM.style.backgroundColor = "#002bff";
        timerM.style.position = "absolute";
        timerM.style.left = (fieldWidth - 450) / 2 + "px";
        timerM.style.top = "100px";
        timerM.style.border = "1px solid black";

        timer1.style.width = "400px";
        timer1.style.height = "400px";
        timer1.style.backgroundColor = "white";
        timer1.style.borderRadius = "200px";
        timer1.style.position = "relative";
        timer1.style.left = "25px";
        timer1.style.top = "25px";

        timer2.style.width = "350px";
        timer2.style.height = "350px";
        timer2.style.backgroundColor = "#0010aa";
        timer2.style.borderRadius = "175px";
        timer2.style.position = "relative";
        timer2.style.top = "25px";
        timer2.style.left = "25px";
        
        timert.innerHTML = String(main.time);
        timert.style.width = "210px";
        timert.style.height = "120px";
        timert.style.fontSize = "100px";
        timert.style.fontFamily = "Verdana";
        timert.style.fontWeight = "bold";
        timert.style.color = "white";
        timert.style.textAlign = "center";
        timert.style.position = "relative";
        timert.style.left = "70px";
        timert.style.top = "115px";

        timer2.appendChild(timert);
        timer1.appendChild(timer2);
        timerM.appendChild(timer1);
        field.appendChild(timerM);
        
        //setting dei cubetti
        cubcont = document.createElement("div");
        cubcont.style.position = "absolute";
        cubcont.style.top = "920px";
        cubcont.style.left = (fieldWidth - 1400) / 2 + "px";
        cubcont.style.display = "flex";
        cubcont.style.alignItems = "center";
        cubes.push(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
        for(let i = 0; i < 19; i++){
            cubes[i] = tool.createcube();
            cubcont.appendChild(cubes[i]);
        }
        d20 = document.createElement("img");
        d20.src = "img/cuboblu.png";
        d20.style.width = "80px";
        d20.style.position = "relative";
        d20.style.top = "-17px";

        cubes.push(d20);
        cubcont.appendChild(cubes[19]);

        //sfera
        sphere = document.createElement("img");
        sphere.src ="img/sfera.png";
        sphere.style.width = "50px";
        spherel = 255;
        sphere.style.left = spherel + "px";
        sphere.style.top = "900px"
        sphere.style.position = "absolute";

        field.appendChild(sphere);

        //contatore dei soldi
        solcont = document.createElement("div");
        solcont.style.display = "flex";
        solcont.style.justifyContent = "center";
        solcont.style.alignItems = "center";
        solcont.style.width = "200px";
        solcont.style.height = "100px";
        solcont.style.position = "absolute";
        solcont.style.top = "863px";
        solcont.style.right = "100px";
        solcont.style.backgroundColor = "red";
        solcont.style.borderWidth = "7px 7px 7px 7px";
        solcont.style.borderStyle =  "solid";
        solcont.style.borderColor = "#a22400";

        counter = document.createElement("div");
        counter.style.fontSize = "36px";
        counter.style.color = "white";
        counter.innerHTML = "200.000 €";

        //contenitore della domanda
        domcont = document.createElement("div");
        domcont.style.border = "7px solid #0010aa"
        domcont.style.position = "absolute";
        domcont.style.width = "1000px";
        domcont.style.height = "125px";
        domcont.style.left = (fieldWidth - 1014) / 2 + "px";
        domcont.style.top = "610px";
        domcont.style.backgroundColor = "white";
        domcont.style.zIndex = "1";
        domcont.style.display ="flex";
        domcont.style.alignItems = "center";
        domcont.style.justifyContent = "center";

        //testo della domanda
        domtext = document.createElement("div");
        domtext.style.textWrap = "pretty";
        domtext.style.width = "900px"; 
        domtext.innerHTML = "";
        domtext.style.fontSize= "40px";

        domcont.appendChild(domtext);

        //contenitore della prima risposta
        answ1cont = document.createElement("div");
        answ1cont.style.width = "300px";
        answ1cont.style.height = "70px";
        answ1cont.style.position = "absolute";
        answ1cont.style.left = "500px";
        answ1cont.style.top = "780px";
        answ1cont.style.border = domcont.style.border;
        answ1cont.style.backgroundColor = domcont.style.backgroundColor;
        answ1cont.style.display = "flex";
        answ1cont.style.justifyContent = "center";
        answ1cont.style.alignItems = "center";
        answ1cont.style.zIndex = "1";
        
        //testo della prima risposta
        answ1text = document.createElement("div");
        answ1text.innerHTML = "";
        answ1text.style.fontSize = "50px";
        
        answ1cont.appendChild(answ1text);

        //contenitore della seconda risposta
        answ2cont = document.createElement("div");
        answ2cont.style.width = "300px";
        answ2cont.style.height = "70px";
        answ2cont.style.position = "absolute";
        answ2cont.style.right = "500px";
        answ2cont.style.top = "780px";
        answ2cont.style.border = domcont.style.border;
        answ2cont.style.backgroundColor = domcont.style.backgroundColor;
        answ2cont.style.display = "flex";
        answ2cont.style.justifyContent = "center";
        answ2cont.style.alignItems = "center";
        answ2cont.style.zIndex = "1";
        
        //testo della seconda risposta
        answ2text = document.createElement("div");
        answ2text.innerHTML = "";
        answ2text.style.fontSize = "50px";
        
        answ2cont.appendChild(answ2text);

        //contorn1
        bordergame = document.createElement("div");
        bordergame.style.position = "absolute";
        bordergame.style.width = (fieldWidth - 180) + "px";
        bordergame.style.height = "340px";
        bordergame.style.border = "5px solid white";
        bordergame.style.left = "100px";
        bordergame.style.top = (fieldHeight - 400) + "px";
        bordergame.style.backgroundColor = "rgb(0, 43, 255)";
        bordergame.style.zIndex = "-1";

        linel = document.createElement("div");
        linel.style.border = "2.5px solid white";
        linel.style.width = "0px";
        linel.style.height = "40px";
        linel.style.position = "absolute";
        linel.style.left = "650px";
        linel.style.top = "750px";

        liner = document.createElement("div");
        liner.style.border = "2.5px solid white";
        liner.style.width = "0px";
        liner.style.height = "40px";
        liner.style.position = "absolute";
        liner.style.right = "650px";
        liner.style.top = "750px";

        doubleline = document.createElement("div");
        doubleline.style.border = "2.5px solid white";
        doubleline.style.width = "300px";
        doubleline.style.height = "0px";
        doubleline.style.position = "absolute";
        doubleline.style.left = (fieldWidth - 300) / 2 + "px";
        doubleline.style.top = "820px";

        solcont.appendChild(counter);

        field.appendChild(cubcont);
        field.appendChild(solcont);
        field.appendChild(domcont);
        field.appendChild(answ1cont);
        field.appendChild(answ2cont);
        field.appendChild(bordergame);
        field.appendChild(linel);
        field.appendChild(liner);
        field.appendChild(doubleline);
    },
    //funzione che porta in evidenza i soldi
    highmoney(){
        tool.pauseTimer();
        field.removeChild(timerM);
        solcont.style.transition =  "all 1s";
        solcont.style.width = "700px";
        solcont.style.height = "350px";
        solcont.style.right = (fieldWidth - 740) / 2 + "px";
        solcont.style.top = "180px";
        solcont.style.borderWidth = "20px";
        counter.style.transition = "all 1s";
        counter.style.fontSize = "100px";
        tool.startTimer();
    },
    //funzione che si occupa dell'inserimento del testo della domanda e le corrispondenti risposte
    scriviquest(){
        domtext.innerHTML = domande[currentIndex].testo;
        answ1text.innerHTML = domande[currentIndex].risposte[0];
        answ2text.innerHTML = domande[currentIndex].risposte[1];
    },
    //gestisce la grafica in caso di risposta corretta
    giusto(){
        if(currentIndex < 18){
            spherel += 65;
            sphere.style.left = spherel + "px";
        }
        cubes[currentIndex].src = "img/cubogrn.png";
        currentIndex++;
        if(currentIndex == 20){
            this.puliscifield();
            this.ending();
            main.current = "Finale";
            tool.pauseTimer();
        }
        else{
        this.scriviquest();
        }
    },
    //gestisce la grafica in caso di risposta sbagliata
    sbagliato(){
        record = Math.max(record, currentIndex);
        spherel = 255;
        sphere.style.left = spherel + "px";
        for(let i = 0; i < currentIndex; i++){
            cubes[i].src = "img/cubogia.png";
        }
        if(currentIndex >= record){
            cubes[currentIndex].src = "img/cuborux.png";
        }
        currentIndex = 0;
        this.scriviquest();
    },
    //gestisce la grafica della schermata finale
    ending(){
        maxdiv1 = document.createElement("div");
        let massimo = tool.calcmax();
        maxdiv1.innerHTML = "Punteggio Massimo : " + massimo;
        maxdiv1.style.fontSize = "40px";
        maxdiv1.style.color = "white";
        maxdiv1.style.position = "absolute";
        maxdiv1.style.left = "400px";
        maxdiv1.style.top = "500px";

        nomedivmax = document.createElement("div");
        nomedivmax.innerHTML = "Detenuto da: " + nome;
        nomedivmax.style.fontSize = "40px";
        nomedivmax.style.color = "white";
        nomedivmax.style.position = "absolute";
        nomedivmax.style.left = "400px";
        nomedivmax.style.top = "550px";

        let score = tool.calcscore();
        if(score > Players[main.index].max){
           Players[main.index].max = score;
        }
        
        maxdiv2 = document.createElement("div");
        maxdiv2.innerHTML = "Tuo Punteggio : " + Players[main.index].max;
        maxdiv2.style.fontSize = "40px";
        maxdiv2.style.color = "white";
        maxdiv2.style.position = "absolute";
        maxdiv2.style.right = "400px";
        maxdiv2.style.top = "500px";

        isRecord = document.createElement("div");
        isRecord.innerHTML = "!!RECORD!!";
        isRecord.style.fontSize = "100px";
        isRecord.style.position = "absolute";
        isRecord.style.textAlign = "center";
        isRecord.style.left = (fieldWidth - 539) / 2 + "px";
        isRecord.style.top = "200px";
        isRecord.style.color = "white";

        if(!isMax){
            isRecord.style.opacity = "0";
        }
        else{
            isRecord.style.opacity = "1";
        }

        field.appendChild(maxdiv1);
        field.appendChild(nomedivmax);
        field.appendChild(maxdiv2);
        field.appendChild(isRecord);
    }
}