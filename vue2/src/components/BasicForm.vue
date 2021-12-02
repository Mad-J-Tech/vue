<template>
  <transition name="appear" appear>
    <b-container class="mt-5">
      <b-card-group>
        <b-card
          header="お客様の情報を入力してください"
          header-class="text-center"
        >
          <b-form-group label="-性別-" class="text-info">
            <b-form-radio-group v-model="gender" class="text-dark">
              <b-form-radio value="男性">男性</b-form-radio>
              <b-form-radio value="女性">女性</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form inline>
            <b-form-group label="-生年月日-" class="text-info">
              <b-form-select
                v-model="birthYear"
                :options="birthday.years"
              ></b-form-select
              ><span class="text-dark">年</span>
              <b-form-select
                v-model="birthMonth"
                :options="birthday.months"
              ></b-form-select
              ><span class="text-dark">月</span>
              <b-form-select
                v-model="birthDate"
                :options="birthday.dates"
              ></b-form-select
              ><span class="text-dark">日</span>
            </b-form-group>
          </b-form>
        </b-card>
      </b-card-group>
      <router-link
        to="/questions"
        tag="button"
        class="btn btn-info mt-3 mx-auto"
        style="display: block"
        >次へ進む</router-link
      >
    </b-container>
  </transition>
</template>

<script>
//生年月日の選択肢の配列を定義用ファイルから読み込み
import { yearList, monthList, dateList } from "../utiles/difinitions";

export default {
  data() {
    return {
      birthday: {
        years: yearList,
        months: monthList,
        dates: dateList,
      },
    };
  },
  computed: {
    gender: {
      get() {
        return this.$store.getters.gender;
      },
      set(value) {
        this.$store.commit("setGender", value);
      },
    },
    birthYear: {
      get() {
        return this.$store.getters.birthYear;
      },
      set(value) {
        this.$store.commit("setBirthYear", value);
      },
    },
    birthMonth: {
      get() {
        return this.$store.getters.birthMonth;
      },
      set(value) {
        this.$store.commit("setBirthMonth", value);
      },
    },
    birthDate: {
      get() {
        return this.$store.getters.birthDate;
      },
      set(value) {
        this.$store.commit("setBirthDate", value);
      },
    },
  },
};
</script>

<style scoped>
.appear-enter {
  opacity: 0;
}
.appear-enter-active {
  transition: opacity 0.5s;
}
.appear-enter-to {
  opacity: 1;
}
</style>