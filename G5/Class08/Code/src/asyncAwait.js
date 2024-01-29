function waitSomeTime(delayInMiliseconds){
    //we tell that there is some delayed code in this function
    //it will end eventually, but we don't know how (success, failure)
    return new Promise((resolve, reject) => {
        if(delayInMiliseconds < 0){
            reject("The delay can not be negative"); //Promise goes into state Rejected
        }
        else{
            setTimeout(function(){
                resolve(`Message after ${delayInMiliseconds} miliseconds`); //Promise goes into state Fulfilled
            }, delayInMiliseconds);
        }
    })
}

function greeting(){
    console.log("Finally, the end!");
}

//because waitSomeTime returns Promise, we can await her
//because there is part of the code that we want to wait for waitSomeTime
//we put that code in printAllMessage
//the rest of the code that is outside will not wait for waitSomeTime to finish
async function printAllMessages(){
    let message = await waitSomeTime(4000); //(3) - js sees the await keyword
    console.log(`WaitSomeTime message: ${message}`); //3rd message (5)
    greeting(); //4th messsage (6)
}

console.log("Message at the start of the code"); //1st message   //(1)
printAllMessages();  //(2) - the call of printAllMessages will be executed
console.log("This is the very last message for today's class"); //2nd message (4)


