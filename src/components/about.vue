<template>
  <div>
    <p>Cryptoji uses AES-256 to encrypt messages into emoji, known as cryptoji.  Only those who possess the secret key can decrypt the cyrptoji.</p>

    <p>Encryption and decryption take place on your device, and the information you enter is never sent or stored anywhere.</p>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

img {
  display: block;
  margin: 12px 0 40px 0;
}

.label {
  margin: 8px 0 0 0;
}

.addr {
  margin: 0 0 8px 0;
}

@media screen and (max-width: 600px) {
  .addr {
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  .addr {
    font-size: 14px;
  }
}

@media screen and (max-width: 400px) {
  .addr {
    font-size: 12px;
  }
}

</style>
