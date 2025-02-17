import chalk from "chalk";

export default function loadingScreenStep3() {
    console.clear();
    console.log(`
    
                            ████████▄     ▄████████ ███    █▄     ▄██████▄   ▄█        ▄██████▄     ▄████████ ████████▄  
                            ███   ▀███   ███    ███ ███    ███   ███    ███ ███       ███    ███   ███    ███ ███   ▀███ 
                            ███    ███   ███    ███ ███    ███   ███    █▀  ███       ███    ███   ███    ███ ███    ███ 
                            ███    ███  ▄███▄▄▄▄██▀ ███    ███  ▄███        ███       ███    ███  ▄███▄▄▄▄██▀ ███    ███ 
                            ███    ███ ▀▀███▀▀▀▀▀   ███    ███ ▀▀███ ████▄  ███       ███    ███ ▀▀███▀▀▀▀▀   ███    ███ 
                            ███    ███ ▀███████████ ███    ███   ███    ███ ███       ███    ███ ▀███████████ ███    ███ 
                            ███   ▄███   ███    ███ ███    ███   ███    ███ ███▌    ▄ ███    ███   ███    ███ ███   ▄███ 
                            ████████▀    ███    ███ ████████▀    ████████▀  █████▄▄██  ▀██████▀    ███    ███ ████████▀  
                                        ███    ███                         ▀                      ███    ███            

    `);

    let i = 8000;

    while (i <= 12000) {
        process.stdout.write(`\rPolizisten werden geschmiert... (${i}/12000kb)`);
        
        const start = Date.now();
        while (Date.now() - start < 1);

        i++;
    }

    return console.log(chalk.green("\nSpiel gestartet!"));
};