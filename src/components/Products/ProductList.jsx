import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api';
import AddCart from '../Cart/AddCart';
import { toast } from 'react-toastify';
const ProductList = () => {
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const paths = useLocation()
    useEffect(() => {
        api.get("/product/list")
            .then(res => {
                setProduct(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const handleAddToCart = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || {}
        cart[id] = (cart[id] || 0) + 1; // Tăng số lượng, khởi tạo là 1 nếu chưa có
        localStorage.setItem('cart', JSON.stringify(cart))

        const totalQty = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
        localStorage.setItem('totalQty', JSON.stringify(totalQty))

        if (cart) {
            toast.success("Added successfully");
        }
    };

    const handleProductClick = (id) => {
        // Điều hướng đến sản phẩm mà không có phần "/list"
        navigate(`/product/${id}`); // Chuyển hướng đến URL mới
    };

    const renderProduct = () => {
        if (Object.keys(product).length > 0) {
            return Object.keys(product).map((key, index) => {
                return (
                    <div
                        data-aos="fade-up"
                        key={product[key].id} className='space-y-3 group'>
                        <img src={product[key].image} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                        <h3 className='font-semibold dark:text-white'>{product[key].title}</h3>
                        <span className='text-sm text-gray-600'>{product[key].color}</span>
                        <div className='flex justify-between'>
                            <span className='dark:text-white flex items-center gap-1'><FaStar className='text-yellow-400' />{product[key].rate}</span>
                            <span className='dark:text-white'>{product[key].price}$</span>
                        </div>
                        <div className='bg-primary rounded-md justify-center mx-auto text-center w-[100px] flex flex-col'>
                            <AddCart id={product[key].id} onAddToCart={handleAddToCart} />
                        </div>
                        <div className='bg-primary rounded-md justify-center mx-auto text-center w-[100px] flex flex-col'>
                            <button onClick={() => handleProductClick(product[key].id)}>Detail</button>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div className='dark:bg-green-950 -scroll-mb-12 pb-20'>
            <ul className='flex justify-center'>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {renderProduct()}
                </div>
            </div>
        </div>
    )
}

export default ProductList