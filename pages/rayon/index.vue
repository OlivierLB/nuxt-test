<script setup lang="ts">
	const {data: rayons} = await useFetch('/api/rayons')
</script>

<template>
	<div class="flex flex-col flex-wrap justify-center items-center gap-8">
		<div v-for="rayon in rayons.list" class="w-96">
			<SvdCard :link="`/rayon/${rayon.id}`" :title="rayon.title" :image="rayon.img" />
		</div>
	</div>
</template>

<style scoped>

</style>