import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {useState} from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"
import { Card, CardHeader, CardContent, } from "./ui/card";
import { Button } from "./ui/button";
import styles from "@/Css/ReservationForm.module.css";


interface ReservationFormProps {
  addBooking: (booking: { 
    roomType: string; 
    checkInDate: string; 
    checkOutDate: string 
  }) => Promise<void>;
}

interface RoomType {
  value: string;
  label: string;
  image: string;
  price: string;
}
  
  const ReservationForm: React.FC<ReservationFormProps> = ({ addBooking }) => {
    const [checkInDate, setCheckInDate] = useState<string>('');
    const [checkOutDate, setCheckOutDate] = useState<string>('');
    const [roomType, setRoomType] = useState<string>('standard');

    const roomTypes: RoomType[] = [
      {
        value: 'Standard',
        label: 'Standard Room',
        image: 'Images/Room1-min.jpg',
        price: '$100/night'
      },
      {
        value: 'Deluxe',
        label: 'Deluxe Suite',
        image: 'Images/Room2-min.jpg',
        price: '$200/night'
      },
      {
        value: 'Executive',
        label: 'Executive Suite',
        image: 'Images/Room3-min.jpg',
        price: '$300/night'
      }
    ];
    
    const selectedRoom = roomTypes.find(room => room.value === roomType) || roomTypes[0];
  
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

        const newBooking = {
            roomType,
            checkInDate,
            checkOutDate,
        };
        
        try {
          // Await the addBooking call to ensure it completes before clearing the form
          await addBooking(newBooking);
          console.log("Booking successfully added");
      
          // Clear form fields after successful booking
          setCheckInDate('');
          setCheckOutDate('');
          setRoomType('Standard');
        } catch (error) {
          console.error("Failed to add booking:", error);
        }
      };





    return (
        <>
        <Card className={styles.ReservationCardContainer}>
          <CardHeader>
            <h1>Reservation Form</h1>
          </CardHeader>
          <CardContent className={styles.CardContent}>
            <div className={styles.imgContainer}>
              {/*Card Image */}
              <img src={selectedRoom.image} alt={selectedRoom.label} />
            </div>
            <form onSubmit={handleSubmit} className={styles.FormContainer}>
              <div className={styles.RoomTypeSelector}>
                <Label htmlFor="roomType">Room Type</Label>
                <Select
                  value={roomType}
                  onValueChange={setRoomType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Room Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map(room => (
                      <SelectItem key={room.value} value={room.value}>
                        {room.label} - {room.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className={styles.CheckContainer}>
                <div>
                  <Label htmlFor="checkInDate">Check-in Date</Label>
                  <Input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                <Label htmlFor="checkout-date">Check-Out Date</Label>
                <Input
                  type="date"
                  id="checkout-date"
                  name="checkout-date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                />
                </div>
              </div>
              <Button type="submit" className={styles.button}>Book Now</Button>
            </form>
          </CardContent>
        </Card>
        </>
     
    );
  };
  
  export default ReservationForm;