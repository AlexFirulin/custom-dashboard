<template>
  <div class="custom-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>level</th>
          <th>Eval</th>
          <th>days</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(candidate, index) in candidates"
            :key="index"
            @click="checkCandidate(candidate)">
          <td>{{ candidate.name }}</td>
          <td>{{ candidate.position }}</td>
          <td>{{ candidate.level }}</td>
          <td>{{ candidate.eval }}</td>
          <td>{{ calculateDateDifference(candidate.applied) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { candidates } from '@/constants/candidates';
const emit = defineEmits('open')
const checkCandidate = (candidate) => {
  emit('open', candidate)
}

function calculateDateDifference(date) {
  const appliedDate = new Date(date);
  const currentDate = new Date();
  console.log(appliedDate)
  const differenceInMilliseconds = currentDate - appliedDate;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  return differenceInDays;
}
</script>


<style scoped>
tbody>tr:hover {
  background: #000;
  color: #fff;
  cursor: pointer;
}

.active {
  background: #000;
  color: #fff;
}

tr {
  color: var(--color-default, #000);
  font-family: "Power Grotesk Trial";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 16px */
  letter-spacing: 0.32px;
}

.custom-table {
  display: flex;
  padding: 0px var(--view-padding, 16px);
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  color: var(--color-default, #000);
  text-align: left;
  padding: 16px;
  /* H6 */
  font-family: "Power Grotesk Trial";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* 12px */
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border-bottom: 1px solid #000;
}

td {
  padding: 16px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Label M */
  font-family: "Power Grotesk Trial";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 16px */
  letter-spacing: 0.32px;
}

th {
  font-weight: bold;
}
</style>