<script setup lang="ts">
const {updateLoggedStatus} = useUtils()
const mail = ref('isLoggedIn@test.fr')
const password = ref('isLoggedIn@test.fr')

function signIn() {
	useFetch('/api/signin',{
		method: 'post',
		body: {
			email: mail.value,
            password: password.value
		}
	})
		.then(({data}) => {
			updateLoggedStatus(data?.value.isConnect)
		})
}
function updateMail(value: string) {
	mail.value = value
}
function updatePassword(value: string) {
	password.value = value
}
</script>

<template>
	<div class="bg-slate-100 rounded-lg p-8 flex flex-col justify-center items-center gap-2">
		<SvdInput :value="mail" @input="updateMail" name="mail" type="email" placeholder="Enter your email"/>
		<SvdInput :value="password" @input="updatePassword" name="password" type="password" placeholder="Enter your password"/>
		<button @click="signIn">Login</button>
	</div>
</template>

<style scoped>

</style>