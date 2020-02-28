let transport = document.querySelector('#transport')
let km = document.querySelector('#val')

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
    
    //ganger valuen af den valgte <option> og putter det ind i en variabel
    let busval = transport.value*km.value;
    
    //putter det endelige resultat ind i et tomt <p> tag inde i HTML dokumentet
    document.querySelector('#result').innerHTML = parseFloat(busval.toFixed(2)) + " kg co2";
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
    
    //ganger valuen af den valgte <option> og putter det ind i en variabel (dette skal gøres igen i denne funktion da den ikke kan hentes fra den anden)
    let busval = transport.value*km.value;

    //laver en variabel ud af det som bliver skrevet i "person" input feltet
    let persondata = document.querySelector('#person').value;
    //dividere resultatet af første funktion med det nye input
    let newresult = busval / persondata;

    //putter det nye resultat ind i et NYT tomt <p> tag inde i HTML dokumentet
    document.querySelector('#resultp').innerHTML = parseFloat(newresult.toFixed(2)) + " kg co2";
}
}

/*gør at den automatisk opdaterer resultatet ved at køre funktionen hver gang man skriver noget nyt,
 dette er en erstatning for en knap*/
val.addEventListener('keyup', calculate);
transport.addEventListener('change', calculate);

person.addEventListener('keyup', calculatep);
transport.addEventListener('change', calculatep);


