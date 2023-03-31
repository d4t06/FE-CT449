<script setup>
import { watchEffect, ref, computed, onMounted } from "vue";
import Button from "../components/Button.vue";
import Search from "../components/Search.vue";
import { useContactStore } from "../store/store";
import { getAllAndStoring } from "../store/actions";
import { destroyContact } from "../services/contactServices";
import { storeToRefs } from "pinia";

const store = useContactStore();
const curIndex = ref(0);

const handleGetContacts = () => {
  store.loading();
  curIndex.value = 0;
  setTimeout(() => {
    const response = getAllAndStoring(store);
  }, 500);
};

const handleDestroy = async() => {
  const response = await destroyContact();
  console.log(response)
}



onMounted(() => {
  if (store.status === "idle") {
    handleGetContacts();
  }
});

console.log("store.contacts =", store.contacts);

const activeContact = computed(() => store?.contacts[curIndex.value])
const {status, contacts} = storeToRefs(store)



</script>

<template>
  <Search />
  <div class="contact-container">
    <div class="row">
      <div class="col col-7">
        <div class="title">
          <i class="material-icons">people</i>
          <h1>Danh bạ</h1>
        </div>
        <ul class="contact-list mt10">
          <h2 v-if="status === 'loading'" class="tac mt10">Loading...</h2>
          <li
            v-if="contacts.length && status !== 'loading'"
            v-for="(contact, index) in contacts"
            @click="() => curIndex = index"
            :class="['contact-item', { active: curIndex === index }]"
          >
            {{ contact?.name }}
          </li>
          <h2 v-if="!contacts && status !== 'loading'" class="tac mt10">No contacts</h2>
        </ul>
        <div class="cta df jcsb">
          <Button class="refresh" :onClick="() => handleGetContacts()">
            <i class="material-icons">refresh</i>
            Làm mới
          </Button>
          <Button class="add" to="/create">
            <i class="material-icons">add</i>
            Thêm mới
          </Button>
          <Button class="delete" :onClick="() => handleDestroy()">
            <i class="material-icons">delete</i>
            Xóa Tất cả
          </Button>
        </div>
      </div>

      <div class="col col-5">
        <div class="title">
          <i class="material-icons">assignment_ind</i>
          <h1>Chi tết liên hệ</h1>
        </div>
        <h2 v-if="status === 'loading'" class="mt10 tac">Loading...</h2>
        <table v-if="contacts.length && status !== 'loading'" class="info-table">
          <tbody>
            <tr>
              <td>Tên:</td>
              <td>{{ activeContact?.name }}</td>
            </tr>
            <tr>
              <td>Địa chỉ:</td>
              <td>{{ activeContact?.address }}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>{{ activeContact?.email }}</td>
            </tr>
            <tr>
              <td>Điện thoại</td>
              <td>{{ activeContact?.phone }}</td>
            </tr>
            <tr>
              <td>Liên hệ yêu thích</td>
              <td v-if="activeContact?.favorite"> Yes </td>
              <td v-else> No </td>
            </tr>
          </tbody>
        </table>

        <div v-if="status !== 'loading' && store.contacts" class="cta tac">
          <Button center :to="`/edit/${activeContact?._id}`">
            <i class="material-icons">edit</i>
            Hiệu chỉnh
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mt10 {
  margin-top: 10px;
}
.container {
  max-width: 66.6667%;
}

.contact-container {
  margin-top: 20px;
}
.title {
  display: flex;
  align-items: center;
  h1 {
    margin-left: 5px;
  }
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
  font-weight: 500;
  border-left: 4px solid transparent;
  cursor: pointer;
  &:hover {
    color: #4267B2;
    border-color: #4267B2;
  }
  // &::after {
  //   content: "";
  //   border-bottom: 1px solid #ccc;
  //   position: absolute;
  //   left: 10px;
  //   right: 10px;
  //   bottom: 0;
  // }
}
.contact-item.active {
  background-color: #4267B2;
  color: #fff;
}
.cta {
  // display: flex;
  // justify-content: space-between;
  margin-top: 15px;
  text-align: center;
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
      font-size: 1.5rem;
    }
  }
}

.info-table {
  // margin-top: 10px;
  width: 100%;
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tbody {
    margin-top: -10px;
  }
  td {
    padding: 10px 7px;
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
  }
}
</style>
