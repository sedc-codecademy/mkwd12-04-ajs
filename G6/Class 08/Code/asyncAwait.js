function waitSomeTime(delayInMiliseconds){
    
    //we tell that there is some delayed code in this function
    //it will end eventually, but we don't know how (success, failure)
    return new Promise((resolve, reject) => {
        if(delayInMiliseconds<0){
            reject("The delay cannot be negative")  //Promise goes into failure/rejected status
        }else{
            setTimeout(function(){
                resolve(`Message after ${delayInMiliseconds} miliseconds`); //Promise goes into state Fulfilled
            }, delayInMiliseconds)
        }
    })
}

//beacuse there is part of the code that we waint to waitSomeTime
//we put that code in printAllMessages
//the rest of the code will not wait for waitSomeTime to finish
async function printAllMessages(){
    let message = await waitSomeTime(3000);//(3) js sees te await keyword - this is delayed
    console.log(`Wait some time message response: ${message}`) //(5)
}

console.log("Message at the start"); //(1)
printAllMessages(); //(2) the call of printAllMessages
console.log("The last message"); //(4)