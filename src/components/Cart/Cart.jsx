import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import api from '../../api';
import { toast } from 'react-toastify';
const Cart = () => {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            api.post('/cart/products', cart).then(res => {
                setData(res.data)
            })
        }
    }, [])

    useEffect(() => {
        const totalProduct = data.reduce((total, value) => {
            const price = Number(value.price) || 0; // Chuyển đổi về số nếu có thể
            const qty = Number(value.quantity) || 0; // Chuyển đổi về số nếu có thể
            return total + (price * qty);
        }, 0);
        console.log(data);

        setTotal(totalProduct)
    }, [data])


    const handleIncrease = (id) => {
        const newData = data.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )

        setData(newData)
        const getCart = JSON.parse(localStorage("cart")) || {}
        if (getCart[id] && getCart[id] > 1) {
            getCart[id] += 1
        }
        localStorage.setItem("cart", JSON.stringify(getCart))
        let tongQty = Object.values(getCart).reduce((sum, qty) => sum + qty, 0)
        localStorage.setItem("tongqty", JSON.stringify(tongQty))
    }

    const hanldeReduce = (id) => {
        const newData = data.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
            .filter(item => item.quantity > 0)
        setData(newData)

        const getCart = JSON.parse(localStorage.getItem("cart")) || {}
        if (getCart[id] && getCart[id] > 1) {
            getCart[id] -= 1
        } else {
            delete getCart[id]
        }
        localStorage.setItem("cart", JSON.stringify(getCart));
        console.log(getCart);
        let tongQty = Object.values(getCart).reduce((sum, qty) => sum + qty, 0);
        localStorage.setItem("tongQty", JSON.stringify(tongQty));
    }

    const hanldeDelete = (e) => {
        // Lấy ID từ sự kiện
        let id = e.currentTarget.id
        if (!id) {
            console.error("ID không được tìm thấy!");
            return;
        }

        const newData = data.filter(item => item.id.toString() !== id);
        if (newData.length === data.length) {
            console.warn(`Sản phẩm với ID ${id} không tồn tại.`);
            return;
        }

        let cart = localStorage.getItem('cart');
        if (cart) {
            cart = JSON.parse(cart);
            delete cart[id]; // Xóa sản phẩm khỏi cart
            localStorage.setItem("cart", JSON.stringify(cart)); // Lưu lại vào localStorage
        }
        setData(newData)
        toast.success("Delete successfully")
    }

    const handleQuantityChange = (index, event) => {
        const newQuantity = event.target.value;
        const newData = [...data];
        newData[index].quantity = newQuantity; // Cập nhật số lượng
        setData(newData); // Cập nhật trạng thái
    };

    const renderData = () => {
        if (Object.keys(data).length > 0) {
            return Object.keys(data).map((item, i) => {
                return (
                    <>
                        {/* <!-- Sản phẩm 1 --> */}
                        <tr className="border-b transition duration-300" key={item}>
                            <td className="py-2 px-6 flex items-center">
                                <img className="w-20 h-20 rounded-md mr-4 shadow" src={data[item].image} alt="Product Image" />
                                <span className="text-lg font-semibold text-gray-800 dark:text-white">{data[item].title}</span>
                            </td>
                            <td className="py-2 px-6">
                                <div className="flex items-center justify-center border-gray-300 rounded">
                                    <button type='button' className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300" onClick={() => hanldeReduce(data[item].id)}>-</button>
                                    <input type="text" className="w-12 text-center border-none outline-none" value={data[item].quantity} onChange={(event) => handleQuantityChange(index, event)} />
                                    <button type='button' className="px-2 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300" onClick={() => handleIncrease(data[item].id)}>+</button>
                                </div>
                            </td>
                            <td className="py-2 px-6 text-center">
                                <span className="text-lg font-semibold text-gray-800 dark:text-white" id={data[item].id}>{data[item].quantity * data[item].price}$</span>
                            </td>
                            <td className="py-2 px-6 text-center">
                                <button className="text-red-500 hover:text-red-600 transition duration-300"
                                    id={data[item].id}
                                    onClick={hanldeDelete}><MdDelete className='text-3xl' /></button>
                            </td>
                        </tr>
                    </>
                )
            })
        }
    }
    return (
        <div className="container mx-auto dark:bg-slate-800">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Shopping Cart</h1>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-slate-800">
                <thead className="bg-gray-200 dark:bg-slate-800">
                    <tr>
                        <th className="py-4 px-6 text-left text-lg font-semibold text-gray-700 dark:text-white">Product</th>
                        <th className="py-4 px-6 text-lg font-semibold text-gray-700 dark:text-white">Quantity</th>
                        <th className="py-4 px-6 text-lg font-semibold text-gray-700 dark:text-white">Price</th>
                        <th className="py-4 px-6 text-lg font-semibold text-gray-700 dark:text-white">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Sản phẩm 1 --> */}
                    {renderData()}
                </tbody>
            </table>

            {/* <!-- Tổng thanh toán --> */}
            <div className="mt-8 bg-white shadow-lg rounded-lg p-6 dark:bg-slate-800">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h2>

                <div className="flex justify-between border-b pb-2 dark:text-white">
                    <p className="text-lg">Subtotal:</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{total}$</p>
                </div>

                <div className="flex justify-between border-b py-2 dark:text-white">
                    <p className="text-lg">Shipping:</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">$5</p>
                </div>

                <div className="flex justify-between border-b py-2">
                    <p className="text-lg font-semibold dark:text-white">Total:</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-white">{total + 5}$</p>
                </div>

                <div className="flex justify-end mt-4">
                    <button className="w-[200px] py-3 bg-primary text-white rounded-lg hover:scale-105 transform transition duration-300">Buy</button>
                </div>
            </div>
        </div>

    )
}

export default Cart