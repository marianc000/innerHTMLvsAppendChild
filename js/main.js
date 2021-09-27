
import run from './benchmarking.js';
import documentFragment from './approaches/documentFragment.js';
import nodes from './approaches/nodes.js';
import html from './approaches/html.js';
import data from './data.js';
import clear from './clear.js';

const approaches = { documentFragment, nodes, html };

startBtn.onclick = () => {
    document.querySelector('.controls').remove();
    run();
}

const buttons = document.querySelectorAll('button[name]');
buttons.forEach(btn => btn.onclick = onClick);

function onClick() {
    buttons.forEach(btn => btn.className = (btn === this ? 'selected' : ''));
    console.log(this.name);
    clear().then(()=>approaches[this.name](data));
}
