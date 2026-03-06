import Card from '../components/Card';  
import { products } from "../data/products";
import axios from 'axios';
const Homepage = () => {
axios.get("http://localhost:3000/api/products")
.then((response)=>{
    console.log(response.data);
})

    return (
         <>
    <div className="min-h-screen p-6 flex justify-center flex-col ">
      <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
           {products.map((product,index) => (
        <Card
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
      </div>
    </div>
    </>
    )
}

export default Homepage;
