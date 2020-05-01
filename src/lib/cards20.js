const cards20 = {
    icon: {
        title: 'Icon / Legend',
        class: 'icon rare'
    },
    icon_moment: {
        title: 'Prime Icon Moments',
        class: 'icon_moment rare'
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
        class: 'otw rare'
    },
    sbc_premium: {
        title: 'Squad Builder Premium',
        class: 'sbc_premium rare'
    },
    sbc_flashback: {
        title: 'Flashback SBC',
        class: 'sbc_flashback rare'
    },
    potm_epl: {
        title: 'Premier League POTM',
        class: 'potm_epl rare'
    },
    potm_bundesliga: {
        title: 'Bundesliga POTM',
        class: 'potm_bundesliga rare'
    },
    potm_mls: {
        title: 'MLS POTM',
        class: 'potm_mls rare'
    },
    potm_ligue1: {
        title: 'Ligue 1 POTM',
        class: 'potm_ligue1 rare'
    },
    halloween: {
        title: 'Ultimate Scream',
        class: 'halloween rare'
    },
    sbc: {
        title: 'Squad Builder Reward',
        class: 'sbc rare'
    },
    ucl_rare: {
        title: 'Champions League Rare',
        class: 'ucl_rare rare'
    },
    ucl_non_rare: {
        title: 'Champions League',
        class: 'ucl_non_rare rare'
    },
    ucl_sbc: {
        title: 'Champions League SBC',
        class: 'ucl_sbc rare'
    },
    ucl_live: {
        title: 'Champions League Live',
        class: 'ucl_live rare'
    },
    objective_reward: {
        title: 'Objectives Reward',
        class: 'objective_reward rare'
    },
    objective_reward_2: {
        title: 'League Objective',
        class: 'objective_reward_2 rare'
    },
    purple: {
        title: 'Hero',
        class: 'purple rare'
    },
    'award-winner': {
        title: 'Award Winner',
        class: 'award-winner rare'
    },
    bluered: {
        title: 'Record Breaker',
        class: 'bluered rare'
    },
    pro: {
        title: 'Pro Player',
        class: 'pro rare'
    },
    icon_swap_1: {
        title: 'Icon Swaps I',
        class: 'icon_swap_1 rare'
    },
    icon_swap_2: {
        title: 'Icon Swaps II',
        class: 'icon_swap_2 rare'
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
        class: 'europa_live rare'
    },
    potm_laliga: {
        title: 'La Liga POTM',
        class: 'potm_laliga rare'
    },
    f_moment: {
        title: 'Player Moments',
        class: 'f_moment rare'
    },
    ucl_tott: {
        title: 'Champions League TOTT',
        class: 'ucl_tott rare'
    },
    europa_tott: {
        title: 'Europa League TOTT',
        class: 'europa_tott rare'
    },
    futmas: {
        title: 'FUTmas',
        class: 'futmas rare'
    },
    toty_nominee: {
        title: 'TOTY Nominees',
        class: 'toty_nominee rare'
    },
    toty: {
        title: 'TOTY',
        class: 'toty rare'
    },
    headliners: {
        title: 'Headliners',
        class: 'headliners rare'
    },
    headliners_2: {
        title: 'Headliners Streak',
        class: 'headliners_2 rare'
    },
    future_stars: {
        title: 'Future Stars',
        class: 'future_stars rare'
    },
    future_stars_2: {
        title: 'Future Stars Upgrade',
        class: 'future_stars_2 rare'
    },
    motm: {
        title: 'Man of the Match',
        class: 'motm rare'
    },
    winter_refresh: {
        title: 'Winter Refresh',
        class: 'winter_refresh rare'
    },
    shapeshifter: {
        title: 'Shapeshifters',
        class: 'shapeshifter rare'
    },
    europa_motm: {
        title: 'Europa League MOTM',
        class: 'europa_motm rare'
    },
    ucl_motm: {
        title: 'Champions League MOTM',
        class: 'ucl_motm rare'
    },
    libertadores_b: {
        title: 'Libertadores',
        class: 'libertadores_b rare'
    },
    libertadores_g: {
        title: 'Libertadores Kickoff',
        class: 'libertadores_g rare'
    },
    sudamericana: {
        title: 'Sudamericana',
        class: 'sudamericana rare'
    },
    b_moments: {
        title: 'TOTW Moments',
        class: 'b_moments rare'
    },
    s_moments: {
        title: 'TOTW Moments Silver',
        class: 's_moments rare'
    },
    conmebol_motm: {
        title: 'Libertadores MOTM',
        class: 'conmebol_motm rare'
    },
    'fut-bd': {
        title: 'FUT Birthday',
        class: 'fut-bd rare'
    },
    tots: {
        title: 'Team of the Season Gold',
        class: 'tots rare'
    }
};

export function qualityName(value) {
    let key = Object.keys(cards20).find(key => cards20[key] === value);
    return cards20[key].title;
}

export default cards20;