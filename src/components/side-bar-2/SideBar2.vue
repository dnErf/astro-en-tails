<script setup lang="ts">
    import { onBeforeUnmount, onMounted, ref } from "vue"

    let secondLastCard = ref()
    let isVisible = ref<boolean>(true)

    onMounted(() => {
        window.addEventListener('scroll', () => trackVisibility())
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', () => trackVisibility())
    })

    function trackVisibility(): void {
        let r = secondLastCard.value?.getBoundingClientRect()

        isVisible.value = r?.top >= 0
            && r?.left >= 0
            && r?.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                && r?.right <= (window.innerWidth || document.documentElement.clientWidth)
    }
</script>

<template>
    <div class="flex flex-col space-y-4">
        <div class="bg-slate-800 h-64 w-64 rounded">
        </div>
        <div class="bg-slate-800 h-28 w-64 rounded" ref="secondLastCard">
        </div>
        <div class="bg-slate-800 h-72 w-64 rounded" :class="{'fixed top-20' : !isVisible }">
        </div>
    </div>
</template>
