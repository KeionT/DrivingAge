let num = 0R
if (num > 0) 
{   
    if (num > 100) 
    {
        console.log(num + " is greater than 100") 
    }
    else if (num==100) 
    {
        console.log(num+ " is equal to 100 ")    
    }
    else
    {
        console.log(num + " is less than 100")
    }
}// end of outer if condtion . closing of upper level conditions
else if( num < 0)
{
    console.log(num + " is a negative number")
}
else
{
    console.log(num + " is zero")
}