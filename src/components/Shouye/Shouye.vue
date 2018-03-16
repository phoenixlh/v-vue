<template>
  <div>
    <Indexhead></Indexhead>
    <Indexbody></Indexbody>
    <Indexfoot></Indexfoot>
    <!--<router-view/>-->
  </div>    
</template>

<script>
//
	import Indexhead from './Indexhead'
	import Indexbody from './Indexbody'
	import Indexfoot from './Indexfoot'
	
export default {
  name: 'Shouye',
	components:{
		Indexhead,
		Indexbody,
		Indexfoot
}
}
</script>

<style scoped>
	/*body{
		height: 100%;
		display: flex;
		flex-direction: column;
	}*/
	html{
		height: 100%;
		font-size: 26.67vw;
	}
</style>
