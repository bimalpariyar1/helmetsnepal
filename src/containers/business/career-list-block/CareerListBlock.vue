<template>
  <section class="py-5">
    <CContainer>
      <CRow>
        <CCol
          class="mb-4"
          :md="{ span: 10, offset: 1 }"
          v-for="position in positions"
          :key="position.id"
        >
          <position-card :position="position" />
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
import Pagination from "@/components/shared-components/pagination/Pagination.vue";
import PositionCard from "@/components/shared-components/career/position-card/PositionCard.vue";
export default {
  name: "CareerListBlock",

  components: { Pagination, PositionCard },
  data() {
    return {
      positions: [
        {
          id: 1,
          status: "On Going",
          category: "Maketing/Advertisement",
          post: "Branch Manager (NP Candidates)",
          code: "Code and position type",
          salary: "20k-30K Before Tax (Business Contract)",
        },
        {
          id: 2,
          status: "On Going",
          category: "Maketing/Advertisement",
          post: "Branch Manager (NP Candidates)",
          code: "Code and position type",
          salary: "20k-30K Before Tax (Business Contract)",
        },
        {
          id: 3,
          status: "On Going",
          category: "Maketing/Advertisement",
          post: "Branch Manager (NP Candidates)",
          code: "Code and position type",
          salary: "20k-30K Before Tax (Business Contract)",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
