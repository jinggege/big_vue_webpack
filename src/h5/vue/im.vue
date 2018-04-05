<template>
    <div class="">
        <div class="im_box">
			<div class="msgbody">
				
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
	Vue.use(VueSocketio, 'http://127.0.0.1:3339/room1');
	
	export default{
	  data(){
	      return{
						id:'',
						val:"talk"
	      }
	  },
	  sockets:{
	    connect: function(){
	      this.id=this.$socket.id
	      
	    },
	    
	    customEmit: function(val){
	      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
	    }
	  },
	  
	  mounted(){
	  	this.$socket.emit("connect","123");
	  	this.$socket.on("event_talk",function(data){
	  		console.log(data);
			});
			//监听公屏发言
			this.$socket.on(2002,function(data){
				console.log(data);
				$(".msgbody").append("<div class='borders'>"+data.msg+"</div>");
			})
			
	  },
	  
	  methods: {
	    clickButton: function(val){
	        // $socket is socket.io-client instance
	        this.$socket.emit('emit_method', val);
			},
			send:function(){
				  var ival = $("#val").val()
					this.$socket.emit(2001,{msg:ival});
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
			flex-grow: 1;
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
		}
</style>