import React from 'react'

const Pokemondel = () => {
    const [datadel,setDatadel]=React.useState({})

    const getData=(name)=>{
        return fetch(`https://pokeapi.co/api/v2/pokemon?name=${name}`)
        .then((res)=>res.json())
        .then((res)=>{
            setDatadel(res.datadel)
            console.log(res.results)
        })
    }
React.useEffect(()=>{
    getData()
},[])

  return (
    <div>Pokemondel</div>

  )
}

export default Pokemondel