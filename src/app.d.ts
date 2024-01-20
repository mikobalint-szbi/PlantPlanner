// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

	}
}

const initSqlJs: any = require('sql.js');
// or if you are in a browser:
// const initSqlJs = window.initSqlJs;

const SQL: any = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
  locateFile: file => `https://sql.js.org/dist/${file}`
  
});



export {};
