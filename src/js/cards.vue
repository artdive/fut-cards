<template>
    <div
            class="playercard"
            :class="['fut' + fifa, version, 'playercard-' + size]"
    >
        <div class="playercard-overlay"></div>
        <div class="playercard-rating" v-if="rating">{{ rating }}</div>
        <div class="playercard-name" v-if="name">{{ name }}</div>
        <div class="playercard-position" v-if="position">{{ position }}</div>
        <div class="playercard-nation" v-if="nation"><img :src="nation" alt=""></div>
        <div class="playercard-club" v-if="club"><img :src="club" alt=""></div>
        <div class="playercard-picture" :class="{'playercard-picture-special': pictureSpecial}" v-if="picture"><img :src="picture" alt=""></div>
        <div class="playercard-attr playercard-attr1" v-if="attrs">{{ attrs[0] }}<span>PAC</span></div>
        <div class="playercard-attr playercard-attr2" v-if="attrs">{{ attrs[1] }}<span>SHO</span></div>
        <div class="playercard-attr playercard-attr3" v-if="attrs">{{ attrs[2] }}<span>PAS</span></div>
        <div class="playercard-attr playercard-attr4" v-if="attrs">{{ attrs[3] }}<span>DRI</span></div>
        <div class="playercard-attr playercard-attr5" v-if="attrs">{{ attrs[4] }}<span>DEF</span></div>
        <div class="playercard-attr playercard-attr6" v-if="attrs">{{ attrs[5] }}<span>PHY</span></div>
        <div class="playercard-workrates" v-if="workrates">{{ workrates }}</div>
        <div class="playercard-line playercard-line1"></div>
        <div class="playercard-line playercard-line2"></div>
        <div class="playercard-line playercard-line3"></div>
        <div class="playercard-line playercard-line4"></div>
        <div class="playercard-line playercard-line5"></div>
    </div>
</template>

<script>
    export default {
        props: {
            fifa: {
                type: [String, Number],
                required: true
            },
            version: {
                type: [String, Number]
            },
            size: {
                type: String,
                default: 'large'
            },
            rating: {
                type: [String, Number]
            },
            position: {
                type: String
            },
            name: {
                type: String
            },
            nation: {
                type: String
            },
            club: {
                type: String
            },
            picture: {
                type: String
            },
            pictureSpecial: {
                type: Boolean,
                default: false
            },
            attrs: {
                type: Array
            },
            workrates: {
                type: String
            }
        }
    }
</script>