<script lang="ts">

// import jsonData from "../stores/database.js"

    

</script>

<div class="plantBox">
    {#each Array(20) as _ }

    <div class="plant">
        <div class="col1">
            <img src="" alt="">
        </div>
        <div class="col2">
            <h3>Faj neve</h3>
            <p>Faj latin neve</p>
        </div>
    </div>

    {/each}


</div>

<style lang="scss">
    .plantBox{
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100vh !important;
        overflow-y: auto;
        overflow-x: hidden;
    }



    img{
        height: 60px;
        width: 55px;
        
    }

    .plant{

        width: 300px !important;
        height: 70px !important;
        border: 1px solid black;
        border-top: none;
        display: flex;

        .col1{
            display: flex;
            align-items: center;
            width: 60px;
        }
        .col2{
            display: flex;
            align-content: center;
            flex-direction: column;
        }

        h3{
            margin:  0 0;
        }
        p{
            margin: 0;
        }
    }




</style>





