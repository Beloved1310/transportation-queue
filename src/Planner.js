import React, { useState, useEffect } from 'react';

const Planner = () => {
  const [dates, setDates] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    // Calculate dates for the next 7 days
    const today = new Date();
    const next7Days = [...Array(7)].map((_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);
      return date.toDateString();
    });
    setDates(next7Days);

    // Initialize slots as a 2D array
    const initialSlots = Array(7).fill([]).map(() => Array(4).fill(null));
    setSlots(initialSlots);
  }, []);

  const handleDrop = (e, dateIndex, slotIndex) => {
    e.preventDefault();
    const customer = JSON.parse(e.dataTransfer.getData('customer'));
    const updatedSlots = [...slots];
    updatedSlots[dateIndex][slotIndex] = customer;
    setSlots(updatedSlots);
  };

  return (
    <div className="w-2/3 p-4">
      <h2 className="text-xl font-semibold  text-blue-500">Planner</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {dates.map((date, dateIndex) => (
          <div key={dateIndex} className="col-span-1 md:col-span-1">
            <div className="bg-gray-200 p-2 text-center rounded-t-lg">
              <h3 className="text-lg font-semibold">{date}</h3>
            </div>
            <div className="flex flex-row flex-wrap border border-t-0 rounded-b-lg">
              {slots[dateIndex].map((slot, slotIndex) => (
                <div
                  key={slotIndex}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, dateIndex, slotIndex)}
                  className="border p-2 w-full bg-gray-100 cursor-pointer"
                >
                  {slot ? (
                    <div>
                      <p>{slot.name}</p>
                      <p className="text-sm">{slot.pickUpLocation}</p>
                      <p className="text-sm">{slot.dropOffLocation}</p>
                    </div>
                  ) : (
                    'Empty Slot'
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;
