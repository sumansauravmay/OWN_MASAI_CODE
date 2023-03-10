let data=JSON.parse(localStorage.getItem("mobile_data"))||[];


let append=(data)=>{
    
    let container=document.querySelector("#mobile_list");
    container.innerHTML=null;
    data.forEach((elem,index)=>{

        let img=document.createElement("img");
        img.src=elem.mobile_image;

        let brand=document.createElement("h2")
        brand.innerText=elem.mobile_brand;

        let name=document.createElement("p")
        name.innerText=elem.mobile_name;

        let price=document.createElement("h2")
        price.innerText=elem.mobile_price;


        let btn=document.createElement("button")
        btn.innerText="Remove";
btn.onclick=()=>{
    removefunc(index)
}
        let div=document.createElement("div")

        div.append(img,brand,name,price,btn)
        container.append(div)
    })
}
append(data)

let removefunc=(index)=>{
    let data=JSON.parse(localStorage.getItem("mobile_data"));
    data.splice(index,1);
    localStorage.setItem("mobile_data",JSON.stringify(data))
    append(data)
}

document.querySelector("#sort_lth").addEventListener("click",function(){
    sortltohfunct(data)
})
let  sortltohfunct=(data)=>{
    // console.log(data)
    data.sort((a,b)=>{
        return a.mobile_price-b.mobile_price;
    })
    append(data);
}


document.querySelector("#sort_htl").addEventListener("click",function(){
    sorthtolfunct(data)
})

let  sorthtolfunct=(data)=>{
    // console.log(data)
    data.sort((a,b)=>{
        return b.mobile_price-a.mobile_price;
    })
    append(data);
}
let filter=document.querySelector("#filter")
filter.addEventListener("change",function(){
    if(filter.value=="all")
    {
        append(data)
    }
    else
    {
       let filtered=data.filter(function(elem)
       {
            return elem.mobile_brand=filter.value;
        })
        append(filtered);
    }
})