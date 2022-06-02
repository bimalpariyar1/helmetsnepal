<template>
  <dashboard-layout>
    <CCard class="p-4 mt-4 mt-md-0">
      <heading
        title="My Orders"
        description="There are 14 products in current orders"
      />

      <div>
        <CRow class="align-items-end">
          <CCol md="4" class="mb-4">
            <label>Start Date</label>
            <datepicker v-model="date" />
          </CCol>
          <CCol md="4" class="mb-4">
            <label>End Date</label>
            <datepicker v-model="date2" />
          </CCol>
          <CCol md="4" class="mb-4">
            <button class="btn btn-primary">Filter</button>
          </CCol>
        </CRow>
      </div>

      <div class="table-responsive desktop-orders">
        <table class="table orders-listing">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Qty</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ordersData" :key="item.id">
              <th>{{ item.id }}</th>
              <td>
                <div class="d-flex" style="max-width: 200px">
                  <div class="me-3">
                    <img :src="item.image" alt="" />
                  </div>
                  <div>
                    {{ item.name }}
                  </div>
                </div>
              </td>
              <td>{{ item.qty }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.status }}</td>
              <td>
                <button class="cancel-btn rounded">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="resp-orders">
        <CCard class="p-4 mt-3" v-for="item in ordersData" :key="item.id">
          <div class="mb-4">Order Id: {{ item.id }}</div>
          <div class="mb-2">
            <div class="d-flex">
              <div class="me-3">
                <img style="width: 50px" :src="item.image" alt="" />
              </div>
              <div>
                {{ item.name }}
              </div>
            </div>
          </div>
          <div>Quantity: {{ item.qty }}</div>
          <div>Amount: {{ item.amount }}</div>
          <div>Date: {{ item.date }}</div>
          <div>Status: {{ item.status }}</div>
          <div class="mt-4">
            <button class="cancel-btn rounded">Cancel</button>
          </div>
        </CCard>
      </div>
    </CCard>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
const picked = ref(new Date());
export default {
  name: "MyOrders",
  components: { DashboardLayout, Heading, Datepicker },

  data() {
    return {
      date: new Date(),
      date2: new Date(),
      ordersData: [
        {
          id: "58921",
          name: "LS2 Stream Evo Tacho – Gloss White Black Red",
          qty: 2,
          amount: "Rs. 4500",
          status: "Pending",
          date: "27/03/2022",
          image: "/img/helmets/helmet01.png",
        },
        {
          id: "56421",
          name: "LS2 Stream Black Red",
          qty: 2,
          amount: "Rs. 4500",
          status: "Pending",
          date: "27/03/2022",
          image: "/img/helmets/helmet02.png",
        },
        {
          id: "50621",
          name: "Gloss White Black Red",
          qty: 2,
          amount: "Rs. 4500",
          status: "Pending",
          date: "27/03/2022",
          image: "/img/helmets/helmet03.png",
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
