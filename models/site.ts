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
