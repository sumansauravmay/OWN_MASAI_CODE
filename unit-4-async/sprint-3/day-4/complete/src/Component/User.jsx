import React from "react";
import { Link,useSearchParams } from "react-router-dom";


function User() {
  const [data, setData] = React.useState([]);
  const [loading,setLoading]=React.useState(false)
  let [searchParams, setSearchParams] = useSearchParams();
const initialPage=Number(searchParams.get("page")) || 1;
  const [page,setPage]=React.useState(initialPage);

  const getData = (page=1) => {
    setLoading(true)
    return fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setLoading(false)
        setData(res);
      });
  };

  React.useEffect(() => {
    getData(page);
  }, [page]);

  React.useEffect(() => {
    setSearchParams({
      page,
      key:"value",
      limit:6
    })
  }, [page]);

if(loading)
{
  return <h1>...Loading</h1>
}
  return (
    <>
      <h1>User</h1>
      {data?.data?.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt="ima" />
          <h3>{user.first_name}</h3>

          <Link to={`/user/${user.id}`}>
            <button>see more</button>
          </Link>
        </div>
      ))}
    <button disabled={page===1}
    onClick={()=>setPage(page-1)}>PREV</button>
    <button>{page}</button>
    <button disabled={page===2}
    onClick={()=>setPage(page+1)}>NEXT</button>
    </>
  );
}
export default User;
