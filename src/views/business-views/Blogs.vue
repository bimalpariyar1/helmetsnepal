<template>
  <app-layout>
    <page-banner-two>
      <div class="col-md-7">
        <banner-title
          tagline="From Our Blogs"
          title="Fuel for your passion! from our blog"
          description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
        />
      </div>
    </page-banner-two>
    <section class="pt-5">
      <CContainer>
        <CRow>
          <CCol md="8">
            <CRow>
              <CCol md="6" class="mb-4" v-for="blog in blogs" :key="blog.id">
                <article-card :article="blog" />
              </CCol>
            </CRow>
          </CCol>
          <CCol md="4">
            <div class="mb-4">
              <h5>Categories</h5>

              <CListGroup>
                <CListGroupItem>
                  <router-link to="/">General</router-link>
                </CListGroupItem>
                <CListGroupItem>
                  <router-link to="/">Products</router-link>
                </CListGroupItem>
                <CListGroupItem>
                  <router-link to="/">Life Style</router-link>
                </CListGroupItem>
              </CListGroup>
            </div>

            <div class="side-pouplar-blogs">
              <h5>Popular Blogs</h5>
              <div class="d-flex py-3 blog-item">
                <div class="thumb-img me-3">
                  <router-link to="/">
                    <img src="/img/showrooms/showroom01.png" alt=""
                  /></router-link>
                </div>
                <div>
                  <div class="meta">
                    <div class="date mb-2">FEB 24 2022</div>
                    <div class="title">
                      <h6>
                        <router-link to="/blogs/:id">
                          HSN Group: Using Data Science to Build a safe
                          commerce</router-link
                        >
                      </h6>
                    </div>
                    <div class="category">Quality Products</div>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </section>
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import ArticleCard from "@/components/shared-components/article-card/ArticleCard.vue";
import Avatar from "@/components/shared-components/avatar/Avatar.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  components: {
    AppLayout,
    PageBannerTwo,
    BannerTitle,
    ArticleCard,
    Avatar,
    NewsletterSub,
  },
  name,
  Avatar: "Blogs",

  data() {
    return {
      blogs: [
        {
          id: 1,
          category: "Quality Products",
          date: "FEB 24 2022",
          title: "HSN Group: Using Data Science to build a safe commerce",
          image: "/img/blogs/blog01.png",

          author: "John Chrzanawska",
          readTime: "15 min read",
          authorImage: "/img/avatars/thumb-1.jpg",
        },
        {
          id: 2,
          category: "Quality Products",
          date: "FEB 24 2022",
          title: "HSN Group: Using Data Science to build a safe commerce",
          image: "/img/blogs/blog02.png",
          author: "John Chrzanawska",
          readTime: "15 min read",
          authorImage: "/img/avatars/thumb-1.jpg",
        },
        {
          id: 3,
          category: "Quality Products",
          date: "FEB 24 2022",
          title: "HSN Group: Using Data Science to build a safe commerce",
          image: "/img/blogs/blog03.png",
          author: "John Chrzanawska",
          readTime: "15 min read",
          authorImage: "/img/avatars/thumb-1.jpg",
        },
        {
          id: 41,
          category: "Quality Products",
          date: "FEB 24 2022",
          title: "HSN Group: Using Data Science to build a safe commerce",
          image: "/img/blogs/blog04.png",
          author: "John Chrzanawska",
          readTime: "15 min read",
          authorImage: "/img/avatars/thumb-1.jpg",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
