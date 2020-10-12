<template>
  <div class="advertising">
    <div class="container">
      <img
        class="advertising-img"
        v-lazy="require('../../assets/img/ad/ad1.jpg')"
        v-if="adIndex === 1"
      />
      <img
        class="advertising-img"
        v-lazy="require('../../assets/img/ad/ad2.jpg')"
        v-if="adIndex === 2"
      />
      <img
        class="advertising-img"
        v-lazy="require('../../assets/img/ad/ad3.jpg')"
        v-if="adIndex === 3"
      />
      <img
        class="advertising-img"
        v-lazy="require('../../assets/img/ad/ad4.jpg')"
        v-if="adIndex === 4"
      />
      <img
        class="advertising-img"
        v-lazy="require('../../assets/img/ad/ad5.jpg')"
        v-if="adIndex === 5"
      />
      <img
        class="advertising-img"
        v-lazy="require('../../assets/img/ad/ad6.jpg')"
        v-if="adIndex === 6"
      />
      <img
        class="advertising-img"
        v-lazy="require('../../assets/img/ad/ad7.jpg')"
        v-if="adIndex === 7"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: { adIndex: Number },
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
