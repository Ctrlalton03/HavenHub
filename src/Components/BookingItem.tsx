import React from 'react';
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, } from "@/Components/ui/card"
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
        <div className={styles.CardimgContentContainer}>
        <CardHeader className={styles.CardHeaderContainer}>
          <img src="/Images/Bedroom_1.jpg" alt="Room" />
        </CardHeader>
        <CardContent className={styles.CardContentContainer}>
          <h1 id={styles.RoomHeader}>Room Style</h1>
          <h1 id={styles.RoomStyles}>{roomType}</h1>
          <div className={styles.checkInContainer}>
            <h2>Check-in:</h2>
            <h1>{checkIn}</h1>
          </div>
          <div className={styles.checkInContainer}>
            <h2>Check-Out:</h2>
            <h1>{checkOut}</h1>
          </div>
        </CardContent>
        </div>
        <Button className="remove-btn" onClick={onRemove}>Remove</Button>
      </Card>
    </div>
  );
};

export default BookingItem;