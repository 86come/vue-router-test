<script>
    export default {
        methods: {
            goToAbout() {
                this.$router.push('/about')
            }
        }
    }
</script>

<template>
    <h2>FirstView</h2>
    <button @click="goToAbout">Go to About</button>
</template>