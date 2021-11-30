let age =15
if (age >=5 && age<=10) {
    console.log("You are in elementary school")
}
else if (age >=11 && age<=13) {
    console.log("You are in middle school")
}
else if (age >=14 && age<=17) //check to see they in high school 1st nested if
    {
   
    if (age >=16) {
        console.log("You are a High Schooler and you also are eligble to drive")
    } else  {
        console.log("You are in High school")
    } 
    // // else if (age <16) {
    // //     console.log("You are not eliglbe to take driver test")
    // }
}
