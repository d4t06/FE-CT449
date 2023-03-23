<script setup>
import Header from './components/Header/Header.vue'
import Search from './components/Search.vue'
</script>

<template>
  <Header/>
  <div class="container">
      <Search/>
      <div class="contact-container">
        <div class="row">

        <div class="col col-7">
          <h1>Danh bạ</h1>
          <ul class="contact-list mt10">
            <li class="contact-item">Nguyen huu dat</li>
            <li class="contact-item">Nguyen huu dat</li>
            <li class="contact-item">Nguyen huu dat</li>
          </ul>
          <div class="cta">
            <button class="">Làm mới</button>
            <button class="">Thêm mới</button>
            <button class="">Xóa Tất cả</button>
          </div>
        </div>

        <div class="col col-5">
          <h1>Chi tết liên hệ</h1>

          <ul class="info-list mt10">
            <li class="info-item">
              <h2>Tên:</h2>
              <span>Nguyễn Hữu Đạt</span>
            </li>
            <li class="info-item">
              <h2>E-mail:</h2>
              <span>huudat01234560@gmail.com</span>
            </li>
            <li class="info-item">
              <h2>Địa chỉ:</h2>
              <span>An Giang</span>
            </li>
            <li class="info-item">
              <h2>Điện thoại</h2>
              <span>0908152508</span>
            </li>
            <li class="info-item">
              <h2>Liên hệ yêu thích</h2>
              <span>&check;</span>
            </li>
          </ul>

          <div class="cta">
            <button>Hiệu chỉnh</button>
          </div>
        </div>

        </div>
      </div>
  </div>

</template>

<style scoped lang="scss">
.mt10 {
  margin-top: 10px
}
.container {
  max-width: 66.6667%;
}

.contact-container {
  margin-top: 20px;
}
.contact-list {
  border: 1px solid #999;
  border-radius: 5px;
  overflow-y: auto;
  height: 200px;
  margin-top: 10px;
}
.contact-item {
  padding: 10px 12px;
  font-size: 1.8rem;
  position: relative;
  &::after {
    content: '';
    border-bottom: 1px solid #ccc;
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 0;
  }
}
.cta {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  button {
    padding: 10px;
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 500;
    background: #ccc;
  }
}

.info-list {

  .info-item {
    display: flex;
    align-items: center;
    margin: 5px 0;
    h2 {
      margin-right: 5px;
    }
    span {
      font-size: 1.3rem;
    }
  }
}

</style>
