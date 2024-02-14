
// @ts-ignore
export let database;
let items = [];

export const loadItems = async () => {
  const response = await fetch('/Database/database.json');
  database = await response.text();

  try {
    if (true){
      database = JSON.parse(database);
      saveDatabase();
    }

  }
  catch (error) {
    console.error('Error parsing JSON:', error);
  }
  return database
};

export function saveDatabase(){
  localStorage.setItem("database",JSON.stringify(database));
}


