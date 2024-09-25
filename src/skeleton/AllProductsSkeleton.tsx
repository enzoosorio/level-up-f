import React from 'react'

export const AllProductsSkeleton = () => {

    const simulatedProducts = ['tshirt', 'tshirt', 'tshirt']

  return (
    <div>
       {simulatedProducts.map((tshirt, index) => (
        <div
          key={index}
          className={`relative mt-14 md:mt-16 hover:scale-[1.03] border border-gray-600/45 shadow-lg shadow-gray-500/65 rounded-md p-2 transition-transform ${
            index % 3 === 0
              ? "col-span-2 row-span-1 md:w-[600px] md:mx-auto"
              : "col-span-1 row-span-1 md:w-64 md:mx-auto"
          }`}
        >
          <div className="w-[563px] h-[845px] bg-slate-500/10 rounded-md">
          </div>
        </div>
      ))}
    </div>
  )
}
