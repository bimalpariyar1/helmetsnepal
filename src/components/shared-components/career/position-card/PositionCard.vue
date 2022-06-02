<template>
  <div class="career-position-item p-4">
    <div class="row">
      <div class="col-md-12">
        <div class="mb-4">
          <span class="position-status"> {{ position.status }} </span>
        </div>
      </div>
      <div class="col-md-5 my-md-0 mb-3">
        <div class="position-detail">
          <div class="mb-2">
            <span class="career-category"> {{ position.category }} </span>
          </div>
          <div>
            <h5>{{ position.post }}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-4 my-md-0 mb-3">
        <div class="code-type mb-2">Code and position type</div>
        <h6>{{ position.code }}</h6>
      </div>
      <div class="col-md-3">
        <anchor-button
          :to="'/career/' + position.id"
          className="btn-solid"
          size="md"
          text="Apply Now"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnchorButton from "../../anchor-button/AnchorButton.vue";
export default {
  components: { AnchorButton },
  name: "PositionCard",
  props: ["position"],
};
</script>

<style lang="scss" scoped></style>
