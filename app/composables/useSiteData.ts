import { ref, computed } from 'vue'
import type { Address, Link, Phone} from "~/models/types";

export interface Site {
    title:        string;
    legalName:    string;
    tagLine:      string;
    url:          string;
    created:      Date;
    address:      Address;
    phone:        Phone;
    emails:       Email[];
    links:        Link[];
    social_links: SocialLink[];
}


export interface Email {
    display_name: string;
    account:      string;
    domain:       string;
}

export interface SocialLink {
    label: string;
    display_title: string;
    icon: string;
    href: string;
}


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
        /*{
            title: "Home",
            to: "/#home",
            external: true,
            icon: null,
            displayText: "Home"
        },*/
        {
            title: "Adopt",
            to: "/adopt",
            external: false,
            icon: null,
            displayText: "Adopt"
        },
        {
            title: "Foster",
            to: "/foster",
            external: false,
            icon: null,
            displayText: "Foster"
        },
        {
            title: "Events",
            to: "/events",
            external: false,
            icon: null,
            displayText: "Events"
        },
        {
            title: "contact us",
            to: "/contact-us",
            external: false,
            icon: null,
            displayText: "Contact"
        }
    ])

    const footer_links = ref<Link[]> ([
        {
            title: "About",
            to: "/about",
            external: true,
            icon: null,
            displayText: "About"
        },
        {
            title: "Friends",
            to: "/sponsors",
            external: false,
            icon: null,
            displayText: "Our Friends"
        },
        {
            title: "terms of use",
            to: "/legal/terms",
            external: false,
            icon: null,
            displayText: "Terms of Use"
        },
        {
            title: "privacy policy",
            to: "/legal/privacy",
            external: false,
            icon: null,
            displayText: "Privacy Policy"
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
        footer_links,
        social_links,
        site,
        getEmailByAccount,
    }
}
