
// @ts-ignore
export let database;
let items = [];
import {onMount} from 'svelte';

  onMount(() => {
      loadItems();
  });

  const loadItems = async () => {
     const response = await fetch('../../../static/Database/database.json');
    database = await response.text();
    console.log(database)
      
  };
