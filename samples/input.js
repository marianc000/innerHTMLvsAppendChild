
function input({ list, ...props }) {
    const el = document.createElement("input");
    list && el.setAttribute('list', list);
    Object.assign(el, props);
    return el;
}

root.appendChild(input({
    value: 'MyValue',
    placeholder: 'MyPlaceholder',
    name: 'MyName',
    title: 'MyTitle',
    className: 'MyClass',
    list: 'browsers',
    type: 'search',
    pattern: '[a-z]+',
    required: true,
    autocomplete: 'off',
}));

root.appendChild(input({
    name: 'MyName',
    title: 'MyTitle',
    className: 'MyClass',
    type: 'checkbox',
    checked: true
}))
