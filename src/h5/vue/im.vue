<template>
    <div class="">
        <div class="im_box">
			<div class="msgbody">
				
				<div class="pubmsg"  v-for="item in mlist" >
						
						<!-- <pubMsg v-bind="item" v-on:refreshbizline="sSiXin"></pubMsg> -->
				<div >
					<p>{{item.msg}}</p>
					<div class="sbox">
						<input id="siXin" class="siXin" type="text">
						<button id="sx" v-bind:tid="uId"  @click="sSiXin">私信</button>
					</div>
				</div>
				</div>
				<!-- <div class="siXin">
					<div class="item"  v-for="items in list" >
						<TempMsg  v-bind="items" ></TempMsg>
					</div>
				</div> -->
			</div>
			<div class="msgsend">
				<input type="text" name=""  id="val"  value="" />
				<button v-on:click="send">发送</button>
			</div>
		</div>
    </div>
</template>

<script>
import $ from "jquery";
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import TempMsg from './msg.vue';
import pubMsg from './pubMsg.vue';

var imThis = null;

Vue.use(VueSocketio, 'http://127.0.0.1:3339/room1');
	
	export default{
		components:{ TempMsg,pubMsg },

	  data(){
	      return{
				val:"talk",
				uId:"u"+Math.random()*10,
				msgList:[],
				sXinList:[]
	      }
	  },

	  computed:{
			list(){
				return this.sXinList;
			},
			mlist(){
				return this.msgList;
			}

		},
	
	  sockets:{
	    connect: function(data){
				//加入房间消息
				this.$socket.emit(2000,{uId:this.uId,clientId:this.$socket.id});
	    },
	    
	    customEmit: function(val){
	      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
	    }
	  },
	  
	  mounted(){

		  var _this = this;
		  imThis = this;
		  
			//监听公屏发言data {} 含有  msg 消息   uId 消息来源
			this.$socket.on(2002,function(data){
				
				_this.msgList.push({ "msg":data.msg} );
				console.log(_this.msgList)
				
			
			});
			//监听私聊信息 data{ tId：xxxx，msg：xxx}  
			this.$socket.on(2004,function(data){
				console.log("收到私信");
				_this.sXinList.push( Date.now());
				$(".msgbody").append("<div id='Msg' data='"+data+"'></div>");
			});
			
	  },
	  
	  methods: {
	    clickButton: function(val){
	        // $socket is socket.io-client instance
	        this.$socket.emit('emit_method', val);
			},
			send:function(){
				//this.msgList.push( Date.now() );
				  var ival = $("#val").val()
					this.$socket.emit(2001,{msg:ival});
			},
			//发送私聊2003消息 data{uId:xxx, tId：xx，msg：xx}
			sSiXin:function(e){
				
                console.log("私信了一下")
					var sval = $(event.target).prev().val();
                    var thId =$("#sx").attr("tid");
					var uId = imThis.uId;
					console.log(sval+"++"+thId+"++"+uId)
					this.$socket.emit(2003,{uId:this.uId,tid:thId,msg:sval});
					console.log(this.sXinList)
			}
	  }
	}
</script>

<style >
   		*{
			margin: 0;
			padding: 0;
		}
		body,html{
			height: 100%;
		}
		.im_box{
			display: flex;
			display: -webkit-flex;
			flex-direction: column;
			height: 100%;
		}
		.msgbody{
			width: 100%;
			height: 70% !important;
		}
		.msgsend{
			display: flex;
			display: -webkit-flex;
			flex-direction: row;
			width: 100%;
			
		}
		.msgsend button{
			width: 60px;
			text-align: center;
			font-size: 18px;
		}
		.msgsend input{
			flex-grow: 1;
			border-radius: 10px;
		}
		.borders{
			border: 1px solid #999;
			height: 40px !important;
			width: 50%;
			margin-left: 15px;
			margin-top: 10px;
			line-height: 40px;
		}
		.siXin{
			height: 20%;
			color: darkgray;
			border-top: 1px solid #999;
			background-color: #efefef;
		}
</style>