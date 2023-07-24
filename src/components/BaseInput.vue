<template>
    <v-text-field
      ref="VTextField"
      v-bind="$attrs"
      class="base-input"
      @blur="$emit('blur')"
      @keyup="$emit('keyup', $event)"
    >
    </v-text-field>
  </template>
  
  <script>
  export default {
    name: "BaseInput",
    props: {
      value: {
        type: [String, Number]
      }
    }
  };
  </script>
  
  <!-- <style lang="sass" scoped>
  @import "./BaseInput.sass"
  </style> -->
    