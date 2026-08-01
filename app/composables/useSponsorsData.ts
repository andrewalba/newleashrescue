import { ref } from 'vue'
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
            img: {
                src: "/images/sponsors/SkadronLogo.png",
                alt: "Skadron Animal Hospital"
            },
            img_dark: {
                src: "/images/sponsors/SkadronLogoDark.png",
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
            img: {
                src: "/images/sponsors/petsmart-logo.png",
                alt: "Petsmart"
            },
            img_dark: {
                src: "/images/sponsors/petsmart-logo.png",
                alt: "Petsmart Dark"
            },
            h3: "PetSmart -Burnsville",
            address: {
                address1: "14150 Nicollet Ave Suite 2",
                address2: null,
                city: "Burnsville",
                state: "MN",
                postcode: "55337",
                country: null
            },
            phone: {
                raw: "+19522460119",
                formatted: "(952) 246-0119"
            },
            link: {
                to: "https://www.petsmart.com/stores/us/mn/burnsville-store3283.html",
                external: true,
                title: "PetSmart - Burnsville",
                icon: null,
                displayText: "https://www.petsmart.com/"
            },
            content: [
                "Get the best pet supplies online and in store! PetSmart offers quality products and accessories for a healthier, happier pet. Buy any bag of food at PetSmart and we donate a meal to shelter pets!"
            ]
        },
        {
            img: {
                src: "/images/sponsors/petsmart-logo.png",
                alt: "Petsmart"
            },
            img_dark: {
                src: "/images/sponsors/petsmart-logo.png",
                alt: "Petsmart Dark"
            },
            h3: "PetSmart - Cottage Grove",
            address: {
                address1: "7240 E Point Douglas Rd. S Suite 190",
                address2: null,
                city: "Cottage Grove",
                state: "MN",
                postcode: "55016",
                country: null
            },
            phone: {
                raw: "+16513551822",
                formatted: "(651) 355-1822"
            },
            link: {
                to: "https://www.petsmart.com/stores/us/mn/cottage-grove-store3221.html",
                external: true,
                title: "PetSmart - Cottage Grove",
                icon: null,
                displayText: "https://www.petsmart.com/"
            },
            content: [
                "Get the best pet supplies online and in store! PetSmart offers quality products and accessories for a healthier, happier pet. Buy any bag of food at PetSmart and we donate a meal to shelter pets!"
            ]
        },
        {
            img: {
                src: "/images/sponsors/petsmart-logo.png",
                alt: "Petsmart"
            },
            img_dark: {
                src: "/images/sponsors/petsmart-logo.png",
                alt: "Petsmart Dark"
            },
            h3: "PetSmart - Maplewood",
            address: {
                address1: "2370 White Bear Ave N",
                address2: null,
                city: "Maplewood",
                state: "MN",
                postcode: "55109",
                country: null
            },
            phone: {
                raw: "+16517779533",
                formatted: "(651) 777-9533"
            },
            link: {
                to: "https://www.petsmart.com/stores/us/mn/maplewood-store0461.html",
                external: true,
                title: "PetSmart - Maplewood",
                icon: null,
                displayText: "https://www.petsmart.com/"
            },
            content: [
                "Get the best pet supplies online and in store! PetSmart offers quality products and accessories for a healthier, happier pet. Buy any bag of food at PetSmart and we donate a meal to shelter pets!"
            ]
        },
        {
            img: {
                src: "/images/sponsors/camp-bow-wow-logo.png",
                alt: "Camp Bow Wow"
            },
            img_dark: {
                src: "/images/sponsors/camp-bow-wow-logo.png",
                alt: "Camp Bow Wow Dark"
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
        h2: "Our Lifesaving Partners",
        content: [
            "We believe every animal possesses an unstoppable spirit. Our sponsors provide the vital fuel that turns a rescue story into a triumphant new beginning. By aligning with us, you aren't just funding a rescue organization; you're sparking a lifetime of joy.",
        ],
        sponsors: sponsors.value,
        veterinarians: veterinarians.value,
    })

    return {
        sponsor,
        sponsors,
        veterinarians
    }
}
