import { style } from 'framer-motion/client';
import styles from '../Css/HotelServicesSelection.module.css';

const GuestTestimonal = () => {


    const GuestUsers = [
        {
            user: "James",
            testimonal:"The spa services at Haven Hub were exceptional. The staff was attentive and professional, and the massage was one of the best I've ever had. Highly recommended!"
        },
        {
            user: "Taylor",
            testimonal:"The spa services at Haven Hub were exceptional. The staff was attentive and professional, and the massage was one of the best I've ever had. Highly recommended!"
        },
    ]

    return(
        <>
        
        <div>
            <h1>What Our Guests have to say</h1>
            <div className={styles.GuestTestimonalContainer}>
                <ul className={styles.GuestList}>
                    {GuestUsers.map((HotelGuest) => (
                        <li
                        key={HotelGuest.user}
                        className={styles.HotelUserBox}
                        >
                            {HotelGuest.user}
                            {HotelGuest.testimonal}
                        </li>
                    ))}
                </ul>
            </div>
        </div>



        </>
    )






}


export default GuestTestimonal