export interface Pages {
    fundraising: DonatePage;
    gifts:          DonatePage;
    memorial:       DonatePage;
}

interface DonatePage {
    h2:      string;
    img:     string;
    alt:     string;
    content: string[];
}

type PageKey = keyof Pages;
