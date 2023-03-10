const fs=require("fs")

fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
if(err){
    console.log("file can't be accessed")
    console.log(err)
}
else{
    console.log(data)
}
})



let data2;
try{
    data2=fs.readFileSync("./lecture.txt",{encoding:"utf-8"});
}
catch(err){
    console.log(err)
}


// const data=fs.readFileSync("./lecture.txt",{encoding:"utf-8"});
// console.log(data);
// console.log("good bye!!");

fs.writeFile("./lecture.txt","this is the your second file",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Data has been written")
    }
})



let data3;
try{
    data3=fs.writeFileSync("./lecture.txt","this is the my first node project");
    console.log("data has been entered")
}
catch(err){
    console.log(err)
}


data=fs.appendFile("./lecture.txt","\nthis is the my third node project\n",(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("data appended")
    }
});


