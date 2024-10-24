import React from 'react';

interface BookingItemProps {
  roomType: string;
  checkIn: string;
  checkOut: string;
}

const BookingItem: React.FC<BookingItemProps> = ({ roomType, checkIn, checkOut }) => {
  return (
    <div className="booking-item">
      <p>Room: {roomType}</p>
      <p>Check-in: {checkIn}</p>
      <p>Check-out: {checkOut}</p>
      <button className="manage-btn">Manage Booking</button>
    </div>
  );
};

export default BookingItem;