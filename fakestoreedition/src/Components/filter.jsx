import { useRef } from "react";

function FilterDropDown({originalProduct,setshowProduct}) {
    const selectRef=useRef(null)
    const handelSelect=()=>{
        let selectvalue=selectRef.current.value
        if(selectvalue=='all'){
            setapplyPagination(!applyPagination)
            setshowProduct(originalProduct)
            return
        }
        let searchProduct=originalProduct.filter((product)=>product.category.includes(selectRef.current.value))
        setshowProduct(searchProduct)
       
    }
    return (  
        <>
        <select onChange={handelSelect} ref={selectRef}  className="selectdropdown">
            <option value="all">All</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
        </select>
        </>
    );
}

export default FilterDropDown;