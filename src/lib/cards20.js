const cards20 = {
    icon: {
        title: 'Icon / Legend',
        class: 'icon gold rare'
    },
    gold: {
        title: 'Rare Gold',
        class: 'gold rare'
    },
    gold_non_rare: {
        title: 'Non Rare Gold',
        class: 'gold non-rare'
    },
    silver: {
        title: 'Rare Silver',
        class: 'silver rare'
    },
    silver_non_rare: {
        title: 'Non Rare Silver',
        class: 'silver non-rare'
    },
    bronze: {
        title: 'Rare Bronze',
        class: 'bronze rare'
    },
    bronze_non_rare: {
        title: 'Non Rare Bronze',
        class: 'bronze non-rare'
    },
    gold_if: {
        title: 'Team of the Week Gold',
        class: 'if gold rare'
    },
    silver_if: {
        title: 'Team of the Week Silver',
        class: 'if silver rare'
    },
    bronze_if: {
        title: 'Team of the Week Bronze',
        class: 'if bronze rare'
    },
    otw: {
        title: 'Ones to Watch',
        class: 'otw gold rare'
    },
    sbc_premium: {
        title: 'Squad Builder Premium',
        class: 'sbc_premium gold rare'
    },
    sbc_flashback: {
        title: 'Flashback SBC',
        class: 'sbc_flashback gold rare'
    },
    potm_epl: {
        title: 'Premier League POTM',
        class: 'potm_epl gold rare'
    },
    potm_bundesliga: {
        title: 'Bundesliga POTM',
        class: 'potm_bundesliga gold rare'
    },
    potm_mls: {
        title: 'MLS POTM',
        class: 'potm_mls gold rare'
    },
    potm_ligue1: {
        title: 'Ligue 1 POTM',
        class: 'potm_ligue1 gold rare'
    },
    halloween: {
        title: 'Ultimate Scream',
        class: 'halloween gold rare'
    },
    sbc: {
        title: 'Squad Builder Reward',
        class: 'sbc gold rare'
    },
    ucl_rare: {
        title: 'Champions League Rare',
        class: 'ucl_rare gold rare'
    },
    ucl_non_rare: {
        title: 'Champions League',
        class: 'ucl_non_rare gold rare'
    },
    ucl_sbc: {
        title: 'Champions League SBC',
        class: 'ucl_sbc gold rare'
    },
    ucl_live: {
        title: 'Champions League Live',
        class: 'ucl_live gold rare'
    },
    objective_reward: {
        title: 'Objectives Reward',
        class: 'objective_reward gold rare'
    },
    objective_reward_2: {
        title: 'League Objective',
        class: 'objective_reward_2 gold rare'
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
        title: 'Pro Player',
        class: 'pro gold rare'
    },
    icon_swap_1: {
        title: 'Icon Swaps I',
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
        title: 'Europa League SBC',
        class: 'europa_live gold rare'
    },
    potm_laliga: {
        title: 'La Liga POTM',
        class: 'potm_laliga gold rare'
    },
    f_moment: {
        title: 'Player Moments',
        class: 'f_moment gold rare'
    },
    ucl_tott: {
        title: 'Champions League TOTT',
        class: 'ucl_tott gold rare'
    },
    europa_tott: {
        title: 'Europa League TOTT',
        class: 'europa_tott gold rare'
    }
};

export function getQualityName(value) {
    let key = Object.keys(cards20).find(key => cards20[key].class === value);
    return cards20[key].title;
}

export default cards20;