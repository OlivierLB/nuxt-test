<script setup lang="ts">
const emit = defineEmits(['input'])

const props = defineProps({
	type: {
		type: String,
        default: 'text',
	},
	placeholder: {
		type: String,
        default: ''
	},
	name: {
		type: String,
        required: true
	},
	value: {
		type: String || Number || null,
		default: () => ''
	}
})

const handleChange = (e: Event) => {
    emit('input', (e.target as HTMLInputElement).value)
}
</script>

<template>
	<input
		:value="value"
		:type="type"
		:name="name"
		:placeholder="placeholder"
		class="p-2"
		@input="handleChange"
	/>
</template>

<style scoped>

</style>