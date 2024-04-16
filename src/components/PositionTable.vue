<template>
  <div class="custom-table">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Level</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(position, index) in positions"
            :key="index"
            @click="checkPosition(position)">
          <td>{{ position.title }} #{{ positions.id }}</td>
          <td>{{ position.level }}</td>
          <td>{{ position.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { positions } from '@/constants/positions';
const emit = defineEmits('onOpen')
const checkPosition = (position) => {
  emit('onOpen', position)
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
  width: 536px;
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