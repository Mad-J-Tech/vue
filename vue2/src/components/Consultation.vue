<template>
  <transition name="appear">
    <b-container class="mt-5">
      <b-card-group>
        <b-card header="ご相談内容をご記入ください" header-class="text-center">
          <b-form-group label="-ご相談内容-" class="text-info">
            <b-form-textarea v-model="text" rows="12"> </b-form-textarea>
          </b-form-group>
        </b-card>
      </b-card-group>
      <div class="form-group row justify-content-center mt-3">
        <div>
          <router-link to="/questions" tag="button" class="btn btn-info mr-3"
            >前へ戻る</router-link
          >

          <router-link to="/confirmation" tag="button" class="btn btn-info"
            >次へ進む</router-link
          >
        </div>
      </div>
    </b-container>
  </transition>
</template>

<script>
export default {
  computed: {
    text: {
      get() {
        return this.$store.getters.text;
      },
      set(value) {
        this.$store.commit("setText", value);
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