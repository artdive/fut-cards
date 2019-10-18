import Vue from 'vue';
import futCard from '../js/cards';
import cards20 from '../lib/cards20';

new Vue({
    el: '#test',
    data: {
        cards20: cards20
    },
    components: {
        futCard
    }
});