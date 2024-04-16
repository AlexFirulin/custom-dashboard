<template>
  <div class="user-info-wrapper">
    <div class="page">
      <div class="toolbar">
        <div class="acion-group-1">
          <button class="cta">
            <img src="../public/cta1.svg"
                 alt=""> Archive</button>
        </div>
        <button class="cta-3"><img src="../public/edit.svg"
               alt="">Edit</button>
      </div>
      <main class="info-section">
        <section class="emp-info">
          <div class="img">
            <img src="../public/building.svg"
                 alt="">
          </div>
          <div class="emp-top-info">
            <span class="title">{{ props.employe.title }}</span>
            <span class="info1">{{ props.employe.date }}</span>
          </div>
        </section>
        <section class="actions-check">
          <button class="btns"><img src="../public/Suitcase.svg"
                 alt="">8</button>
          <button class="btns"><img src="../public/Person.svg">10</button>
        </section>
        <section class="position-info">
          <div class="info">
            <div class="content">
              <div class="name">Branch</div>
              <div class="value">{{ props.employe.date }}</div>
            </div>
            <div class="content">
              <div class="name">Team</div>
              <div class="value">{{ props.employe.title }}</div>
            </div>
            <div class="content">
              <div class="name">About</div>
              <div class="value">{{ props.employe.about }}</div>
            </div>
            <div class="content">
              <div class="name">Description is final</div>
              <div class="value">No</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script setup>

const props = defineProps(
  { employe: Object }
)
</script>


<style scoped>
.info1 {
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));

  /* Label M */
  font-family: "Power Grotesk Trial";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 16px */
  letter-spacing: 0.32px;
}

.emp-top-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: var(--space, 4px);
  flex: 1 0 0;
}

.img {
  display: flex;
  width: 64px;
  height: 64px;
}

.emp-info {
  display: flex;
  align-items: flex-end;
  gap: var(--view-padding, 16px);
  align-self: stretch;
}

.vacancie {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  align-self: stretch;
}

.job-title {
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));

  /* H3 */
  font-family: "Power Grotesk Trial";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  /* 32px */
}

.divider {
  width: 100%;
  height: 2px;
  background: #A0A7A6;
}

.position-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.copy-btn {
  height: 36px;
  display: flex;
  padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal-button, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--control-icon-gap, 4px);
  border-radius: var(--control-corner-radius, 4px);
  background: var(--control-background-muted, #F1F3F3);
  background: var(--control-background-muted, color(display-p3 0.9451 0.9529 0.9529));
  border: 0;
}

.link-input {
  display: flex;
  padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal, 8px);
  align-items: flex-start;
  gap: var(--control-icon-gap, 4px);
  align-self: stretch;
  border-radius: var(--control-corner-radius, 4px);
  border: var(--control-border-width, 1.5px) solid var(--control-border-default, #9CA7A6);
  border: var(--control-border-width, 1.5px) solid var(--control-border-default, color(display-p3 0.6275 0.6549 0.651));
  background: var(--control-background-default, #FFF);
  background: var(--control-background-default, color(display-p3 1 1 1));
}

.action-url {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--control-caption-margin-top, 4px);
  flex: 1 0 0;
}

.url-copy {
  display: flex;
  align-items: flex-end;
  gap: var(--view-padding, 16px);
  align-self: stretch;
}

.btns {
  display: flex;
  padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal-button, 16px);
  justify-content: center;
  align-items: center;
  border: 0;
  gap: var(--control-icon-gap, 4px);
  border-radius: var(--control-corner-radius, 4px);
  background: var(--control-background-muted, #F1F3F3);
  background: var(--control-background-muted, color(display-p3 0.9451 0.9529 0.9529));
}

.actions-check {
  display: flex;
  align-items: flex-start;
  gap: var(--control-icon-gap, 4px);
}

.title {
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));

  /* H3 */
  font-family: "Power Grotesk Trial";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  /* 32px */
}

.date {
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));
  text-align: right;

  /* Label S */
  font-family: "Power Grotesk Trial";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 14px */
  letter-spacing: 0.42px;
}

.info-section {
  display: flex;
  padding: 0px var(--view-padding, 16px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-6x, 24px);
  align-self: stretch;
}

.cta-3 {
  display: flex;
  padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal-button, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--control-icon-gap, 4px);
  border-radius: var(--control-corner-radius, 4px);
  background: var(--control-background-selected, #000);
  background: var(--control-background-selected, color(display-p3 0 0 0));
  border: 0;
  color: var(--control-label-secondary, #FFF);
  color: var(--control-label-secondary, color(display-p3 1 1 1));

  /* Label S */
  font-family: "Power Grotesk Trial";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 14px */
  letter-spacing: 0.42px;
}

.acion-group-1 {
  display: flex;
  align-items: center;
  gap: 16px;
}

.action-bar-bottom {
  align-self: flex-end;
}

.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}

