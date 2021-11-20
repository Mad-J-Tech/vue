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
      <router-link
        to="/questions"
        tag="button"
        class="btn btn-info mt-3 mx-auto"
        style="display: block"
        >前へ戻る</router-link
      >
    </b-container>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: null,
    };
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