const cards20 = {
    icon: {
        title: 'Icon / Legend',
        class: 'icon'
    },
    icon_moment: {
        title: 'Prime Icon Moments',
        class: 'icon_moment'
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
        class: 'if gold'
    },
    silver_if: {
        title: 'Team of the Week Silver',
        class: 'if silver'
    },
    bronze_if: {
        title: 'Team of the Week Bronze',
        class: 'if bronze'
    },
    otw: {
        title: 'Ones to Watch',
        class: 'otw'
    },
    sbc_premium: {
        title: 'Squad Builder Premium',
        class: 'sbc_premium'
    },
    sbc_flashback: {
        title: 'Flashback SBC',
        class: 'sbc_flashback'
    },
    potm_epl: {
        title: 'Premier League POTM',
        class: 'potm_epl'
    },
    potm_bundesliga: {
        title: 'Bundesliga POTM',
        class: 'potm_bundesliga'
    },
    potm_mls: {
        title: 'MLS POTM',
        class: 'potm_mls'
    },
    potm_ligue1: {
        title: 'Ligue 1 POTM',
        class: 'potm_ligue1'
    },
    halloween: {
        title: 'Ultimate Scream',
        class: 'halloween'
    },
    sbc: {
        title: 'Squad Builder Reward',
        class: 'sbc'
    },
    ucl_rare: {
        title: 'Champions League Rare',
        class: 'ucl_rare'
    },
    ucl_non_rare: {
        title: 'Champions League',
        class: 'ucl_non_rare'
    },
    ucl_sbc: {
        title: 'Champions League SBC',
        class: 'ucl_sbc'
    },
    ucl_live: {
        title: 'Champions League Live',
        class: 'ucl_live'
    },
    objective_reward: {
        title: 'Objectives Reward',
        class: 'objective_reward'
    },
    objective_reward_2: {
        title: 'League Objective',
        class: 'objective_reward_2'
    },
    purple: {
        title: 'Hero',
        class: 'purple'
    },
    'award-winner': {
        title: 'Award Winner',
        class: 'award-winner'
    },
    bluered: {
        title: 'Record Breaker',
        class: 'bluered'
    },
    pro: {
        title: 'Pro Player',
        class: 'pro'
    },
    icon_swap_1: {
        title: 'Icon Swaps I',
        class: 'icon_swap_1'
    },
    icon_swap_2: {
        title: 'Icon Swaps II',
        class: 'icon_swap_2'
    },
    champion_gold: {
        title: 'FUT Champions Gold',
        class: 'fut-champ gold'
    },
    champion_silver: {
        title: 'FUT Champions Silver',
        class: 'fut-champ silver'
    },
    champion_bronze: {
        title: 'FUT Champions Bronze',
        class: 'fut-champ bronze'
    },
    europa_live: {
        title: 'Europa League SBC',
        class: 'europa_live'
    },
    potm_laliga: {
        title: 'La Liga POTM',
        class: 'potm_laliga'
    },
    f_moment: {
        title: 'Player Moments',
        class: 'f_moment'
    },
    ucl_tott: {
        title: 'Champions League TOTT',
        class: 'ucl_tott'
    },
    europa_tott: {
        title: 'Europa League TOTT',
        class: 'europa_tott'
    },
    futmas: {
        title: 'FUTmas',
        class: 'futmas'
    },
    toty_nominee: {
        title: 'TOTY Nominees',
        class: 'toty_nominee'
    },
    toty: {
        title: 'TOTY',
        class: 'toty'
    },
    headliners: {
        title: 'Headliners',
        class: 'headliners'
    },
    headliners_2: {
        title: 'Headliners Streak',
        class: 'headliners_2'
    },
    future_stars: {
        title: 'Future Stars',
        class: 'future_stars'
    },
    future_stars_2: {
        title: 'Future Stars Upgrade',
        class: 'future_stars_2'
    },
    motm: {
        title: 'Man of the Match',
        class: 'motm'
    },
    winter_refresh: {
        title: 'Winter Refresh',
        class: 'winter_refresh'
    },
    shapeshifter: {
        title: 'Shapeshifters',
        class: 'shapeshifter'
    },
    europa_motm: {
        title: 'Europa League MOTM',
        class: 'europa_motm'
    },
    ucl_motm: {
        title: 'Champions League MOTM',
        class: 'ucl_motm'
    },
    libertadores_b: {
        title: 'Libertadores',
        class: 'libertadores_b'
    },
    libertadores_g: {
        title: 'Libertadores Kickoff',
        class: 'libertadores_g'
    },
    sudamericana: {
        title: 'Sudamericana',
        class: 'sudamericana'
    },
    b_moments: {
        title: 'TOTW Moments',
        class: 'b_moments'
    },
    conmebol_motm: {
        title: 'Libertadores MOTM',
        class: 'conmebol_motm'
    },
    'fut-bd': {
        title: 'FUT Birthday',
        class: 'fut-bd'
    }
};

export function qualityName(value) {
    let key = Object.keys(cards20).find(key => cards20[key] === value);
    return cards20[key].title;
}

export default cards20;