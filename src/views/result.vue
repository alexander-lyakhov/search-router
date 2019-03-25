<template>
	<div class="result">
		<h2>
			<span class="text" :data-query="query">Results for query </span>
			<router-link class="back" to="/search">
				<svg style="width:24px;height:24px" viewBox="0 0 24 24">
					<path d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
				</svg>
			</router-link>
		</h2>
		<ul class="list" v-if="query">
			<li class="item" v-for="(item, index) in items" :key="index">{{item.full_name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Result',

		data() {
			return {
				items: []
			}
		},

		mounted() {
			fetch(`https://api.github.com/search/repositories?q=${this.query}`)
				.then(res => res.json())
				.then(res => this.items = res.items)
		},

		computed: {
			query() {
				return this.$route.params.q;
			}
		}
	}
</script>

<style lang="scss" scoped>

.result {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 32px 0;

	h2 {
		font: 24px $font-primary;
		color: #9cf;
		width: 80%;
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		span:after {
			content: attr(data-query);
			color: #eee;
		}

		.back {
			color: #ccc;
			display: flex;
			align-items: center;
			svg {
				fill: #c0c0c0;
			}
			&:hover svg {
				fill: #eee;
			}
		}
	}

	.list {
		width: 80%;

		.item {
			font: 16px verdana;
			color: #ccc;
			border-bottom: 1px solid #606060;
			height: 40px;
			line-height: 40px;

			&:last-child {
				border: none;
			}
		}
	}
}
</style>