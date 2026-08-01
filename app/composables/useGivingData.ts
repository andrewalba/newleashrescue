import { ref } from 'vue'

export interface Giving {
    content:       string[]
}


export function useGivingData() {
    const giving = ref<Giving>(
        {
            "content": [
                "Commemorate a loved one or pet by donating in the loved one's name, to support New Leash Rescue's mission. Simply mail the check(s) to:",
                "Include a note identifying who the memorial gift is being made in memory of, and if an acknowledgment is desired to an individual (include name and address).",
            ],
        }
    )

    return {
        giving,
    }
}
