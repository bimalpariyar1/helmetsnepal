<template>
  <section class="blogs-block py-5">
    <div class="mb-4">
      <CContainer>
        <CRow class="align-items-end">
          <CCol md="9">
            <CRow>
              <CCol md="6">
                <section-title
                  tagline="FROM OUR BLOG"
                  title="Fuel for your passion! from our blog"
                  description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol md="3" class="text-end">
            <router-link to="/blogs">View All Blogs</router-link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    <CContainer>
      <CRow>
        <CCol md="4" v-for="blog in blogs" :key="blog.id">
          <article-card :article="blog" />
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
  name: "BlogsBlock",

  data() {
    return {
      blogs: [
        {
          id: 1,
          category: "Quality Product",
          date: "Feb 24 2022",
          title: "HSN Group: Using Data Science to build a safe commerce",
          author: "John Chrzanawska",
          readTime: "15 min read",
          image: "/img/articles/article01.png",
          authorImage: "/img/avatars/thumb-1.jpg",
        },
        {
          id: 2,
          category: "Safe Riding",
          date: "Feb 24 2022",
          title: "HSN Group: Using Data Science to build a safe commerce",
          author: "John Chrzanawska",
          readTime: "15 min read",
          image: "/img/articles/article02.png",
          authorImage: "/img/avatars/thumb-2.jpg",
        },
        {
          id: 3,
          category: "Quality Product",
          date: "Feb 24 2022",
          title: "HSN Group: Using Data Science to build a safe commerce",
          author: "John Chrzanawska",
          readTime: "15 min read",
          image: "/img/articles/article03.png",
          authorImage: "/img/avatars/thumb-3.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
