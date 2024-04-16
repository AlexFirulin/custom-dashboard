<template>
  <div class="wrapper">
    <div class="candidates-page">
      <action-buttons />
      <employer-table @onOpen="handleOpenEmploye" />
    </div>
     <employe-info v-if="showInfo" :employe="selectedEmployer" />
  </div>
</template>

<script setup>
import ActionButtons from '@/components/ActionButtons.vue';
import EmployerTable from '@/components/EmployerTable.vue';
import EmployeInfo from '@/components/EmploeyInfo.vue';


import { ref } from 'vue';

const showInfo = ref(false);
const selectedEmployer= ref(null);

const handleOpenEmploye = (empl) => {
  showInfo.value = true;
  selectedEmployer.value = empl;
};
</script>



<style scoped>
.wrapper {
  display: flex;
  align-items: stretch;
  flex: 1;
  gap: 10px;
  height: 832px;
}
.candidates-page {
  display: flex;
flex-direction: column;
align-items: flex-start;
gap: var(--view-gap, 16px);
flex: 1 0 0;
align-self: stretch;
border-radius: 8px;
background: var(--background-default, #FFF);
background: var(--background-default, color(display-p3 1 1 1));
}
</style>