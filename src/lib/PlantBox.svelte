<script lang="ts">
    import Plant from "./Plant.svelte";
</script>

<div class="plantBox">
    {#each Array(20) as _ }
        <div class="plant">
            <Plant/>
        </div>

    {/each}


</div>

<style>
    .plantBox{
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100vh !important;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .plant{
        width: 300px !important;
        height: 80px !important;
    }

</style>





