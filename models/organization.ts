export interface Organization {
    id:                string;
    name:              string;
    email:             string;
    phone:             string;
    address:           Address;
    hours:             Hours;
    url:               string;
    website:           null;
    mission_statement: null;
    adoption:          Adoption;
    social_media:      SocialMedia;
    photos:            Photo[];
    distance:          number;
    _links:            OrganizationLinks;
}

export interface OrganizationLinks {
    self:    Next;
    animals: Next;
}

export interface Next {
    href: string;
}

export interface Address {
    address1: string;
    address2: string;
    city:     string;
    state:    string;
    postcode: string;
    country:  string;
}

export interface Adoption {
    policy: null;
    url:    null;
}

export interface Hours {
    monday:    null;
    tuesday:   null;
    wednesday: null;
    thursday:  null;
    friday:    null;
    saturday:  null;
    sunday:    null;
}

export interface Photo {
    small:  string;
    medium: string;
    large:  string;
    full:   string;
}

export interface SocialMedia {
    facebook:  null;
    twitter:   null;
    youtube:   null;
    instagram: null;
    pinterest: null;
}
