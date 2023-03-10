import React, { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { productdel } from '../redux/dashboard.action';

const Dashboard = () => {
    const dispatch=useDispatch();
    const productall=useSelector((store)=>store.products)
    
console.log(productall)
    useEffect(()=>{
        dispatch(productdel())
    },[]);
    

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard