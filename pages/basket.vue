<script setup lang="ts">
import {useBasketStore} from "~/stores/basket";

const store = useBasketStore()
const items = computed(() => store.items)
const { removeItem } = store

</script>

<template>
	<div class="flex flex-col flex-wrap justify-center items-center gap-8">
		<div v-for="(item, index) in items" class="flex gap-8">
			<div>{{item.label}} - {{item.price}} €</div>
			<button @click="removeItem(index)">
				Supprimer
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>