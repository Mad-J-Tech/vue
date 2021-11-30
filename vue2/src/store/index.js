import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        gender: null,
        birthYear: null,
        birthMonth: null,
        birthDate: null,
        insurance: null,
        hospitalization: null,
        surgery: null,
        text: null,
    },
    getters: {
        gender: state => state.gender,
        birthYear: state => state.birthYear,
        birthMonth: state => state.birthMonth,
        birthDate: state => state.birthDate,
        insurance: state => state.insurance,
        hospitalization: state => state.hospitalization,
        surgery: state => state.surgery,
        text: state => state.text,


    },
    mutations: {
        setGender: function (state, gender) {
            state.gender = gender;
        },
        setBirthYear: function (state, birthYear) {
            state.birthYear = birthYear;
        },
        setBirthMonth: function (state, birthMonth) {
            state.birthMonth = birthMonth;
        },
        setBirthDate: function (state, birthDate) {
            state.birthDate = birthDate;
        },
        setInsurance: function (state, insurance) {
            state.insurance = insurance;
        },
        setHospitalization: function (state, hospitalization) {
            state.hospitalization = hospitalization;
        },
        setSurgery: function (state, surgery) {
            state.surgery = surgery;
        },
        setText: function (state, text) {
            state.text = text;
        },

    }
});

export default store;