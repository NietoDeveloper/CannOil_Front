import React from 'react'
import { Link } from 'react-router-dom'

const AddCart = (props) => {

    const { id, onAddToCart } = props
    return (
        <button onClick={() => onAddToCart(id)} className="bg-primary text-white rounded dark:text-black">
            Add to Cart
        </button>
    )
}

export default AddCart