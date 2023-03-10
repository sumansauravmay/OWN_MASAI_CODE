import React from "react";
import { useParams,Link } from "react-router-dom";



function SingleUserPage() {
  const { user_id } = useParams();
  const [data, setData] = React.useState({});
  const [loading,setLoading]=React.useState(false);

  const getData = (url) => {
    return fetch(url)
    .then((res) => res.json());
  };



  React.useEffect(() => {
    setLoading(true);
    getData(`https://reqres.in/api/users/${user_id}`)
    .then((res)=>{
      setData(res.data)
      setLoading(false)
    })
  }, [user_id]);


if(loading)
{
  return <h1>...Loading</h1>
}

  return (
    <>
      <img src={data.avatar} alt="suman" />

      <p>{data.email}</p>

      <p>{data.first_name} {data.last_name}</p>
      <Link to="/user">Go Back</Link>
    </>
  );
}
export default SingleUserPage;
