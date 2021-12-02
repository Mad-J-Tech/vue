<template>
  <transition name="appear">
    <b-container class="mt-5">
      <b-card-group>
        <b-card header="以下にお答えください" header-class="text-center">
          <b-form-group
            class="text-info"
            label="現在、生命保険に加入されていますか？"
          >
            <b-form-radio-group
              @input="showHospitalization = true"
              v-model="insurance"
              class="text-dark"
            >
              <b-form-radio value="はい">はい</b-form-radio>
              <b-form-radio value="いいえ">いいえ</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <transition name="fade">
            <b-form-group
              v-if="showHospitalization"
              class="hospitalization text-info"
              label="現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？"
            >
              <b-form-radio-group
                @input="showSurgery = true"
                v-model="hospitalization"
                class="text-dark"
              >
                <b-form-radio value="はい">はい</b-form-radio>
                <b-form-radio value="いいえ">いいえ</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </transition>
          <transition name="fade">
            <b-form-group
              v-if="showSurgery"
              class="surgery text-info"
              label="過去5年以内に、病気や怪我で、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？"
            >
              <b-form-radio-group v-model="surgery" class="text-dark">
                <b-form-radio value="はい">はい</b-form-radio>
                <b-form-radio value="いいえ">いいえ</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </transition>
        </b-card>
      </b-card-group>
      <div class="form-group row justify-content-center mt-3">
        <div>
          <router-link to="/" tag="button" class="btn btn-info mr-3"
            >前へ戻る</router-link
          >

          <router-link to="/consultation" tag="button" class="btn btn-info"
            >次へ進む</router-link
          >
        </div>
      </div>
    </b-container>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showHospitalization: false,
      showSurgery: false,
    };
  },
  computed: {
    insurance: {
      get() {
        return this.$store.getters.insurance;
      },
      set(value) {
        this.$store.commit("setInsurance", value);
      },
    },
    hospitalization: {
      get() {
        return this.$store.getters.hospitalization;
      },
      set(value) {
        this.$store.commit("setHospitalization", value);
      },
    },
    surgery: {
      get() {
        return this.$store.getters.surgery;
      },
      set(value) {
        this.$store.commit("setSurgery", value);
      },
    },
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
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