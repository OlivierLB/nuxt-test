<script setup lang="ts">
const route = useRoute()

const {data} = await useFetch(`/api/final?id=${route.params.id}`)
const test = await useFetch(data.value.svd)
</script>

<template>
	<div>
		{{test}}
	</div>
</template>

<style scoped>

</style>