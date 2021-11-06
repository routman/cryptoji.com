<template>
  <div>
    <div class="label">🤓 paste cryptoji</div>
    <div id="clear" class="label btn" @click="clear()">clear</div>
    <textarea v-model.trim="sot.icryptoji" v-on:keyup="decrypt()" @change="decrypt()" id="icryptoji"></textarea>

    <div class="label">🔑 secret key (optional)</div>
    <input type="text" v-model="sot.key" v-on:keyup="decrypt()" @change="decrypt()">

    <div class="label">✍️ hidden message</div>
    <textarea readonly v-model="sot.omessage" id="omessage"></textarea>
  </div>
</template>

<script>
export default {
  name: 'decrypt',
  data: function() {
    return {
      sot: this.$root.$data
    }
  },
  methods: {
    decrypt: function() {
      this.sot.decrypt();
    },
    clear: function() {
      this.sot.icryptoji = '';
      this.sot.key = '';
      this.sot.omessage = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/settings.scss";

#clear {
  float: right;
}

</style>
