<template>
    <div>
        <SucoItem 
        v-for = "suco in sucos"
        :key="suco"
        :nome="suco"
        />
    </div>
</template>
<script>
import SucoItem from './SucoItem.vue';

export default{
    components: {SucoItem},
    data(){
        return{sucos:["Laranja","Maça","Uva"]};
    },
};
</script>