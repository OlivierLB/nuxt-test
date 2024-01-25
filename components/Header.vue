<script setup lang="ts">
import {useBasketStore} from "~/stores/basket";

const store = useBasketStore()
const {updateLoggedStatus} = useUtils()
const items = computed(() => store.items)
const total = computed(() => store.total)

function signOut() {
	updateLoggedStatus(false)
}
</script>

<template>
	<div class="bg-slate-100 h-24 text-blue-700 min-w-screen flex justify-center items-center gap-8">
		<div class="w-full h-[60] flex p-2 justify-between items-center gap-8">
			<NuxtLink href="/">
				<img
					width="270" height="70"
					src="https://www.son-video.com/images/illustration/pages/landingPage/pro/SVPROPAGE_BienvenueSurSonVideoPro_logo.png"
					alt="Son-vidéo.pro"
				/>
			</NuxtLink>
			<div>
				{{total}} €
			</div>
			<NuxtLink href="/basket">
				{{ items.length }}
				Produit<span v-if="items.length > 1">s</span>
			</NuxtLink>
			<button @click="signOut">Se déconnecter</button>
		</div>
	</div>
</template>

<style scoped>

</style>