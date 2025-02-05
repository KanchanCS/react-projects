import React,{useEffect, useState} from 'react'
import './Product.css'

const ApiProductList = () => {
   
    const [productItem, setproductItem] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data=>setproductItem(data))
    })

    return (
        <div>
        <div className='cart'>
            { 
                productItem.map((product) => {
                    return (
                        <div className='product' key={product.id}>
                        <div className='product-img'>
                            <img src={product.image} alt='' style={{ width: '70%' }} />
                        </div>
                        <div className='produc-details'>
                            <p className='product-title'>{product.title}</p>
                            <p className='product-price'>Price: {product.price}</p>
                            </div>
                            <button>Add</button>
                    </div>
                    )
                })
            }
            </div>
            </div>
    )
    
}

export default ApiProductList;