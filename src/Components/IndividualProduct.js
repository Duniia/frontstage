import React from 'react'

export const IndividualProduct = ({individualProduct, addToCart}) => {
    // console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }   
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.titel}</div>
            <div className='product-text description'>{individualProduct.beskrivelse}</div>
            <div className='product-text price'>kr. {individualProduct.pris}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>Tilføj til kurv</div>
        </div> 
    )
}