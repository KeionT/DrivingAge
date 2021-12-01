//While Loops 
//for(let i=1; i <=10; i++) // i<=10 is the condition statement

// Shorthand

// let i = 1;
// while(i<=10)
// {
//     console.log(i +"hello ")
//     i++
// }

//control comes outside the loop either the loop completes susccesfully or if the loop breaks

// let num=2;
// let i=1
// while(i<=10)
// {
//     console.log(num+ '*' + i + "=" + (num*i))
//     i++
// }

// for (i=0; i<=10; i++)

// {
//     if (i%2== 0) 
//     {
//       console.log(i + "even numbers")    
//     }
//    else 
//    {
//         console.log(i + "odd numbers")
//    }
// }


// for(i=10; i>=0; i--)
// {
//     console.log(i)
// }

// This is prompt  
let prompt = require('prompt-sync')()
let num = prompt('enter a number:')

num = Number(num) // parseInt // converts strings into a number 


let i = num; 
while(i>=5 && i<=10) // as long as this is true it will un the code in the brackets
{
    console.log(i)
    i--    // subtracts the "i" by one effecting the "i" in the loop #decrementing
}


