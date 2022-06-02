<template>
  <dashboard-layout>
    <CRow>
      <CCol md="8">
        <CCard class="p-3">
          <div class="border-bottom mb-4">
            <h6>{{ ticket.title }}</h6>
            <p>{{ ticket.type }}</p>
          </div>
          <div class="d-flex flex-wrap">
            <div class="me-4">
              <strong> Start Date </strong>
              {{ ticket.startDate }}
            </div>
            <div>
              <strong> End Date </strong>
              {{ ticket.endDate }}
            </div>
          </div>

          <div class="border-bottom mb-4 mt-4">
            <p>
              {{ ticket.description }}
            </p>
          </div>

          <div class="ticket-comments">
            <div class="bg-light rounded p-3">
              <div class="d-flex">
                <div class="author-img me-3">
                  <img src="/img/avatars/thumb-1.jpg" alt="" />
                </div>
                <div class="comment-meta">
                  <h6>Commenter Name</h6>
                  <p>3/8/2022</p>
                  <p class="m-0">
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus
                  </p>
                </div>
              </div>
            </div>
            <div class="leave-comment mt-4">
              <FormKit type="form" @submit="submitHandler" :actions="false">
                <CRow>
                  <CCol md="12" class="mb-4">
                    <FormKit
                      type="textarea"
                      name="comments"
                      label="Comment"
                      placeholder="Comment"
                      validation="required"
                      validation-visibility="submit"
                    />
                  </CCol>
                </CRow>
                <div class="">
                  <button
                    class="btn btn-primary text-white py-2 px-3"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </FormKit>
            </div>
          </div>
        </CCard>
      </CCol>

      <CCol md="4">
        <CCard class="mb-4 p-4">
          <div class="notice-tips">
            <div class="content">
              <h6>Tips to buy safe helmets!</h6>
              <p>
                Lorem ipsum dolor sit amet, consect etuer adipiscing elit.
                Aenean commodo ligula eget dolor.
              </p>
              <div class="action">
                <router-link to="/">Read More</router-link>
              </div>
            </div>
          </div>
        </CCard>
        <CCard class="mb-4 p-4">
          <div class="notice-tips">
            <div class="content">
              <h6>We will remain close.</h6>
              <p>
                Lorem ipsum dolor sit amet, consect etuer adipiscing elit.
                Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </CCard>
      </CCol>
    </CRow>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { tickets } from "@/assets/data/tickets";

import { useRoute } from "vue-router";
export default {
  name: "TicketDetail",
  components: { DashboardLayout },
  data() {
    return {
      ticket: {},
    };
  },

  created() {
    const route = useRoute();

    const ticket = tickets.find((item) => item.id === route.params.id);
    this.ticket = ticket;
  },

  methods: {
    submitHandler: function (values) {
      console.log(values);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
