<script lang="ts">
    import PlantBox from "../../lib/PlantBox.svelte";

    import { generator, populateField } from "$lib/functions.ts";

    let inpW = 100
    let inpH = 300
    let inpA = 3

    let Project = generator(inpA, inpH, inpW);

    let plants = [
        {id: 12, amount:1},
        {id: 16, amount:5}
    ]
    populateField(plants)
</script>


<section class="body">

    <div class="col1">
        <PlantBox/>
    </div>
    <div class="col2">
        <canvas class="field"/>
        <canvas class="field"/>
        <canvas class="field"/>
        <canvas class="field"/>
    </div>

</section>

<style lang="scss">
    .field{
        border: 1px solid black;
        height: 80vh;
        width: 63vh;
    }

    .body{
        display: flex;
        
        .col1{

        }

        .col2{
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            white-space: nowrap;
            overflow-x: auto;
            gap: 10px;
            padding: 0 20px 0 20px;
        }
    }





</style>


