<template>
    <div>
        {{$route.params.id}}
        <NuxtLink v-if="$route.params.id" to="/testdynamic">testdynamic page</NuxtLink>
        <NuxtLink v-else to="/">home page</NuxtLink>
        <p> {{this.paramsSavedToLocalData }} </p>
    </div>
</template>

<script>


export default {
    asyncData({ params }) {
        const paramsSavedToLocalData = params.id;
        return { paramsSavedToLocalData }
    }
}
</script>
