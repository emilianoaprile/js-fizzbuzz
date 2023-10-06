// # Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// ### stampare in console log una scala di numeri da 1 a 100 col ciclo for escludendo lo 0
// - inizializiamo una variabile n = i + 1 per escludere lo zero
// ### stampare fizz - buzz - fizz buzz
// - FIZZ - BUZZ - FIZZ BUZZ:

//     - dentro al ciclo for inizializiamo una variabile Fizz con un modulo (n % 3)
//     - dentro al ciclo for inizializiamo una variabile Buzz con un modulo (n % 5)
//     - dentro ciclo for inizializiamo una variabile fizzBuzz con modulo (n % 15), in questo modo prenderemo i numeri da 1 a 100 che sono divisibili sia per 3 che per 5

//     - SE fizzBuzz = 0 
//         stampa FIZZBUZZ
//     - ALTRIMENTI SE fizz = 0 
//         stampa FIZZ
//     - ALTRIMENTI SE buzz = 0
//         stampa BUZZ
//     - ALTRIMENTI 
//         stampa il valore di n


// CREA LA SCALA DA 1 A 100 + console.log
for (let i = 0; i < 100; i++) {
    // inizializzo una variabile n per escludere lo 0
	let n = i + 1
    // console.log(n)

    // inizializzo e assegno il valore alle variabili 
    let fizz = n % 3;
    let buzz = n % 5;
    let fizzBuzz = n % 15;

    // calcolo quando il modulo da resto zero a seconda della variabile selezionata
    if (fizzBuzz === 0) {
        console.log('FizzBuzz:', n, fizzBuzz)

    } else if (fizz === 0) {
        console.log('Fizz:', n, fizz)

    } else if (buzz === 0) {
        console.log('Buzz:', n, buzz)

    // stampo "n" per visualizzare i numeri che non sono coinvolti nel calcolo
    } else {
        console.log(n)
    }

}