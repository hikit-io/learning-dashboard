<script lang="ts" setup>

interface Item {
  title: string,
  officialLink?: string,
  desc: string,
  tags: string[],
  links?: {
    name: string,
    link: string
  }[]
}

const props = defineProps<{
  data: Item
}>()


</script>


<template>
  <el-card :body-style="{padding:'0.5em'}">
    <div class="external">
      <div class="title">{{ props.data.title }}</div>
      <span style="display: block;font-size: 0.9em;">{{ props.data.desc }}</span>
      <el-tag v-for="tag in props.data.tags">{{ tag }}</el-tag>
      <el-space :wrap="true">
        <el-link v-for="link in props.data.links" :href="link.link" type="primary" target="_blank">{{ link.name }}</el-link>
      </el-space>
    </div>
  </el-card>
</template>

<style scoped>
.external {
  /*display: flex;*/
}

.title {
  font-size: 1em;
  font-weight: bold;
  line-height: 2em;
}
</style>