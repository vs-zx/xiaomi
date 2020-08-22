<template>
  <div class="advertising">
    <div class="container">
      <img src="../../assets/img/ad/ad1.jpg" class="advertising-img" v-if="adInx === 1"/>
      <img src="../../assets/img/ad/ad2.jpg" class="advertising-img" v-if="adInx === 2"/>
      <img src="../../assets/img/ad/ad3.jpg" class="advertising-img" v-if="adInx === 3"/>
      <img src="../../assets/img/ad/ad4.jpg" class="advertising-img" v-if="adInx === 4"/>
      <img src="../../assets/img/ad/ad5.jpg" class="advertising-img" v-if="adInx === 5"/>
      <img src="../../assets/img/ad/ad6.jpg" class="advertising-img" v-if="adInx === 6"/>
      <img src="../../assets/img/ad/ad7.jpg" class="advertising-img" v-if="adInx === 7"/>
    </div>
  </div>
</template>

<script>
export default {
  props: { adInx: Number }
};
</script>

<style scoped>
.advertising {
  height: 120px;
  padding: 22px 0;
  background: rgb(245, 245, 245);
}
.advertising-img {
  width: 100%;
}
</style>
