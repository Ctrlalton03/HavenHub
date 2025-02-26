import styles from "../Css/Dashboard.module.css";
import BookingItem from "./BookingItem";
import ReservationForm from "./ReservationForm";
import HotelServices from "./HotelServices";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(""); // Add this to store the user ID
  const location = useLocation();
  const { state } = location;
  const [bookings, setBookings] = useState<any[]>([]);
  const db = getFirestore();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName || state?.username);
        setUserId(user.uid); // Store the user ID
        setIsAuthenticated(true);
        fetchBookings(user.uid);
      } else {
        setIsAuthenticated(false);
        setUserId("");
        setBookings([]);
      }
    });
  }, [state?.username]);

  // Function to add a new booking
  const addBooking = async (newBooking: { roomType: string; checkInDate: string; checkOutDate: string }) => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!userId || !user) {
      console.error("No authenticated user found");
      return;
    }

    try {
      // Save the booking to Firestore with proper user identification
      const bookingData = {
        userId: user.uid,
        username: username,
        timestamp: new Date().toISOString(),
        status: 'active',
        ...newBooking
      };

      const docRef = await addDoc(collection(db, "bookings"), bookingData);

      // Update local state
      setBookings((prevBookings) => [
        ...prevBookings,
        { id: docRef.id, ...bookingData }
      ]);
      
      console.log("Booking added successfully with ID:", docRef.id);
      return; // Return void for confirmation
      
    } catch (error) {
      console.error("Error adding booking: ", error);
      throw error; // Propagate error to handle it in the form
    }
  };

  // Function to fetch bookings from Firestore
  const fetchBookings = async (userId: string) => {
    if (!userId) {
      console.error("No user ID provided for fetching bookings");
      return;
    }

    try {
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", userId),
        where("status", "==", "active")
      );

      const querySnapshot = await getDocs(q);
      const fetchedBookings = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(fetchedBookings);
    } catch (error: any) {
      if (error.code === "permission-denied") {
        console.error("You don't have permission to access these bookings.");
      } else {
        console.error("Error fetching bookings: ", error);
      }
    }
  };

  // Function to remove a booking from Firestore
  const removeBooking = async (index: number) => {
    const bookingToRemove = bookings[index];
    
    if (!bookingToRemove?.id) {
      console.error("No booking ID found for removal");
      return;
    }

    try {
      // Instead of deleting, update the status to 'cancelled'
      const bookingRef = doc(db, "bookings", bookingToRemove.id);
      await deleteDoc(bookingRef);
      
      setBookings((prevBookings) => 
        prevBookings.filter((_, i) => i !== index)
      );
      
      console.log("Booking removed successfully");
    } catch (error) {
      console.error("Error removing booking: ", error);
      throw error;
    }
  };

  if (!isAuthenticated) {
    return <p>Please <Link to="/SignUpForm">Sign In</Link> to access your dashboard.</p>;
  }
  return (
    <div className={styles.Dashboard}>
      <header className="dashboard-header">
        <h1>Welcome, {username || "guest"}</h1>
      </header>

      <main className={styles.dashboardContent}>
        <div className={styles.DashBoardContentInside}>
          {/* Current Bookings Section */}
        <section className={styles.dashboardBookingsContainer}>
          <h2>Current Bookings</h2>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <BookingItem
                key={booking.id}
                roomType={booking.roomType}
                checkIn={booking.checkInDate}
                checkOut={booking.checkOutDate}
                onRemove={() => removeBooking(index)}
              />
            ))
          ) : (
            <p>No bookings available. Make a new reservation!</p>
          )}
        </section>

        {/* Make a New Reservation Section */}
        <section className={styles.dashboardReservation}>
          <h2>Make a New Reservation</h2>
          <ReservationForm addBooking={addBooking}  />
        </section>
        </div>

        <div className={styles.FooterArea}>
          {/* Hotel Services Section */}
          <section className={styles.DashboardServices}>
            <h2>Hotel Services</h2>
            <HotelServices />
          </section>

          {/* Contact and Support Section */}
          <section className={styles.dashboardSupport}>
            <h2>Contact & Support</h2>
            <p>
              If you need help, please visit our <a href="#">Help Center</a> or{" "}
              <a href="#">Contact Support</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2024 HavenHub. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default Dashboard;