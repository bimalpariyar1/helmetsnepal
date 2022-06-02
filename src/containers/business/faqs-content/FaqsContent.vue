<template>
  <section class="py-5">
    <CContainer>
      <CRow>
        <CCol :md="{ span: 3, offset: 2 }">
          <ul class="faqs-menu">
            <li
              v-for="category in faqsCategories"
              :key="category.id"
              @click="onCategoryChange(category.title)"
              class="mb-4"
            >
              <span class="menu-icn me-2">
                <img :src="category.icon" alt="" />
              </span>
              <span>
                {{ category.title }}
              </span>
            </li>
          </ul>
        </CCol>
        <CCol md="6">
          <div v-for="qna in activeCategory" :key="qna.question"></div>
          <CAccordion>
            <CAccordionItem
              v-for="qna in activeCategory"
              :key="qna.id"
              :item-key="qna.id"
              class="mb-3 border rounded"
            >
              <CAccordionHeader> {{ qna.question }}</CAccordionHeader>
              <CAccordionBody>
                <div class="p-3" v-html="qna.answer"></div>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import { faqsCategories, faqsData } from "./faqsData";
export default {
  name: "FaqsContent",
  data() {
    return {
      faqsCategories,
      faqsData,
      activeCategory: faqsData[0].qna,
    };
  },
  methods: {
    onCategoryChange: function (category) {
      const selectedCategory = this.faqsData.find(
        (item) => item.category === category
      );

      console.log(selectedCategory.qna);

      this.activeCategory = selectedCategory.qna;
    },
  },
};
</script>

<style lang="scss" scoped></style>
