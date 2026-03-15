import Card from '../components/Card';
const Homepage = ({ products }) => {
  return (
    <>
      <div className="min-h-screen p-6 flex justify-center flex-col ">
        <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {products.map((product, index) => (
            <Card
              key={index}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Homepage;
