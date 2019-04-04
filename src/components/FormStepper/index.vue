<template lang="pug">
    nav
        router-link(v-for="(item, index) in items" :to="item.path") {{ item.title }}
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'step one',
                    path: '/1'
                }, 
                {
                    title: 'step two',
                    path: '/2'
                }, 
                {
                    title: 'step three',
                    path: '/3'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
nav {
    display: flex;
    justify-content: center;

    > a {
        display: inline-block;
        align-items: center;
        padding: .5em;

        &:hover {
            cursor: pointer
        }
    }
}
</style>


