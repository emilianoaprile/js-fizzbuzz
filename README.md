# Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


### stampare in console log una scala di numeri da 1 a 100 col ciclo for escludendo lo 0
- inizializiamo una variabile n = i + 1 per escludere lo zero
### stampare fizz - buzz - fizz buzz
- FIZZ - BUZZ - FIZZ BUZZ:

    - dentro al ciclo for inizializiamo una variabile Fizz con un modulo (n % 3)
    - dentro al ciclo for inizializiamo una variabile Buzz con un modulo (n % 5)
    - dentro ciclo for inizializiamo una variabile fizzBuzz con modulo (n % 15), in questo modo prenderemo i numeri da 1 a 100 che sono divisibili sia per 3 che per 5
    
    - SE fizzBuzz = 0 
        stampa FIZZBUZZ
    - ALTRIMENTI SE fizz = 0 
        stampa FIZZ
    - ALTRIMENTI SE buzz = 0
        stampa BUZZ
    - ALTRIMENTI 
        stampa il valore di n 

    

