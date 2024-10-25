import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {useState} from 'react';


interface ReservationFormProps {
    addBooking: (booking: { roomType: string; checkInDate: string; checkOutDate: string }) => void;
  }
  
  const ReservationForm: React.FC<ReservationFormProps> = ({ addBooking }) => {
    const [checkInDate, setCheckInDate] = useState<string>('');
    const [checkOutDate, setCheckOutDate] = useState<string>('');
    const [roomType, setRoomType] = useState<string>('standard');

    
  
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
          setRoomType('standard');
        } catch (error) {
          console.error("Failed to add booking:", error);
        }
      };





    return (
        <>
         <form className="reservation-form" onSubmit={handleSubmit}>
        <Label htmlFor="checkin-date">Check-In Date:</Label>
        <Input 
        type="date" 
        id="checkin-date" 
        name="checkin-date" 
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        required />
  
        <Label htmlFor="checkout-date">Check-Out Date:</Label>
        <Input 
        type="date" 
        id="checkout-date" 
        name="checkout-date" 
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        required />
  
        <Label htmlFor="room-type">Room Type:</Label>
        <select 
        id="room-type" 
        name="room-type"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        required
        >
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Suite</option>
          <option value="executive">Executive Suite</option>
        </select>
  
        <button type="submit" className="reserve-btn">Book Now</button>
      </form>
        </>
     
    );
  };
  
  export default ReservationForm;