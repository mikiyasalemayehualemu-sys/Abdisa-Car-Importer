export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    price: string;
    image: string;
    specs: string[];
}

export const cars: Car[] = [
    {
        id: 1,
        make: "Toyota",
        model: "Land Cruiser 300",
        year: 2024,
        price: "Inquire for Price",
        image: "/images/land-cruiser-300.png",
        specs: ["Diesel", "Automatic", "V6 Twin Turbo"]
    },
    {
        id: 2,
        make: "Nissan",
        model: "Patrol Nismo",
        year: 2023,
        price: "Inquire for Price",
        image: "/images/nissan-patrol.png",
        specs: ["Petrol", "Automatic", "V8"]
    },
    {
        id: 3,
        make: "Toyota",
        model: "Hilux GR-S",
        year: 2024,
        price: "Inquire for Price",
        image: "/images/toyota-hilux.png",
        specs: ["Diesel", "Automatic", "4WD"]
    },
    {
        id: 4,
        make: "Nissan",
        model: "X-Trail",
        year: 2023,
        price: "Inquire for Price",
        image: "/images/nissan-xtrail.png",
        specs: ["e-POWER", "Automatic", "AWD"]
    },
    {
        id: 5,
        make: "Toyota",
        model: "Corolla Cross",
        year: 2023,
        price: "Inquire for Price",
        image: "/images/toyota-corolla-cross.png",
        specs: ["Hybrid", "Automatic", "FWD"]
    },
    {
        id: 6,
        make: "Nissan",
        model: "Navara",
        year: 2023,
        price: "Inquire for Price",
        image: "/images/nissan-navara.png",
        specs: ["Diesel", "Manual", "4x4"]
    }
];
