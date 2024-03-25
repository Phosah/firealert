<script setup lang="ts">
import Brochure from "@/components/Brochure.vue";
import Compatiblity from "@/components/Compatiblity.vue";
import Dashboard from "@/components/Dashboard..vue";
import Features from "@/components/Features.vue";
// import FooterBar from "@/components/FooterBar.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import LayoutOne from "@/components/LayoutOne.vue";
import LayoutTwo from "@/components/LayoutTwo.vue";
import MainHeader from "@/components/MainHeader.vue";
// import MainNavbar from "@/components/MainNavbar.vue";
import Device1 from "../assets/device-1.png";
import Device2 from "../assets/device-2.png";
import Device3 from "../assets/device-3.png";
import Device4 from "../assets/device-4.png";

const vehicleManagement = {
  alpha: "A",
  img: Device1,
  title: "Vehicle management system",
  text: "The vehicle management system is a wireless control panel that detects fire, monitors engine temperature, water levels and oil pressure via the fire alert app.",
};
const fireEngine = {
  alpha: "B",
  img: Device2,
  title: "Fire Engine Managament System",
  text: "The Fire Engine Management System monitors water levels, oil pressure, engine temperature and fire suppression cylinder pressure of the vehicle. The unit has two inputs for pressure monitoring and a secondary input that can be configured to the user's needs. The Fire Management System is also equipped with three outputs for suppression agent release, siren output and engine cut.",
};
const fireTermination = {
  alpha: "C",
  img: Device3,
  title: "Fire Termination Box",
  text: "The Fire Termination Box is connected to the Fire Engine Management System. This connection box is used for the connection cables of the Fire Engine Management System. All inputs and outputs can be wired to this box and keep the integrity of the Fire Engine Management System.",
};
const fireAlert = {
  alpha: "D",
  img: Device4,
  title: "Fire Termination Box",
  text: "Up to 30 Fire Alert Wireless sensors can be installed in the vehicle where needed for temperature and health reporting. Each sensor can be configured to accomodate either a thermal probe, a linear heat cable or a point relay monitor.",
};
</script>

<template>
  <main class="">
    <!-- <MainNavbar /> -->
    <MainHeader />
    <Brochure />
    <Compatiblity />
    <HowItWorks />
    <LayoutOne :page="vehicleManagement" />
    <LayoutTwo :page="fireEngine" />
    <LayoutOne :page="fireTermination" />
    <LayoutTwo :page="fireAlert" />
    <Features />
    <Dashboard />
    <!-- <FooterBar /> -->
  </main>
</template>
