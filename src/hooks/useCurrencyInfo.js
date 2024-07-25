import{useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json`
)
    .then((res)=> res.json())
    .then((res)=>setData(res[currency]))
    console.log(data)
    
},[currency])
console.log(data);
return data
}
export default useCurrencyInfocur   