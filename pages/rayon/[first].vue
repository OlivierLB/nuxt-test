<script setup lang="ts">
const route = useRoute()
import {useCounterStore} from "~/stores/counter";

const store = useCounterStore()
const { increment } = store


const {data} = await useFetch(`/api/first?id=${route.params.first}`)

</script>

<template>
	<div class="flex flex-col flex-wrap justify-center items-center gap-8">
		<span class=" font-mono font-extrabold text-2xl underline">Rayon {{ data.name }}</span>
		<div v-for="sous_rayon in data.list" class="w-96">
			<SvdCard :link="`/rayon/r-${data.id}/${sous_rayon.id}`" :title="sous_rayon.title" :image="sous_rayon.img" />
		</div>
	</div>
</template>

<style scoped>

</style>