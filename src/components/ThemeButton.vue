<script lang="ts" setup>
import {Sunny, Moon} from '@element-plus/icons-vue'
import {ref} from "vue";
import {useDark, useToggle} from "@vueuse/core";

const sunny = ref(true)

const isDark = useDark()
const toggleDark = useToggle(isDark)

const onClick = () => {
  toggleDark()
}

</script>

<template>
  <el-button type="primary" :icon="isDark ? Moon:Sunny" @click="onClick" circle/>
</template>

<style scoped>

</style>