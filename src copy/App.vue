<template>
  <div class="app">
    <NavVar :categories="categories" @selected="selectedCategory"/>
    <!-- <List :products="products" @add-to-cart="addToCart" /> -->
    <List :products="filterProducts" @add-to-cart="addToCart"/>
    <Cart :cart="cartList" @remove-cart-id="removeCart" @clear-cart="clearCart"/>
  </div>
</template>

<script setup>
import { computed,ref } from 'vue';
import {products,categories}  from './assets/products.js';
import Cart from './components/Cart.vue';
import List from './components/List.vue';
import NavVar from './components/NavVar.vue';

//장바구니 상태
const cartList = ref([]);
const selectedMenu = ref('');

const addToCart = (list) => {
  //1. list가 된 내용이 cart에 있는지 없는지 확인
  const findItem = cartList.value.find((item)=>{
    return item.id === list.id;
  });
  //2. 있으면 수량을 하나 증가
  if(findItem){
    findItem.count += 1;
  }else{
  //3. 없으면 cart에 추가, 수량1개 저장
  cartList.value.push({...list, count:1});
  }
  // console.log(cartList.value);
}
const removeCart = (cartID) =>{
  // cartList항목이 새로 생성 : cartID 가 없는 데이터로
  cartList.value = cartList.value.filter((item)=>{
    return item.id !== cartID;
  });
}
const clearCart = (value)=>{
  if(value){
    cartList.value = [];
  }
}
const selectedCategory = (item) =>{
  console.log(item);
  selectedMenu.value = item === 'All' ? null : item;
}
const filterProducts = computed(()=>{
  const item = products.filter((list)=>{
    return list.category === selectedMenu.value;
  });
  return selectedMenu.value ? item : products;
});

</script>

<style lang="scss" scoped>

</style>