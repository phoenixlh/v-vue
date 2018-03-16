<template>
	<div id="goods_page">
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
		
		<div id="goods">
			<!--:class="{'hide':flag1}" @click="f1"-->
			<div id="con">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in data">
							<img :src="item.big_image"/>
						</div>
					</div>
					<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
				</div>
			</div>
			
			<div id="info">
				<h3>美国佛罗里达葡萄柚 </h3>
				<h4>多汁多vc  陪你变更美 </h4>
				<h5>￥39.9</h5>
	
				<div class="size"> 
					<a class="songda">
						<span>6个</span> 
						<span>明日达 </span> 
					</a>
					<em>最快明天09:00-18:00送达</em>
				</div>	
			</div>
			<div class="address">
				<span class="send-to">送至</span>
				<span class="position">
					<i class="iconfont icon-triangle-bottom"></i>
				</span>
			</div>
			
			<div class="tips"> 
				<span><i class="iconfont icon-right-1"></i>48小时退换货</span> 				<span><i class="iconfont icon-right-1"></i>全程冷链</span> 
				<span><i class="iconfont icon-right-1"></i>果园标准</span> 				<span><i class="iconfont icon-right-1"></i>全球直采</span> 
			</div>
		
		<footer>
			<a class="cart-btn">
				<i class="iconfont icon-gouwuche"></i>
				<i class="cart-num"></i>
			</a>
			<router-link to="/cart">
			<a class="add-cart" @click="add()">
				<span id="deliver">明日达</span>
				<em>加入购物车</em>
			</a>
			</router-link>
		</footer>
	</div>
	</div>
	
</template>

<script>
	import axios from 'axios';
    export default{
		name:'Goods',
		data:function(){
			return{
				data:[],
				comm:[]
//				flag1:true,flag2:true,flag3:false
			}
		},
		mounted(){
		axios.get('/v3/product/detail?store_id_list=3&product_id=28876&store_id=3&delivery_code=3')
		
		.then((res)=>{
			this.data = res.data.data.templatePhoto;
		})
		
		axios.get('/v3/comment/list_by_product_id?product_id=28876&curr_page=1&num_per_page=20&limit=20&show=1')
			.then((res)=>{
			console.log(res);
			this.comm = res.data.data;
			})		
		},
		methods:{
//			f1(){this.flag1=fasle;this.flag2=true;this.flag3=true;
			add(){
				
			}
		},
		updated(){
//			var mySwiper = new Swiper ('.swiper-container', {
//		    loop: true,
//		    autoplay:true,
//		    spaceBetween: 30,
//	      	pagination: {
//		        el: '.swiper-pagination',
//		        clickable: true,
//	      	}
//		}) 
	}
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	html{
		font-size: 26.67vw;
		height: 100%;
	}
	body{
		font-size: .14rem;
		/*background: #ccc;*/
	}	
	#goods_page{
		background: lightgrey;
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
	/*
	section{
		margin-top: .46rem;
		padding-bottom: .45rem;
		background: #f5f5f5;
	}*/
	.swiper-container{
		height: 3.75rem;
		margin: 0 auto;
	    position: relative;
	    z-index: 0;
	    text-align: center;
	}
	.swiper-wrapper{
		position: relative;
	    width: 100%;
	    height: 100%;
	    z-index: 1;
	    overflow-x:auto ;
	}
	.swiper-wrapper::-webkit-scrollbar {
		display: none
}
	.swiper-slide{
		width:3.75rem ;
	}
	.swiper-slide img{
		width: 100%;
		height: 100%;
	}
	#info{
		padding: .1rem;
	    margin-bottom: .1rem;
	    background: #fff;
	    text-align: center;
	}
	h3{
		font-size: .18rem;
    	color: #3a3a3a;
    	margin: 0 0 .05rem;
	    font-weight: 400;
	    line-height: 1;
	}
	h4{
		font-size: .14rem;
    	color: #878787;
	}
	 h5{
        font-size: .3rem;
		color: #ff8000;
		line-height: .3rem;
		margin-top: .03rem;
	}
	.size{
		margin-top:.05rem
	}
	.songda{
		border-color: #ff8000;
	    background: #ff8000;
	    color: #fff; 
	    display: flex;
	    flex-direction:column ;
	    justify-content: center;
	    align-items: center;
	    margin-left:1.45rem ;
	    margin-bottom: .04rem;
	    width: .7rem;
	    border: .01rem solid #dcdcdc;
	    border-radius: .04rem;
	    padding: .03rem .1rem; 
	    font-size: .3rem;
	    line-height: 1.2;
	}	
	.songda span{
	    display: inline-block;
	    text-align: center;
	    font-size: .14rem;
	    font-weight: 300;
	}
	.size em{
		font-size: .1rem;
	    display: block;
	    color: #ff8000;
	}
	
	.address{
		position: relative;
	    padding: .2rem .1rem .2rem .45rem;
	    margin-bottom: .1rem;
	    background: #fff;
	}
	.send-to{
		position: absolute;
		font-size: .12rem;
		color: #878787;
		top: .15rem;
		left: .1rem;
	}
	.position{
	    height: .25rem;
	    font-size: .13rem;
	    line-height: .25rem;
	    font-weight: 400;
	    color: #3a3a3a;
	    white-space:nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.icon-triangle-bottom{
		position: absolute;
		color: #878787;
		top: .15rem;
		left: .5rem;
	}
	.tips{
		position: relative;
	    padding: .2rem .2rem;
	    margin-bottom: .1rem;
	    background: #fff;
	}
    .tips span {
	    float: left;
	    padding: .02rem .05rem .02rem 0;
	    font-size: .1rem;
	    color: #bfbfbf;
	}
	.icon-right-1{
		font-size: .12rem;
		border-color: #ff8000;
    	color: #ff8000;
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
	
	/*#com-con{
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
	}*/
	footer{
		height: .45rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		line-height: .45rem;
    	box-shadow: 0 -0.02rem 0.02rem 0 rgba(0,0,0,.15);
    	z-index: 999;
    	background: #fff;
	}
	.cart-btn{
		display: block;
		width: .5rem;
		height: .5rem;
		line-height: .5rem;
		position: absolute;
		top: auto;
	    right: auto;
	    bottom: .05rem;
	    left: .05rem;
	    background: #65a032;
	    text-align: center;
	    color: #fff;
	    border-radius: 100%;
	}
	.icon-gouwuche{
		font-size: .29rem;
		position: absolute;
		top:.02rem;
		left: .08rem;
	}
	.add-cart{
		float: right;
	    width: 1.8rem;
	    background: #ff8000;
	    font-size: .18rem;
	    line-height: .46rem;
	    color: #fff;
	}
	.add-cart span{
		display: inline-block;
	    font-size: .14rem;
	    color: rgba(255,255,255,.8);
	    line-height: .46rem;
	    padding-right: .1rem;
	    margin-left: .1rem;
	}
	.active{
		border-bottom: .02rem solid #65a032;
    	color: #65a032;
	}
	

</style>