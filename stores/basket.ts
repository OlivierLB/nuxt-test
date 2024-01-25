import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {ComputedRefSymbol} from "@vue/reactivity";

interface Item {
    label: string,
    price: number
}

export const useBasketStore = defineStore('basket', () => {
    const items = ref<Array<Item>>([])

    const total = computed(() => {
        let price = 0
        items.value.forEach((e) => {
            price += e.price
        })
        return price
    })

    function addItem(item :Item) {
        items.value.push(item)
    }
    function removeItem(index :number) {
        items.value.splice(index, 1)
    }

    return {
        items,
        total,
        addItem,
        removeItem
    }
})