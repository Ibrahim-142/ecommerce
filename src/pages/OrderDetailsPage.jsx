import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { calculateOrderSubtotal } from "../utils/order.js";
import { formatMoney } from "../utils/money.js"
const orderData = {
    id: 125103,
    date: 'May 21, 2023',
    address: "123 Main St,LKASHFLAKJSFH, KJADSFKJHASKJFHASKJHFKJAHS,Springfield, USA,UKLSFSA,KLADSKFAS,123412",
    tracking: [
        { step: 'Order Placed', date: '20 May, 2024', completed: true },
        { step: 'Picked', date: '22 May, 2024', completed: true },
        { step: 'Packed', date: '23 May, 2024', completed: true },
        { step: 'Order Shipped', date: '28 May, 2024', completed: false },
        { step: 'Order Delivered', date: '2 Jun, 2024', completed: false },
    ],
    items: [
        {
            name: 'Pure Cotton Regular Fit T-Shirt',
            size: 'M',
            color: 'White',
            qty: 2,
            price: 40,
            image: 'https://pagedone.io/asset/uploads/1718189222.png',
        },
        {
            name: 'Men Skinny Fit Stretchable Jeans',
            size: '32',
            color: 'Blue',
            qty: 1,
            price: 52,
            image: 'https://pagedone.io/asset/uploads/1718189265.png',
        },
        {
            name: 'Men Checked Cotton Casual Shirt',
            size: 'M',
            color: 'Dark Blue',
            qty: 1,
            price: 22,
            image: 'https://pagedone.io/asset/uploads/1718189276.png',
        },
        {
            name: 'Men Colourblocked PU Sneakers',
            size: '38',
            color: 'Green & Gray',
            qty: 1,
            price: 56,
            image: 'https://pagedone.io/asset/uploads/1718189288.png',
        },
    ],
    shipping: 10,
    tax: 22,
};

const OrderDetailsPage = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const { data } = await axios.get(`/api/orders/${id}`);
                setOrder(data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchOrder();
    }, [id]);
    if (!order) {
        return <div className="text-center py-20">Loading...</div>;
    }
    console.log("Order:", order)
    const subTotal = calculateOrderSubtotal(order?.cart || []);

    return (
        <section className="py-24 relative bg-gray-100">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto ">
                <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
                    {/* Header */}
                    <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-12">
                        {/* Order Info */}
                        <div className="flex flex-col sm:items-start items-center gap-2">
                            <h2 className="text-gray-500 font-semibold font-manrope">
                                Order# <span className="text-indigo-600">{orderData.id}</span>
                            </h2>
                            <p className="text-gray-500 text-base font-medium leading-relaxed">{orderData.date}</p>
                        </div>

                        {/* Shipping Address */}
                        <div className="flex flex-col sm:items-start items-center gap-2 max-w-full sm:max-w-xs">
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                Shipping Address
                            </h6>
                            <p className="text-gray-900 text-base font-medium leading-relaxed text-center sm:text-left">
                                {order.shippingAddress.name}, {order.shippingAddress.address},{" "}
                                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                            </p>
                        </div>
                    </div>

                    {/* Tracking and Items */}
                    <div className="w-full justify-end items-start gap-8 inline-flex">
                        <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                            {/* Order Tracking */}
                            <div className="w-full p-8 bg-white rounded-xl flex-col justify-start items-start gap-5 flex">
                                <h2 className="w-full text-gray-900 text-2xl font-semibold font-manrope leading-9 pb-5 border-b border-gray-200 text-center">
                                    Order Tracking
                                </h2>
                                <div className="w-full flex-col justify-center items-center">
                                    <ol className="flex md:flex-row flex-col md:items-start items-center justify-between w-full md:gap-1 gap-4">
                                        {orderData.tracking.map((track, index) => (
                                            <li
                                                key={index}
                                                className={`group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 ${index < orderData.tracking.length - 1
                                                    ? 'xl:after:left-44 lg:after:left-40 md:after:left-36'
                                                    : ''
                                                    }`}
                                            >
                                                <div className="w-full mr-1  z-10 flex flex-col items-center justify-start gap-1">
                                                    <div className="justify-center items-center gap-1.5 inline-flex">
                                                        <h5
                                                            className={`text-center ${track.completed ? 'text-gray-900' : 'text-gray-500'
                                                                } text-lg font-medium leading-normal`}
                                                        >
                                                            {track.step}
                                                        </h5>
                                                        {track.completed && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M7.5 13L10 15.5L15 8.5"
                                                                    stroke="#047857"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">{track.date}</h6>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            {/* Order Items */}
                            <div className="w-full p-8 bg-white rounded-xl flex-col justify-start items-start gap-5 flex">
                                <h2 className="w-full text-gray-900 text-2xl font-semibold font-manrope leading-9 pb-5 border-b border-gray-200">
                                    Order Items
                                </h2>
                                <div className="w-full flex-col justify-start items-start gap-5 flex pb-5 border-b border-gray-200">
                                    {order.cart.map((item, idx) => (
                                        <div key={idx} className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1">
                                            <div className="md:col-span-8 col-span-12 w-full justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                                                <img className="rounded-md object-cover" src={item.image} alt={item.name} />
                                                <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
                                                    <h4 className="text-gray-900 text-xl font-medium leading-8">{item.name}</h4>
                                                </div>
                                            </div>
                                            <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                                                <h4 className="text-gray-500 text-xl font-semibold leading-8">{formatMoney(item.price)} x {item.quantity}</h4>
                                                <h4 className="text-gray-900 text-xl font-semibold leading-8">{formatMoney(item.price * item.quantity)}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing */}
                                <div className="w-full flex-col justify-start items-start gap-5 flex">
                                    <div className="w-full pb-1.5 flex-col justify-start items-start gap-4 flex">
                                        <div className="w-full justify-between items-start gap-6 inline-flex">
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">Subtotal</h6>
                                            <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">{formatMoney(subTotal)}</h6>
                                        </div>
                                        <div className="w-full justify-between items-start gap-6 inline-flex">
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">Shipping Charge</h6>
                                            <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">{formatMoney(order.shippingCost)}</h6>
                                        </div>
                                        <div className="w-full justify-between items-start gap-6 inline-flex">
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">Shipping Type</h6>
                                            <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">
                                                {order.shippingType.charAt(0).toUpperCase() + order.shippingType.slice(1)}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="w-full justify-between items-start gap-6 inline-flex">
                                        <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">Total</h5>
                                        <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed"></h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetailsPage;