<template>
  <div>
    <bug title="in *.vue: (empty) =>"></bug>
    <bug title="in *.vue: [...array || [], 3, 4] =>" :output="[...array || [], 3, 4]"></bug>
    <bug title="in *.vue: [...(array || []), 3, 4] =>" :output="[...(array || []), 3, 4]"></bug>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        array: [1, 2]
      }
    }
  }
</script>
