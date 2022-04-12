<template>
  <el-menu
    :default-active="this.$route.path"
    router
    class="el-menu-demo"
    mode="horizontal"
  >
    <!-- 动态顶部菜单栏加载 -->
    <div v-for="(item, index) in menuItems" :key="index">
      <el-sub-menu v-if="item.children" :index="item.name" style="width: 145px">
        <template #title>{{ item.text }}</template>
        <div v-for="(subItem, i) in item.children" :key="index + i">
          <el-sub-menu v-if="subItem.children" :index="subItem.name">
            <template #title>{{ subItem.text }}</template>
            <div
              v-for="(threeItem, k) in subItem.children"
              :key="index + i + k"
            >
              <el-menu-item :index="threeItem.name">
                {{ threeItem.text }}
              </el-menu-item>
            </div>
          </el-sub-menu>
          <el-menu-item v-else :index="subItem.name">
            {{ subItem.text }}
          </el-menu-item>
        </div>
      </el-sub-menu>
      <el-menu-item v-else :index="item.name">{{ item.text }}</el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'Navigation',
  data() {},
  computed: {
    // 加载顶部菜单栏
    menuItems() {
      return this.$store.state.menuItems;
    },
  },
};
</script>

<style>
el-sub-menu {
  min-width: fit-content;
}
el-menu-item {
  min-width: 140px;
}
</style>