.text-area {
  display: flex;
  padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal, 8px);
  align-items: flex-start;
  gap: var(--control-icon-gap, 4px);
  flex: 1 0 0;
  align-self: stretch;
  border-radius: var(--control-corner-radius, 4px);
  border: var(--control-border-width, 1.5px) solid var(--control-border-default, #9CA7A6);
  border: var(--control-border-width, 1.5px) solid var(--control-border-default, color(display-p3 0.6275 0.6549 0.651));
  background: var(--control-background-default, #FFF);
  background: var(--control-background-default, color(display-p3 1 1 1));
}

.area {
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));
  font-family: "Power Grotesk Trial";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* 12px */
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.question {
  display: flex;
  height: 95px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--control-caption-margin-top, 4px);
  align-self: stretch;
}

.interview-flow {
  display: flex;
  padding: var(--space-3x, 12px) 0px var(--space-6x, 24px) 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--view-gap, 16px);
  flex: 1 0 0;
}

.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.header1 {
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));

  /* Text S */
  font-family: "Power Grotesk Trial";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 16.8px */
  letter-spacing: 0.42px;
}

.flow {
  display: flex;
  padding: var(--space-3x, 12px) 0px var(--space-6x, 24px) 0px;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--view-gap, 16px);
  flex: 1 0 0;
}

.header {
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));

  /* H5 */
  font-family: "Power Grotesk Trial";
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  /* 14px */
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.stage-header {
  display: flex;
  align-items: center;
  gap: var(--checkpoint-horisontal-gap, 8px);
}

.interview {
  display: flex;
  gap: 8px;
  padding: var(--view-padding, 16px) var(--view-padding, 16px) var(--view-padding-bottom, 24px) var(--view-padding, 16px);
  align-items: flex-start;
  align-self: stretch;
}

h1 {
  color: var(--control-label-default, #000);
  color: var(--control-label-default, color(display-p3 0 0 0));

  /* H4 */
  font-family: "Power Grotesk Trial";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  /* 16px */
}

.user-info-wrapper {
  width: 536px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space, 4px);
  flex: 1 0 0;
  align-self: stretch;
  border-radius: var(--view-corner-radius, 8px);
  background: #fff;
}

.page {
  display: flex;
  padding-bottom: var(--view-padding-bottom, 24px);
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: var(--view-corner-radius, 8px);
  background: var(--background-default, #FFF);
  background: var(--background-default, color(display-p3 1 1 1));
}

.toolbar {
  display: flex;
  justify-content: space-between;
  padding: var(--view-padding, 16px);
  align-items: center;
  gap: var(--view-gap, 16px);
  align-self: stretch;
}

.cta {
  border: 0;
  display: flex;
  padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal-button, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--control-icon-gap, 4px);
  border-radius: var(--control-corner-radius, 4px);
  background: var(--control-background-muted, #F1F3F3);
  background: var(--control-background-muted, color(display-p3 0.9451 0.9529 0.9529));
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  gap: var(--space-6x, 24px);
  align-self: stretch;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.content {
  display: flex;
  padding: var(--space, 4px) 0px;
  align-items: flex-start;
  gap: var(--space-2x, 8px);
  align-self: stretch;
}

.name {
  display: flex;
  flex: 1;
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));

  /* Label S-700 */
  font-family: "Power Grotesk Trial";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* 14px */
  letter-spacing: 0.42px;
}

.value {
  display: flex;
  flex: 1;
  color: var(--color-neutral, #758382);
  color: var(--color-neutral, color(display-p3 0.4784 0.5137 0.5098));

  /* Label S */
  font-family: "Power Grotesk Trial";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 14px */
  letter-spacing: 0.42px;
}

.status {
  display: flex;
  padding: var(--view-padding-bottom, 24px) var(--view-gap, 16px);
  align-items: flex-start;
  gap: var(--view-gap, 16px);
  align-self: stretch;
  background: var(--background-neutral, #DDE2E2);
  background: var(--background-neutral, color(display-p3 0.8745 0.8863 0.8863));
}

.status-text {
  color: var(--control-label-default, #000);
  color: var(--control-label-default, color(display-p3 0 0 0));

  /* Label L */
  font-family: "Power Grotesk Trial";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 22px */
  letter-spacing: 0.22px;
}

.step {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 3px solid #000;
  padding: 6px;
  width: 24px;
  height: 24px;
  color: var(--color-default, #000);
  color: var(--color-default, color(display-p3 0 0 0));
  text-align: center;

  /* Label M-700 */
  font-family: "Power Grotesk Trial";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* 16px */
  letter-spacing: 0.32px;
}
</style>