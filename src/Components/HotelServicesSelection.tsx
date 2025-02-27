
import styles from '@/Css/HotelServicesSelection.module.css'
import { useState } from 'react'







const HotelServices = () =>{

    const HotelServicesCategories = [
        {
            id:1, 
            category: "Accommdation",
            services: [
                {
                    id: "Acc-1", 
                    title: "Luxury Rooms",
                    details: "Spacious rooms with premium bedding, modern amenities, and stunning views.",                
                },
                {
                    id: "Acc-2",
                    title: "24/7 Room Service",
                    details: "Round-the-clock room service to cater to your needs at any hour.",
                },
                {
                    id: "Acc-3",
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
                    title: "Fitness Center",
                    details: "State-of-the-art fitness equipment and personal training sessions available.",
                },
                {
                    id: "Well-2",
                    title: "Spa & Wellness",
                    details: "Rejuvenating spa treatments, sauna, and relaxation areas for ultimate pampering.",
                },
                {
                    title:"Yoga Classes",
                    details:"Daily yoga and meditation sessions led by certified instructors.",
                },
            ],
        },
        {
            id: 3,
            category: "Dining",
            services: [
                {
                    id: "Din-1",
                    title: "Gourmet Restaurant",
                    details: "",
                },
                {
                    id: "Din-2",
                    title: "Cafe & Bar",
                    details: "",
                },
                {
                    id: "Din-3",
                    title: "Skyline Bar",
                    details: "",
                },

            ]
        }
    ]
    
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)





    return (
        <>
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
        </>
    )




}

export default HotelServices