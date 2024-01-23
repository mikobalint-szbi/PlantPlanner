
// @ts-ignore
export let database;
let items = [];

const loadItems = async () => {
    const response = await fetch('/Database/database.json');
  database = await response.text();

  try {
    database = JSON.parse(database);
    console.log(database)
  }
  catch (error) {
    console.error('Error parsing JSON:', error);
  }
    
};

export function saveDatabase(){
  localStorage.setItem("database",JSON.stringify(database));
}

loadItems();



