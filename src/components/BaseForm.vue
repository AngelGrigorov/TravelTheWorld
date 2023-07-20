<template>
    <v-form>
        <div v-for="field in form" :key="field.label">
            <BaseInput v-if="fieldTypes.input.includes(field.type)"
            
            :label="field.label"
            :type="field.type"
          ></BaseInput>
          <BaseCheckbox v-if="fieldTypes.checkbox == field.type"
            :label="field.label"
          ></BaseCheckbox>
        </div>
        <!-- <v-text-field label="Email" type="email"/>
        <v-text-field label="Username" type="text" />
        <v-text-field label="First Name" type="text" />
        <v-text-field label="Last Name" type="text" />
        <v-checkbox label="Agree to terms & conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules" required /> -->
          <!-- <v-autocomplete label="Country" :items="countries" /> -->
        <!-- <BaseInput
            required
            :value="form.email"
            :label="'Email'"
            :type="email"
          ></BaseInput> -->

          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
       
</template>
<script>
  import BaseInput from "./BaseInput";
  import BaseCheckbox from "./BaseCheckbox";
  export default {
    name: 'BaseForm',
    components: {
    BaseInput,
    BaseCheckbox
    },
    data() {
      return {
        fieldTypes: {
           input: ['text','email','password' ],
           checkbox: 'checkbox' ,
        }
      }
    },
  props: {
    form: {
      type: Object
     
    }
  },
  };
  </script>