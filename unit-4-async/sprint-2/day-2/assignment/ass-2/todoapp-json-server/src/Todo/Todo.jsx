import React from "react";

function Todo() {
  const [title, setTitle] = React.useState("");
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getTodos(page);
  }, [page]);

  const getTodos = (page = 1) => {
    setIsLoading(true);
    return fetch(`https://infinite-brushlands-51927.herokuapp.com/api/todo?_page=${page}&_limit=2`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addTodos = (title) => {
    const payLoad = {
      title,
      status: false
    };

    setIsLoading(true);
    return fetch(
      `https://infinite-brushlands-51927.herokuapp.com/api/todo?_page=${page}&_limit=5`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payLoad)
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return getTodos();
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <div>...Loading</div>
  ) : isError ? (
    <div>Something went Wrong</div>
  ) : (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Todo"
        />
        <button onClick={() => addTodos(title)}>Add</button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{`${item.title} - ${item.status}`}</li>
        ))}
      </ul>
      
      <h1>page : {page}</h1>
      <button onClick={() => setPage(page + 1)}>Inc</button>
      <button disabled={page===1} onClick={()=>setPage(page-1)}>Dec</button>
    </div>
  );
}
export default Todo;
