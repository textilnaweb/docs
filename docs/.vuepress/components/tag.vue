<template>
    <div :class="'tag '+type" :style="'color:'+color+';'">
      {{text}}
  </div>
</template>

<script>
export default {
    props: [
        'text',
        'type', 
    ]
};
</script>

<style lang="stylus" scoped>
.tag{
    background-color: #E4E4E4;
    padding: 3px 10px;
    line-height 16px;
    display: inline-block;

    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;

    &.error{
        background-color: #da5961;
        color: #FFF;
    }
    &.success{
        background-color: #42b983;
        color: #FFF;
    }
    &.warning{
        background-color: #e7c000;
        color: #FFF;
    }
    &.info{
        background-color: #4f44e0;
        color: #FFF;
    }
}
</style>