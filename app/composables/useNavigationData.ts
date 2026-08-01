import { ref } from 'vue'

import type {
    Link
} from '~/models/types/link'

export function useNavigationData() {
    const donateNavigation = ref<Link>(
        {
            title: "donate",
            to: "/donate",
            external: false,
            icon: null,
            displayText: "Donate"
        }
    )

    return {
        donateNavigation,
    }
}
