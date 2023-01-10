import {computed, ref} from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
	/* ref <--> state */
	const count = ref(0)
	const count2 = ref(0)
	/* computed <--> getters */
	const newCount = computed(() => count.value*2)
	/* function <--> actions */
	function add () {
		count.value++
	}
	return {
		count,
		count2,
		add,
		newCount
	}
})
