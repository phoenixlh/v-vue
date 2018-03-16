<template>
  <div class="top">
   	<div id="head">
   		<div id="head-left" @click="aaa()">
   			<div class="pic">
	   			<img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png"/>
   			</div>
   			<div class="sendto"></div>
   			<i class="iconfont icon-triangle-bottom"></i>
   		</div> 		
   			<i class="iconfont icon-search"></i> 		
   	</div>
   <!-- <router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'Indexhead',
  data:function(){
  	return {}
  }
}
</script>

<style scoped>
.top{
	background: #fff;
	height: 0.38rem;
	font-size:26.67vw;
	position: fixed;
	z-index: 1231321;
	top: 0;
	left: 0;
	right: 0;
	border-bottom: 1px solid #ccc;
}
html{
	font-size:26.67vw;
}
#head{
	width: 100%;
	height: 0.38rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.pic img{
	width:0.51rem ;
	height: 0.14rem;
}
#head-left{
	height: 0.14rem;
	margin: 0 0 0 .16rem;
  width: 70%;
  display: flex;
  color: #65a032;
  font-size: 0.14rem;
  font-weight: 300;
}
.sendto{
	height: 0.36rem;
	font-size: .12rem;
	margin-left: 0.05rem;
}
.icon-search{
    font-size: .19rem;
    padding-right: .16rem;
    color: #3a3a3a;
}
</style>


<script>
	// 百度地图API功能
//	var geolocation = new BMap.Geolocation();
//	geolocation.getCurrentPosition(function(r){
//		console.log(r.address.city)
//		var oP = document.getElementsByClassName("sendto")[0];
//		oP.innerHTML = r.address.city;
//	})
//		
//		var geolocation = new BMap.Geolocation();
//		geolocation.getCurrentPosition(function(r){
//		if(this.getStatus() == BMAP_STATUS_SUCCESS){
//			var a = '您的位置：'+r.point.lng+','+r.point.lat;
//			var geoc = new BMap.Geocoder(); 
//			geoc.getLocation(r.point, function(rs){
//				var addComp = rs.addressComponents;
//			alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			
//				var oP = document.getElementsByClassName("sendto")[0];
//				oP.innerHTML = addComp.province ;
//		});
//		}
//		else {
//			alert('failed'+this.getStatus());
//		}        
//	},{enableHighAccuracy: true})

</script>
