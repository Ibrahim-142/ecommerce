
const CartItem = ({ cartitem }) => {
  return (
    <div className="md:flex items-stretch py-8 border-t border-gray-200">

      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={cartitem.image}
          alt={cartitem.name}
          className="w-full h-64 md:h-full object-cover rounded"
        />
      </div>

      <div className="md:pl-6 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-bold text-gray-800">
            {cartitem.name}
          </p>

          <select
            aria-label="Select quantity"
            className="py-2 px-2 border border-gray-300 focus:outline-none"
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>

        <p className="text-sm text-gray-600 pt-2">
          {cartitem.longDescription}
        </p>

        {cartitem.colors && (
          <p className="text-sm text-gray-600 py-2">
            Select Color:
            <select className="bg-gray-100 p-1 rounded-2xl">
              {cartitem.colors.map((color, index) => (
                <option key={index}>{color}</option>
              ))}
            </select>
          </p>
        )}

        <p>
          Select Size:
          <select className="bg-gray-100 p-1 rounded-2xl">
            {cartitem.sizes.map((size, index) => (
              <option key={index}>{size}</option>
            ))}
          </select>
        </p>

        <p>
          {cartitem.inStock ? (
            <span className="text-green-600 font-semibold">
              In Stock ({cartitem.stockCount} available)
            </span>
          ) : (
            <span className="text-red-600 font-semibold">
              Out of Stock
            </span>
          )}
        </p>

        <p>
          Rating: {cartitem.rating} / 5 ({cartitem.reviewCount} reviews)
        </p>

        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center space-x-5">
            <button className="text-sm underline text-gray-800 cursor-pointer">
              Add to Cart
            </button>
            <button className="text-sm underline text-red-500 cursor-pointer">
              Remove
            </button>
          </div>

          <p className="text-lg font-bold text-gray-800">
            ${cartitem.price}
          </p>
        </div>

      </div>
    </div>
  );
};

export default CartItem;