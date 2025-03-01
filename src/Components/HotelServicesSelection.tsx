import styles from '../Css/HotelServicesSelection.module.css';
import { useState } from 'react';
// Add image imports
import LuxuryRoom from '../Images/icons/bed.png';
import Bar from '../Images/icons/bar.png';
import RoomService from '../Images/icons/roomService.png'
import Wifi from '../Images/icons/wifi.png'
import Fitness from '../Images/icons/weights_2871284.png'
import Spa from '../Images/icons/spa.png'
import Yoga from '../Images/icons/yoga.png'
import Cafe from '../Images/icons/Cafe.png'
import Table from '../Images/icons/Table.png'
import Car from '../Images/icons/Car.png'
import Events from '../Images/icons/events.png'
import Concierge from '../Images/icons/concierge.png'

const HotelServices = () =>{

    const HotelServicesCategories = [
        {
            id:1, 
            category: "Accommdation",
            services: [
                {
                    id: "Acc-1",
                    image: LuxuryRoom,
                    title: "Luxury Rooms",
                    details: "Spacious rooms with premium bedding, modern amenities, and stunning views.",                
                },
                {
                    id: "Acc-2",
                    image: RoomService,
                    title: "24/7 Room Service",
                    details: "Round-the-clock room service to cater to your needs at any hour.",
                },
                {
                    id: "Acc-3",
                    image: Wifi,
                    title:"HighSpeed Wifi",
                    details: "Complimentary high-speed internet access throughout the hotel.",
                }
            ],
        },
        {
            id: 2,
            category: "Wellness",
            services: [
                {
                    id: "Well-1",
                    image: Fitness ,
                    title: "Fitness Center",
                    details: "State-of-the-art fitness equipment and personal training sessions available.",
                },
                {
                    id: "Well-2",
                    image: Spa,
                    title: "Spa & Wellness",
                    details: "Rejuvenating spa treatments, sauna, and relaxation areas for ultimate pampering.",
                },
                {
                    id: "Well-3",
                    image: Yoga,
                    title: "Yoga Classes",
                    details: "Daily yoga and meditation sessions led by certified instructors.",
                },
            ],
        },
        {
            id: 3,
            category: "Dining",
            services: [
                {
                    id: "Din-1",
                    image: Table,
                    title: "Gourmet Restaurant",
                    details: "Fine Dining experience with international cuisine prepared by our expert chefs",
                },
                {
                    id: "Din-2",
                    image: Cafe,
                    title: "Cafe & Bakery",
                    details: "Fresh pastries, specialty coffees, and light snacks in a relaxed atmosphere",
                },
                {
                    id: "Din-3",
                    image: Bar,
                    title: "Skyline Bar",
                    details: "Enjoy handcrafted cocktails and premium spirits with panoramic city views",
                },

            ]
        },
        {
            id: 4,
            category: "Additional",
            services: [
                {
                    id: "Add-1",
                    image: Car,
                    title: "Airport Transfer",
                    details: "Convenient airport pickup and drop-off service in luxury vehicles.",
                },
                {
                    id: "Add-2",
                    image: Events,
                    title: "Event Spaces",
                    details: "Versatile venues for meetings, weddings, and special occasions.",
                },
                {
                    id: "Add-3",
                    image: Concierge,
                    title: "Concierge Service",
                    details: "Personalized assistance for local recommendations, reservations, and tours.",
                },

            ]
        }
    ]
    
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)





    return (
        <div className={styles.CategoryContainer}>
            <div className={styles.SelectorBox}>
                <ul>
                    {HotelServicesCategories.map((CategoryName) => (
                        <li
                        key={CategoryName.id}
                        className={`${styles.CategorySelector} ${
                            selectedCategory === CategoryName.category ? styles.selectedCategory : ""
                        }`}
                        onClick = {() => setSelectedCategory(CategoryName.category)}
                        >
                            {CategoryName.category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.CategoryCardContainer}>
                {HotelServicesCategories.find((CategoryName) => CategoryName.category === selectedCategory)
                ?.services.map((service) => (
                    <div
                        key={service.id}
                        className={styles.CategoryServiceCards}
                    >
                        <img src={service.image} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.details}</p>    
                    </div>
                ))
                }
            </div>
        </div>
    )




}

export default HotelServices