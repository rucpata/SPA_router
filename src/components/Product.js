import React from 'react'

const Product = (props) => {
    return (
        <article className='product'>
            <h2>{props.id}</h2>
        </article>
    )
}

export default Product;