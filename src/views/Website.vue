<script lang="ts" setup>
import website from '../../public/website.json'
import ArticleLink from "../components/ArticleLink.vue"
import {computed} from "vue"

const websites = computed(() => website)

</script>

<template>
    <template v-for="category in websites">
        <h3>{{ category.title }}</h3>
        <el-row :gutter="20">
            <el-col class="col-art" v-for="item in category.websites" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                <article-link :icon="true" :article="item"></article-link>
            </el-col>
        </el-row>
    </template>

</template>

<style scoped>

</style>