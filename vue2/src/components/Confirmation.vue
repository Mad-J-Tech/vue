<template>
  <b-container class="mt-5">
    <b-card-group>
      <b-card header="以下の内容をご確認ください" header-class="text-center">
        <div>
          <p class="text-info">-性別-</p>
          <p>{{ this.$store.getters.gender }}</p>
        </div>
        <div>
          <p class="text-info">-生年月日-</p>
          <p>
            {{ this.$store.getters.birthYear }}年{{
              this.$store.getters.birthMonth
            }}月{{ this.$store.getters.birthDate }}日
          </p>
        </div>
        <div>
          <p class="text-info">-現在、生命保険に加入されていますか？-</p>
          <p>{{ this.$store.getters.insurance }}</p>
        </div>
        <div>
          <p class="text-info">
            -現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
          </p>
          <p>{{ this.$store.getters.hospitalization }}</p>
        </div>
        <div>
          <p class="text-info">
            -過去５年以内に、病気や怪我で、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？-
          </p>
          <p>{{ this.$store.getters.surgery }}</p>
        </div>
        <div>
          <p class="text-info">-ご相談内容-</p>
          <p>{{ this.$store.getters.text }}</p>
        </div>
      </b-card>
    </b-card-group>
    <div class="form-group row justify-content-center mt-3">
      <div>
        <router-link to="/consultation" tag="button" class="btn btn-info mr-3"
          >前へ戻る</router-link
        >

        <button class="btn btn-info">送信</button>
      </div>
    </div>
  </b-container>
</template>