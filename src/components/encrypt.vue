<template>
  <div>
    <div class="label">✍️ message</div>
    <div id="clear" class="label btn" @click="clear()">clear</div>
    <textarea v-model="sot.imessage" v-on:keyup="encrypt()" @change="encrypt()"></textarea>

    <div class="label">🔑 secret key (optional)</div>
    <input type="text" v-model="sot.key" v-on:keyup="encrypt()" @change="encrypt()">

    <div class="label">🤓 cryptoji</div>
    <div id="copy" class="label btn" @click="copy()"> {{ copytext }} </div>
    <textarea readonly v-model="sot.ocryptoji" id="ocryptoji" ref="ocryptoji"></textarea>
  </div>
</template>

<script>
export default {
  name: 'encrypt',
  data: function() {
    return {
      sot: this.$root.$data,
      copytext: 'copy'
    }
  },
  methods: {
    encrypt: function() {
      this.sot.encrypt();
    },
    clear: function() {
      this.sot.imessage = '';
      this.sot.key = '';
      this.sot.ocryptoji = '';
    },
    copy: function() {
      this.$refs.ocryptoji.select();
      document.execCommand('copy');
      this.copytext = 'copied!';
      setTimeout(function(){
        this.copytext = 'copy';
        window.getSelection().removeAllRanges()
      }.bind(this), 1200);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/settings.scss";

#copy {
  float: right;
}

#clear {
  float: right;
}

</style>
