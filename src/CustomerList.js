// src/components/CustomerList.js
import React from 'react';

const CustomerList = ({ customers, onDragStart }) => {
  return (
    <div className="w-1/3 p-4 border-r">
      <h2 className="text-xl  text-blue-500 font-semibold">Customer List</h2>
      <table className="w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Customer ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Pick Up Location</th>
            <th className="p-2">Drop Off Location</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              draggable
              onDragStart={(e) => onDragStart(e, customer)}
              className="bg-white hover:bg-gray-100 cursor-pointer"
            >
              <td className="p-2">{customer.id}</td>
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.pickUpLocation}</td>
              <td className="p-2">{customer.dropOffLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
