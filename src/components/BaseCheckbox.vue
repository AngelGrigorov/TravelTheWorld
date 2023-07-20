<template>
  <div class="base-checkbox">
    <v-checkbox
      v-bind="$attrs"
      @change="handleChange"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",

  props: {
    value: [Boolean, String]
  },

  methods: {
    handleChange() {
      if(this.disabled) return;
      this.$emit("input", this.value);
    },
    // When value arrives from backend it's a string and messes up with what's being displayed by the checkbox/switch
    // toBoolean(bool) {
    //   if(typeof bool === "boolean") {
    //     return bool;
    //   }

    //   // initially the value is undefined
    //   if(typeof bool === "undefined") return false;

    //   if(bool === "true") return true;
    //   if(bool === "false") return false;

    //   throw new Error("Expected a Boolean received: ", bool);
    // }
  }
};
</script>

<!-- <style lang="sass" scoped>
@import "./BaseCheckbox"
</style> -->
