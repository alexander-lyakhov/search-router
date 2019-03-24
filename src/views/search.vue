<template>
	<section>
		<div class="title">
			Search for something...
		</div>
		<div class="search">
			<div class="search-wrapper">
				<input type="text" class="search-input" value="123">
				<a class="btn search-btn" href="#">
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
					</svg>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Search',

		created() {
			console.log('search')
		}
	}
</script>

<style lang="scss" scoped>

section {
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 50%;
	transform: translateY(-50%);

	.title {
		font: 24px $font-primary;
		color: #c0c0c0;
		width: 80%;
		//padding: 8px 0;
	}
}

.search {
	//background: #484848;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.search-wrapper {
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
		font: 20px verdana;
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

</style>