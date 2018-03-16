<template>
	<div id="cart">
		<nav>
			<router-link to="/goods">
			<div id="back">
				<a class="iconfont icon-jiantou3"></a>
			</div>
			</router-link>
			<span class="text">购物车</span>
			<a href="javascript:;" class="next">
				<span class="edit">编辑</span> 
				<!--<span class="end hide">完成</span>-->
			</a>
		</nav>
		
		
		<section></section>
		<footer class=""></footer>
		<footer ></footer>
	</div>
</template>

<script>
	export default{
		name:'Cart'
	}
</script>

<style scoped>
	html{
		font-size: 26.67vw;
		height: 100%;
	}
	body{
		font-size: .14rem;
		/*background: #ccc;*/
	}
	nav{
		z-index: 999;
		background:#fff;
	    height: .45rem;
	    line-height: .43rem;
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    font-size: .16rem;
	    border-bottom: .01rem solid #d8d8d8;
	    color: #75a739;
	}
	#back{
		width: .88rem;
		color: #76a741;
   		display: inline-block;
	}
	#back a{
		display: inline-block;
		width: .4rem;
		padding-left: .07rem;
	    color: #75a739;
	    font-size: .22rem;
	}
	.text{
		/*text-align: center;*/
		margin-bottom: .2rem;
	    font-size: .17rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-left: .6rem;
	}
	.edit{
		float: right;
		color: #76a741;
	}
</style>