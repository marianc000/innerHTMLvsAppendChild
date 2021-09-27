
function input({ list, ...props }) {
    const el = document.createElement("input");
    list && el.setAttribute('list', list);
    Object.assign(el, props);
    return el;
}

function addInput() {
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
}

addInput();
// const divProps = { clazz: 'row', val: 'Hello' };
// const html = `<div class=${}>`