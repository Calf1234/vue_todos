<template>
        <session class="menu"> <!-- 左侧的容器 -->
            <menus> </menus> <!-- * -->
        </session>

</template>

<script>
import menus from './menus' // * 导入我们刚才创建的menus组件
export default {
  component: { // * 注册menus组件，让其可以在template调用
    menus
  }
}
</script>

<style lang="less">
    @import '../common/style/layouts.less';
</style>
