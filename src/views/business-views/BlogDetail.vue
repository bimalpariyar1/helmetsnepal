<template>
  <app-layout>
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <div class="text-center mb-5 pt-5">
            <div>
              <h1>8 Examples of maintaining a safe ride</h1>
            </div>
          </div>
          <div class="d-flex justify-content-center mb-5">
            <avatar
              className="author-article-card"
              image="/img/avatars/thumb-3.jpg"
              title="John Chrzanawska"
              subTile="15 min read"
            />
          </div>
        </CCol>
        <CCol md="8">
          <div class="blog-detail-thumb">
            <img src="/img/bodyimg01.png" alt="" />
          </div>
        </CCol>
        <CCol md="6">
          <div class="rich-text mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <p>
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
              vitae, justo. Nullam dictum felis eu pede
            </p>
            <br />
            <img src="/img/bodyimg01.png" alt="" />
            <br /><br />
            <h4>pellentesque eu, pretium quis, sem</h4>
            <ul>
              <li>
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel
              </li>
              <li>Aenean massa. Cum sociis natoque</li>
              <li>Nullam dictum felis eu pede</li>
            </ul>
            <br />
            <h4>pellentesque eu, pretium quis, sem</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <p>
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
              vitae, justo. Nullam dictum felis eu pede
            </p>
            <h4>pellentesque eu, pretium quis, sem</h4>
            <ul>
              <li>
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel
              </li>
              <li>Aenean massa. Cum sociis natoque</li>
              <li>Nullam dictum felis eu pede</li>
            </ul>
            <br />
            <h4>pellentesque eu, pretium quis, sem</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <p>
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
              vitae, justo. Nullam dictum felis eu pede
            </p>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    <section class="py-5">
      <CContainer>
        <CRow class="justify-content-center">
          <CCol md="6">
            <section-title
              className="text-center"
              title="Related Blogs"
              description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
            />
          </CCol>
        </CRow>
      </CContainer>
    </section>
    <section class="related-blog mb-5">
      <CContainer>
        <CRow>
          <CCol
            md="4"
            class="mb-md-0 mb-4"
            v-for="blog in blogs"
            :key="blog.id"
          >
            <article-card :article="blog" />
          </CCol>
        </CRow>
      </CContainer>
    </section>
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import Avatar from "@/components/shared-components/avatar/Avatar.vue";
import ArticleCard from "@/components/shared-components/article-card/ArticleCard.vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
export default {
  components: { AppLayout, Avatar, ArticleCard, SectionTitle },
  name: "BlogDetail",
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
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
