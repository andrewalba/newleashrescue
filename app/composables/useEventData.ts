import { ref } from 'vue'
import type { Link } from "~/models/types";

export interface Event {
    h2:         string;
    content:    string[];
    eventBlocks: EventBlock[]
}

export interface EventBlock {
    h3:            string
    content:       string[],
    cta:           Link
}

export function useEventData() {
    const eventBlocks = ref<EventBlock[]>([
        {
            h3: "Encounters Await You",
            content: [
                "Adoption days bring the magic of our sanctuary straight to the neighborhood. You will feel an instant heart-connection when you look into the eyes of an animal waiting for their match. Come meet these brave souls, hear their happy stories, and find the perfect companion for your lifestyle."
            ],
            cta: {
                to: "/adopt",
                external: false,
                title: "Discover Your Match",
                icon: "i-material-symbols-pets",
                displayText: "Discover Your Match"
            }
        },
        {
            h3: "Spunky Gatherings, Vital Missions",
            content: [
                "We design our fundraisers to maximize both fun and real-world impact. Every dollar raised directly provides premium care for our furry friends while they await their families. Your presence creates the solid foundation of hope that allows these animals to truly thrive."
            ],
            cta: {
                to: "/donate",
                external: false,
                title: "Join the Celebration",
                icon: "i-material-symbols-volunteer-activism",
                displayText: "Join the Celebration"
            }
        },
        {
            h3: "Dynamic Updates on Facebook",
            content: [
                "We post our most current, up-to-the-minute gathering details directly on our Facebook page. Simply log into your account to explore dates, RSVP to adoption meet-and-greets, and share our events with other animal lovers. Our digital community ensures you never miss a chance to witness a life-changing connection."
            ],
            cta: {
                to: "https://www.facebook.com/newleash2018/events",
                external: true,
                title: "Explore Our Calendar",
                icon: "i-material-symbols-event",
                displayText: "Explore Our Calendar"
            }
        }
    ])
    const event = ref<Event>({
        "h2": "Hearts Coming Together",
        "content": [
            "We build beautiful futures through celebration and community connection. Our lively gatherings bring passionate people and resilient animals together to spark lifelong bonds. Check out our upcoming calendar to see where you can meet your new best friend or support our sanctuary.",
        ],
        eventBlocks: eventBlocks.value
    })

    return {
        event,
        eventBlocks,
    }
}
