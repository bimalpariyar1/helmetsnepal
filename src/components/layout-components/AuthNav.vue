<template>
  <div class="auth-nav">
    <ul>
      <li v-for="(link, index) in navLinks" :key="link.id">
        <router-link :to="link.slug">{{ link.title }}</router-link>
        <span v-if="index !== navLinks.length - 1" class="mx-3">|</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AuthNav",
  data() {
    return {
      navLinks: [
        { id: 1, title: "Help", slug: "/help" },
        { id: 2, title: "FAQs", slug: "/faqs" },
        { id: 3, title: "Contact", slug: "/contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
