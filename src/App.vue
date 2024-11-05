<template>
  <MenuSeries />
  <router-view />
</template>

<script>
import MenuSeries from "@/components/MenuSeries.vue";

export default {
  name: "App",
  components: {
    MenuSeries,
  },
};
</script>

<style></style>
