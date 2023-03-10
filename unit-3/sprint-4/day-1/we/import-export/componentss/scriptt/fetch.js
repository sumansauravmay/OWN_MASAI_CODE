let getData=async(url)=>{

    let res=await fetch(url);
    let data=await res.json();
data=data.sort((a,b)=>{
    // return a.price-b.price;
    return a.title>b.title? 1 : a.title<b.title?-1:0;
})
    return data;
}


let append=(data,cont)=>{

    data.forEach(({image,title,price})=>{

        let img=document.createElement("img")
        img.src=image;
    
        let title2=document.createElement("h4")
        title2.innerText=title;
    
        let price2=document.createElement("p")
        price2.innerText=price;
    
        let div=document.createElement("div")
        div.append(img,title2,price2);
        cont.append(div);
    })
}
// export default getData;
export {getData,append};