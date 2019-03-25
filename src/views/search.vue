<template>
	<section class="search">
		<div class="title">
			Search for something...
		</div>
		<div class="wrapper">
			<input
				type="text"
				class="search-input"
				ref="search-input"
				v-model="query"
				@keypress.enter="gotoResult"
			/>
			<a class="btn search-btn" href="#" @click="gotoResult">
				<svg style="width:24px;height:24px" viewBox="0 0 24 24">
					<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
				</svg>
			</a>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Search',

		data() {
			return {
				query: ''
			}
		},

		mounted() {
			this.$refs['search-input'].focus();
		},

		methods: {
			gotoResult() {
				this.$router.push({name: 'result', params: {q: this.query}});
			}
		}
	}
</script>

<style lang="scss" scoped>

.search {
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 50%;
	transform: translateY(-50%);
	margin-top: -16px;

	.title {
		font: 24px $font-primary;
		color: #c0c0c0;
		width: 80%;
		margin: 0 0 16px 0;
	}

	.wrapper {
		background: #303030;
		border: 2px solid #c93;
		border-radius: 4px;
		box-shadow: 0 4px 8px rgba(0,0,0,0.4);
		width: 80%;
		height: 48px;
		display: flex;
		align-items: center;
		padding: 4px 8px 4px 8px;

		.search-input {
			font: 22px $font-primary;
			color: #9cf;
			background: #303030;
			border: none;
			outline: none;
			width: 100%;
			height: 32px;
		}

		.search-btn {
			svg {
				color: #ccc;
				fill: #ccc;
				position: relative;
				top: 2px;
			}

			&:hover svg {
				fill: #eee;
			}
		}
	}
}
</style>