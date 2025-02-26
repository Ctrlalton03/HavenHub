import { useEffect, useRef } from 'react';
import styles from '../Css/AboutUs.module.css';
import { Link } from 'react-router-dom';


const AboutUs: React.FC = () => {

    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['fade-in-visible']);
                } else {
                    entry.target.classList.remove(styles['fade-in-visible']);
                }
            });
        };

        const options = {
            threshold: 0.25,
        };

        const observer = new IntersectionObserver(callback, options);

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const setSectionRef = (element: HTMLDivElement | null, index: number): void => {
        if (element) sectionsRef.current[index] = element;
    };





    return (
        <div>
            <div className={styles.AboutUsPageContainer}>
                <div className={styles.AboutUsPageContentContainer}>
                    <div className={styles.WelcomeHeader}>
                        <div className={styles.WelcomeContent}>
                            <h1>About</h1>
                            <p>Welcome to HavenHub, a premier hotel dedicated to providing guests with a truly exceptional experience. From the moment you arrive at our luxurious reception, you'll be embraced by a blend of comfort and sophistication that sets us apart. Our mission is to make every stay unforgettable, offering personalized services and world-class amenities that cater to your every need.</p>
                        </div>
                        <div className={styles.ImageBreaker}>
                        <img src="../Images/AboutPageDesk.jpg" alt="Hotel" />
                        </div>
                    </div>
                    
                    <div className={`${styles.CommitmentList} ${styles['fade-in']}`} ref={(el) => setSectionRef(el, 0)}>
                        <div className={styles.CommitmentListContent}>
                            <h2>Our Commitment to Excellence</h2>
                            <p>At HavenHub, your satisfaction is our top priority. Whether you're visiting for business, leisure, or a special event, we offer a range of services designed to ensure your stay is nothing short of perfect:</p>
                            <ul>
                                <li>
                                    <h3>Personalized Concierge Services</h3>
                                    Our dedicated concierge team is here to assist with travel arrangements, dining reservations, and local activity recommendations.
                                </li>
                                <li>
                                    <h3>Luxurious Accommodations</h3>
                                    Choose from our selection of well-appointed rooms, including Deluxe, Executive, and Presidential Suites, each featuring elegant décor and modern amenities.
                                </li>
                                <li>
                                    <h3>Fine Dining</h3>
                                    Enjoy a culinary journey at our on-site restaurant, where each dish is crafted with the finest ingredients for a memorable dining experience.
                                </li>
                                <li>
                                    <h3>Rejuvenating Spa Treatments</h3>
                                    Indulge in relaxation at our spa, offering a variety of treatments to help you unwind and rejuvenate.
                                </li>
                                <li>
                                    <h3>State-of-the-Art Facilities</h3>
                                    Stay fit at our fully equipped gym, host meetings in our business center, or relax in our stylish lounge areas.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.ImageContainerTowels}>
                            <img src="../Images/AboutPageTowels.jpg" alt="Towels" />
                        </div>
                    </div>
                    
                    {/* Our Story */}
                    <div className={`${styles.OurStoryContainer} ${styles['fade-in']}`} ref={(el) => setSectionRef(el, 1)}>
                        <h1>Our Story</h1>
                        <p>HavenHub was founded on the principles of luxury and hospitality. With a commitment to exceeding expectations, we have grown into a top-rated destination known for our impeccable service, beautifully designed spaces, and attention to detail. Each aspect of our hotel has been thoughtfully curated to create a welcoming environment where guests feel pampered and valued.</p>
                        <div className={styles.WhyHavenHubContainer}>
                            <h2>Why Chose HavenHub?</h2>
                            <ul>
                                <li>
                                    <h3>Prime Location</h3>
                                    Situated in the heart of Cityville, HavenHub offers easy access to the city's finest attractions, entertainment, and business hubs.
                                </li>
                                <li>
                                    <h3>Unforgettable Experiences</h3>
                                    From curated activities to exclusive offers, we create opportunities for memorable moments throughout your stay.
                                </li>
                                <li>
                                    <h3>Attention To Detail</h3>
                                    Every aspect of our hotel is designed to ensure your comfort, from luxurious bedding to personalized service.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.OurServices} ${styles['fade-in']}`} ref={(el) => setSectionRef(el, 2)}>
                        <h1>Our Services & Amenities</h1>
                        <p>HavenHub goes beyond providing a place to stay—we offer an experience that leaves a lasting impression:</p>
                        <ul>
                            <li>
                            Room Options: Select from the Deluxe Suite, Executive Suite, or Presidential Suite, each offering unique features and special deals for an enhanced stay.
                            </li>
                            <li>
                            Dining & Culinary Delights: Savor fine dining at our on-site restaurant, or enjoy room service with a selection of local and international cuisine.
                            </li>
                            <li>
                            Activities & Attractions: Discover nearby attractions, from cultural landmarks to scenic parks, or partake in on-site activities to enrich your stay.
                            </li>
                        </ul>
                    </div>  
                    <div className={`${styles.OurVisionContainer} ${styles['fade-in']}`} ref={(el) => setSectionRef(el, 3)}>
                        <h1>Our Vision</h1>
                        <p>At HavenHub, we aim to redefine luxury hospitality by continuously elevating the guest experience. Our vision is to create a space where elegance, comfort, and exceptional service come together seamlessly, making us the preferred choice for travelers from around the world.</p>
                    </div>
                    
                    <div className={styles.ConnectContainer}>
                        <h1>Connect with Us</h1>
                        <p>We invite you to explore more about HavenHub by visiting our <Link to="/">Contact Us</Link> page or checking out our Offers & Specials to make your stay even more delightful.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;