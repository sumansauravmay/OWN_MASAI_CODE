import React from "react";
import {Link,useSearchParams} from "react-router-dom";

const getPagefromUrl=(value)=>{
value=Number(value)
if(typeof value==="number" && value<=0)
{
    value=1
}
if(!value)
{
value=1
}
return value;
}

const getUrl=(url,sort,orderBy,filterBy)=>{

    if(orderBy && sort && filterBy)
    {
        url=`${url}&_sort=${sort}&_order=${orderBy}&category=${filterBy}`;
    }
    else if(orderBy && sort)
    {
        url=`${url}&_sort=${sort}&_order=${orderBy}`;
    }
   else if(filterBy)
   {
    url=`${url}&category=${filterBy}`
   }
return url;
}

function Products(){
    const [data,setData]=React.useState([])
     const [totalCount,setTotalCount]=React.useState(0)
    const [searchParams, setSearchParams] = useSearchParams();
    const [page,setPage]=React.useState(
        getPagefromUrl(searchParams.get("page"))||1
    )
   

const limit=2;
const sort="price";

const [orderBy,setOrderBy]=React.useState("")
const [filterBy,setFilterBy]=React.useState("")


React.useEffect(()=>{
    let apiUrl=getUrl(
        `http://localhost:3001/Products?_page=${page}&_limit=${limit}`,
        sort,
        orderBy,
        filterBy
    )
    
    fetch(apiUrl)
    .then((res)=>{
        // console.log(Number(res.headers.get("X-Total_Count")))//from netword request
         setTotalCount(Number(res.headers.get("X-Total-Count")))
       return res.json()
    })
    .then((res)=>{
        setData(res)
        // console.log(res)
    })
},[page,orderBy,filterBy])

React.useEffect(()=>{
    let paramsObj={page}
if(orderBy)
{
    paramsObj.orderBy=orderBy;
}
if(paramsObj.filterBy)
{
    paramsObj.filterBy=filterBy;
}
    setSearchParams(paramsObj)
},[page,orderBy,filterBy])

    return (
        <div>
        <button onClick={()=>setOrderBy("asc")}>Asc by price</button>
        <button onClick={()=>setOrderBy("")}>Reset</button>
        <button onClick={()=>setOrderBy("desc")}>Dsc by price</button>
        <br/>
        <br/>
        <button onClick={()=>setFilterBy("jewelery")}>filter by jeweleery</button>
        <button onClick={()=>setFilterBy("clothing")}>filter by clothing</button>
        <button onClick={()=>setFilterBy("electronics")}>filter by electronics</button>
        <button onClick={()=>setFilterBy("")}>Reset</button>
        <div style={{display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        width:"300px",
        marginLeft:"100px",
        gap:"100px"}}>
           
            {
                data.map((item)=>(
                <div key={item.id}>
                    <img style={{width:"500px",marginTop:"30px",height:"400px"}} 
                    src={item.image} alt="suman"/>
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                    <Link to={`products/${item.id}`}>See More</Link>
                </div>
                ))
            }
           
        </div>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
            <button>{page}</button>
            <button disabled={page===Math.ceil(totalCount/2)} onClick={()=>setPage(page+1)}>NEXT</button>
            <br/>
            <br/>
</div>

    )
}
export default Products;


// title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//             "price": 109,
//             "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//             "category": "electronics",
//             "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//             "rating