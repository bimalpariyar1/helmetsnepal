<template>
  <div class="text-center member-card">
    <div class="member-photo mb-4">
      <router-link :to="'/team/' + member.name">
        <img :src="member.image" alt="" />
      </router-link>
    </div>
    <div class="member-meta">
      <router-link :to="'/team/' + member.name">
        <h4>{{ member.name }}</h4>
      </router-link>
      <p>{{ member.designation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: ["member"],
};
</script>

<style lang="scss" scoped></style>
