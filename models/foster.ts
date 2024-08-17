import type { Link } from './types/link'

export interface Foster {
    section: Section;
}

export interface Section {
    main:   Main;
    donate: Donate;
}

export interface Donate {
    header:     DonateHeader;
    subSection: DonateSubSection;
}

export interface DonateHeader {
    h3: string;
}

export interface DonateSubSection {
    content: string[];
    links:   Link[];
}

export interface Main {
    header:     MainHeader;
    subSection: MainSubSection;
}

export interface MainHeader {
    h2:      string;
    content: string[];
}

export interface MainSubSection {
    content: Content;
}

export interface Content {
    h3:      string;
    content: string[];
}
