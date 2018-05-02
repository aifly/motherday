<template>
	<transition name='main'>
		<div class="lt-full zmiti-main-main-ui "  :class="{'show':show}" >
			<div ref='page' :style="{height:viewH+'px'}" >
				<div :style='{paddingBottom:"50px",border:"1px solid transparent"}'>
					<div class="zmiti-logo">
						<img :src="imgs.logo1">
					</div>
					<div class="zmiti-mother">
						<img :src="imgs.mother">
					</div>
					<div class="zmiti-dis">
						距离母亲节还有 <span>{{day}}</span> 天
					</div>
					<div class="zmiti-text">
						<img :src="imgs.text">
					</div>
					<div class="zmiti-concat" v-tap='[showMasks]'>
						<img :src="imgs.concat1">
					</div>
					<div class="zmiti-info">
						(视频来自网络)
					</div>
				</div>
			</div>
			<div v-if='showMask' @touchstart='showMask = false' class="zmiti-mask lt-full" :style="{width: viewW+'px',height:viewH+'px'}">
				<img :src="imgs.arrow">
			</div>

			<transition name='video'>
				<div class="zmiti-video lt-full" v-if='showVideo'>
					<video x5-playsinline="" controls x-webkit-airplay="true" ref='video'  webkit-playsinline="true" playsinline="true"  :src='vidoeUrl'></video>
				</div>
			</transition>

		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import $ from 'jquery';
	import IScroll from 'iscroll';

	import {Stone} from './obstacle';
	export default {
		props:['obserable','pv','randomPv','nickname','headimgurl'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				showTeam:false,
				showQrcode:false,
				show:false,
				vidoeUrl:window.vidoeUrl,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				levels:window.levels,
				showVideo:true,
				index:0,
				showMask:false,
				day:0
			}
		},
		components:{
		},
		
		methods:{
			showMasks(){
			 	this.showMask = true;
			},
			launchFullscreen(element) {
				//此方法不可以在異步任務中執行，否則火狐無法全屏
				if(element.requestFullscreen) {
					element.requestFullscreen();
				} else if(element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if(element.msRequestFullscreen){ 
					element.msRequestFullscreen(); 
				} else if(element.oRequestFullscreen){
					element.oRequestFullscreen();
				} else if(element.webkitRequestFullscreen){
					element.webkitRequestFullScreen();
				}else{
					var docHtml = document.documentElement;
					var docBody = document.body;
					var videobox = document.getElementById('videobox');
					var cssText = 'width:100%;height:100%;overflow:hidden;';
					docHtml.style.cssText = cssText;
					docBody.style.cssText = cssText;
					videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
					document.IsFullScreen = true;
				}
			}

		},
	
		mounted(){
			var d = new Date().getDate();

			this.day = 13 - d;

			this.scroll = new IScroll(this.$refs['page']);

			var {obserable} = this;
			obserable.on('toggleMain',()=>{
				this.show = true;
				this.scroll.refresh();
				this.$refs['video'].play();
				this.launchFullscreen(this.$refs['video']);
				this.$refs['video'].addEventListener("ended",()=>{
					this.showVideo = false;
				});
			});

		 
		}
	}
</script>