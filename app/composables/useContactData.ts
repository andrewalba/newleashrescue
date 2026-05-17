import { ref } from 'vue'

export interface Contact {
    h2:   string;
    content: string[];
    companyLabel: string;
    locationLabel: string;
    callLabel: string;
    callContent: string;
}

export function useContactData() {
    const contact = ref<Contact> ({
        h2: "Connected by Love, Driven by Hope",
        content: [
            "Every tail wag, content purr, and joyful sprint starts with a single conversation. Whether you are looking to welcome a new companion into your life, fuel our mission with a generous gift, or share a beautiful update about an animal you adopted from us, we want to hear from you. Our sanctuary thrives on the community we build together.",
        ],
        companyLabel: "Company information:",
        locationLabel: "Location:",
        callLabel: "Call us:",
        callContent: "Call us! We are always happy to help."
    })

    return {
        contact,
    }

}
