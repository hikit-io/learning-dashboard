<script lang="ts" setup>

export interface Article {
  title: string,
  link: string
}

export interface Props {
  article: Article
}

const props = defineProps<Props>()

const onClick = () => {
  window.open(props.article.link)
}

</script>

<template>
  <el-card class="card" :body-style="{padding:'0.5em'}" @click="onClick">
    <span class="title" :title="props.article.title ">{{ props.article.title }}</span>
  </el-card>
</template>


<style lang="less" scoped>
.card:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
</style>