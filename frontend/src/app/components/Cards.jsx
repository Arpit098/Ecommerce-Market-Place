"use client"
import React from 'react';
import Link from 'next/link';
const CardItem = ({ id, name, price }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-6 shadow-lg max-w-xs mx-auto">
      <img
        src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
        alt="image"
        className="w-full h-56 object-cover"
      />
      <div className="p-4 text-center">
        <h3>
          <p
            className="font-semibold text-dark text-lg mb-4 block hover:text-primary"
          >
            {name}
          </p>
        </h3>
        <p className="text-base text-body-color leading-relaxed mb-4">
          ${price}
        </p>
        <Link href={`/ProductInfo/${id}`}
          className="inline-block py-2 px-5 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const Cards = ({ products }) => {
  return (
    <section className="pt-8 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map(product => (
            <CardItem key={product._id} id = {product._id} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
