<template>
  <div>
    <h1>Registro</h1>

    <div class="card">
      <input type="email" name="email" v-model="email" placeholder="email" />
      <br />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
      />
      <br />
      <div style="text-align: center;">
        <p>{{ date.month }}</p>
        <month-picker @change="showDate"></month-picker>
      </div>
      <br />
      <button @click="register">Registrarme</button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import MonthPickerInput from "vue-month-picker";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      date: {
        from: null,
        to: null,
        month: null,
        year: null
      }
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
        date: this.date
      });
      console.log(response.data);
    },
    showDate(date) {
      this.date = date;
    }
  },
  components: {
    MonthPickerInput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
