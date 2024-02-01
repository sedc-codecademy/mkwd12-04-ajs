function secondConsoleLog(){
    console.log('Second Console Log');
}

//callback function
function callbackFun(){
    setTimeout(function(){
        console.log('First console log');
        setTimeout(secondConsoleLog, 2000);
    }, 2000);
}
// callbackFun();



// function complex() {
//     setTimeout(function() {
//       console.log('1. First thing, preparing for the second');
//       setTimeout(function() {
//         console.log('2. Second thing, preparing for the third');
//         setTimeout(function() {
//           console.log('3. Third thing, preparing for the forth');
//           setTimeout(function() {
//             console.log('4. Forth thing, preparing for the fifth');
//             setTimeout(function() {
//               console.log('5. Fifth thing, preparing for the Sixth');
//               setTimeout(function() {
//                 console.log('6. Sixth and last thing');
//               }, 2000);
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   };

//complex();

//Promises
function waitSomeTime(timeout){
    return new Promise((resolve, reject) =>{
        if(timeout <= 0){
            reject('The timeout can not be negative or zero!');
        }else{
            setTimeout(function() {
                resolve(`Message after ${timeout}milliseconds.`);
            }, timeout);
        }
    });
}

console.log(waitSomeTime(2000));

waitSomeTime(2000)
.then(success => {
    console.log('Wait 2 seconds');
    console.log(success);
})
.catch(error=>{
    console.log('Wait 2 seconds');
    console.log(error);
})
.finally(function(){
    console.log('Finally end.');
})

waitSomeTime(-2000)
.then(success => {
    console.log('Wait 2 seconds');
    console.log(success);
})
.catch(error=>{
    console.log('Wait 2 seconds');
    console.log(error);
})
.finally(function(){
    console.log('Finally end.');
})