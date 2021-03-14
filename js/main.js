import innerHTML from './innerHTML.js';
import appendDocumentFragment from './appendDocumentFragment.js';
import appendNodeManyTimes from './appendNodeManyTimes.js'
import { printResults, clean } from './shared.js';

function run() {
    const times = 10;
    let p = Promise.resolve(); // needed to chain measurements

    for (let i = 0; i < times; i++) {
        p = p.then(appendDocumentFragment).then(clean);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(appendNodeManyTimes).then(clean);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(innerHTML).then(clean);
    }

    p.then(clean).then(printResults);
}

document.querySelector('button').onclick = run;

