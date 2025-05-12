import type { FC } from "react";
import type {IProduct} from "../../models/IProduct.ts";

type MyPropType = {
    product:IProduct,
}

const ProductComponent:FC<MyPropType> = ({product}) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default ProductComponent;
