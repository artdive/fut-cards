const cards20 = {
    icon: {
        title: 'Icon',
        class: 'icon gold rare'
    },
    gold: {
        title: 'Gold Rare',
        class: 'gold rare'
    },
    gold_non_rare: {
        title: 'Gold',
        class: 'gold non-rare'
    },
    silver: {
        title: 'Silver Rare',
        class: 'silver rare'
    },
    silver_non_rare: {
        title: 'Silver',
        class: 'silver non-rare'
    },
    bronze: {
        title: 'Bronze Rare',
        class: 'bronze rare'
    },
    bronze_non_rare: {
        title: 'Bronze',
        class: 'bronze non-rare'
    },
    gold_if: {
        title: 'Gold IF',
        class: 'if gold rare'
    },
    silver_if: {
        title: 'Silver IF',
        class: 'if silver rare'
    },
    bronze_if: {
        title: 'Bronze IF',
        class: 'if bronze rare'
    },
    otw: {
        title: 'Ones To Watch',
        class: 'otw gold rare'
    },
    sbc_premium: {
        title: 'Premium SBC',
        class: 'sbc_premium gold rare'
    },
    sbc_flashback: {
        title: 'Flashback',
        class: 'sbc_flashback gold rare'
    },
    potm_epl: {
        title: 'POTM EPL',
        class: 'potm_epl gold rare'
    },
    potm_bundesliga: {
        title: 'POTM Bundesliga',
        class: 'potm_bundesliga gold rare'
    },
    potm_mls: {
        title: 'POTM MLS',
        class: 'potm_mls gold rare'
    },
    potm_ligue1: {
        title: 'POTM Ligue1',
        class: 'potm_ligue1 gold rare'
    },
    halloween: {
        title: 'Halloween',
        class: 'halloween gold rare'
    },
    sbc: {
        title: 'SBC',
        class: 'sbc gold rare'
    },
    ucl_rare: {
        title: 'UCL Rare',
        class: 'ucl_rare gold rare'
    },
    ucl_non_rare: {
        title: 'UCL Non Rare',
        class: 'ucl_non_rare gold rare'
    },
    ucl_sbc: {
        title: 'UCL SBC',
        class: 'ucl_sbc gold rare'
    },
    ucl_tott: {
        title: 'UCL TOTT',
        class: 'ucl_tott gold rare'
    },
    ucl_motm: {
        title: 'UCL MOTM',
        class: 'ucl_motm gold rare'
    },
    ucl_live: {
        title: 'UCL Live',
        class: 'ucl_live gold rare'
    },
    objective_reward: {
        title: 'Objective Reward',
        class: 'objective_reward gold rare'
    },
    purple: {
        title: 'Hero',
        class: 'purple gold rare'
    },
    'award-winner': {
        title: 'Award Winner',
        class: 'award-winner gold rare'
    },
    bluered: {
        title: 'Record Breaker',
        class: 'bluered gold rare'
    },
    pro: {
        title: 'Pro',
        class: 'pro gold rare'
    },
    icon_swap_1: {
        title: 'Icon Swap I',
        class: 'icon_swap_1 gold rare'
    },
    champion_gold: {
        title: 'FUT Champions Gold',
        class: 'fut-champ gold rare'
    },
    champion_silver: {
        title: 'FUT Champions Silver',
        class: 'fut-champ silver rare'
    },
    champion_bronze: {
        title: 'FUT Champions Bronze',
        class: 'fut-champ bronze rare'
    },
    europa_live: {
        title: 'UEL LIVE',
        class: 'europa_live gold rare'
    },
    potm_laliga: {
        title: 'La Liga POTM',
        class: 'potm_laliga gold rare'
    }
};

export function getQualityName(value) {
    let key = Object.keys(cards20).find(key => cards20[key].class === value);
    return cards20[key].title;
}

export default cards20;