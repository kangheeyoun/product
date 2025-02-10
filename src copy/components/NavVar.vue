<template>
    <nav>
        <h1>햄부가티</h1>
        <ul>
          <li v-for="(list,idx) in categories" :key="idx">
            {{ list }}
          </li>
        </ul>
    </nav>
</template>

<script setup>
 defineProps({
    categories : Array
 });
</script>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        padding: 2rem 5rem;
        ul{
            display: flex;
            gap: 3rem;
            li{
                cursor: pointer;
                &:hover{
                    font-weight: bolder;
                    color: blue;
                }
            }
        }
    }
</style>