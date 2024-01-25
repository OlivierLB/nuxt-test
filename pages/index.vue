<script setup lang="ts">
import {useCounterStore} from "~/stores/counter";

const store = useCounterStore()
const { increment } = store

</script>

<template>
	<div class="flex flex-col justify-center items-center gap-8">
		<SvdCard title="Nos rayons" link="/rayon" big background="bg-gradient-to-r bg-gradient-to-tr bg-gradient-to-r bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900" />
		<button type="button" @click="increment">+1</button>
	</div>
</template>

<style scoped>

</style>