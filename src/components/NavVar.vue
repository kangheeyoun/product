<template>
    <nav>
        <h1>쿠야</h1>
        <div class="router-link">
            <router-link to="/">상품목록</router-link>
            <router-link to="/cart">장바구니</router-link>
        </div>
        <ul>
          <li v-for="(list,idx) in categories" :key="idx" @click="selectedClick(list)">
            {{ list }}
          </li>
        </ul>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

 defineProps({
    categories : Array
 });
 const router =useRouter();
 const emite = defineEmits(['selected']);
 const selectedClick = (list)=>{
    emite('selected',list);
    router.push('/');
 }
</script>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        padding: 2rem 5rem;
        h1{
            font-size: 35px;
            color: rgb(95, 79, 92);
        }
        .router-link{
                a{
                    text-decoration: none;
                }
                   }
        ul{
            display: flex;
            gap: 3rem;
            li{
                cursor: pointer;
                &:hover{
                    font-weight: bolder;
                    color: rgb(179, 46, 123);
                }
            }
        }
    }
</style>