async function getData(data) {
if(data)
{
    try{
        if(data%2!==0)
        setTimeout(() => {
            // console.log(data)
        },2000);
    }
    catch{
        if(data%2===0)
        {
            setTimeout(() => {
                // resolve(data)
            },4000);
        }
        
    }
}
else{
    setTimeout(() => {
        
    }, 1000);
}

}
   

export default getData
