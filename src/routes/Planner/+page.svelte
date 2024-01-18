<script lang="ts">
    import PlantBox from "../../lib/PlantBox.svelte";
</script>


<section class="body">

    <PlantBox/>

    <canvas class="field" />

</section>

<style>
    .field{
        border: 1px solid black;
        width: 500px;
        height: 650px;
    }

</style>


