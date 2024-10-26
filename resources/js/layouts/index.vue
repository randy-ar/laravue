<template>
  <component :is="layout">
    <div class="content">
      <router-view></router-view>
    </div>
  </component>
</template>
<script> 

import home_layout from './home/app.vue';
import error_layout from './error/app.vue';

export default { 
  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'home-layout';
      return {
        'home-layout': home_layout,
        'error-layout': error_layout,
      }[layout];
    },
  }
}
</script>