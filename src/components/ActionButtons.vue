<template>
  <div class="toolbar">
    <div class="cta-group">
      <div class="cta-group-1">
        <button class="cta-active">Evaluated</button>
        <hr class="divider">
        <button class="cta-unactive">Top</button>
        <hr class="divider">
        <button class="cta-unactive">Arcived</button>
      </div>
      <button class="cta-2">
        <img src="../public/Filter.svg"
             alt="">
      </button>
      <div class="spacer"></div>
      <button class="cta-3">+ Add</button>
    </div>
  </div>
</template>
<style scoped>
.toolbar {
  display: flex;
padding: var(--view-padding, 16px);
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: var(--view-gap, 16px);
align-self: stretch;
}
.cta-group {
  display: flex;
height: 30px;
align-items: center;
gap: var(--form-gap-horizontal, 16px);
align-self: stretch;
}
.cta-group-1 {
  display: flex;
align-items: center;
border-radius: var(--control-corner-radius, 4px);
background: var(--control-background-muted, #F1F3F3);
background: var(--control-background-muted, color(display-p3 0.9451 0.9529 0.9529));
}
.cta-active {
  border: 0;
  display: flex;
padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal-button, 16px);
align-items: center;
gap: var(--control-icon-gap, 4px);
background: var(--control-background-selected, #000);
background: var(--control-background-selected, color(display-p3 0 0 0));
color: var(--control-label-secondary, #FFF);
color: var(--control-label-secondary, color(display-p3 1 1 1));
font-family: "Power Grotesk Trial";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
letter-spacing: 0.42px;
}
.divider {
  width: var(--control-border-width, 1.5px);
align-self: stretch;
background: var(--control-background-selected, #000);
background: var(--control-background-selected, color(display-p3 0 0 0));
}
.cta-unactive {
  border: 0;
display: flex;
padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal-button, 16px);
align-items: center;
gap: var(--control-icon-gap, 4px);
background: var(--control-background-muted, #F1F3F3);
background: var(--control-background-muted, color(display-p3 0.9451 0.9529 0.9529));color: var(--control-label-muted, #000);
color: var(--control-label-muted, color(display-p3 0 0 0));

/* Label S */
font-family: "Power Grotesk Trial";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
letter-spacing: 0.42px;
}
.cta-2 {
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
.spacer {
  flex: 1 0 0;
align-self: stretch;
}
.cta-3 {
  border: 0;
  display: flex;
padding: var(--control-padding-vertical, 8px) var(--control-padding-horizontal-button, 16px);
justify-content: center;
align-items: center;
gap: var(--control-icon-gap, 4px);
border-radius: var(--control-corner-radius, 4px);
background: var(--control-background-primary, #FF3C00);
background: var(--control-background-primary, color(display-p3 0.9137 0.3686 0.1647));
color: var(--control-label-primary, #000);
color: var(--control-label-primary, color(display-p3 0 0 0));

/* Label S-700 */
font-family: "Power Grotesk Trial";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 14px */
letter-spacing: 0.42px;
}
</style>