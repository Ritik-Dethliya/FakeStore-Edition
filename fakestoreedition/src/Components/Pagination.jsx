import { useEffect, useState } from "react";

function Paginatin({showProduct,setPaginateddata}) {
    let [pagebtn,setPageBtn]=useState(null)
    
    useEffect(()=>{
        let totalPage
        if(showProduct.length>5){
            totalPage=Math.floor(showProduct.length/5)
        }
        else{
            totalPage=1
        }
        setPageBtn(()=>new Array(totalPage).fill(0))
        handelPageChange(0)
    },[showProduct])

    const handelPageChange=(page)=>{
        console.log(page)
        let data=showProduct.slice(page*5,page*5+5)
        console.log(showProduct)
        setPaginateddata(data)
    }
    return (  
        <>
            <div className="btn-container">
                {pagebtn && pagebtn.map((btn,indx)=>{
                    return(
                        <button onClick={()=>handelPageChange(indx)}>{indx+1}</button>
                    )
                })}
            </div>
        </>
    );
}

export default Paginatin;