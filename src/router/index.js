import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/business-views/Home.vue";
import About from "../views/business-views/About.vue";
import PageLogin from "../views/auth-views/PageLogin.vue";
import PageRegister from "../views/auth-views/PageRegister.vue";
import UserRegistration from "../views/auth-views/UserRegistration.vue";
import ForgotPassword from "../views/auth-views/ForgotPassword.vue";
import ChangePassoword from "../views/auth-views/ChangePassword.vue";
import Team from "../views/business-views/Team.vue";
import TeamDetail from "../views/business-views/TeamDetail.vue";
import Faqs from "../views/business-views/Faqs.vue";
import Career from "../views/business-views/Career.vue";
import CareerList from "../views/business-views/CareerList.vue";
import CareerDetail from "../views/business-views/CareerDetail.vue";
import Showrooms from "../views/business-views/Showrooms.vue";
import Blogs from "../views/business-views/Blogs.vue";
import BlogDetail from "../views/business-views/BlogDetail.vue";
import GeneralPage from "../views/business-views/GeneralPage.vue";
import ContactUs from "../views/business-views/ContactUs.vue";
import Csr from "../views/business-views/Csr.vue";
import RiderStory from "../views/business-views/RiderStory.vue";
import Profile from "../views/dashboard-views/Profile.vue";
import Settings from "../views/dashboard-views/Settings.vue";
import EditProfile from "../views/dashboard-views/EditProfile.vue";
import MyOrders from "../views/dashboard-views/MyOrders.vue";
import OrderDetail from "../views/dashboard-views/OrderDetail.vue";
import PastOrders from "../views/dashboard-views/PastOrders.vue";
import ReturnItem from "../views/dashboard-views/ReturnItem.vue";
import ReturnItemDetail from "../views/dashboard-views/ReturnItemDetail.vue";
import MyTickets from "../views/dashboard-views/MyTickets.vue";
import TicketDetail from "../views/dashboard-views/TicketDetail.vue";
import Notifications from "../views/dashboard-views/Notifications.vue";
import ItemDetail from "../views/ecommerce-views/ItemDetail.vue";
import Wishlist from "../views/ecommerce-views/Wishlist.vue";
import Cart from "../views/ecommerce-views/Cart.vue";
import Checkout from "../views/ecommerce-views/Checkout.vue";
import GiftCards from "../views/ecommerce-views/GiftCards.vue";
import ItemListing from "../views/ecommerce-views/ItemListing.vue";
import Shop from "../views/ecommerce-views/Shop.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/team/:id",
    name: "TeamDetail",
    component: TeamDetail,
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: Faqs,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
  },
  {
    path: "/careers/:id",
    name: "CareerList",
    component: CareerList,
  },
  {
    path: "/career/:id",
    name: "CareerDetail",
    component: CareerDetail,
  },
  {
    path: "/showrooms",
    name: "Showrooms",
    component: Showrooms,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/blogs/:id",
    name: "BlogDetail",
    component: BlogDetail,
  },
  {
    path: "/general-page",
    name: "GeneralPage",
    component: GeneralPage,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/csr",
    name: "Csr",
    component: Csr,
  },
  {
    path: "/rider-story/:id",
    name: "RiderStory",
    component: RiderStory,
  },
  {
    path: "/login",
    name: "Login",
    component: PageLogin,
  },
  {
    path: "/register",
    name: "Register",
    component: PageRegister,
  },
  {
    path: "/register/:type",
    name: "UserRegistration",
    component: UserRegistration,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/change-password",
    name: "ChangePassoword",
    component: ChangePassoword,
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/dashboard/profile/edit",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/dashboard/my-orders",
    name: "MyOrders",
    component: MyOrders,
  },
  {
    path: "/dashboard/order/:id",
    name: "OrderDetail",
    component: OrderDetail,
  },
  {
    path: "/dashboard/past-orders",
    name: "PastOrders",
    component: PastOrders,
  },
  {
    path: "/dashboard/return",
    name: "ReturnItem",
    component: ReturnItem,
  },
  {
    path: "/dashboard/return/:id",
    name: "ReturnItemDetail",
    component: ReturnItemDetail,
  },
  {
    path: "/dashboard/my-tickets",
    name: "MyTickets",
    component: MyTickets,
  },
  {
    path: "/dashboard/my-tickets/:id",
    name: "TicketDetail",
    component: TicketDetail,
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/dashboard/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/items/:id",
    name: "ItemDetail",
    component: ItemDetail,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/gift-cards",
    name: "GiftCards",
    component: GiftCards,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: ItemListing,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
