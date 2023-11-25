<script setup lang="ts">
const {updateLoggedStatus} = useUtils()

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
			<svd-input name="search" placeholder="Recherche magique" />
			<button @click="signOut">Se déconnecter</button>
		</div>
	</div>
</template>

<style scoped>

</style>