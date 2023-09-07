import React, { FC } from "react";

const GetProducts: FC<any> = ({ product }) => {
    return (
        <div
            className="p-5 border border-gray-300"
            key={product.id}
        >
            <p>
                {product.product}
            </p>

            <p>
                $ {product.price}
            </p>
        </div>
    )
};

export default GetProducts;