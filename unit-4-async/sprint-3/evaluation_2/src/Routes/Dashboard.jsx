import React from "react";
import Loader from "../Components/Loader";
import {AuthContext} from "../Context/AuthContext";
import ProductItem from "../Components/ProductItem";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";
// import {useSearchParams} from "react-router-dom";




function Dashboard() {
  const {token}=React.useContext(AuthContext)

  const [data,setData]=React.useState([]);
    const [total,setTotal]=React.useState()
    const [page,setPage]=React.useState(1);
  const [loading,setLoading]=React.useState(false);
 const [orderBy,setOrderBy]=React.useState("")

 const sort="price";

  React.useEffect(()=>{
    setLoading(true)
    let apiUrl;
    if(orderBy)
    {
      apiUrl=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`
    }
    
    fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res);
       setTotal(res.totalPages)
      console.log(res)
      setLoading(false)
    })
  },[page]);
  
  if(loading)
  {
    return <Loader/>
  }

  const onChange=(val)=>{
    const value=page+val;
    setPage(value)
  }



  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" onClick={()=>setOrderBy("asc")}>Sort low to high</button>
      <button data-testid="high-to-low" onClick={()=>setOrderBy("desc")}>Sort high to low</button>
      </div>
      <br />
      <br />
      <Pagination current={page} totalPage={total} onChange={onChange}/>
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Loader /> */}
        <ProductList/>
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
      {
        
        data && data?.data &&
        data?.data.map((el)=>(
         
      <ProductItem key={el.id} id={el.id}
  image={el.image}
  title={el.title}
  price={el.price}   
  category={el.category}
      />  
      
        ))
       
      } 
    </div>
  );
}

export default Dashboard;
