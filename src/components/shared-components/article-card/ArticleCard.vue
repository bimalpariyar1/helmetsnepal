<template>
  <div class="article-card">
    <div class="article-card-thumbnail mb-4">
      <router-link :to="'/blogs/' + article.id">
        <img :alt="title" :src="article.image" />
      </router-link>
    </div>

    <div class="card-meta">
      <div class="card-meta-category">
        {{ article.category }}
      </div>
      <div class="card-meta-date mt-2 mb-4">
        {{ article.date }}
      </div>
      <div class="card-meta-title mb-5">
        <router-link :to="'/blogs/' + article.id">
          <h5>{{ article.title }}</h5>
        </router-link>
      </div>
      <avatar
        :image="article.authorImage"
        className="author-article-card"
        :title="article.author"
        :subTile="article.readTime"
      />
    </div>
  </div>
</template>

<script>
import Avatar from "../avatar/Avatar.vue";
export default {
  components: { Avatar },
  name: "ArticleCard",
  props: { article: Object },
};
</script>

<style lang="scss" scoped></style>
