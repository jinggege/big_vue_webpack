/*********************************************************/
import '../../../style/css/base.css';
/*********************************************************/
import Vue               from 'vue';
import VueRouter         from 'vue-router';
//import CCRouter          from '../router/main_nav_router.js';

//import StoreMain         from '../vuex/main.js';


Vue.use( VueRouter );

new Vue({
    el:'#B-body',
    //router:CCRouter.getRouter(),
    //store:StoreMain,
   // render:render => render( TempAdminIndex )
});


