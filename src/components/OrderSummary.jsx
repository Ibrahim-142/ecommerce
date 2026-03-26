import { useState } from "react";
import { useCart } from "../contexts/CartContext/useCart";
import ShippingForm from "./ShippingFrom";
import axios from "axios";
import { getTotalItems,getTotalPrice,getShippingCost } from "../utils/cart";
import { formatMoney ,totalPriceWithShipping} from "../utils/money";
import { useNavigate } from "react-router";
const OrderSummary = () => {
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const [shippingType,setShippingType] = useState("standard");
  const { cart} = useCart();
  const navigate=useNavigate();
  const totalPriceCent = getTotalPrice(cart);
  const totalItems = getTotalItems(cart);
  let totalPrice=totalPriceWithShipping(totalPriceCent,shippingType);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: ""
  });
  const [errors, setErrors] = useState({});

  const cities = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Multan"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsAddressSaved(true);
      setFormData(formData);
      console.log("Saved Address:", formData);
    }
  };
     const handleShipping = (e) => {
      setShippingType(e.target.value);
    }
  const handleCheckout = () => {
    if (!formData.name || !formData.address || !formData.city || !formData.postalCode) {
      return alert("Please save your shipping address first");
    }

    const formattedCart = cart.map((item) => ({
      name: item.product.name,
      price: item.product.price,
      image: item.product.image,
      quantity: item.count,
    }));

    const totalAmount = totalPrice;
    const shippingCost = getShippingCost(shippingType);
        console.log("shipping cost:",shippingCost)
    console.log("shipping type:",shippingType)
    axios
      .post("/api/orders/placeOrder", {
        cart: formattedCart,
        shippingAddress: formData,
        totalAmount,
        shippingCost,
        shippingType
      },{withCredentials:true})
      .then((response) => console.log("Checkout successful,Order Placed", response.data))
      .catch((error) => console.error("Checkout error:", error));
      navigate("/orders")
  };

  return (
    <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-4 py-6">
      <h1 className="font-semibold text-2xl border-b pb-8">Shipping Address</h1>

      {isAddressSaved? (
        <div className="mt-6 border p-4 text-sm">
          <p className="font-semibold">{formData.name}</p>
          <p>{formData.address}</p>
          <p>{formData.city}</p>
          <p>{formData.postalCode}</p>
          <button
            onClick={() => {
              setIsAddressSaved(false);
            }}
            className="mt-4 bg-gray-500 hover:bg-gray-600 px-4 py-2 text-white text-xs uppercase"
          >
            Change Address
          </button>
        </div>
      ) : (
        <ShippingForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          cities={cities}
        />
      )}

      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items {totalItems} </span>
        <span className="font-semibold text-sm">{formatMoney(totalPriceCent)}</span>
      </div>

      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select 
        value={shippingType}
        onChange={handleShipping}
        className="block p-2 text-gray-600 w-full text-sm">
          <option value="standard">Standard shipping - $10.00</option>
          <option value="express">Express shipping - $20.00</option>
        </select>
      </div>

      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>

      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>{formatMoney(totalPrice)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;