<template>
  <b-container class="mt-5">
    <b-card-group>
      <b-card header="To Do List" header-class="text-center">
        <div>
          <b-form-group>
            <b-form-radio-group
              v-model="selected"
              :options="options"
              ref="select"
            >
            </b-form-radio-group>
          </b-form-group>
        </div>
        <b-table-simple>
          <b-thead>
            <b-tr>
              <b-th>ID</b-th>
              <b-th>コメント</b-th>
              <b-th>状態</b-th>
              <b-th>削除</b-th>
            </b-tr>
          </b-thead>
          <b-tbody v-if="selectedAll">
            <b-tr v-for="item in getTodos" v-bind:key="item.id">
              <b-th>{{ item.id }}</b-th>
              <b-td>{{ item.comment }}</b-td>
              <b-td
                ><b-button @click="changeStatus(item)">{{
                  item.status ? "完了" : "作業中"
                }}</b-button></b-td
              >
              <b-td>
                <b-button
                  @click="
                    doRemove(item);
                    reNumber();
                  "
                  >削除</b-button
                >
              </b-td>
            </b-tr>
          </b-tbody>
          <b-tbody v-if="selectedStill">
            <b-tr v-for="item in getCurrentTodos" v-bind:key="item.id">
              <b-th>{{ item.id }}</b-th>
              <b-td>{{ item.comment }}</b-td>
              <b-td
                ><b-button @click="changeStatus(item)">{{
                  item.status ? "完了" : "作業中"
                }}</b-button></b-td
              >
              <b-td>
                <b-button
                  @click="
                    doRemove(item);
                    reNumber();
                  "
                  >削除</b-button
                >
              </b-td>
            </b-tr>
          </b-tbody>
          <b-tbody v-if="selectedDone">
            <b-tr v-for="item in getDoneTodos" v-bind:key="item.id">
              <b-th>{{ item.id }}</b-th>
              <b-td>{{ item.comment }}</b-td>
              <b-td
                ><b-button @click="changeStatus(item)">{{
                  item.status ? "完了" : "作業中"
                }}</b-button></b-td
              >
              <b-td>
                <b-button
                  @click="
                    doRemove(item);
                    reNumber();
                  "
                  >削除</b-button
                >
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <h5 class="text-center mt-5">新規タスクの追加</h5>
        <b-form @submit.prevent="doAdd">
          <div class="input-group">
            <input type="text" ref="comment" class="form-control text-center" />
            <b-button class="btn" type="submit">追加</b-button>
          </div>
        </b-form>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selected: "all",
      options: [
        { text: "全て", value: "all" },
        { text: "作業中", value: "still" },
        { text: "完了", value: "done" },
      ],
    };
  },
  computed: {
    getTodos() {
      return this.$store.getters.todos;
    },
    getDoneTodos() {
      return this.$store.getters.doneTodos;
    },
    getCurrentTodos() {
      return this.$store.getters.currentTodos;
    },
    selectedAll() {
      return this.selected == "all";
    },
    selectedStill() {
      return this.selected == "still";
    },
    selectedDone() {
      return this.selected == "done";
    },
  },
  methods: {
    doAdd() {
      let comment = this.$refs.comment;
      if (!comment.value.length) {
        return;
      }

      this.$store.commit("doAdd", comment.value);

      comment.value = "";
    },
    doRemove(item) {
      let index = this.getTodos.indexOf(item);

      this.$store.commit("doRemove", index);
    },
    reNumber() {
      this.$store.commit("reNumber");
    },
    changeStatus(item) {
      let index = this.getTodos.indexOf(item);
      this.$store.commit("changeStatus", index);
    },
    select() {
      console.log("selected");
    },
  },
};
</script>

