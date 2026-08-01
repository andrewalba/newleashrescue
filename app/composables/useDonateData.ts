import { ref } from 'vue'
import type { Img, Link } from "~/models/types";

export interface DonateNow {
    h2:            string
    content:       string[]
}

export interface DonateOption {
    h2:            string
    content:       string[],
    img:           Img,
    cta:           Link | null
}

export function useDonateData() {
    const donateNow = ref<DonateNow>(
        {
            "h2": "Fuel the Journey: Your Impact in Action",
            "content": [
                "Donations are the vibrant lifeblood of our mission. At New Leash Rescue, we operate with 100% volunteer energy, ensuring every gift you share goes directly to the nourishment, medical care, and specialized rehabilitation of the animals in our foster care. Your generosity turns a moment of need into a lifetime of resilience."
            ],
        }
    )
    const donateOptions = ref<DonateOption[]>([
        {
            "h2": "Radiant Gifts for Immediate Healing",
            "content": [
                "Whether you choose a one-time spark of support or a steady monthly rhythm, your financial gifts provide the foundation for every recovery. These funds cover everything from life-saving surgeries to the simple, vital comfort of a full bowl of nutritious food. You aren't just giving money; you're providing the quiet safety of a warm suite where a dog or cat can finally let their guard down."
            ],
            "img": {
                "src": "/images/donate-unsplash.jpg",
                "alt": "Radiant Gifts for Immediate Healing"
            },
            "cta": null // **Donate Now to Change a Life**
        },
        {
            "h2": "Spunky Supplies and Sensory Surprises",
            "content": [
                "Our residents thrive on the tangible magic of your kindness, from sturdy leashes for morning adventures to soft bedding for afternoon naps. We gratefully welcome donations of high-quality food, PetSmart gift cards, and daily essentials that keep our spirits high and our tails wagging. Seeing a shy cat pounce on a brand-new toy for the first time is a vivid reminder of the joy your physical gifts bring."
            ],
            "img": {
                "src": "/images/dog-with-flowers-unsplash.jpg",
                "alt": "Spunky Supplies and Sensory Surprise"
            },
            "cta": null // **Be a Hero—Shop Our Wishlist**
        },
        {
            "h2": "Unstoppable Energy Through Local Partnerships",
            "content": [
                "We love teaming up with local businesses and community leaders to create exciting fundraising events that celebrate our mission. From vibrant neighborhood gatherings to corporate matching programs, these collaborations amplify our reach and bring more people into our rescue family. Your partnership ensures we have the resources to say \"yes\" to every animal waiting for their perfect match."
            ],
            "img": {
                "src": "/images/partnerships-unsplash.jpg",
                "alt": "Unstoppable Energy Through Local Partnerships"
            },
            "cta": {
                "to": "mailto:newleashrescue2018@gmail.com",
                "external": false,
                "title": "Start Your Fundraising Adventure",
                "icon": "i-material-symbols-volunteer-activism-rounded",
                "displayText": "Start Your Fundraising Adventure",
            }
        },
        {
            "h2": "Everlasting Tributes for Cherished Bonds",
            "content": [
                "A memorial gift is a beautiful way to honor the legacy of a beloved companion or a person who championed the animals in their life. These donations transform the pain of loss into a beacon of hope for a dog or cat just beginning their journey toward a new chapter. By celebrating a bond that never fades, you provide the bridge to a bright future for a soul still waiting to be discovered."
            ],
            "img": {
                "src": "/images/candle-memorial-unsplash.jpg",
                "alt": "Everlasting Tributes for Cherished Bonds"
            },
            "cta": {
                "to": "mailto:newleashrescue2018@gmail.com",
                "external": false,
                "title": "Give a Gift in Loving Memory",
                "icon": "i-material-symbols-volunteer-activism-rounded",
                "displayText": "Give a Gift in Loving Memory",
            }
        }
    ])

    return {
        donateNow,
        donateOptions,
    }
}
