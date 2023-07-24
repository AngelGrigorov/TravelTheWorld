<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Signup</h1>
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
    name: 'RegisterPage',
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
             retrypassword: {
               label: "Retry Password",
               type: "password"
             },
             firstName: {
               label: "First Name",
               type: "text"
             },
             lastName: {
               label: "Last Name",
               type: "text"
             },
             isAgreed: {
               label: "Agree to terms & conditions",
               type: "checkbox"
             },
      }
    })
  };
  </script>