import type { Link, Img } from '~/models/types'

export interface Home {
    sections: Sections;
}

export interface Sections {
    mission: Mission;
    why:     Mission;
    ftw:     Ftw;
}

export interface Ftw {
    h2:              string;
    content:         string[];
    link:            Link;
    specialSections: FtwSpecialSection[];
}

export interface FtwSpecialSection {
    img:     Img;
    h3:      string;
    content: string[];
}

export interface Mission {
    h2:              string;
    content:         string[];
    specialSections: MissionSpecialSection[];
}

export interface MissionSpecialSection {
    icon:    string;
    h3:      string;
    content: string[];
    link?:   Link;
}
