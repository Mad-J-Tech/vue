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
              <b-form-radio value="male">男性</b-form-radio>
              <b-form-radio value="female">女性</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form inline>
            <b-form-group label="-生年月日-" class="text-info">
              <b-form-select
                v-model="b_year"
                :options="birthday.year"
              ></b-form-select
              ><span class="text-dark">年</span>
              <b-form-select
                v-model="b_month"
                :options="birthday.month"
              ></b-form-select
              ><span class="text-dark">月</span>
              <b-form-select
                v-model="b_date"
                :options="birthday.date"
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
export default {
  data() {
    return {
      gender: "male",
      b_year: null,
      b_month: null,
      b_date: null,
      birthday: {
        year: [],
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        date: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ],
      },
    };
  },
  methods: {},
  created: function () {
    for (let i = 1920; i <= 2021; i++) {
      const date = new Date(i, 0);
      const options = { era: "long" };
      const jp_y = Intl.DateTimeFormat("ja-JP-u-ca-japanese", options)
        .format(date)
        .slice(0, -5);
      this.birthday.year.push(`${i}年(${jp_y})`);
    }
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