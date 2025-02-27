import styles from "../Css/OurServices.module.css"
import HotelServices from "@/Components/HotelServicesSelection";

const ServicesPage = () =>{
    return (
        <div>
            <section className={styles.ServicesLandingPage}>
                <div className={styles.ServicesOpeningSection}>
                    <div className={styles.ServicesOpeningText}>
                        <h1>Our Services</h1>
                        <h4>Experience luxury and comfort with our premium services designed 
                            to make your stay unforgettable</h4>
                    </div>
                </div>
            </section>
            <section className={styles.HotelDetails}>
                <div className={styles.HotelDetailsHeader}>
                    <h1>Welcome to Haven Hub</h1>
                    <p>Discover our range of premium services designed to enhance 
                        your stay and provide you with the ultimate comfort and luxury
                        experience.
                    </p>
                </div>
                <HotelServices />
            </section>
        </div>
    );
};

export default ServicesPage;