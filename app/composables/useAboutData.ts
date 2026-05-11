import { ref } from 'vue'
import type { Link } from '~/models/types'

export interface About {
    title:      string;
    h2:         string;
    content:    string[];
    cards:      AboutCard[];
}

export interface AboutCard {
    h3:      string;
    content: string[];
    icon:    string;
    link:    Link;
}

export function useAboutData() {
    const aboutCards = ref<AboutCard[]>([
        {
            h3: "Radiant Rescues, Bold New Chapters",
            content: [
                "We team up with local partners to turn \"desperate\" into \"dreaming big.\" The moment a dog or cat enters our sanctuary, they aren't just a number—they're a cherished guest finding their footing. You can see the light return to their eyes the second they realize they’re safe."
            ],
            icon: "i-material-symbols-approval-delegation-rounded",
            link: {
                title: "Learn More",
                to: "/adopt",
                external: false,
                icon: null,
                displayText: "Be the Spark—Join Our Mission"
            }
        },
        {
            h3: "Healing Hearts and Wagging Tails",
            content: [
                "Whether it’s a medical hurdle or a need for some social confidence, our team dives in with both feet. We provide a soft place to land, giving every animal the individual time and specialized care they need to shine. Watching a shy cat finally stretch out in a sunbeam or a nervous dog learn to trust a gentle hand is the heartbeat of what we do."
            ],
            icon: "i-material-symbols-medical-services",
            link: {
                title: "Donate Now",
                to: "/donate",
                external: false,
                icon: null,
                displayText: "Help Us Heal—Donate Now"
            }
        },
        {
            h3: "Unforgettable Pets, Forever People",
            content: [
                "Finding the right match is like watching two puzzle pieces finally click into place. Our foster families pour their love into these animals, prepping them for the day they finally walk out the door with their new best friends. It’s a bittersweet goodbye because we treat every resident like a member of our own family until they find yours."
            ],
            icon: "i-material-symbols-family-home-outline-rounded",
            link: {
                title: "Adopt",
                to: "/donate/now",
                external: false,
                icon: null,
                displayText: "Start Your Adventure—Meet Our Residents"
            }
        },
        {
            h3: "Empowering Our Compassionate Community",
            content: [
                "We don’t just save lives; we celebrate the deep bond between humans and their companions through local outreach. Our team loves sharing the joys of responsible guardianship and the magic of the rescue world with schools and local groups. Knowledge is the strongest tool we have to ensure every animal is treated with the dignity they deserve."
            ],
            icon: "i-material-symbols-family-group-rounded",
            link: {
                title: "Adopt",
                to: "/donate/now",
                external: false,
                icon: null,
                displayText: "Invite Us Over—Let’s Chat Animals"
            }
        }
    ])
    const about = ref<About>({
        title: "Every Life Deserves a Bold Beginning",
        h2: "A New Rhythm for Resilient Hearts",
        content: [
            "At New Leash Rescue, we believe every wag and purr tells a story of triumph. We’re a 100% volunteer-powered community dedicated to stepping in when local dogs and cats need a champion. Our mission isn’t just about survival; it’s about making sure every soul that walks through our doors finds the vibrant life they were always meant to lead."
        ],
        cards: aboutCards.value
    })

    return {
        about,
        aboutCards,
    }
}
