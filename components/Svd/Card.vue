<script setup lang="ts">
import {useBasketStore} from "~/stores/basket";

const store = useBasketStore()
const { addItem } = store

const props = defineProps({
	title: {
        type: String,
        required: true
    },
	background: {
        type: String,
		default: ''
    },
	image: {
        type: String,
		default: ''
    },
	big: {
		type: Boolean,
		default: false
	},
	link: {
		type: String,
        default: '/'
	}
})

const card_class = computed(() => {
	let classes = props.background

	if (props.big) {
		classes += '  text-6xl '
		if (!props.image) {
            classes +=' px-48 py-24'
        }
	}
	else {
		classes += ' text-2xl '
		if (!props.image) {
			classes +=' px-16 py-8 '
		}
	}

	return classes
})
</script>

<template>
	<NuxtLink :href="link" :class="card_class" class="block border-2 border-zinc-100 cursor-pointer font-mono font-extrabold flex items-center rounded-lg p-2 ">
		<Icon v-if="image" :name="image" size="100" />
		<Icon v-else name="ic:twotone-all-inbox" size="100" />
		<span class="flex justify-center w-full">{{ title }}</span>
	</NuxtLink>

	<button type="button" @click="addItem({
		label: title,
		price: title.length
	})">Ajouter au panier</button>
</template>