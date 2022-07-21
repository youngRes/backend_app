<template>
    <div class="container">
        <filter-view></filter-view>
        <filter-view-two></filter-view-two>
        <chapter-info></chapter-info>
        <router-view></router-view>
    </div>
</template>

<script>



   // import axios from "axios";

   import filterModel from "@/components/filterModel";
   import ChapterInfoModal from "@/components/pages/ChapterInfoModal";
   import filterModelTwo from "@/components/filterModelTwo";

   export default {
        components:{
            'filter-view': filterModel,
            'filter-view-two': filterModelTwo,
            'chapter-info': ChapterInfoModal
        },
        data: function(){
            return {
            };
        },
        mounted(){
            this.$root.$emit("processFilters");
        },
        methods: {
        },
    }
</script>

<style scoped lang="scss">

</style>
