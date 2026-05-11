import { ref } from 'vue'
import type { Address, Link } from '~/models/types'
import type {
    Sponsors,
    Sponsor,
    BusinessHour,
    Veterinarians
} from '~/models/sponsors'

export function useSponsorsData() {
    const businessHoursSkadron   = ref<BusinessHour[]> ()
    const vets = ref<Sponsor[]>([
        {
            img_fit: null,
            img: {
                src: "/images/SkadronLogo.png",
                alt: "Skadron Animal Hospital"
            },
            h3: "Skadron Animal Hospital",
            address: {
                address1: "178 E. Marie Avenue",
                address2: null,
                city: "West St. Paul",
                state: "MN",
                postcode: "55118",
                country: null
            },
            phone: {
                raw: "+16514516421",
                formatted: "(651) 451-6421"
            },
            link: {
                to: "https://skadronanimalhospital.com/",
                external: true,
                title: "Skadron Animal Hospital",
                icon: null,
                displayText: "https://skadronanimalhospital.com/"
            },
            business_hours: [
                {
                    date: "Monday - Friday",
                    hours: "8:00 am - 6:00 pm"
                },
                {
                    date: "Saturday",
                    hours: "8:00 am - 12:00 pm"
                },
                {
                    date: "Sunday",
                    hours: "Closed"
                }
            ],
            content: [
                "Skadron Animal Hospital is a full-service AAHA certified veterinary medical facility, located in West Saint Paul, MN. We see a variety of cats, dogs, birds, rabbits, rodents and reptiles. The professional and courteous staff at Skadron Animal Hospital seeks to provide the best possible medical care, surgical care and dental care for their highly-valued patients. We are committed to promoting responsible pet ownership, preventative health care and health-related educational opportunities for our clients."
            ]
        }
    ])
    const veterinarians = ref<Veterinarians>({
        h2: "Our Veterinarians",
        vets: vets.value
    })

    const sponsors = ref<Sponsor[]>([
        {
            img_fit: "fit",
            img: {
                src: "/images/sponsors/petsmart-logo.png",
                alt: "Petsmart"
            },
            h3: "PetSmart",
            address: {
                address1: "16001 Elmhurst Ln",
                address2: null,
                city: "Lakeville",
                state: "MN",
                postcode: "55044",
                country: null
            },
            phone: {
                raw: "+16517029779",
                formatted: "(651) 702-9779"
            },
            link: {
                to: "https://www.petsmart.com/stores/us/mn/lakeville-store2733.html",
                external: true,
                title: "PetSmart",
                icon: null,
                displayText: "https://www.petsmart.com/"
            },
            content: [
                "Get the best pet supplies online and in store! PetSmart offers quality products and accessories for a healthier, happier pet. Buy any bag of food at PetSmart and we donate a meal to shelter pets!"
            ]
        },
        {
            img_fit: null,
            img: {
                src: "/images/sponsors/camp-bow-wow-logo.png",
                alt: "Camp Bow Wow"
            },
            h3: "Camp Bow Wow",
            address: {
                address1: "14305 Ewing Avenue S",
                address2: null,
                city: "Burnsville",
                state: "MN",
                postcode: "55306",
                country: null
            },
            phone: {
                raw: "+16512308243",
                formatted: "(651) 230-8243"
            },
            link: {
                to: "https://www.campbowwow.com/burnsville/",
                external: true,
                title: "camp bow wow",
                icon: null,
                displayText: "https://www.campbowwow.com/burnsville/"
            },
            content: [
                "Camp Bow Wow is the premier dog day care, dog boarding, dog training and in-home pet care providing safe, fun and individualized care."
            ]
        }
    ])
    const sponsor = ref<Sponsors>({
        h2: "Our Sponsors",
        sponsors: sponsors.value,
        veterinarians: veterinarians.value,
    })

    return {
        sponsor,
        sponsors,
        veterinarians
    }
}
