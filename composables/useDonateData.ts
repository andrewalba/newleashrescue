import { ref } from 'vue'
import { useSiteData } from "~/composables/useSiteData";

import type {
    Pages,
    DonatePage
} from '~/models/donate'

const { site } = useSiteData()

export function useDonateData() {
    const fundRaising = ref<DonatePage> ({
        h2: "Attend our fundraising events",
        img: "/images/fundraising.jpg",
        alt: "fundraising",
        content: [
            `Volunteers coordinate a variety of fundraisers throughout the year to raise money to save the animals. Enjoy events such as our annual picnic or T-shirt sale, while supporting the New Leash Rescue cause. Don't forget <a href=\"https://www.givemn.org/organization/New-Leash-Rescue\" title=\"GiveMN.org\">Give to the Max Day</a> in Minnesota. Check our home page for current fundraisers and special events.`
        ]
    })
    const gifts = ref<DonatePage> ( {
        h2: "Corporate Gifts",
        img: "/images/matching-gifts.jpg",
        alt: "gifts",
        content: [
            `Your gift could be matched dollar-for-dollar by your employer. Contact your company's human resources department and ask for employee gifts to be matched to New Leash Rescue. As a 501(c)(3) we qualify for most corporate gift matching programs.  Double your money for New Leash Rescue just by asking your company to participate.`
        ]
    })
    const memorial = ref<DonatePage> ({
        h2: "Memorial Giving",
        img: "/images/memoriam.jpg",
        alt: "memorial",
        content: [
            `Commemorate a loved one or pet by donating in the loved one's name, to support New Leash Rescue's mission.  Simply mail the check(s) to:</p><address><strong>${site.value.title}</strong><br/>${site.value.address.street}<br/>${site.value.address.city}, ${site.value.address.state} ${site.value.address.postal_code}</address><p>Include a note identifying who the memorial gift is being made in memory of, and if an acknowledgment is desired to an individual (include name and address).`
        ]
    })
    const pages = ref<Pages> ({
        "fundraising": fundRaising.value,
        gifts: gifts.value,
        memorial: memorial.value,
    })

    return {
        pages,
        fundRaising,
        gifts,
        memorial,
    }
}
