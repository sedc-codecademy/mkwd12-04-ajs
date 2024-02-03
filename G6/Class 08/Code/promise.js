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

//what we get as responce in then or catch is what we passed into resolve/reject
waitSomeTime(4000)
.then(function(successResponse){
    console.log(successResponse); //here we are waiting the message from the resolve
})
.catch(function(errorResponse){
    console.log(errorResponse);//here we are waiting the message from the reject
})
.finally(function(){
    console.log("This message will be logged anyway"); //finally is executed always
})

waitSomeTime(-4000)
.then(function(successResponse){
    console.log(successResponse); //here we are waiting the message from the resolve
})
.catch(function(errorResponse){
    console.log(errorResponse);//here we are waiting the message from the reject
})
.finally(function(){
    console.log("This message will be logged anyway"); //finally is executed always
})
