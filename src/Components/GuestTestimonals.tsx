import styles from '../Css/HotelServicesSelection.module.css';
import Taylor from '@/Images/taylorHeadshot.jpg'
import James from '@/Images/James.jpg'


const GuestTestimonal = () => {


    const GuestUsers = [
        {
            user: "James",
            image: James,
            testimonal:"The spa services at Haven Hub were exceptional. The staff was attentive and professional, and the massage was one of the best I've ever had. Highly recommended!"
        },
        {
            user: "Taylor",
            image: Taylor,
            testimonal:"The spa services at Haven Hub were exceptional. The staff was attentive and professional, and the massage was one of the best I've ever had. Highly recommended!"
        },
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