import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';  
const Homepage = () => {
    return (
         <>
    <div className="min-h-screen p-6 flex justify-center flex-col ">
      <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </>
    )
}

export default Homepage;
