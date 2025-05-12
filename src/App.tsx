import './App.css'
import {products} from "./data/productsList.ts";
import ProductComponent from "./components/my-product/ProductComponent.tsx";

function App() {

  return (
    <div>
      {
        products.map((product, index) => <ProductComponent product={product} key={index}/>)
      }
    </div>
  )
}

export default App
