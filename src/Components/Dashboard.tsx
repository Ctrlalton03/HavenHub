
import styles from "../Css/Dashboard.module.css";
import BookingItem from "./BookingItem";
import ReservationForm from "./ReservationForm";
import HotelServices from "./HotelServices";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useLocation } from "react-router-dom";

const dashboard = () => {

    const [username, setUsername] = useState("");
    const location = useLocation();
    const {state} = location;
    const [bookings, setBookings] = useState<any[]>([]);
    
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        // If there is a new booking, add it to the list of bookings
        if (state?.newBooking) {
            setBookings((prevBookings) => [...prevBookings, state.newBooking]);
        }

        // Set the username if it is passed in the state or from the current user
        if (user) {
            setUsername(user.displayName || "User");
        }
    }, [state]);

    // Function to add a new booking
    const addBooking = (newBooking: any) => {
        setBookings((prevBookings) => [...prevBookings, newBooking]);
    };

    

    return (
        <div className={styles.Dashboard}>
            <header className="dashboard-header">
                <h1>Welcome, {username}</h1>
            </header>

            <main className={styles.dashboardContent}>
        {/* Current Bookings Section */}
        <section className="dashboard-section current-bookings">
          <h2>Current Bookings</h2>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <BookingItem
                key={index}
                roomType={booking.roomType}
                checkIn={booking.checkInDate}
                checkOut={booking.checkOutDate}
              />
            ))
          ) : (
            <p>No bookings available. Make a new reservation!</p>
          )}
        </section>

        {/* Make a New Reservation Section */}
        <section className="dashboard-section new-reservation">
          <h2>Make a New Reservation</h2>
          <ReservationForm addBooking={addBooking} />
        </section>

        {/* Hotel Services Section */}
        <section className="dashboard-section hotel-services">
          <h2>Hotel Services</h2>
          <HotelServices />
        </section>

        {/* Contact and Support Section */}
        <section className="dashboard-section support">
          <h2>Contact & Support</h2>
          <p>If you need help, please visit our <a href="#">Help Center</a> or <a href="#">Contact Support</a>.</p>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2024 HavenHub. All rights reserved.</p>
      </footer>
        </div>
    )

}

export default dashboard;