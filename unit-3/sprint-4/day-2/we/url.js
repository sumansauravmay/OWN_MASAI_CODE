// let url="https://example.com?foo=1&bar=2";

// let u=new URL(url);
// console.log(u)
// let params=new URLSearchParams(u.search);
// console.log(params)
// let f=params.get("foo")
// console.log(`foo:-${f}`);
// console.log(f)


function searchparams(url,param){
    let u=new URL(url)
    let params=new URLSearchParams(u.search);
    
    let f=params.get(param)
    
   return f;
}
export default searchparams;