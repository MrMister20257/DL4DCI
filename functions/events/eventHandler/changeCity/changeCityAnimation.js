const roadLength = (process.stdout.columns * 0.5) || 80;

function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
}

export default function changeCityAnimation() {
    for (let i = 0; i < roadLength - 20; i++) {
        console.clear();
        let spaces = " ".repeat(i);
        console.log(spaces + "     ______");
        console.log(spaces + "    /|_||_\\'__");
        console.log(spaces + "   (   _    _ _\\");
        console.log(spaces + "   ='-(_)--(_)-'");
        sleep(30);
    }
    console.clear();
}
