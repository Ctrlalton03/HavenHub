import '../Css/Home.css'
import { Link } from 'react-router-dom';
import VertSearchBar from '@/Components/VerticalSearchbar';
import '../Css/Searchbar.module.css';
import SearchBar from '@/Components/SearchBar';
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";



const OffersPackages = [
    {
        id: 1,
        name: 'Deluxe Suite Escape',
        description:'Our Deluxe Suite is ideal for couples or solo travelers looking for a relaxing retreat. Enjoy a spacious suite with premium bedding, a city view, and a complimentary bottle of wine on arrival.',
        price: 299,
        sellingOffer: 'Stay 3 nights and save 15% off your total bill.',
        img: '../Images/Room1-min.jpg'
    },
    {
        id: 2,
        name: 'Executive Suite Experience',
        description: 'Upgrade your stay in our Executive Suite, offering additional space and luxurious amenities for business or leisure travelers. Experience enhanced comfort and privacy in our exclusive suite.',
        price: 399,
        sellingOffer: 'Book 2 nights and receive a $100 dining credit to use at our fine dining restaurant or lounge.',
        img: '../Images/Room2-min.jpg'
        
    },
    {
        id: 3,
        name: 'Spa Retreat',
        description: 'For the ultimate in luxury, the Presidential Suite is designed for guests who seek the finest. Indulge in panoramic views, elegant furnishings, and premium services throughout your stay.',
        price: 499,
        sellingOffer: 'Book 2 nights and get the 3rd night free, plus a private spa treatment for two.',
        img: '../Images/Room3-min.jpg'
    },
]

