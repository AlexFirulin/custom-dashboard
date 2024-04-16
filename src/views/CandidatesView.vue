<template>
  <div class="wrapper">
  <div class="candidates-page">
    <action-buttons />
    <candidates-table  @open="handleOpenCandidate"/>
  </div>
  <candidate-info v-if="showinfo" :candidate="selectedCandidate"/>
</div>
</template>
<script setup>
import CandidatesTable from '@/components/CandidatesTable.vue';
import CandidateInfo from '@/components/CandidateInfo.vue';
import ActionButtons from '@/components/ActionButtons.vue'

import { ref } from 'vue';
const showinfo = ref(false)
const selectedCandidate = ref(null);

const handleOpenCandidate = (candidate) => {
  showinfo.value = true
  selectedCandidate.value = candidate;
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