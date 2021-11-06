import Vue from 'vue'
import App from './App.vue'
var CryptoJS = require("crypto-js");
import "@fontsource/montserrat/300.css";

Vue.config.productionTip = false

function ctoji(dec) { //map ascii printable characters to specific emoji faces
  if (dec == 32) {
    return (String.fromCodePoint(128169));
  }
  else if (dec == 33) {
    return (String.fromCodePoint(129488));
  }
  else if (dec == 34) {
    return (String.fromCodePoint(129402));
  }
  else if (dec == 35) {
    return (String.fromCodePoint(129400));
  }
  else if (dec == 36) {
    return (String.fromCodePoint(129303));
  }
  else if (dec <= 39) {
    return (String.fromCodePoint(dec + 128547));
  }
  else if (dec <= 43) {
    return (String.fromCodePoint(dec + 128537));
  }
  else if (dec <= 49) {
    return (String.fromCodePoint(dec + 129252));
  }
  else if (dec <= 105) {
    return (String.fromCodePoint(dec + 128462));
  }
  else if (dec <= 111) {
    return (String.fromCodePoint(dec + 129206));
  }
  else if (dec <= 120) {
    return (String.fromCodePoint(dec + 129207));
  }
  else {
    return (String.fromCodePoint(dec + 129271));
  }
}

function jitoc(dec) {
  if (dec == 128169) {
    return (String.fromCodePoint(32));
  }
  else if (dec == 129488) {
    return (String.fromCodePoint(33));
  }
  else if (dec == 129402) {
    return (String.fromCodePoint(34));
  }
  else if (dec == 129400) {
    return (String.fromCodePoint(35));
  }
  else if (dec == 129303) {
    return (String.fromCodePoint(36));
  }
  else if (dec >= 129392) {
    return (String.fromCodePoint(dec - 129271));
  }
  else if (dec >= 129319) {
    return (String.fromCodePoint(dec - 129207));
  }
  else if (dec >= 129312) {
    return (String.fromCodePoint(dec - 129206));
  }
  else if (dec >= 129296) {
    return (String.fromCodePoint(dec - 129252));
  }
  else if (dec >= 128584) {
    return (String.fromCodePoint(dec - 128547));
  }
  else if (dec >= 128577) {
    return (String.fromCodePoint(dec - 128537));
  }
  else {
    return (String.fromCodePoint(dec - 128462));
  }

}

var cryptoji = {
  imessage: '',
  omessage: '',
  key: '',
  ocryptoji: '',
  icryptoji: '',
  navi:'encrypt',
  encrypt: function() {
    var cypher = CryptoJS.AES.encrypt(cryptoji.imessage, cryptoji.key).toString();
    var sliced = cypher.slice(10);//remove U2FsdGVkX1
    cryptoji.ocryptoji = '';
    for (var i = 0; i < sliced.length; i++) {
      var dec = sliced.codePointAt(i);
      cryptoji.ocryptoji = cryptoji.ocryptoji + ctoji(dec);
    }
  },
  decrypt: function() {
    cryptoji.icryptoji.replace(/[0-9]/g, '');
    cryptoji.omessage = '';
    var cypher = 'U2FsdGVkX1';

    try {
      //build cyphertext
      for (var i = 0; i < cryptoji.icryptoji.length/2; i++) {
        var dec = cryptoji.icryptoji.codePointAt(i * 2);
        cypher = cypher + jitoc(dec);
      }
      //decrypt
      var bytes  = CryptoJS.AES.decrypt(cypher, cryptoji.key);
      cryptoji.omessage = bytes.toString(CryptoJS.enc.Utf8);;
    } catch (error) {
      cryptoji.omessage = 'unable to decrypt';
    }
  }
}

new Vue({
  render: function (h) { return h(App) },
  data: cryptoji
}).$mount('#app')
