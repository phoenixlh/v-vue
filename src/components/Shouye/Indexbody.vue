<template>
  
  <section class="home">
  	<div class="home-con">
  		<div class="home-wrapper">
  			<div class="swiper">
  				
  				<div id="item0-0">
  					<div class="swiper-container home-swiper">
					  	<div class="swiper-wrapper">
					  		<a class="swiper-slide swiper-slide-active" v-for="item in imgsrc0">
					  			<img :src="item.image"/>
					  		</a>
		  				</div>
		  				<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets1"></div>
		  			</div>
  				</div>
  				
  				<div id="item0-2">
  					<div class="section m2-con">
  						<a href=""> 
  							<img src="https://imgqn9.fruitday.com/images/2017-11-07/caa96ee4453a25ed3e58f4a8f73e736d.jpg" style="height: 85.7143px;"> 
  						</a>		
  						<a href=""> 
  							<img src="https://imgjd6.fruitday.com/images/2018-01-06/66b11add93bf19fc63fcaf73d05b8972.jpg" style="height: 85.7143px;"> 
  						</a>
  					</div>
  				</div> 				
  				
  			<div id="item0-4">
  					<div class="section m4-con">
  						<a href="">
  							<img src="https://imgjd2.fruitday.com/images/2018-03-09/a6aab959f1d06a0b52a5583ee0f34927.jpg"/>
  						</a>
  					</div>
  				</div>	
  				
  		<div id="item0-5">
  					<div class="section m5-con">
  						<a href="">
  							<h2>
  								 果园热卖  
  								<i class="iconfont icon-arrow-right-copy-copy-copy" ></i>
  							</h2>
  						</a>
  					</div>
  				</div>
  				
  				<router-link to='/goods'>
  					<div id="item0-6">
  					<div class="section m6-con">
  						<a>
  							<div id="hot-left" >	
  								<img src="https://imgjd5.fruitday.com/images/product_pic/15/1/1-370x370-15-CWBFRUBK.jpg"/>	
  							</div>
  							<div id="hot-right">
  								<h5>美国佛罗里达葡萄柚</h5>
  								<p>多汁多vc 陪你变更美</p>		
  								<div class="money">
  									<span class="pri">
  										￥39.9 / 
  										<em>6个</em>
  									</span>
  									<i class="iconfont icon-add_circle"></i>
  								</div>
  							</div>		
  						</a>
  					</div>
  				</div>
  					</router-link>
  					
  						<div id="item0-7">
  						<div class="m7-con" >
  							<div class="swiper-container" >
  								<div class="swiper-wrapper many" >					
  									<a class="swiper-slide" v-for="item in imgsrc7">	
  											<img :src="item.image"/>
  										<p class="desc">{{item.title}}</p>
  										<p class="money-con">
  											<span class="money">￥{{item.price}}/{{item.volume}}</span>
  											<i class="iconfont icon-add_circle"></i>
  											
  										</p>
  									</a>	
  								</div>
  							</div>
  						</div>
  					</div>
  					
  					<div id="item0-8">
  					<div class="section m8-con">
  						<a href="">
  							<h2>
  								 新品首发  
  								<i class="iconfont icon-arrow-right-copy-copy-copy" ></i>
  							</h2>
  						</a>
  					</div>
  				</div>
  				
  				<!--<div id="item0-9">
  					<div class="section m9-con">
  						<a>
  							<div id="hot-left" >	
  								<img src="https://imgjd1.fruitday.com/images/product_pic/2066/1/1-370x370-2066-86D5B66F.jpg"/>	
  							</div>
  							<div id="hot-right">
  								<h5>佳沛意大利绿奇异果（原箱）</h5>
  								<p>细嫩绿芯 酸甜爽口</p>		
  								<div class="money">
  									<span class="pri">
  										￥199 /  
  										<em>36个</em>
  									</span>
  									<i class="iconfont icon-add_circle"></i>
  								</div>
  							</div>		
  						</a>
  					</div>
  				</div>-->
  				
  				
  					<div id="item0-10">
  						<div class="m10-con" >
  							<div class="swiper-container" >
  								<div class="swiper-wrapper many" >					
  									<a class="swiper-slide" v-for="item in imgsrc9">	
  											<img :src="item.image"/>
  										<p class="desc">{{item.title}}</p>
  										<p class="money-con">
  											<span class="money">￥{{item.price}}/{{item.volume}}</span>
  											<i class="iconfont icon-add_circle"></i>
  										</p>
  									</a>	
  								</div>
  							</div>
  						</div>
  					</div>
  					
  					<div id="item0-11">
  						<div class="m11-con">
  							<a>
  								<h2>精选专题</h2>
  							</a>
  						</div>
  					</div>
  					
  					<div id="item0-12">
  						<div class="m12-con">
  							<a>
  								<img src="https://imgjd2.fruitday.com/images/2017-12-29/8df550ef3cd69cc164fb647f2b273ac0.jpg"/>
  							</a>
  						</div>
  					</div>
  					
  					<div id="item0-13">
  						<div class="m13-con" >
  							<div class="swiper-container" >
  								<div class="swiper-wrapper many" >					
  									<a class="swiper-slide" v-for="item in imgsrc13">	
  											<img :src="item.image"/>
  										<p class="desc">{{item.title}}</p>
  										<p class="money-con">
  											<span class="money">￥{{item.price}}/{{item.volume}}</span>
  											<i class="iconfont icon-add_circle"></i>
  										</p>
  									</a>	
  								</div>
  							</div>
  						</div>
  					</div>
  					
  					<div id="item0-14">
  						<div class="m14-con">
  							<a>
  								<img src="https://imgqn8.fruitday.com/images/2018-01-02/50a25f418abaa0ecb7e6488288cfe505.jpg"/>
  							</a>
  						</div>
  					</div>
  					
  					<div id="item0-15">
  						<div class="m15-con" >
  							<div class="swiper-container" >
  								<div class="swiper-wrapper many" >					
  									<a class="swiper-slide" v-for="item in imgsrc15">	
  											<img :src="item.image"/>
  										<p class="desc">{{item.title}}</p>
  										<p class="money-con">
  											<span class="money">￥{{item.price}}/{{item.volume}}</span>
  											<i class="iconfont icon-add_circle"></i>
  										</p>
  									</a>	
  								</div>
  							</div>
  						</div>
  					</div>
  					
  					<div id="item0-16">
  						<div class="m16-con">
  							<a>
  								<img src="https://imgqn9.fruitday.com/images/2018-01-02/751c2c212c3ae206b46ecef02a71fe28.jpg"/>
  							</a>
  						</div>
  					</div>
  					
  					<div id="item0-17">
  						<div class="m17-con" >
  							<div class="swiper-container" >
  								<div class="swiper-wrapper many" >					
  									<a class="swiper-slide" v-for="item in imgsrc17">	
  											<img :src="item.image"/>
  										<p class="desc">{{item.title}}</p>
  										<p class="money-con">
  											<span class="money">￥{{item.price}}/{{item.volume}}</span>
  											<i class="iconfont icon-add_circle"></i>
  										</p>
  									</a>	
  								</div>
  							</div>
  						</div>
  					</div>
  					
  					<div id="item0-18">
  						<div class="m18-con">
  							<a>
  								<img src="https://imgjd5.fruitday.com/images/2018-02-23/4db3047175e65f024a66fa5c3afefa74.jpg"/>
  							</a>
  						</div>
  					</div>
  					
  					<div id="item0-19">
  						<div class="m19-con" >
  							<div class="swiper-container" >
  								<div class="swiper-wrapper many" >					
  									<a class="swiper-slide" v-for="item in imgsrc19">	
  											<img :src="item.image"/>
  										<p class="desc">{{item.title}}</p>
  										<p class="money-con">
  											<span class="money">￥{{item.price}}/{{item.volume}}</span>
  											<i class="iconfont icon-add_circle"></i>
  										</p>
  									</a>	
  								</div>
  							</div>
  						</div>
  					</div>
  					
  					<div id="item0-20">
  						<div class="m20-con">
  							<a>
  								<h2>人气推荐</h2>
  							</a>
  						</div>
  					</div>
  					
  					<div id="item0-21">
  						<div class="m21-con">
  							<a v-for="item in imgsrc21">
			  					<div id="hot-left" >	
			  								<img :src="item.image"/>	
  								</div>
	  							<div id="hot-right">
	  								<h5>{{item.title}}</h5>
	  								<p>{{item.subtitle}}</p>		
	  								<div class="money">
	  									<span class="pri">
	  										￥{{item.price}}/
	  										<em>{{item.volume}}</em>
	  									</span>
	  									<i class="iconfont icon-add_circle"></i>
	  								</div>
	  							</div>		
  							</a>
  						</div>
  					</div>
  				
  			</div>
  		</div>
  	</div>
  </section>
