import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import TermsAndConditionsView from "@/views/TermsAndConditionsView.vue";
import PricingView from "@/views/PricingView.vue";
import RefundPolicyView from "@/views/RefundPolicyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicyView,
    },
    {
      path: "/terms-and-conditions",
      name: "terms-and-conditions",
      component: TermsAndConditionsView,
    },
    {
      path: "/refund-policy",
      name: "refund-policy",
      component: RefundPolicyView,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },
  ],
  linkActiveClass: "firealert-active-link",
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
