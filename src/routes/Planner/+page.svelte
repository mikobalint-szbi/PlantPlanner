<script lang="ts">
    import PlantBox from "../../lib/PlantBox.svelte";
</script>


<section class="body">

    <div class="col1">
        <PlantBox/>
    </div>
    <div class="col2">
        <canvas class="field"/>
    </div>

</section>

<style lang="scss">
    .field{
        border: 1px solid black;
        width: 500px;
        height: 650px;
    }

    .body{
        display: flex;
        
        .col1{

        }

        .col2{

        }
    }





</style>


