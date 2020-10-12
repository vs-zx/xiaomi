<template>
  <div class="video">
    <div class="container">
      <div class="video-title">
        <h2 class="text">视频</h2>
        <div class="more">
          <a href="###" class="more-link">
            查看全部
            <i class="iconfont more-icon">&#xe777;</i>
          </a>
        </div>
      </div>
      <ul class="video-content">
        <li class="content-item">
          <div class="content-img">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=377&h=230&f=webp&q=90"
            />
            <span class="play"><i class="iconfont play-icon">&#xe62e;</i></span>
          </div>
          <h3 class="name">Redmi 10X系列发布会</h3>
          <p class="desc">Redmi 10X系列发布会</p>
        </li>
        <li class="content-item">
          <div class="content-img">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=377&h=230&f=webp&q=90"
            />
            <span class="play"><i class="iconfont play-icon">&#xe62e;</i></span>
          </div>
          <h3 class="name">小米10 青春版 发布会 </h3>
          <p class="desc"></p>
        </li>
        <li class="content-item">
          <div class="content-img">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=377&h=230&f=webp&q=90"
            />
            <span class="play"><i class="iconfont play-icon">&#xe62e;</i></span>
          </div>
          <h3 class="name">小米10 8K手机拍大片</h3>
          <p class="desc"></p>
        </li>
        <li class="content-item">
          <div class="content-img">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=377&h=230&f=webp&q=90"
            />
            <span class="play"><i class="iconfont play-icon">&#xe62e;</i></span>
          </div>
          <h3 class="name">小米10发布会</h3>
          <p class="desc"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video {
  background: rgb(245, 245, 245);
}

.video-title {
  width: 100%;
  height: 58px;
  position: relative;
  .text {
    line-height: 58px;
    font-size: 22px;
    font-weight: 200;
    color: #333;
  }
  .more {
    position: absolute;
    top: 0;
    right: 0;
    height: 58px;
    line-height: 58px;
    .more-link {
      font-size: 16px;
      color: #424242;
      transition: all 0.4s;
      .more-icon {
        font-size: 20px;
        color: #b0b0b0;
        vertical-align: top;
        transition: all 0.4s;
      }
      &:hover {
        color: #ff6700;
      }
      &:hover .more-icon {
        color: #ff6700;
      }
    }
  }
}

.video-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .content-item {
    width: 296px;
    height: 285px;
    margin-bottom: 14px;
    background: #fff;
    text-align: center;
    transition: all 0.2s linear;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px 1px rgba(0, 0, 0, 0.2);
    }
    .content-img {
      position: relative;
      height: 180px;
      margin-bottom: 28px;
      img {
        width: 100%;
        height: 100%;
      }
      .play {
        position: absolute;
        left: 20px;
        bottom: 10px;
        .play-icon {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .name {
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 400;
      color: #333;
      white-space: nowrap;
    }
    .desc {
      height: 18px;
      font-size: 12px;
      color: #b0b0b0;
    }
  }
}
</style>
