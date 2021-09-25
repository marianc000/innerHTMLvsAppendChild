 

export function  row(vals) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';
    vals.forEach(val => {
        const cell = document.createElement("div");
        cell.title = val;
        cell.appendChild(document.createTextNode(val));
        rowDiv.appendChild(cell);
    });
    return rowDiv;
}

function table(data) {
    return data.map(vals => row(vals));
}
 
export default function render(data) {
    table(data).forEach(div => root.appendChild(div))
}
