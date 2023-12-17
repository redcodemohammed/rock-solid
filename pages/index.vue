<script setup>
const toast = useToast();
</script>

<template>
  <u-container>
    <u-card>
      hello
      <u-button
        label="Show toast"
        @click="toast.add({ title: 'Hello world!' })"
      />
    </u-card>
  </u-container>
</template>
