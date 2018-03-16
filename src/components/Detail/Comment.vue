<template>
	<div id="comm">
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
	
			<div id="com-con" v-for="item in comm">
				<div id="com-info">
					<img :src="item.userface"/>
					<span class="user">{{item.user_name}}</span>
					<i class="iconfont icon-ren"></i>
					<span class="date">{{item.time}}</span>
				</div>
				<div id="com-level">
					<span>口感 {{item.star}}</span>
					<span>颜值 {{item.star_show}}</span>
				</div>
				<div id="com-msg">{{item.content}}</div>
			</div>
		</div>
</template>

<script>
	import axios from 'axios';
    export default{
		name:'Comment',
		data:function(){
			return{
				comm:[]
			}
		},
		mounted(){
			axios.get('/v3/product/detail?store_id_list=3&product_id=28876&store_id=3&delivery_code=3')
			.then((res)=>{
				console.log(res);
				this.comm = res.data.data;
			})
		}
	}
</script>

<style scoped>
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
	#comment{
	    padding: .1rem 0;
	    margin-bottom: .1rem;
	    background: #fff;
	}
	.comment-total{
		margin-left: .1rem;
	    padding-right: .1rem;
	    height: .25rem;
	    border-bottom: .01rem solid #d8d8d8;
	    font-size: .12rem;
	    color: #878787;
	}
	#com-right{
		float:right;
	}
	
	#com-con{
	    margin-left: .1rem;
    	padding: .15rem .1rem .15rem 0;
   		color: #3a3a3a;
	}
	#com-info{
		height: .36rem;
    	line-height: .36rem;
	}
	#com-info img{
		display: block;
		float: left;
	    width: .36rem;
	    height: .36rem;
	    margin-right: .15rem;
	    border-radius: 100%;
	}
	.user{
		float: left;
	    margin-right: .05rem;
	    font-size: .14rem
	}
	.icon-ren{
		background: #cba56b;
		width: .12rem;
	    height: .1rem;
	    border-radius: .02rem;
	    color: #fff;
	    font-size: .08rem;
	}
	.date{
		float: right;
	    font-size: .13rem;
	    color: #878787;
	}
	#com-level{
		height: .3rem;
	    font-size: .13rem;
	    line-height: .3rem;
	    color: #878787;
	}	
	#com-level span{
		display: inline-block;
    	margin-right: .3rem;
	}
	#com-msg{
		font-size: .15rem;
    	line-height: .2rem;
	}
</style>