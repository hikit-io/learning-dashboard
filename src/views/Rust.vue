<script lang="ts" setup>
import rust from '../../public/rust.json'
import RustCard from "../components/RustCard.vue";

</script>

<template>
  <template v-for="item in rust">
    <h3>{{ item.title }}</h3>
    <el-row :gutter="8">
      <el-col class="col" v-for="data in item.docs" :xs="12" :sm="8" :md="8" :lg="4" :xl="4" >
        <rust-card :data="data"></rust-card>
      </el-col>
    </el-row>
  </template>
</template>

<style lang="less" scoped>
.col{
  margin-bottom: 0.5em;
}
</style>