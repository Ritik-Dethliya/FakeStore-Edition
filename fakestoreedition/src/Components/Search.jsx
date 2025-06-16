import { useEffect, useRef } from "react";

function Search({originalProduct,setshowProduct}) {
    let inputref=useRef(null)
    useEffect(()=>{

    },[])

    function debounce(fn,delay){
        let timer
        return function(...arg){
           clearTimeout(timer)
            timer=setTimeout(()=>{
                fn.apply(arg)
            },delay)
        }
    }
    
    let inputDebounce=debounce(handelInput,2000)
    
    function handelInput(){
        let searchProduct=originalProduct.filter((product)=>product.title.toLowerCase().includes(inputref.current.value.toLowerCase()))
        setshowProduct(searchProduct)
    }
    return (  
        <>
            <input type="text" className="search" ref={inputref} onChange={inputDebounce}/>
        </>
    );
}

export default Search;