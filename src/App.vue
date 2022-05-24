<template>
  <TableValueVue />
</template>

<script>
import { defineComponent } from 'vue';
import TableValueVue from './components/TableValue.vue';

export default defineComponent({
  name: 'App',
  components: {
    TableValueVue,
  },
});
</script>
