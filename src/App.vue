<template>
  <div id="app">
    <div id="title">
      <div class="title c1">c</div>
      <div class="title c2">r</div>
      <div class="title c3">y</div>
      <div class="title c4">p</div>
      <div class="title c5">t</div>
      <div class="title c6">o</div>
      <div class="title c7">j</div>
      <div class="title c8">i</div>
    </div>

    <div id="subtitle">encrypted emoji</div>

    <div id="navi" class="outer">
      <div class="navi btn" v-bind:class="{active: sot.navi == 'encrypt'}" @click="navi('encrypt')">encrypt</div>
      <div class="navi btn" v-bind:class="{active: sot.navi == 'decrypt'}" @click="navi('decrypt')">decrypt</div>
    </div>

    <encrypt v-show="sot.navi == 'encrypt'" class="outer"/>
    <decrypt v-show="sot.navi == 'decrypt'" class="outer"/>

    <about id="about" class="outer"/>

    <div id="footer">cryptoji &copy; {{ new Date().getFullYear() }}</div>

  </div>
</template>

<script>
import encrypt from './components/encrypt.vue'
import decrypt from './components/decrypt.vue'
import about from './components/about.vue'

export default {
  name: 'App',
  components: {
    encrypt, decrypt, about
  },
  data: function() {
    return {
      sot: this.$root.$data
    }
  },
  methods: {
    navi: function(n) {
      this.sot.navi = n;
    }
  }
}
</script>

<style lang="scss">
@import "assets/settings.scss";

body {
  margin: 12px;
}

#app {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}

.outer {
  width: 800px;
  margin: 0 auto;
}

#title {
  text-align: center;
  font-size: 44px;
  margin: 40px 0 0 0;
}

.title {
  display: inline-block;
  margin: 0 5px;
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
  text-align: center;
  font-size: 28px;
  margin: 4px 0 40px 0;
}

.navi {
  display: inline-block;
  font-size: 28px;
  margin: 8px 32px;
}

#navi {
  text-align: center;
}

#about {
  margin-top: 40px;
}

#footer {
  text-align: center;
  margin: 40px auto;
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
}

input:focus, textarea:focus {
  outline: none;
  border: 2px solid $color-accent;
  border-image: linear-gradient(to right, $color-accent 0%, $color-primary 100%);
  border-image-slice: 1;
  box-shadow: 2px 2px 0px 0px #c884ff;
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
  min-height: 160px;
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
}

@media screen and (max-width: 824px) {
  .outer {
    width: 100%;
  }
}

</style>
