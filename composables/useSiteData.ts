import { ref, computed } from 'vue'
import type { Address, Link, Phone } from '~/models/types'
import type {
    Site,
    Email,
    SocialLink
} from '~/models/site'

export function useSiteData() {
    const address = ref<Address> ({
        address1: "",
        address2: null,
        city: "Farmington",
        state: "MN",
        postcode: "55024",
        country: null
    });
    const emails = ref<Email[]> ([
        {
            display_name: "Adopt",
            account: "adopt",
            domain: "newleashrescue.org"
        },
        {
            display_name: "Privacy",
            account: "privacy",
            domain: "newleashrescue.org"
        }
    ])
    const phone = ref<Phone> ({
        raw: "+16512521874",
        formatted: "(651) 252-1874"
    })

    const links = ref<Link[]> ([
        {
            title: "Home",
            to: "/#home",
            external: true,
            icon: null,
            displayText: null
        },
        {
            title: "Adopt",
            to: "/adopt",
            external: false,
            icon: null,
            displayText: null
        },
        {
            title: "Donate",
            to: "/donate",
            external: false,
            icon: null,
            displayText: null
        },
        {
            title: "Foster",
            to: "/foster",
            external: false,
            icon: null,
            displayText: null
        },
        {
            title: "Events",
            to: "/events",
            external: false,
            icon: null,
            displayText: null
        }
    ])
    const social_links = ref<SocialLink[]> ([
        {
            label: "Facebook",
            display_title: "facebook.com/newleash2018",
            icon: "fab fa-facebook",
            href: "https://www.facebook.com/newleash2018/"
        },
        {
            label: "Instagram",
            display_title: "instagram.com/newleashrescuemn",
            icon: "fab fa-instagram",
            href: "https://instagram.com/newleashrescuemn/"
        },
        {
            label: "Tiktok",
            display_title: "tiktok.com/@newleashrescue",
            icon: "fab fa-tiktok",
            href: "https://www.tiktok.com/@newleashrescue"
        },
        {
            label: "GiveMN",
            display_title: "givemn.org/New-Leash-Rescue",
            icon: "far fa-hand-heart",
            href: "https://www.givemn.org/organization/New-Leash-Rescue"
        }
    ])
    const site = ref<Site>({
        title: "New Leash Rescue",
        legalName: "New Leash Rescue",
        tagLine: "giving dogs a new leash on life",
        created: new Date(2016, 7, 1),
        url: "https://newleashrescue.org",
        address: address.value,
        phone: phone.value,
        emails: emails.value,
        links: links.value,
        social_links: social_links.value,
    });

    const getEmailByAccount = (account: string) => computed(() => {
        return emails.value.find(email => email.account === account) || null;
    });

    return {
        address,
        emails,
        phone,
        links,
        social_links,
        site,
        getEmailByAccount,
    }
}
