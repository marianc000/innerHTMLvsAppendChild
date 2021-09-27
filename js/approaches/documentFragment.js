// documentFragment.js
import { row } from './nodes.js';

function rowsAsDocumentFragment(data) {
    const fragment = document.createDocumentFragment();
    data.forEach(vals => fragment.appendChild(row(vals)));
    return fragment;
}
 
export default function render(data) {
    root.appendChild(rowsAsDocumentFragment(data)); 
}
