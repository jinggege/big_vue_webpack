<template>
    <div >
        <p>msg</p>
        <div class="sbox">
            <input id="siXin" type="text">
            <button  @click="sendSiXin">私信</button>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import Vue from 'vue';

export default {
    prop:["msg"],
    data(){
        return {
            mmsg:""
            }
        },
        mounted(){
            
            console.log("dj" +this.prop );
            
        },
        methods:{
			sendSiXin () { 
                var tId=this.uId; 
                // this.$parent.$router.push('goToDetail');  
                console.log('子组件方法走了');  
					
                this.$emit('refreshbizline',{tId:tId,msg:$("#siXin").val()}); //>itemId就是子要传的数据 - 这里很重要,refreshbizlines就是父组件$on监测的自定义函数不是父组件的自定义函数。  
  
            }  
        }  
    }  
        
    
</script>
<style scoped>

</style>
