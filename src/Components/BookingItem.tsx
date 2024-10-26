import React from 'react';
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import styles from "@/Css/BookingItem.module.css";


interface BookingItemProps {
  roomType: string;
  checkIn: string;
  checkOut: string;
  onRemove: () => void;
}

const BookingItem: React.FC<BookingItemProps> = ({ roomType, checkIn, checkOut, onRemove }) => {


  
  return (
    <div className="booking-item">
      <Card className={styles.CardContainer}>
        <CardHeader className={styles.CardHeaderContainer}>
          <img src="/Images/Bedroom_1.jpg" alt="Room" />
        </CardHeader>
        <CardContent className={styles.CardContentContainer}>
          <h1 id={styles.RoomStylesHeader}>Room Style</h1>
          <CardTitle>{roomType}</CardTitle>
          <p>Check-in: {checkIn}</p>
          <p>Check-out: {checkOut}</p>
        </CardContent>
        <Button className="remove-btn" onClick={onRemove}>Remove</Button>
      </Card>
    </div>
  );
};

export default BookingItem;