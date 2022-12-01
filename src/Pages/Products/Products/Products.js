import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData();
    const productsData = products.products;
    const [product, setProduct] = useState('');
    const [productModal, setProductModal] = useState(null);
    return (
        <div>
            <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3 my-20'>
            {
                productsData.map(product => <ProductsCard
                key={product.id}
                product={product}
                setProduct={setProduct}
                setProductModal={setProductModal}
                ></ProductsCard>)
            }
        </div>
        {
            productModal &&
            <BookingModal
           productModal={productModal}
           setProductModal={setProductModal}
        ></BookingModal>
        }
        </div>
        
    );
};

export default Products;