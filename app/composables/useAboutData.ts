import { ref } from 'vue'
import type { Img } from "~/models/types";

export interface About {
    h2:         string;
    content:    string[];
    cards:      AboutCard[];
}

export interface AboutCard {
    h3:      string;
    content: string[];
    img:     Img
}


export function useAboutData() {
    const aboutCards = ref<AboutCard[]>([
        {
            "h3": "Transform Lives with Your Generosity",
            "content": [
                "Direct donations allow us to provide top-tier medical care and cozy suites for our residents. Your gifts ensure that every animal feels cherished and safe while they wait for their match. You turn a moment of transition into a <strong>season of profound healing</strong>.",
            ],
            img: {
                "src": "/images/dog-and-cat-grass-unsplash.jpg",
                "alt": "Transform Lives with Your Generosity"
            }
        },
        {
            "h3": "Essential Supplies for Spunky Spirits",
            "content": [
                "We always welcome high-quality food, sturdy leashes, and soft bedding to keep our rescues comfortable. PetSmart gift cards also help us customize care for animals with unique needs or extra-large personalities. Every collar or soft blanket helps a companion feel like they <strong>truly belong</strong>."
            ],
            img: {
                "src": "/images/cat-blanket-unsplash.jpg",
                "alt": "Essential Supplies for Spunky Spirits"
            }
        },
        {
            "h3": "Share Your Radiant Energy",
            "content": [
                "Your time is one of the most powerful gifts you can offer our residents. By volunteering, you provide the social connection and play that keeps these souls thriving and confident. You aren't just helping with chores; you're becoming a <strong>pivotal part of a hero's journey</strong>."
            ],
            img: {
                "src": "/images/volunteer-unsplash.jpg",
                "alt": "Share Your Radiant Energy"
            }
        }
    ])

    const about = ref<About>({
        "h2": "Fueling Unstoppable New Beginnings",
        "content": [
            "New Leash Rescue was created in 2018 to help dogs and cats in need of a loving home. We are a completely volunteer-run 501c3 non-profit organization dedicated to helping animals in need of a second chance and a new leash on life.",
            "Your support serves as the heartbeat of every recovery and every joyful tail wag. We believe every animal possesses a <strong>radiant spirit</strong> just waiting for the right person to notice it. When you give, you provide the bridge between a difficult past and a vibrant, love-filled future.",
        ],
        "cards": aboutCards.value
    })

    return {
        about,
        aboutCards,
    }
}
