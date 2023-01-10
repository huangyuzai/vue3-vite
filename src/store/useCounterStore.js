import {computed, ref} from 'vue'
import {defineStore, storeToRefs} from 'pinia'
import {useStore} from "./index";

export default defineStore('counter', () => {
	/* 可以访问其他 store 中的数据 */
	const { newCount } = storeToRefs(useStore())
	const count = ref(newCount)
	return {
		count
	}
})
