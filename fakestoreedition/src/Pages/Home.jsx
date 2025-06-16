import { useEffect, useState } from "react";
import Search from "../Components/Search";
import FilterDropDown from "../Components/filter";
import '../styles/product.css'

function Home() {
    const [showProduct,setshowProduct]=useState(null)
    const [originalProduct,setOriginalProduct]=useState(null)
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        try {
            let res=await  fetch('https://fakestoreapi.com/products')
            let data=await res.json()
            console.log(data)
            setshowProduct(data)
            setOriginalProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (  
        <>
            <Search originalProduct={originalProduct} setshowProduct={setshowProduct}/>
            <FilterDropDown originalProduct={originalProduct} setshowProduct={setshowProduct}/>
            <div className="product-container">
                {showProduct && showProduct.map((product,index)=>{
                    return(
                        <div className="product-card" key={index}>
                            <img src={product.image} alt='' className="image"/>
                            <div className="price">{product.price}</div>
                            <h3>{product.title}</h3>
                            <p className="description">
                                {product.description}
                            </p>
                        </div>
                    )
                }
                )}
            </div>
        </>
    );
}

export default Home;