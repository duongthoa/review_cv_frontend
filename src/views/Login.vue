<template>
  <v-main>
    <v-container class="d-flex flex-column justify-center screen--full">
      <v-card width="50%" class="pa-10 mx-auto">
        <div class="text-h5 text-center mb-5">
          Đăng nhập
        </div>
        <v-form>
          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            outlined
          ></v-text-field>
        </v-form>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="primary" @click="login">Đăng nhập</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import authService from "../api/authentication";
export default {
  name: "Login",
  components: {
    // HelloWorld
  },
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  methods: {
    login() {
      const data = this.form;
      authService
        .authenticate(data)
        .then(user => {
          this.$router.push({ name: "About" });
          this.$swal({
            position: "center",
            icon: "success",
            title: "hello" + user.email,
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err => {
          console.log(err);
          this.$swal("error: ", err.message, "error");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.screen--full {
  height: 100vh;
}
</style>
