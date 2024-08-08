<script>
export default {
    created() {
        this.$watch(
            () => this.$route.params.id,
            (newid,oldid) => {
                console.log('newid',newid)
                console.log('oldid',oldid)
            }
        )
    }
}
</script>

<template>
    <h2>UserView</h2>
    <div>  User {{  $route.params.id }}</div>
    <router-view></router-view>
</template>