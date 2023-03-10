// // API = https://jsonplaceholder.typicode.com/comments

const container=document.querySelector("#container")

    let limit = 10;
    let pageCount = 1;
    let postCount= 1;
    
    const showData = ()=>{
        setTimeout(()=>{
            pageCount++;
            getData()
        },2000)
    }

    const getData = async ()=>{
        
          const res =  await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${pageCount}`)
          const data =  await res.json()

          data.forEach((item)=>{
            const htmlData = `
            <div id="posts">
                <h2 id="post_id">${postCount++}</h2>
                <p id="post_body">Name:-${item.name}</p>
                <p id="post_body">Body:-${item.body}</p>
            </div>
            `
            container.insertAdjacentHTML("beforeend",htmlData)
        })
       
}

getData()


window.addEventListener("scroll",()=>{
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
    // console.log(scrollHeight)
    if(scrollTop+clientHeight>=scrollHeight){
        console.log("I am Suman Saurav")
        showData()
    }
})


