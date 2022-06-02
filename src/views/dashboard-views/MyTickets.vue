<template>
  <dashboard-layout>
    <CRow>
      <CCol md="8">
        <div v-for="ticket in tickets" :key="ticket.id" class="mb-4">
          <CCard class="p-3">
            <div class="border-bottom mb-3">
              <router-link :to="'/dashboard/my-tickets/' + ticket.id">
                <h6>
                  {{ ticket.title }}
                </h6>
              </router-link>
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
          </CCard>
        </div>
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
export default {
  name: "MyTickets",
  components: { DashboardLayout },
  data() {
    return {
      tickets,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
