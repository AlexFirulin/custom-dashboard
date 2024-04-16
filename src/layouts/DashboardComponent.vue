<template>
  <nav class="navigation-menu">
    <div class="nav-item-logo">
      <img src="../public/logo.svg"
           alt="logo">
      <img src="../public/logo-small.svg"
           alt="logo-small"
           class="logo-small">
    </div>
    <div class="nav-item-links">
      <div v-for="(item, index) in navItems"
           :key="index"
           class="links-item"
           @click="openCandidates(item.link)">
          <img :src="item.img"
               alt="">
          <span class="text">{{ item.name }}</span>
      </div>
    </div>
    <div class="saved-items">
      <div v-for="(saved, index) in savedItems" :key="index" class="item">
        <img src="../public/saved.svg" alt="">
        <span class="text">{{ saved.name }}</span>
      </div>
    </div>
    <div class="spacer"></div>
    <button class="cta">Log Out</button>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'
import router from '@/router';
const savedItems = reactive([
{
    name: 'Product Manager #2471',
  }, {
    name: 'Junior Frontend Javascript Engineer',
  }, {
    name: 'Middle PHP Developer',
  },
  {
    name: 'Product Manager',
  }
])

const navItems = reactive([
  {
    name: 'Positions',
    img: 'src/public/Suitcase.svg',
    link: '/positions'
  },
  {
    name: 'Candidates',
    img: 'src/public/Person.svg',
    link: '/candidates'
  },
  {
    name: 'Employers',
    img: 'src/public/Office.svg',
    link: '/employer'
  }
])

const openCandidates = (link) => {
  router.push(link)
}
</script>

<style scoped>
.navigation-menu {
  display: flex;
  width: 192px;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex-shrink: 0;
  align-self: stretch;
  background: #FFB0F0;
}

.nav-item-logo {
  display: flex;
  padding: 16px 8px 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
}

.logo-small {
  position: absolute;
  right: 25px;
  top: 5px;
}

.nav-item-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
}
.links-item {
  display: flex;
padding: var(--space-2x, 8px);
align-items: center;
gap:  4px;
align-self: stretch;
border-radius: var(--space, 4px);
cursor: pointer;
}
.text {
  overflow: hidden;
color: var(--color-default, #000);
color: var(--color-default, color(display-p3 0 0 0));
text-overflow: ellipsis;

/* Label S */
font-family: "Power Grotesk Trial";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
letter-spacing: 0.42px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
flex: 1 0 0;
}
.saved-items {
  display: flex;
flex-direction: column;
align-items: flex-start;
gap: var(--navbar-menu-gap, 4px);
align-self: stretch;
}
.item {
  display: flex;
padding: var(--space-2x, 8px);
align-items: center;
gap: var(--space, 4px);
align-self: stretch;
border-radius: var(--space, 4px);
}
.spacer {
  flex: 1 0 0;
align-self: stretch;
}
.cta {
  display: flex;
padding: var(--control-padding-vertical, 16px) var(--control-padding-horizontal-decorative, 24px);
justify-content: center;
align-items: center;
gap: var(--control-icon-gap, 4px);
align-self: stretch;
border-radius: var(--control-corner-radius-decorative, 24px);
background: var(--control-background-secondary, #000);
background: var(--control-background-secondary, color(display-p3 0 0 0));
color: var(--control-label-secondary, #FFF);
color: var(--control-label-secondary, color(display-p3 1 1 1));
font-family: "Power Grotesk Trial";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 16px */
letter-spacing: 0.32px;
}
</style>
