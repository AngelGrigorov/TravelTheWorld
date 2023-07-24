<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Sign In</h1>
        <BaseForm
        :form="form"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BaseForm from "../components/BaseForm";

export default {
  name: 'LoginPage',
  components: {
    BaseForm
  },
  data: () => ({

        form: {
           email: {
             label: "Email",
             type: "email"
           },
           password: {
             label: "Password",
             type: "password"
           },
    }
  })
};
</script>