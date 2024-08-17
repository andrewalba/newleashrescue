import { ref } from 'vue'
import type { Link } from '~/models/types/link'
import type {
    Section,
    Donate,
    DonateHeader,
    DonateSubSection,
    Main,
    MainHeader,
    MainSubSection,
    Content,
} from '~/models/foster'

export function useFosterData() {
    const mainHeader = ref<MainHeader>({
        h2: "Foster Opportunities",
        content: [
            "Foster homes and volunteers are the lifeblood of New Leash Rescue, Inc. New Leash Rescue does not have any paid employees. All of the work is done by volunteer foster families and people who help with various tasks. That way all of the money and gifts that we receive go directly to the care and rehabilitation of the animals. We would love to welcome you into our New Leash Rescue family as a new volunteer or foster family. Please read the information below.",
        ]
    })
    const mainSubSectionContent = ref<Content>({
        h3: "Fostering Dogs",
        content: [
            "Woof, woof! We're currently in the process of reviewing and updating our applications to make sure we're providing the best possible care for our furry friends. As a result, we've temporarily removed them from our website. Don't worry though, they'll be back online shortly. In the meantime, you can <a href=\"mailto:adopt@newleashrescue.org\" title=\"email us\">email us</a> or <a href=\"/adopt\" title=\"adopt\">take a look at some of our adorable pups</a> who are looking for their forever homes. We promise they'll bring a smile to your face and a wag to your tail. Thanks for your understanding and support!",
        ]
    })
    const mainSubSection = ref<MainSubSection>({
        content: mainSubSectionContent.value,
    })
    const main = ref<Main>({
        header: mainHeader.value,
        subSection: mainSubSection.value,
    })
    const donateHeader = ref<DonateHeader>({
        h3: "Donate",
    })
    const donateSubSectionLinks = ref<Link[]>([
        {
            to: "/donate/now",
            external: false,
            title: "Donate Now",
            icon: "far fa-money-bill",
            displayText: "Donate Now"
        },
        {
            to: "/donate/fundraising",
            external: false,
            title: "Fundraising",
            icon: "far fa-thermometer-half",
            displayText: "Fundraising"
        },
        {
            to: "/donate/gifts",
            external: false,
            title: "Corporate Gifts",
            icon: "far fa-gift",
            displayText: "Corporate Gifts"
        },
        {
            to: "/donate/memorial",
            external: false,
            title: "Memorial",
            icon: "far fa-heart",
            displayText: "Memorial"
        }
    ])
    const donateSubSection = ref<DonateSubSection>({
        content: [
            "If you cannot foster or volunteer, please consider making a <a href=\"/donate/now\" title=\"Donate Now\">donation</a>. There are various ways you can donate to help."
        ],
        links: donateSubSectionLinks.value,
    })
    const donate = ref<Donate>({
        header: donateHeader.value,
        subSection: donateSubSection.value,
    })
    const section = ref<Section>({
        main: main.value,
        donate: donate.value,
    })

    return {
        section,
        main,
        donate,
    }
}
