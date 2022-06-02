<template>
  <section class="pt-5">
    <CContainer>
      <CRow>
        <CCol md="4" v-for="csr in csrData" :key="csr.id">
          <article-card :article="csr" />
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import ArticleCard from "@/components/shared-components/article-card/ArticleCard.vue";
export default {
  components: { SectionTitle, ArticleCard },
  name: "CsrBlock",

  data() {
    return {
      csrData: [
        {
          id: 1,
          category: "Environmental",
          image: "/img/articles/article01.png",
          title:
            "Our environmental stewardship includes minimizing our own business’s impact on the planet",
        },
        {
          id: 2,
          category: "Social",
          image: "/img/articles/article02.png",
          title:
            "We are delivering commercially sustainable social impact at scale",
        },
        {
          id: 3,
          category: "Governance",
          image: "/img/articles/article03.png",
          title:
            "Ethical and responsible operations are embedded in our core values and daily work.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
