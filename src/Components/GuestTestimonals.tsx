import styles from '../Css/HotelServicesSelection.module.css';
import Taylor from '@/Images/taylorHeadshot.jpg'
import James from '@/Images/James.jpg'
import Emma from '@/Images/Emma.jpg'


const GuestTestimonal = () => {


    const GuestUsers = [
        {
            user: "James Sampson",
            image: James,
            testimonal:"The dining experience was outstanding. The food was delicious, and the service was impeccable. The skyline bar offers amazing views and great cocktails."
        },
        {
            user: "Taylor Johnson",
            image: Taylor,
            testimonal:"The spa services at Haven Hub were exceptional. The staff was attentive and professional, and the massage was one of the best I've ever had. Highly recommended!"
        },
        {
            user: "Emma Rodriguez",
            image: Emma,
            testimonal: "The concierge service was incredibly helpful. They arranged tours, made restaurant reservations, and provided excellent local recommendations that made our stay perfect."
        }
    ]

    return(
        <>
        
        <div className={styles.GuestContainer}>
            <h1>What Our Guests have to say</h1>
            <div className={styles.GuestTestimonalContainer}>
                <ul className={styles.GuestList}>
                    {GuestUsers.map((HotelGuest) => (
                        <li
                        key={HotelGuest.user}
                        className={styles.HotelUserBox}
                        >
                            <img src={HotelGuest.image} alt={HotelGuest.user} />
                            <h1>{HotelGuest.user}</h1>
                            <p>"{HotelGuest.testimonal}"</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>



        </>
    )






}


export default GuestTestimonal