<script lang="ts" setup>

export interface Article {
    title: string,
    link: string,
    desc?: string,
}

export interface Props {
    article: Article,
    icon?: boolean
}

const props = defineProps<Props>()

const onClick = () => {
    window.open(props.article.link)
}

</script>

<template>
    <el-card class="card" :body-style="{padding:'0.5em'}" @click="onClick">
        <el-space size="small">
            <el-image v-if="props.icon" :src="`${props.article.link}favicon.ico`" fit="cover"
                      style="height: 1.5em;width: 1.5em;"></el-image>
            <span class="title" :title="props.article.title ">{{
                    props.article.title
                }}{{ props.article.desc ? ` - ${props.article.desc}` : "" }}</span>
        </el-space>
    </el-card>
</template>


<style lang="less" scoped>
.card:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}

.desc {
  font-size: small;
}
</style>