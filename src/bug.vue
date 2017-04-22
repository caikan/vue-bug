<template>
  <div>{{title}}: {{output}}</div>
</template>

<script>
  export default {
    name: 'bug',
    props: ['title', 'output']
  }
</script>
