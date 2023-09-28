// src/App.js
import React, { useState } from 'react';
import CustomerList from './CustomerList';
import Planner from './Planner';

function App() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      pickUpLocation: '123 Main St, City, State',
      dropOffLocation: '456 Elm St, City, State',
    },
    {
      id: 2,
      name: 'Jane Dave',
      pickUpLocation: '789 Oak Ave, City, State',
      dropOffLocation: '101 Pine St, City, State',
    },
    {
      id: 3,
      name: 'Bob Ryan',
      pickUpLocation: '555 Maple Rd, City, State',
      dropOffLocation: '777 Cedar Ln, City, State',
    },
    {
      id: 4,
      name: 'Emily Davis',
      pickUpLocation: '222 Willow Dr, City, State',
      dropOffLocation: '333 Birch Rd, City, State',
    },
    {
      id: 5,
      name: 'Michael Brown',
      pickUpLocation: '888 Oak St, City, State',
      dropOffLocation: '999 Pine Ave, City, State',
    },
    // Add more customers here with pickUpLocation and dropOffLocation
  ]);
  

  const [slots, setSlots] = useState(Array(5).fill({ customer: null }));

  const handleDragStart = (e, customer) => {
    e.dataTransfer.setData('customer', JSON.stringify(customer));
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const customer = JSON.parse(e.dataTransfer.getData('customer'));
    const updatedSlots = [...slots];
    updatedSlots[index] = { customer };
    setSlots(updatedSlots);
  };

  return (
    <div className="bg-blue-200 h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl text-white p-4 bg-blue-500 rounded-lg shadow-lg">Transportation Queue</h1>
    <div className="flex justify-center items-center">
      <CustomerList customers={customers} onDragStart={handleDragStart} />
      <Planner slots={slots} onDrop={handleDrop} />
    </div>
  </div>
  
   
  );
}

export default App;
