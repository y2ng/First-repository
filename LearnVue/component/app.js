window.onload = function () {
	Vue.component("my-component", {
		template: "<h3 class='def'>Come on! Buddy!</h3>"
	});

	Vue.component("button-counter", {
		template: "<button @click='incrementCounter'>{{counter}}</button>",
		data: function () {
			return {
				counter: 0
			}
		},
		methods: {
			incrementCounter: function () {
				this.counter += 1;
				this.$emit("increment")
			}
		}
	})

	var vm = new Vue({
		el: "#appBox",
		data: {
			total: 0
		},
		methods: {
			incrementTotal: function () {
				this.total += 1
			}
		}
	});
}