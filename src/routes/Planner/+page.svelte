<script lang="js">
    import PlantBox from "../../lib/PlantBox.svelte";

    import { generator, populateField } from "$lib/functions.ts";

    let inpW = 100
    let inpH = 300
    let inpA = 3

    let Project = generator(inpA, inpH, inpW);

    let plants = [
        {12:Number, 1:Number},
        {16:Number, 5:Number}
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


