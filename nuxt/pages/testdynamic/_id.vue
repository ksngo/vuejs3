<template>
    <div>
        {{$route.params.id}}
        <NuxtLink v-if="$route.params.id" to="/testdynamic">testdynamic page</NuxtLink>
        <NuxtLink v-else to="/">home page</NuxtLink>
    </div>
</template>

<script>


export default {
    
}
</script>
