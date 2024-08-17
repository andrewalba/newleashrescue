import { ref } from 'vue'
import { useSiteData } from "~/composables/useSiteData";

import type { Link } from '~/models/types/link'
import type {
    Home,
    Sections,
    Ftw,
    FtwSpecialSection,
    Mission,
    MissionSpecialSection
} from '~/models/home'

const { site, getEmailByAccount } = useSiteData()
const adoptEmail = getEmailByAccount('adopt')

export function useHomeData() {
    const missionSpecialSection = ref<MissionSpecialSection[]>([
        {
            icon: "far fa-paw",
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
            icon: "far fa-users",
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
            icon: "far fa-gift",
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
        specialSections: missionSpecialSection.value
    })

    const whySpecialSection = ref<MissionSpecialSection[]>([
        {
            icon: "far fa-life-ring",
            h3: "Rescue",
            content: [
                "We connect with local partners to find positive solutions for the animals in need. Once they are secured in a foster home you can look into their eyes and see things are going to get better for them."
            ]
        },
        {
            icon: "far fa-medkit",
            h3: "Rehabilitate",
            content: [
                "If a dog or cat needs medical attention, extra time to understand they’re in a safe place, or simply better social skills, our team at NLR is up for the challenge. Each animal is individually assessed and cared for by our experienced team."
            ]
        },
        {
            icon: "far fa-home",
            h3: "Homing",
            content: [
                "Any foster parent will tell you how wonderful it is to find the right home for the pet they've been caring for. They will also tell you it's tough to let them go! That's simply because our hearts are in the right place."
            ]
        },
        {
            icon: "far fa-book",
            h3: "Educate",
            content: [
                "We are active in the communities we serve and participate in programs to help educate the public about animals in need, rescue, and responsibilities. If you are looking for someone to participate in an educational event, please contact us."
            ]
        }
    ])
    const why = ref<Mission>({
        h2: `Why ${site.value.title}`,
        content: [
            `${site.value.title} was formed to assist dogs in need of care and placement in a loving home. We have expanded our reach to include cats. We are a 100% non-profit 501c(3) organization dedicated to saving animals in need from desperate situations that deserve a new leash on life! Follow us on <a href="https://www.facebook.com/newleash2018/" target="_blank">Facebook</a>!`
        ],
        specialSections: whySpecialSection.value
    })

    const ftwSpecialSection = ref<FtwSpecialSection[]>([
        {
            img: {
                src: "/images/ftw/rizzo.jpg",
                alt: "Rizzo"
            },
            h3: "Rizzo",
            content: [
                "Cute baby Rizzo is now Esther and went from being left alone at an impound to a brand-new loving family to call her own fur-ever!"
            ]
        },
        {
            img: {
                src: "/images/ftw/max.jpg",
                alt: "Max"
            },
            h3: "Max",
            content: [
                "Sweet little Max came from a southern rescue where they have more pups than then can find families. After bringing him up to New Leash Rescue, he found his new family and is living happily fur-ever after!"
            ]
        },
        {
            img: {
                src: "/images/ftw/teddy.jpg",
                alt: "Teddy"
            },
            h3: "Teddy",
            content: [
                "Teddy was part of an out of control breeding operation in Missouri. New Leash Rescue took him in, gave him care, and he now has a posh new home and family in Minnesota that loves him like he deserves!"
            ]
        }
    ])
    const ftwLink = ref<Link>({
        title: "Success Stories",
        to: "/adopt/success",
        external: false,
        icon: null,
        displayText: null
    })
    const ftw = ref<Ftw>({
        h2: "Canines for the win!",
        content: [
            "<em>\"A fresh start.\" \"A new beginning\". \"Happily ever after.\"</em>",
            `This is our favorite part. Sharing our triumphant success! We love to hear from the wonderful people who have adopted from ${site.value.title} and all about their new lives together. Please <a href="mailto:${adoptEmail.value?.account}@${adoptEmail.value?.domain}" title="${adoptEmail.value?.display_name}">email us</a> your ${site.value.title} success story.`
        ],
        link: ftwLink.value,
        specialSections: ftwSpecialSection.value
    })

    const sections = ref<Sections>({
        mission: mission.value,
        why: why.value,
        ftw: ftw.value,
    })
    const home = ref<Home>({
        sections: sections.value,
    })

    return {
        home,
        sections,
        mission,
        why,
        ftw,
    }
}