</template>

<script>
	import axios from 'axios';
	
export default {
  name: 'Indexbody',
  data:function(){
  	return {
      imgsrc0:[],
			imgsrc7:[],
			imgsrc9:[],
			imgsrc12:[],
			imgsrc13:[],
			imgsrc15:[],
			imgsrc17:[],
			imgsrc19:[],
			imgsrc21:[]		
  	}
  },
	mounted(){
				axios.get("/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11624&ad_code=110114&tab_id=")
				.then((res)=>{
//					console.log(res);
					console.log(res.data.data.banner.mainBanners);
					this.imgsrc0= res.data.data.banner.mainBanners[0].content;
				  this.imgsrc7= res.data.data.banner.mainBanners[7].content;
				  this.imgsrc9= res.data.data.banner.mainBanners[9].content;
				  this.imgsrc13= res.data.data.banner.mainBanners[12].content;
				  this.imgsrc15= res.data.data.banner.mainBanners[14].content;
				  this.imgsrc17= res.data.data.banner.mainBanners[16].content;
				  this.imgsrc19= res.data.data.banner.mainBanners[18].content;
				  this.imgsrc21= res.data.data.banner.mainBanners[20].content;  
		})
	},
	updated(){
		var mySwiper = new Swiper ('#item0-0 .swiper-container', {
	    loop: true,
	    autoplay:true,
	    spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
		}) 
	}
//	,
//	methods:{
//		gotogoods(goodsid){
////			console.log(this);
//		}
//	}
}

</script>



<style src="../../../static/Indexbody.css"></style>
	
	
