import { data, execute, root,HTML_LABEL } from './shared.js';

function rowHTML(row) {
    const cells = row.reduce((total, text) => total + `<div title="${text}">${text}</div>`, '');
    return `<div class="row">${cells}</div>`;
}

function tableHTML(rows) {
    return rows.reduce((total, row) => total + rowHTML(row), '');
}
 
export default function innerHTML( ) {
    return execute(HTML_LABEL, 
        () => root.innerHTML = tableHTML(data));
}

 
