<template>
  <div>
    <p>Cryptoji uses AES-256 to encrypt messages into emoji, known as cryptoji.  Only those who possess the secret key can decrypt the cyrptoji. </p>

    <p>The secret key is optional, though highly encouraged.  If you leave the secret key blank, your message can be read by anyone who has a copy of the cryptoji. The more complex the secret key, the stronger the encryption.</p>

    <p>All encryption and decryption takes place on your device, and the information you enter into this website is never sent or stored anywhere.  This page continues to function even after you disconnect your device from your network or turn on airplane mode.</p>

    <p>Cryptoji is <a class="link" href="https://github.com/routman/cryptoji.com" target="_blank">open source</a> for full transparency. Try storing your cryptoji messages privately and anonymously at <a class="link" href="https://publicnote.com" target="_blank">publicnote.com</a>.</p></p>

    <p><span>Bitcoin donations: </span><span id="btc">1HrQfojcRt4gGEZntEwp24KVrSch8mtqMk</span></p>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#btc {
  font-size: 16px;
}

</style>
