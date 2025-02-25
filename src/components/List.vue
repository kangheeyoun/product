<template>
    <div class="products-list">
        <div class="card" v-for="list in products" :key="list.id">
            <img :src="list.image" :alt="list.name">
            <p>{{ list.name }}</p>
            <p>가격: {{ list.price }}원</p>
            <button @click="addToList(list)">장바구니 추가</button>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        products:Array
    });
    const emit = defineEmits(['add-to-cart']);
    const addToList = (list)=>{
        emit('add-to-cart', list );
    }
</script>
<style lang="scss" scoped>
.products-list{
    padding: 50px 0;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    .card{
        width: 200px;
        text-align: center;
        p:nth-of-type(1){
            padding: 5px;
            font-size: 20px;
            font-weight: bold;
        }
        p:nth-of-type(2){
            padding: 5px;
        }
        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }
        button{
            margin-top: 5px;
            padding: 5px;
            background-color: rgba(82, 81, 78, 0.801);
            border-radius: 10px;
            color: rgb(255, 255, 255);
            border: none;
            font-weight: bold;
            cursor: pointer;
            &:hover{
                background-color: rgba(170, 170, 168, 0.801);


            }
        }
        
    }
}
</style>