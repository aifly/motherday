<template>
	<div v-tap='[entry]'  class="lt-full zmiti-index-main-ui " :style="{height:viewH+'px'}" ref='page'  :class="{'show':show}">
		<div class="zmiti-index-wrap">
			<div class="zmiti-top">
				别拉啦，疼疼疼 :(
			</div>
			<div class="zmiti-title">
				<img :src="imgs.img1" @touchstart='imgStart($event)'/>
			</div>
			<div class="zmiti-btns">
				<div v-tap='[entryGiveup]'>
					<img  @touchstart='imgStart($event)' :src="imgs.fangqi" alt="">
				</div>
				<div v-tap='[entry]'>
					<img  @touchstart='imgStart($event)' :src="imgs.get" alt="">
				</div>
			</div>

			<div class="zmiti-copyright">
				@2017-2018  麟腾传媒文化有限公司
			</div>
			<div class="zmiti-bottom">
				别扯了，我是有底线的~  ^_^
			</div>
		</div>

	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import $ from 'jquery';
	import IScroll from 'iscroll';
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				toastMsg:'',
				cloudIndex:0,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				showMasks:false,
			}
		},
		components:{
		},
		
		methods:{

			imgStart(e){
				e.preventDefault(); 
			},

			entryGiveup(){
				var {obserable} = this;
				obserable.trigger({
					type:'toggleGiveup'
				})
			},

			entry(){

				var {obserable} = this;
				obserable.trigger({
					type:'toggleMain'
				})
			}
			
		},
		mounted(){


			var {obserable} = this;

			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
			})


			this.scroll = new IScroll(this.$refs['page'],{
			});

			setTimeout(()=>{
				this.scroll.refresh();
				//this.entry();
			},100)

		}
	}
</script>