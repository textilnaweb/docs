<template>
  <div class="api">
      <span class="prefix">{{prefix}}</span>
      <span :class="'badge '+method">{{method}}</span>
      <span class="uri">{{uri}}</span>
  </div>
</template>

<script>
export default {
    props: [
        'method', 
        'uri', 
        'prefix'
    ]
};
</script>

<style lang="stylus" scoped>

.api{
    margin: 25px 0;
}

.prefix{
    font-size 14px;
    font-weight 600;
    line-height 16px;
}

.badge{
    background-color: #E4E4E4;
    text-transform uppercase;
    font-size: 12px;
    padding: 3px 10px;
    line-height 16px;

    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;

    &.get{
        background-color: #219464;
        color: #FFF;
    }

    &.post{
        background-color: #4f44e0;
        color: #FFF;
    }

    &.delete{
        background-color: #E34F2F;
        color: #FFF;
    }

    &.put{
        background-color: #DF7800;
        color: #FFF;
    }
}

.uri{
    font-size 14px;
    font-weight 600;
    line-height 16px;
}




</style>