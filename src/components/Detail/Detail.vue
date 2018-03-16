<template>
	<div id="detail">
		<header>
			<router-link to='/'>
				<div id="back">
					<a class="iconfont icon-jiantou3"></a>
				</div>
			</router-link>
			<div id="tab">
				<a>			
					<router-link active-class="active" to='/goods' ><span >商品</span></router-link>
					<router-link active-class="active" to='/detail' ><span >详情</span></router-link>
					<router-link active-class="active" to='/comment'><span >评价</span></router-link>
				</a>
			</div>
			<div id="more">
				<i class="iconfont icon-caidan"></i>
			</div>
		</header>
			<img src="https://imgjd3.fruitday.com/up_images/20170428/14933622467734.jpg"/>
			<img src="https://imgjd3.fruitday.com/up_images/20170428/14933622467617.jpg"/>
			<img src="https://imgjd3.fruitday.com/up_images/20170428/1493362247947.jpg"/>
		</div>	
</template>

<script>
	
    export default{
		name:'Detail'
		}
</script>

<style scoped>
	#detail img{
		width: 3.75rem;
		height: 100%;
	}
	header{
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
	#tab{
		display: inline-block;
		text-align: center;
		margin: 0 auto;
	}
	#tab a{
		font-size: .16rem;
	    text-align: center;
	    color: #3a3a3a;
	}
	#tab span{
		margin: 0 .06rem;
	    height: .43rem;
	    line-height: .45rem;
	    display: inline-block;
	}
	#more{
		display: inline-block;
		float: right;
		width: .4rem;
	}
	#more .icon-caidan{
		font-size: .2rem!important;
	}
</style>