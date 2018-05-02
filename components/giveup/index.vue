<template>
	<div v-tap='[entry]'  class="lt-full zmiti-give-main-ui " ref='page'  :class="{'show':show}">
		<div class="lt-full zmiti-give-bg"  :style="{height:viewH+'px',background:'url('+imgs.giveupBg+') no-repeat center center',backgroundSize:'cover'}"></div>

		<div class="zmiti-logo">
			<img :src="imgs.logo1" alt="">
		</div>
		<div class="zmiti-text">
			<div>很遗憾您拒绝了我们的职位</div>
			<div>或许您可以看看其他人的面试情况！ </div>
		</div>

		<div class="zmiti-concat" :style="{opacity: opacity}">
			<img :src="imgs.concat" @touchstart='imgStart($event)' alt="">
		</div>

	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import $ from 'jquery';
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:false,
				toastMsg:'',
				cloudIndex:0,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				showMasks:false,
				text:'',
				opacity:1
			}
		},
		components:{
		},
		
		methods:{

			imgStart(e){
				e.preventDefault(); 
			},

			entry(){

			}
			
		},
		mounted(){

			var {obserable} = this;
			obserable.on('toggleGiveup',()=>{
				this.show = true;
			});

			
		}
	}
</script>