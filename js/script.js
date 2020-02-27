
//ganger de co2 values vi fik med det man skriver i input feltet
function calculate() {
    //tjekker om cykel <option> er valgt, og hvis den er skriver den noget andet istedet for at fortsætte funktionen
    if (document.querySelector('#transport').value == 0){
        document.querySelector('#result').innerHTML = "Din rejse vil bruge 0 kg co2!";
        return false;
    } else {
        //tjekker om der står noget i inputtet, og hvis der ikke gør fjerner den "0" tallet som resultat 
        if (document.querySelector('#val').value == ""){
            document.querySelector('#result').innerHTML = "";
            return false;
        }
    //laver en variabel ud af <select>'s value som er skrevet inde i HTML tagget
    let transport = document.querySelector('#transport').value;
    //laver en variabel ud af det som er blevet skrevet ind i input feltet
    let km = document.querySelector('#val').value;
    //ganger de to values sammen
    let busval = transport*km;
    
    //putter det endelige resultat ind i et tomt <p> tag inde i HTML dokumentet
    document.querySelector('#result').innerHTML = parseFloat(busval.toFixed(2)) + " kg co2";
    return false;
}
}

//dividere det endelige resultat med det som er skrevet i "antal personer" inputtet
function calculatep() {
    //gør det samme som i første funktion
    if (document.querySelector('#transport').value == 0){
        document.querySelector('#resultp').innerHTML = "";
        return false;
    } else {
        if (document.querySelector('#person').value == ""){
            document.querySelector('#resultp').innerHTML = "";
            return false;
        }
    
    /*har brug for samme variabler her, da de ikke kan hentes fra den anden funktion
       (har ikke kunne lave dem globale, ved ikke hvorfor)*/
    let transport = document.querySelector('#transport').value;
    let km = document.querySelector('#val').value;
    let busval = transport*km;

    //laver en variabel ud af det som bliver skrevet i "person" input feltet
    let persondata = document.querySelector('#person').value;
    //dividere resultatet af første funktion med det nye input
    let newresult = busval / persondata;

    //putter det endelige resultat ind i et NYT tomt <p> tag inde i HTML dokumentet
    document.querySelector('#resultp').innerHTML = parseFloat(newresult.toFixed(2)) + " kg co2";
    return false;
}
}

/*gør at den automatisk opdaterer resultatet ved at køre funktionen hver gang man skriver noget nyt,
 dette er en erstatning for en knap*/
val.addEventListener('keyup', calculate);
transport.addEventListener('change', calculate);

person.addEventListener('keyup', calculatep);
transport.addEventListener('change', calculatep);


