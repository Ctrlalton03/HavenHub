import '../Css/Home.css'
import { Link } from 'react-router-dom';
import VertSearchBar from '@/Components/VerticalSearchbar';
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
                    <p>Welcome to HavenHub, your sanctuary of luxury and comfort. Experience unparalleled hospitality and exquisite amenities designed to make your stay unforgettable.</p>                    <div id='VerticalSearchBarContainer'>
                        <VertSearchBar onSearch={handleSearch} />
                    </div>
                    
                </div>

            </section>
            
            <section className='Hotel-hero-section'>
                <div className="content-section">
                    <h1>Welcome to HavenHub</h1>
                    <p>Immerse yourself in unparalleled luxury and exceptional comfort at HavenHub, where modern elegance meets world-class hospitality. From our lavish suites to our bespoke services, every detail is designed to provide you with a refined and unforgettable experience. Whether you're here for business, leisure, or a special occasion, our top-rated hotel offers the perfect retreat for relaxation and indulgence.</p>
                    <div className="button-Container">
                        <Button className="Custom-button"><Link to="/rooms">Book Now</Link></Button>
                        <Button className="Custom-button"><Link to="/rooms">See Our Avaliable Rooms</Link></Button>
                    </div>
                    <SearchBar onSearch={handleSearch} />
                    <p>
                        At HavenHub, we offer an unparalleled experience, 
                        blending comfort with sophistication. From luxurious 
                        accommodations to world-class amenities, every detail 
                        is crafted for your perfect stay.
                    </p>
                </div>
                <div className="Desktop-View">
                    <div className="div1">
                        <h1>Welcome to HavenHub</h1>
                        <p>Immerse yourself in unparalleled luxury and exceptional comfort at HavenHub, where modern elegance meets world-class hospitality. From our lavish suites to our bespoke services, every detail is designed to provide you with a refined and unforgettable experience. Whether you're here for business, leisure, or a special occasion, our top-rated hotel offers the perfect retreat for relaxation and indulgence.</p>
                        </div>
                    <div className="div2">
                        <img src="../Images/OutsideView-min.jpg" alt="Hotel Front Desk" />
                        <SearchBar onSearch={handleSearch} />
                    </div>
                    <div className="div3">
                        <div id="Content-underimage-description">
                        <p>At HavenHub, we pride ourselves on offering an unparalleled experience that seamlessly blends comfort with sophistication. Step into a world of refined elegance, where every aspect of your stay is meticulously curated to ensure the highest level of satisfaction. Our luxurious accommodations are designed to provide the ultimate in relaxation, while our world-class amenities cater to your every need, whether you're here for leisure or business. From personalized services to fine dining, rejuvenating spa treatments, and state-of-the-art facilities, every detail is thoughtfully crafted to make your stay not just memorable, but extraordinary. Experience the perfect balance of indulgence and hospitality at HavenHub, where your comfort is our top priority.</p>
                            <div className="button-Container">
                                <Button className="Custom-button"><Link to="/rooms">Book Now</Link></Button>
                                <Button className="Custom-button"><Link to="/rooms">See Our Avaliable Rooms</Link></Button>
                            </div>
                        </div>
                        <div id="ImageDescriptionContainer">
                            <img src="../Images/RelaxArea-min.jpg" alt="Hotel Front Desk" />
                        </div>
                    </div>
                    

                </div>

            </section>
            <section className="Services-Amenities-Container">
                <h1>Services and Amenities for Our Guests</h1>
                <div className="Services-Amenities-Content">
                    <div className="image-container-services">
                        <div className="Services-Amenities-Image-right">
                            <img src="../Images/Spa2-min.jpg" alt="Services and Amenities" />
                        </div>
                    </div>
                    <div className="Services-Amenities-Description">
                        <h1>Where Elegance Meets Unmatched Hospitality</h1>
                        <p>At HavenHub, we are dedicated to providing our guests with a truly exceptional experience. From the moment you arrive, our team is committed to ensuring your stay is nothing short of perfect. Our range of services and amenities are designed to cater to your every need, whether you're here for business or leisure. From personalized concierge services to fine dining, rejuvenating spa treatments, and state-of-the-art facilities, every detail is crafted to make your stay unforgettable. Discover the perfect blend of luxury and comfort at HavenHub, where your satisfaction is our top priority.</p>
                        <Button><Link to="/services">Learn More</Link></Button>
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
            <section className='Dining-Area-Container'>
                <h1>Dining & Cuisine</h1>
                <div className="Dining-Area-Content">
                    <div className="image-container-dining">
                        <div className="Dining-Area-Image-left">
                            <img src="../Images/DiningOut-min.jpg" alt="Dining Area" />
                        </div>
                    </div>
                    <p>
                        Indulge in a culinary journey at HavenHub, where 
                        exquisite flavors and world-class service come together. 
                        Our dining options cater to every palate, from elegant fine 
                        dining experiences to casual poolside refreshments. Discover 
                        delicious cuisine crafted with the freshest ingredients, 
                        ensuring every meal is a memorable one. Learn more about our 
                        dining experiences and see what's on the menu.
                    </p>
                    <Button><Link to="/dining">Explore Dining Options</Link></Button>
                </div>
            </section>
            <section className='Nearby-Attraction-container'>
                <h1>Explore Nearby Attractions & Activities</h1>
                <div className="Nearby-Attraction-Content">
                    <div className="image-container-attractions">
                        <div className="Nearby-Attraction-Image-right">
                            <img src="../Images/Amenities1-min.jpg" alt="Nearby Attractions" />
                        </div>
                    </div>
                    <div className="Nearby-Attraction-Description">
                        <p>
                            Discover the vibrant surroundings of HavenHub, where 
                            endless adventures await. From cultural landmarks to 
                            outdoor excursions, our hotel is conveniently located 
                            near a variety of attractions and activities. Explore 
                            the local area, discover hidden gems, and immerse 
                            yourself in the beauty of your surroundings. Whether 
                            you're seeking relaxation or adventure, there's 
                            something for everyone to enjoy.
                        </p>
                        <Button><Link to="/attractions">Explore Nearby Attractions</Link></Button>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Home