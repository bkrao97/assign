import React from "react";

function ProductTable({ products }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b-2">
            <th className="text-left text-xs font-normal py-2">Product Name</th>
            <th className="text-left text-xs font-normal py-2">Stocks</th>
            <th className="text-left text-xs font-normal py-2">Price</th>
            <th className="text-left text-xs font-normal py-2">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}  >
              <td className="flex items-center py-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-8 h-8  mr-2"
                />
                <div className=" flex flex-col items-start">
                  <div className="font-bold">{product.name}</div>
                  <p className="text-xs">Customers that buy products</p>
                </div>
              </td>
              <td  className="py-2">{product.stocks}</td>
              <td className="font-bold py-2">${product.price.toFixed(2)}</td>
              <td className="py-2">${product.totalSales.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
