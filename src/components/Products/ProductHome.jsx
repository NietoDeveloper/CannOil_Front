import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import api from "../../api"

const ProductHome = () => {

    const navigate = useNavigate()
    const [product, setProduct] = useState({})

    useEffect(() => {
        api.get("/product/list")
            .then(res => {
                setProduct(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const handleProductClick = (id) => {
        navigate(`product/${id}`)
    }

    const renderProduct = () => {
        if (Object.keys(product).length > 0) {
            return Object.keys(product).slice(0, 5).map((key, index) => {
                return (
                    <div
                        data-aos="fade-up"
                        // data-aos-deplay={data.aosDeplay}
                        onClick={() => handleProductClick(product[key].id)}
                        key={product[key].id} className='space-y-3'>
                        <img src={product[key].image} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                        <h3 className='font-semibold dark:text-white'>{product[key].title}</h3>
                        <span className='text-sm text-gray-600'>{product[key].color}</span>
                        <div className='flex justify-between'>
                            <span className='dark:text-white flex items-center gap-1'><FaStar className='text-yellow-400' />{product[key].rate}</span>
                            <span className='dark:text-white'>{product[key].price}$</span>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className='dark:bg-green-950 pt-14 -scroll-mb-12 pb-20'>
            <div className='container'>
                {/* header product */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-primary text-sm'>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Productos</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nisi quia cum!</p>
                </div>
                {/* body product */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* cart product */}
                        {renderProduct()}
                    </div>
                    {/* button all product */}
                    <div
                        className='flex justify-center'>
                        <button
                            className='mt-10 text-center cursor-pointer bg-primary rounded-md text-white py-1 px-5'
                        ><Link to={"/product/list"}>Todos Nuestros Productos</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHome