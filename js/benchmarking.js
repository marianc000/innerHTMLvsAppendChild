import documentFragment from './approaches/documentFragment.js';
import nodes from './approaches/nodes.js';
import html from './approaches/html.js';

import showResults from './results.js';
import clear from './clear.js';
import {  execute } from './shared.js';

export default function run() {
    const times =1;
    let p = Promise.resolve().then(clear); 
 
    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('appendChild(DocumentFragment with all rows)', documentFragment)).then(clear);
    }
    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('appendChild() for each row', nodes)).then(clear);
    }
    for (let i = 0; i < times; i++) {
        p = p.then(() => execute('innerHTML', html)).then(clear);
    }

    p.then(showResults);
}



