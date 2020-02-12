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
        <span>{{title}}</span>
      </p>
      <view class="scroll-view_H" scroll-x="true" style="width: 100%">
        <view id="demo1" class="scroll-view-item_H" v-for="item in movieList" :key="item.id">
          <img :src="item.images.large" alt />
          <p>{{item.title}}</p>
          <div class="rating">
            <div class="stars" v-if="item.rating.average">
              <img
                src="../../../static/images/star.svg"
                v-for="(item2,index2) in item.starNum"
                :key="index2"
              />

              <img
                src="../../../static/images/unstar.svg"
                v-for="(item2,index2) in 5-item.starNum"
                :key="index2"
              />
            </div>
            <span class="num">{{item.rating.average ? item.rating.average : '暂无评论'}}</span>
          </div>
        </view>
      </view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      movieList: []
    };
  },
  onLoad(options) {
    // console.log(options.param);
    let param = options.param;
    //设置标题
    this.title = param === "top250" ? "TOP250" : "影院热映";
    wx.setNavigationBarTitle({ title: this.title });
    this.getMovies(param);
  },
  methods: {
    getMovies(param) {
      this.$request({
        url: `/v2/movie/${param}?apikey=0df993c66c0c636e29ecbb5344252a4a`
      }).then(res => {
        this.movieList = res.data.subjects;
        let movies = res.data.subjects;
        movies.forEach(v => {
          v.starNum = Math.ceil(v.rating.average / 2);
        });
        console.log(res);
      });
    }
  }
};
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
    font-size: 24rpx;
  }
}
.movie-item {
  .title {
    height: 87rpx;
    display: flex;
    justify-content: space-between;
    padding: 0 36rpx;
    align-items: center;
    .more-link {
      color: #42bd56;
    }
  }
}
.scroll-view_H {
  display: flex;
  flex-wrap: wrap;
  margin-top: 12rpx;
  margin-bottom: 62rpx;
}
.scroll-view-item_H {
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20rpx;
  > img {
    width: 200rpx;
    height: 286rpx;
  }
  > p {
    margin-top: 20rpx;
    text-align: center;
    font-size: 24rpx;
    width: 200rpx;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    .num {
      margin-left: 8rpx;
    }
  }
  .stars {
    display: flex;
    img {
      width: 20rpx;
      height: 20rpx;
    }
  }
}
</style>