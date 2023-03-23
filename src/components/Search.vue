<script type="text/javascript" setup>
	import {ref, watch} from 'vue';
	import debounce from 'lodash.debounce'

	const contactName = ref('');


	const saveSearchChange = debounce(() => {
		console.log("call api")
	}, 800)

	watch(contactName, saveSearchChange)

</script>

<template>
	<div className='search'>
            
               <input
                  className='input'
                  type="text"
                  placeholder="Hôm nay bạn muốn tìm gì..."
                  v-model="contactName"
               />
               <!-- {loading && query && (
                  <button className='loading-btn'>
                     {/* <FontAwesomeIcon icon={faSpinner} /> */}
                  </button>
               
               {!loading && query && (
                  <button
                     className='clear-btn'
                     onClick={(e) => handleClear(e
                  >
                     {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
                  </button>
                -->
               <button className='search-btn'>
					<span class="ti-search"></span>
               </button>
            
        </div>
</template>

<style scoped>

.search {
    height: 35px;
    margin: 15px auto 0;
    position: relative;
 }
 .input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 20px;
    padding-right: 70px;
    font-size: 1.7rem;
    border-radius: 20px;    
    border: 1px solid #999;
 }
 .search-btn {
    position: absolute;
    right: 0;
    width: 45px;
	height: 100%;
    color: #999;
    font-size: 2rem;
    padding-top: 1px;
    background-color: transparent;
	&::before {
		content: "";
		position: absolute;
		left: 0;
		width: 1px;
		background-color: #aaa;
		top: 5px;
		bottom: 5px;
	}

 }
 .input:not(:placeholder-shown) ~ .search-btn {
    color: #333;
 }
 .search-btn:hover {
    background-color: #f1f1f1;
    color: #333;
 }
 .clear-btn, .loading-btn {
    position: absolute;
    height: 100%;
    right: 60px;
    background-color: transparent;
    top: 0;
    color: #ccc;
    font-size: 1.8rem;
 }
 .loading-btn{
    animation: spinner 1s linear infinite;
 }

 @keyframes spinner {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
 }
	
</style>