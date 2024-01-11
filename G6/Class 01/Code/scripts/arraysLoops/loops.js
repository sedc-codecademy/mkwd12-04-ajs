//while
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

let array=["Tijana", "Roze", "Nikola", "Jana", 1, true];
i = 0; ///we need to reset the value of i
while(i < array.length){
    console.log(array[i]);
    i++;
}

//do-while
i=0;
do{
    console.log(i);
    i++;
}while(i<10)


//for
for(let j=0; j< array.length; j++){
    console.log(array[j]);
}

for(let element of array){
    console.log(element);
}