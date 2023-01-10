import { defineStore } from 'pinia'
export default defineStore('defaultStore', {
	state: () => {
		return {
			count: 0
		}
	},
	actions: {
		add () {
			this.count++
		}
	}
})
