<template>
  <span class="shy-icon" @click="clickEvent($event)">
    <svg class="icon" aria-hidden="true" v-bind:style="{'color': color,'font-size': size}">
      <use v-bind:xlink:href="'#'+name"/>
    </svg>
  </span>
</template>
<script>
export default {
  name: 'shy-icon',
  props:{
    name: {
      type: String,
      required: true,
      default:'iconback'
    },
    color: {
      type: String,
      required: false,
      default: "#1B0000"
    },
    size: {
      type: String,
      required: false,
      default: "16px"
    }
  },
  methods:{
    clickEvent(e){
      this.$emit('click',e)
    }
  }
}
</script>
<style lang="scss">
  .shy-icon{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    

    .icon{
      font-weight: 300;
    }
  }
</style>