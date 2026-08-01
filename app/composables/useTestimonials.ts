import { ref } from 'vue'

import type { Img, Link } from '~/models/types'

export interface Testimonial {
    title: string
    content: string[]
    share_link: Link
    testimonials: Testimonials[]
}
export interface Testimonials {
    content: string
    name: string
    title: string
    image: Img
}

export function useTestimonials() {
    const testimonials = ref<Testimonials[]>([
        {
            "content": "Now known as Esther, this spunky girl traded a quiet impound room for a life of constant discovery. She spent her first few days learning that the world is a playground designed just for her. Today, she’s the heart of a devoted family who ensures her tail never stops wagging.",
            "name": "Rizzo",
            "title": "Rizzo: The Radiant Explorer",
            "image": {
                src: "/images/testimonials/rizzo.jpg",
                alt: "Rizzo: The Radiant Explorer"
            },
        },
        {
            "content": "Max traveled all the way from the South to find a community that matched his high-energy spirit. He didn't let a crowded past slow him down; he simply waited for the partners who could keep up with his zest for life. He’s now the CEO of his new household, leading the way on every morning walk.",
            "name": "Max",
            "title": "Max: The Unstoppable Socialite",
            "image": {
                src: "/images/testimonials/max.jpg",
                alt: "Max: The Unstoppable Socialite"
            },
        },
        {
            "content": "Teddy left a difficult start in Missouri far behind to embrace the \"posh\" life he was always meant to live. He’s proof that resilience looks like a dog who finally knows the comfort of a soft bed and a gentle touch. Minnesota winters are a lot warmer when you have a family that loves you as fiercely as Teddy loves them.",
            "name": "Teddy",
            "title": "Teddy: The Sophisticated Survivor",
            "image": {
                src: "/images/testimonials/teddy.jpg",
                alt: "Teddy: The Sophisticated Survivor"
            },
        },
        {
            "content": "From wandering the reservation to ruling the living room, Rosie’s journey is one of pure courage. She’s swapped uncertainty for a bustling life with two human siblings who consider her their greatest teammate. Watching her lean into her new parents for a scratch behind the ears reminds us why every second of the wait is worth it.",
            "name": "Rosie",
            "title": "Rosie: The Brave Trailblazer",
            "image": {
                src: "/images/testimonials/rosie.jpg",
                alt: "Rosie: The Brave Trailblazer"
            },
        },
        {
            "content": "Ghost arrived with a health challenge that would have sidelined many, but his spirit remained unbreakable. Thanks to our incredible supporters, he conquered his recovery with a wagging (albeit shorter!) tail and a heart full of gratitude. He’s now living his best life with a family that sees his strength as much as his sweetness.",
            "name": "Ghost",
            "title": "Ghost: The Courageous Warrior",
            "image": {
                src: "/images/testimonials/ghost.jpg",
                alt: "Ghost: The Courageous Warrior"
            },
        },
        {
            "content": "Willow never let a physical hurdle stop her from chasing her dreams—or her new Husky big sister. After receiving the specialized care she needed, she’s now zooming through life on her own terms with a family that cherishes her tenacity. Her joy is a daily reminder that \"perfect\" is found in the bond we share, not the steps we take.",
            "name": "Willow",
            "title": "Willow: The Spirited Champion",
            "image": {
                src: "/images/testimonials/willow.jpg",
                alt: "Willow: The Spirited Champion"
            },
        }
    ])

    const testimonial = ref<Testimonial>({
        title: 'Victories and New Beginnings',
        content: [
            'Sharing these triumphs is the highlight of our day. We live for the moment a resilient soul finds their perfect match and starts a life filled with sun-drenched naps and backyard adventures. If you’ve welcomed a New Leash alum into your life, we’d love to hear about your new rhythm together.',
        ],
        share_link: {
            to: '/adopt/success',
            external: false,
            title: 'adoption success',
            icon: null,
            displayText: 'Share Your Story With Us'
        },
        testimonials: testimonials.value
    })

    const getTestimonialByName = (name: string) => {
        return testimonials.value.find(testimonial => testimonial.name === name)
    }

    return {
        testimonial,
        testimonials,
        getTestimonialByName
    }
}
