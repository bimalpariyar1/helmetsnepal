<template>
  <section class="pb-5">
    <CContainer>
      <CRow>
        <CCol class="mb-4" md="4" v-for="career in careerData" :key="career.id">
          <career-card :career="career" />
        </CCol>
      </CRow>
    </CContainer>
    <CContainer>
      <CRow>
        <CCol md="12" class="mt-4 text-center">
          <pagination />
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import CareerCard from "@/components/shared-components/career/career-card/CareerCard.vue";
import Pagination from "@/components/shared-components/pagination/Pagination.vue";
export default {
  name: "CareerCategories",
  components: { CareerCard, Pagination },

  data() {
    return {
      careerData: [
        {
          id: 1,
          title: "Operations & Finance",
          openPositions: 4,
          image: "/img/career/career01.png",
        },
        {
          id: 2,
          title: "Growth/Marketing",
          openPositions: 3,
          image: "/img/career/career02.png",
        },
        {
          id: 3,
          title: "Growth/Marketing",
          openPositions: 6,
          image: "/img/career/career03.png",
        },
        {
          id: 4,
          title: "Strategy",
          openPositions: 4,
          image: "/img/career/career04.png",
        },
        {
          id: 5,
          title: "Sales/Marketing",
          openPositions: 4,
          image: "/img/career/career05.png",
        },
        {
          id: 6,
          title: "Management",
          openPositions: 2,
          image: "/img/career/career01.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
