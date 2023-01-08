<template>
  <div id="app">
    <div class="logo c1">c</div>
    <div class="logo c2">r</div>
    <div class="logo c3">y</div>
    <div class="logo c4">p</div>
    <div class="logo c5">t</div>
    <div class="logo c6">o</div>
    <div class="logo c7">j</div>
    <div class="logo c8">i</div>

    <div id="subtitle">encrypted emoji</div>

    <label for="message" class="label">✍️ message</label>
    <div id="clear" class="label btn" @click="clear()">clear</div>
    <textarea id="message" v-model="sot.message" @input="encrypt()" v-on:keyup="encrypt()" @change="encrypt()"></textarea>

    <label for="key" class="label">🔑 secret key (optional)</label>
    <input type="text" id="key" v-model="sot.key" @input="ncrypt()" v-on:keyup="ncrypt()" @change="ncrypt()">

    <label for="cryptoji" class="label">🤓 cryptoji</label>
    <div id="copy" class="label btn" @click="copy()"> {{ copytext }} </div>
    <textarea v-model.trim="sot.cryptoji" @input="decrypt()" v-on:keyup="decrypt()" @change="decrypt()" id="cryptoji" ref="cryptoji"></textarea>

    <about id="about" class="outer"/>

    <div id="footer" class="outer">
      cryptoji &copy; {{ new Date().getFullYear() }}<br>
      <a class="link" href="https://github.com/routman/cryptoji.com" target="_blank" rel="noopener">source</a>
      <a class="link" href="https://ncrypt.org" target="_blank" rel="noopener">ncrypt</a>
      <a class="link" href="https://brainwallet.io" target="_blank" rel="noopener">brainwallet</a>
      <a class="link" href="https://publicnote.com" target="_blank" rel="noopener">publicnote</a>
    </div>

  </div>
</template>

<script>
import about from './components/about.vue'

export default {
  name: 'App',
  components: {
    about
  },
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
    decrypt: function() {
      this.sot.decrypt();
    },
    ncrypt: function() {
      this.sot.ncrypt();
    },
    clear: function() {
      this.sot.message = '';
      this.sot.key = '';
      this.sot.cryptoji = '';
    },
    copy: function() {
      this.$refs.cryptoji.select();
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

<style lang="scss">
@import "assets/settings.scss";

body {
  margin: 20px;
}

#app {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}

.logo {
  display: inline-block;
  margin: 0 9px 0 0;
  font-size: 28px;
  user-select: none;
}
.c1 {
  color: $color-primary;
}
.c2 {
  color: $color-c2;
}
.c3 {
  color: $color-c3;
}
.c4 {
  color: $color-c4;
}
.c5 {
  color: $color-c5;
}
.c6 {
  color: $color-c6;
}
.c7 {
  color: $color-c7;
}
.c8 {
  color: $color-accent;
}

#subtitle {
  margin-top: 8px;
}

#about {
  margin-top: 40px;
}

.label {
  margin: 30px 0 6px 0;
  line-height: 30px;
  display: inline-block;
}

.btn {
  cursor: pointer;
  user-select: none;
}
.btn:hover {
  color: $color-accent !important;
}

.active {
  color: $color-primary;
  text-decoration: underline;
}

input:focus, textarea:focus {
  outline: none;
  border: 2px solid $color-accent;
  border-image: linear-gradient(to right, $color-accent 0%, $color-primary 100%);
  border-image-slice: 1;
  box-shadow: 2px 2px 0px 0px #c884ff;
  padding: 9px;
}

textarea, input {
  box-shadow: none;
  -webkit-appearance: none;
  border: 1px solid $color-c6;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  caret-color: #ce00ce;
  font-size: 20px;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 0px 0px #d8a8ff;
  padding: 10px;
}

textarea {
  min-width: 100%;
  max-width: 100%;
  min-height: 220px;
}

input {
  width: 100%;
  height: 56px;
}

.link {
  text-decoration: underline;
  display: inline-block;
  cursor: pointer;
  color: $color-primary;
  margin: 20px 32px 0 0;
}

#copy {
  float: right;
}

#clear {
  float: right;
}

#footer {
  margin-bottom: 40px;
}

@media screen and (max-width: 824px) {
  .outer {
    width: 100%;
  }
}

</style>