const Home = () => {

    const handleSearch = (searchData : {checkInDate: string; checkOutDate: string; guests: number }) => {
        console.log("Search Data: ",searchData);
    }

    return (
        <div>
            
            <section className='WelcomeSection'>
                <div className="Welcome-content">
                    <h1>HavenHub</h1>
                    <p>Your perfect escape starts here.</p>            
                </div>
                <div className="Welcome-content-desktop">
                    <h1>Where Comfort Meets Elegance</h1>
                    <p>Your perfect escape starts here. Discover luxury, style, and unforgettable experiences at HavenHub </p>
                </div>

            </section>
            <section className='AboutHotelSection'>
                <div className='AboutHotelContainer'>
                    <div className="AboutHotelImageContainer">
                        <div className='AboutHotelImgContainerRow2'>
                            <div className="ImageCircular2">
                                <img src="../Images/Doorman1-min.jpg" alt="Services and Amenities" />
                            </div>
                            <div className="ImageCircular2">
                                <img src="../Images/OasisLounge1-min.jpg" alt="Services and Amenities" />
                            </div>
                            <div className="ImageCircular2">
                                <img src="../Images/Spa2-min.jpg" alt="Services and Amenities" />
                            </div>
                        </div>
                        <div className='AboutHotelImgContainerRow1'>
                            <div className="ImageCircular">
                                <img src="../Images/HotelLobby(Home)-min.jpg" alt="Services and Amenities" />
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="AboutHotelContent">
                        <h1>About HavenHub</h1>
                        <p>Nestled in the heart of the city, HavenHub offers a perfect blend of luxury and comfort. Our elegantly designed rooms and top-notch amenities cater to both leisure and business travelers, ensuring a memorable stay. Enjoy exquisite dining, relax at our rooftop lounge, or rejuvenate in our spa – there's something for everyone.</p>
                        <p>Discover why HavenHub is more than just a place to stay; it's an experience to savor.</p>
                        <Button><Link to="/about">Read More about our story and Offerings</Link></Button>
                    </div>

                </div>

            </section>
            
           
            <section className="Services-Amenities-Container">
                <div className="AmenitiesRow1">
                    <div className="serviceHeader">
                        <h1>Services and Amenities for Our Guests</h1>
                    </div>
                    <div className="Services-Amenities-Content">
                        <div className="image-container-services">
                            <div className="Services-Amenities-Image-left">
                                <img src="../Images/HavenResturant-min.jpg" alt="Services and Amenities" />
                            </div>
                        </div>
                        <div className="Services-Amenities-Description">
                            <h2>Savor the Flavors of fine dining</h2>
                            <p>At HavenHub, dining is more than just a meal—it's an experience. Our world-class restaurants offer a culinary journey that caters to all tastes, featuring dishes crafted by renowned chefs using the freshest local ingredients. Whether you're enjoying a casual breakfast, a business lunch, or an elegant dinner, each dish is designed to delight your palate. Indulge in a range of dining options, from gourmet international cuisine to local specialties, paired with an extensive selection of fine wines. Experience the perfect fusion of flavor, ambiance, and service, making every meal at HavenHub truly unforgettable.</p>
                            <Button><Link to="/services">Learn More</Link></Button>
                        </div>
                    </div>
                </div>
                <div className="AmenitiesRow2">
                    <div className="Services-Amenities-Content2">
                        <div className="image-container-services2">
                            <div className="Services-Amenities-Image-right">
                                <img src="../Images/Spa2-min.jpg" alt="Services and Amenities" />
                            </div>
                        </div>
                        <div className="Services-Amenities-Description2">
                            <h2>Where Elegance Meets Unmatched Hospitality</h2>
                            <p>At HavenHub, we are dedicated to providing our guests with a truly exceptional experience. From the moment you arrive, our team is committed to ensuring your stay is nothing short of perfect. Our range of services and amenities are designed to cater to your every need, whether you're here for business or leisure. From personalized concierge services to fine dining, rejuvenating spa treatments, and state-of-the-art facilities, every detail is crafted to make your stay unforgettable. Discover the perfect blend of luxury and comfort at HavenHub, where your satisfaction is our top priority.</p>
                            <Button><Link to="/services">Learn More</Link></Button>
                        </div>
                    </div>
                </div>
                <div className="AmenitiesRow1">
                    <div className="Services-Amenities-Content">
                        <div className="image-container-services">
                            <div className="Services-Amenities-Image-left">
                                <img src="../Images/Activites-min.jpg" alt="Services and Amenities" />
                            </div>
                        </div>
                        <div className="Services-Amenities-Description">
                            <h2>Discover Exciting Activities and Local Attractions</h2>
                            <p>At HavenHub, the adventure extends beyond the comfort of your room. Whether you're looking to relax or explore, we offer a wide range of activities to suit every interest. Enjoy on-site experiences such as a refreshing swim in our rooftop pool, a workout in the state-of-the-art fitness center, or a rejuvenating spa session. For those eager to explore the local area, our prime location provides easy access to nearby attractions, from historic landmarks and cultural sites to shopping districts and scenic nature trails. Discover endless opportunities for excitement and relaxation, all within reach at HavenHub.</p>
                            <Button><Link to="/services">Learn More</Link></Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Offers-container'>
                <div className="OffersHeader">
                    <h1>Exclusive Offers & Packages </h1>
                    <p>
                    Discover a range of exclusive deals that elevate your stay at HavenHub. Our specially curated packages are designed to provide exceptional value, combining luxury accommodations with unique benefits that cater to your individual needs. Whether you’re seeking a romantic getaway, a relaxing retreat, or an upscale business stay, we offer the perfect blend of comfort, convenience, and indulgence. Experience our personalized services, enjoy premium amenities, and explore everything HavenHub has to offer with exclusive rates and limited-time promotions. Unwind, indulge, and make every moment of your stay truly unforgettable.
                    </p>
                </div>
                <div className="CardContainer">
                {OffersPackages.map((offer) => (
                    <Card className='OffersCard'>
                        <CardHeader className='Card-Header'>
                            <img src={offer.img} alt={offer.name} />
                            <CardTitle>{offer.name}</CardTitle>
                        </CardHeader>
                            
                        <CardContent className='Specials-content'>
                        <CardDescription>{offer.description}</CardDescription>
                            <p>{offer.sellingOffer}</p>
                        </CardContent>
                        <CardFooter className='Learn-btn'>
                            <Button><Link to="/rooms">Learn More</Link></Button>
                        </CardFooter>
                    </Card>
                ))}
                </div>
                
            </section>
            <section className='ContactUsSection'>
                <div className="ContactUsContainer">
                <div className="Contactpic">
                    <img src="../Images/Amenities1-min.jpg" alt="Contact Us" />
                </div>
                <div className="ContactFormContainer">
                    <h1>Contact Us</h1>
                    <p>Have a question or need assistance? Our team is here to help. Contact us today and we'll get back to you as soon as possible.</p>
                    <Button><Link to="/">Get In Touch</Link></Button>
                </div>
                </div>

            </section>
           
        </div>
    )
}

export default Home