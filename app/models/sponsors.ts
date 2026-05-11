import type { Address, Img, Link, Phone } from '~/models/types'

export interface Sponsors {
    h2:            string;
    sponsors:      Sponsor[];
    veterinarians: Veterinarians;
}

export interface Sponsor {
    img_fit:         string | null;
    img:             Img;
    h3:              string;
    address:         Address;
    phone:           Phone;
    link:            Link;
    content:         string[];
    business_hours?: BusinessHour[];
}

export interface BusinessHour {
    date:  string;
    hours: string;
}

export interface Veterinarians {
    h2:   string;
    vets: Sponsor[];
}
