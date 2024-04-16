<template>
  <div class="wrapper">
    <div class="candidates-page">
      <action-buttons />
      <position-table @onOpen="handleOpenPosition" />
    </div>
    <position-info v-if="showInfo" :position="selectedPosition" />
  </div>
</template>

<script setup>
import ActionButtons from '@/components/ActionButtons.vue';
import PositionTable from '@/components/PositionTable.vue';
import PositionInfo from '@/components/PositionInfo.vue';

import { ref } from 'vue';

const showInfo = ref(false);
const selectedPosition = ref(null);

const handleOpenPosition = (position) => {
  showInfo.value = true;
  selectedPosition.value = position;
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