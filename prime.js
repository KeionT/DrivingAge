// Prime
// all number is divided by 1 and it self 

// 5-1=4 never got 0 so 5 is a prime number 

// 5%2=1
// 5%3=2
// 5%4=1

// 6%2=0 2x3=6

// 7 is a prime

// 2-6 possible 

// 7%2=1 
// 7%3=1
// 7%4=3
// 7%5=2
// 7%6=1

let num = 7;
let isprime = true;

for (let i = 2; i <= (num/2); i++)
// what is the remainder when you divde num by 1
 {
    if (num % i ===0)
    {
        isprime = false;
         break;
    }
 }

    if (isprime === false)
        {
           console.log(num + ' is not prime');
        }
    else 
        {
            console.log(num + ' is prime');
        }