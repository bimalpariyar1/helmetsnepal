<template>
  <section class="pt-5">
    <CContainer>
      <CRow>
        <CCol md="6" class="mb-4">
          <div class="gift-card-preview">
            <img :src="activeCard.image" alt="" />
          </div>
        </CCol>
        <CCol md="6">
          <heading
            title="Gift Cards"
            description="Ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim"
          />

          <div class="gift-card-amounts mt-4">
            <span
              :class="
                activeCard.id === card.id
                  ? 'card-amount me-3 mb-4 active'
                  : 'card-amount me-3 mb-4'
              "
              v-for="card in giftCardsData"
              :key="card.id"
              @click="handleCardClick(card)"
            >
              {{ card.amount }}
            </span>
          </div>

          <div class="mb-4 pb-4 border-bottom">
            <p class="m-0">
              Inclusive of all taxes <br />
              Or 3 interest-free payments
            </p>
          </div>

          <div>
            <h6>Buy this gift card</h6>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import Heading from "@/components/shared-components/heading/Heading.vue";
import { giftCardsData } from "@/assets/data/giftCards";
export default {
  components: { Heading },
  name: "GiftCardsDisplay",

  data() {
    return {
      giftCardsData,
      activeCard: giftCardsData[0],
    };
  },

  methods: {
    handleCardClick: function (card) {
      this.activeCard = card;
    },
  },
};
</script>

<style lang="scss" scoped></style>
