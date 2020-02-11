<template>
 <div>
    <div class="header">
    <span>豆瓣</span>
    <icon type="search" size="16" color="#00b600"></icon>
    <button>打开豆瓣App</button>
  </div>
  <!-- 影院热映 -->
  <div class="movie-item">
    <p class="title">
      <span>影院热映</span>
      <span class="more-link">更多</span>
    </p>
  </div>
 </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.header {
  display: flex;
  border-bottom: 1rpx solid #eee;
  align-items: center;
  padding: 0 36rpx;
  height: 94rpx;
  span {
    color: #00b600;
    font-size: 40rpx;
  }
  icon {
    flex: 1;
    margin-left: 28rpx;
    margin-top: 10rpx;
  }
  button {
    width: 200rpx;
    height: 58rpx;
    line-height: 58rpx;
    border: 8rpx;
    color: #fff;
    background-color: #42bd56;
  }
}
.movie-item{
  .title{
    height: 87rpx;
    display: flex;
    justify-content: space-between;
    padding: 0 36rpx;
    align-items: center;
    .more-link{
      color: #42bd56;
    }
  }
}
</style>
