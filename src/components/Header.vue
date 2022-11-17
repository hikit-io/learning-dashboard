<script lang="ts" setup>

import ThemeButton from "./ThemeButton.vue";
</script>

<template>
  <div class="external">
    <el-space>
      <h2>Learning Dashboard</h2>
      <span>|</span>
      <h5>累死自己，卷死别人。</h5>
    </el-space>
    <theme-button></theme-button>
  </div>
</template>


<style lang="less" scoped>
.external {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: var(--el-menu-bg-color);
  //padding: 0 1em;
}

.left{
  display: flex;
  flex-direction: row;
  align-items: end;
}

</style>