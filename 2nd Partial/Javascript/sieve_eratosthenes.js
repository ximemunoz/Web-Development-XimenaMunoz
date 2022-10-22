/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

var sieve = function (n) {
    "use strict";

    var array = [], primes = [], upperLimit =Math.sqrt(n);

    // Eratosthenes algorithm (finds all prime numbers smaller than n)
    for (var i = 0; i < n; i++) { //All indexs from 2 to n turn to true
        array.push(true);
    }

    for (var i = 2; i <= upperLimit; i++) { //All multiples of prime numbers turn to false
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) { //All remaining true indexes are primers, they get pushed to de final primes array
        if(array[i]) {
            primes.push(i);
        }
    }


    return primes;
};

console.log(sieve(1000000));
