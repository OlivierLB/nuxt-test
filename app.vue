<script setup>

const { isLoggedIn } = useUtils()
</script>

<template>
  <div>
	  <div v-if="isLoggedIn">
		  <Header />
		  <NuxtPage class="bg-slate-700 min-h-[calc(100vh-96px)] p-4 text-slate-100"/>
	  </div>
	  <div v-else>
		  <LogoutHomepage />
      </div>
  </div>
</template>
