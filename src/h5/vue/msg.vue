<template>
    <div>
        <p>msg</p>
        
    </div>
</template>
<script>
import $ from "jquery";
import Vue from 'vue';

export default {
    prop:["uId","tId","msg"],
  data(){
    return {

         }
    },
    mounted(){
        console.log(this.prop);
    }
    
}
</script>
<style scoped>

</style>
