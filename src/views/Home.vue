<script lang="ts" setup>
import {useRouter} from "vue-router";
import article from '../../public/article.json'
import ArticleLink from "../components/ArticleLink.vue";
import {computed} from "vue";

const bodyStyle = {
  height: '200px',
  textAlign: 'center'
}

const bookList: {
  name: string,
  link: string,
  logo: string
}[] = [
  {
    name: 'Rust',
    link: '/rs',
    logo: '/rust-logo.svg',
  },
  {
    name: 'Golang',
    link: '/go',
    logo: '/go-logo.svg',
  },
  // {
  //   name: 'C/C++',
  //   link: '/c',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
]
const {push} = useRouter()

const articles = computed(() => article)

</script>

<template>
  <el-row :gutter="20">
    <el-col class="col" v-for="item in bookList" :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
      <el-card class="card" :style="bodyStyle" @click="push({path:item.link})">
        <el-space direction="vertical">
          <el-image class="logo-img" :src="item.logo"></el-image>
          <h3>{{ item.name }}</h3>
        </el-space>
      </el-card>
    </el-col>
  </el-row>
  <h3>Latest Article</h3>
  <el-row :gutter="20">
    <el-col class="col-art" v-for="item in articles" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
      <article-link :article="item"></article-link>
    </el-col>
  </el-row>
  <h4 class="footer">@2022 Hikit</h4>
</template>


<style lang="less" scoped>
.logo-img {
  width: 100px;
  height: 100px;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.col {
  margin-bottom: 1em;
}

.col-art {
  margin-bottom: 0.5em;
}

.footer {
  width: 100%;
  text-align: center;
  margin: 0;
  padding-bottom: 0.5em;;
}
</style>