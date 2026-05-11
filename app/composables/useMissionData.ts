import { ref } from 'vue'
import type {Img, Link} from "~/models/types";

export interface Mission {
    h2:              string;
    content:         string[];
    cards: MissionCard[];
}

export interface MissionCard {
    img:    Img;
    h3:      string;
    content: string[];
    link:   Link;
}

export function useMissionData() {
    const MissionCard = ref<MissionCard[]>([
        {
            img: {
                src: "/images/adopt-unsplash.jpg",
                alt: "Adopting a pet"
            },
            h3: "Adopt",
            content: [
                "New Leash Rescue holds adoption events most Saturdays at the Lakeville PetSmart. There are also several other events throughout the year so please check our calendar and follow us on Facebook for upcoming event notices."
            ],
            link: {
                title: "Learn More",
                to: "/adopt",
                external: false,
                icon: null,
                displayText: "Learn More"
            }
        },
        {
            img: {
                src: "/images/foster-unsplash.jpg",
                alt: "Fostering a pet"
            },
            h3: "Foster",
            content: [
                "We are greatly in need of more foster parents! There are many animals in need waiting to come into rescue and the more fosters we have, the more we can help. Contact us today if you are able to foster!"
            ],
            link: {
                title: "Learn More",
                to: "/foster",
                external: false,
                icon: null,
                displayText: "Learn More"
            }
        },
        {
            img: {
                src: "/images/donate-unsplash.jpg",
                alt: "Donating to New Leash Rescue"
            },
            h3: "Donate",
            content: [
                "All proceeds go to rescue, rehabilitation, and rehoming of the animals in our care. Your donation can help us save animals in need in many ways! Consider a monthly donation to help us save more."
            ],
            link: {
                title: "Learn More",
                to: "/donate/now",
                external: false,
                icon: null,
                displayText: "Learn More"
            }
        }
    ])
    const mission = ref<Mission>({
        h2: "Our Mission",
        content: [
            "Our mission is to help the dogs and cats who cannot help themselves. Animals in need come to us from shelters, impounds, and owner surrenders and receive the veterinary care and behavioral support they need to place them in permanent, loving homes. We collaborate with other rescues, veterinary clinics, and trainers to ensure the best placement for each animal, while also providing support and resources for families after adoption."
        ],
        cards: MissionCard.value
    })

    return {
        mission,
        MissionCard,
    }
}
