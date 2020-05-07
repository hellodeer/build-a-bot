<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open" > &#x25B2;
                Collapse</span>
            <span v-if="!open" @click="open = !open" > &#x25BC;
                Expand</span>
        </div>
        <slot v-if="open">
            <div>This default content will show if no other content was loaded/present</div>
        </slot>
    </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
    .header {
        background-color: grey;
        padding: 3px;
        cursor: pointer;
    }
</style>
