import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from "../../api"
const ProductDetail = (props) => {
    const params = useParams()
    console.log(params);

    const id = params.id

    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        api.get("/product/" + id).then((res) => {
            console.log(res);
            setProductDetail(res.data)
        }).catch(error => {
            console.log(error);
        })
    }, id)

    const renderData = () => {
        if (Object.keys(productDetail).length > 0) {
            return (
                <div className='flex flex-wrap justify-center items-center bg-white p-6 rounded-lg shadow-md dark:bg-slate-800' key={productDetail.id}>
                    {/* product img */}
                    <div className='w-[500px] md:w-1/2 p-4'>
                        <img className="w-[500px] h-full object-cover rounded-lg" src={productDetail.image} alt="Product Image" />
                    </div>
                    {/* <!-- Product Details --> */}
                    <div className="w-full md:w-1/2 p-6">
                        {/* <!-- Product Title --> */}
                        <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">{productDetail.title}</h1>
                        {/* <!-- Product Price --> */}
                        <p className="text-2xl text-green-600 font-semibold mb-6">{productDetail.price}$</p>

                        {/* <!-- Product Description --> */}
                        <p className="text-gray-700 mb-6 dark:text-white">This is a detailed description of the product. It covers all the key features, benefits, and highlights that make the product appealing to potential buyers.</p>

                        {/* <!-- Quantity Selector --> */}
                        <div className="flex items-center mb-6">
                            <label for="quantity" className="mr-4 font-semibold text-gray-700 dark:text-white">Quantity:</label>
                            <input id="quantity" type="number" value="1" min="1" className="w-16 p-2 border rounded text-center text-gray-800" />
                        </div>

                        {/* <!-- Buttons --> */}
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">Buy Now</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='dark: bg-slate-800'>
            <div className='container mx-auto pt-10 pb-10 dark:bg-slate-800'>
                {renderData()}
            </div>
        </div>
    )
}

export default ProductDetail