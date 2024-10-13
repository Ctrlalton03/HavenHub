import { useState } from "react";
import "../Css/VertSearchbar.css";
import { Button } from "@/Components/ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


interface SearchBarProps {
    onSearch: (searchData: { checkInDate: string; checkOutDate: string; guests: number }) => void;
}

const vertSearchBar :React.FC<SearchBarProps> = ({onSearch}) => {

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const searchData ={
            checkInDate,
            checkOutDate,
            guests
        };
    

    onSearch(searchData); // Sends search data to parent component
    };

    return (
    <form className="vert-search-bar" onSubmit={handleSubmit}>
        <div className="vert-form-input">
        <Label htmlFor="CheckInDate">Check-In Date</Label>
        <Input
        type="text"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        placeholder="Check-in Date"
        onFocus={(e) => e.target.type = "date"}
        onBlur={(e) => e.target.type = "text"}
        required
        />
        </div>
        <div className="vert-form-input">
        <Label htmlFor="CheckOutDate">Check-Out Date</Label>
        <Input
        type="text"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        placeholder="Check-out Date"
        onFocus={(e) => e.target.type = "date"}
        onBlur={(e) => e.target.type = "text"}
        required
        />
        </div>
        <div className="vert-form-input">
        <Label htmlFor="Guests">Guests</Label>
        <Input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            placeholder="Guests"
            required
            min="1"
        />

        </div>
       
        <Button type="submit">Search Now</Button>
    </form>
    );
};


export default vertSearchBar;
