import { data, DOCUMENT_FRAGMENT_LABEL, execute,root } from './shared.js';

function rowDOM(row) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';
    row.forEach(text => {
        const cell = document.createElement("div");
        cell.title = text;
        cell.appendChild(document.createTextNode(text));
        rowDiv.appendChild(cell);
    });
    return rowDiv;
}
 

function tableAsDocumentFragment(rows) {
    const fragment = document.createDocumentFragment();
    rows.forEach(row => fragment.appendChild(rowDOM(row)));
    return fragment;
}

export default function appendDocumentFragment() {
    return execute(DOCUMENT_FRAGMENT_LABEL, () => root.appendChild(tableAsDocumentFragment(data)));
}
 
