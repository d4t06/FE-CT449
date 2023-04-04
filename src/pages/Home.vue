<script setup>
import { ref, computed, watchEffect } from "vue";
import { storeToRefs } from "pinia";

import { useContactStore } from "../store/store";
import { getAllAndStoring } from "../store/actions";

import { destroyContact } from "../services/contactServices";
import Button from "../components/Button.vue";
import Search from "../components/Search.vue";
import ContactCard from "../components/ContactCard.vue";

const store = useContactStore();
const curIndex = ref(0);

const handleGetContacts = () => {
   curIndex.value = 0;
   getAllAndStoring(store);
};

watchEffect(() => handleGetContacts());

const activeContact = computed(() => store?.contacts[curIndex.value]);
const { status, contacts } = storeToRefs(store);

const handleDestroy = async () => {
   if (confirm("Bạn muốn xóa tất cả liên hệ ?")) {
      await destroyContact();
   }
};
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
               <li
                  v-if="contacts.length && status === 'successful'"
                  v-for="(contact, index) in contacts"
                  @click="() => (curIndex = index)"
                  :class="['contact-item', { active: curIndex === index }]"
               >
                  {{ contact?.name }}
               </li>
               <h2
                  v-if="!contacts.length || status === 'loading'"
                  class="tac mt10"
               >
                  No contact yet...
               </h2>
            </ul>
            <div class="cta df jcsb">
               <Button class="refresh" :disable="!(contacts.length)" :onClick="() => handleGetContacts()">
                  <i class="material-icons">refresh</i>
                  Làm mới
               </Button>
               <Button class="add" to="/create">
                  <i class="material-icons">add</i>
                  Thêm mới
               </Button>
               <Button class="delete" :disable="!(contacts.length)" :onClick="() => handleDestroy()">
                  <i class="material-icons">delete</i>
                  Xóa Tất cả
               </Button>
            </div>
         </div>

         <div class="col col-5">
            <ContactCard
               v-if="contacts.length && status === 'successful'"
               :contact="activeContact"
            />
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
      color: #4267b2;
      border-color: #4267b2;
   }
}
.contact-item.active {
   background-color: #4267b2;
   color: #fff;
}
.cta {
   margin-top: 15px;
   text-align: center;
}
</style>
