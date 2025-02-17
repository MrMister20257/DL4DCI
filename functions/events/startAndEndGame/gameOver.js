import player from "../../../index.js";
import formatter from "../../../utils/formatter.js";
import makeUiHome from "../../ui/uiHome.js";


export default function gameOver() {
    makeUiHome();
    
                function calcTotal() {
                    let sum = 0;
                    player.drugInventory.forEach(element => {
                        sum += element.amount * element.median; 
                    });
                    player.Cash += sum;
                }
                calcTotal();
    
                console.log(`
                    
       ▄██████▄     ▄████████    ▄▄▄▄███▄▄▄▄      ▄████████       ▄██████▄   ▄█    █▄     ▄████████    ▄████████ 
      ███    ███   ███    ███  ▄██▀▀▀███▀▀▀██▄   ███    ███      ███    ███ ███    ███   ███    ███   ███    ███ 
      ███    █▀    ███    ███  ███   ███   ███   ███    █▀       ███    ███ ███    ███   ███    █▀    ███    ███ 
     ▄███          ███    ███  ███   ███   ███  ▄███▄▄▄          ███    ███ ███    ███  ▄███▄▄▄      ▄███▄▄▄▄██▀ 
    ▀▀███ ████▄  ▀███████████  ███   ███   ███ ▀▀███▀▀▀          ███    ███ ███    ███ ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   
      ███    ███   ███    ███  ███   ███   ███   ███    █▄       ███    ███ ███    ███   ███    █▄  ▀███████████ 
      ███    ███   ███    ███  ███   ███   ███   ███    ███      ███    ███ ███    ███   ███    ███   ███    ███ 
      ████████▀    ███    █▀    ▀█   ███   █▀    ██████████       ▀██████▀   ▀██████▀    ██████████   ███    ███ 
                                                                                                      ███    ███ 
    
                                    Dein Gesamtvermögen betrug: ${formatter.format(player.Kontostand + player.Cash)}
                    
                    
                    
                    `)
};