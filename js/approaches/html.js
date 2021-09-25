function row(vals) {
    return '<div class="row">'
        + vals.map(val => `<div title="${val}">${val}</div>`).join('')
        + '</div>';
}

function table(data) {
    return data.map(vals => row(vals)).join('');
}

export default function render(data) {
    root.innerHTML = table(data);
}

