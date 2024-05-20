import { expense } from "./data/data.js";

import { UI } from "./models/UI.js";



function main (){

  const ui = new UI(expense);
  ui.barStatus();
  ui.printBars();
  ui.printAmount();
}
main();


