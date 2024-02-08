<script lang="js">
    import SideBar from "$lib/SideBar.svelte";

    import { generator, populateField } from "$lib/functions";

    let inpW = 100
    let inpH = 300
    let inpA = 3

    let Project = generator(inpA, inpH, inpW);

    let plants = [
        {12:Number, 1:Number},
        {16:Number, 5:Number}
    ]

    let plansOnField = []
    // populateField(plants)

</script>


<section class="body">

    <div class="col1">
        <div class="plantBox-parent">
            <SideBar/>
        </div>

        <!--div class="separator">
            <div class="s-col1">
                <p>^^^</p>
            </div>
            <div class="s-col2"/>
        </div-->

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

    .plantBox-parent{
        height: 100vh;
    }
    .statusBox-parent{
        height: 40%;
        display: none;
    }

    .body{
        display: flex;
        
        .col1{
            height: 100vh;
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

    .separator{
        height: 16px;
        z-index: 10 !important;
        position: relative;
        display: flex;
        flex-direction: row;

        .s-col1{
            width: 320px;
            border-right: 1px solid black;
            height: 100%;
            background-color: rgb(234, 192, 150);
            background-color: rgb(214, 162, 112);
            box-shadow:  -1px -1.8px 6px black;
        }
        .s-col2{
            background-color: rgb(97, 88, 78);
            width: 11px;
            height: 105%;

        }
    }




</style>


