<template>
   <div class="template-wrapepr">
   <dashboard-component />
   <router-view />
</div>
</template>
<script setup>
import DashboardComponent from '/src/layouts/DashboardComponent.vue'
</script>
<style scoped>
.template-wrapepr {
   display: flex;
   align-items: flex-start;
   align-self: stretch;
   background: #FFB0F0;
   height: 832px;
}
</style>