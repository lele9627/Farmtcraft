const generateFields = function ()
{
for (let i = 0; i < 25; i++) {
     const fieldPart = document.createElement('field-part');
     fieldPart.classList.add('grass');
     const parcelles =  document.querySelector("field-parts")
     parcelles.appendChild(fieldPart);
    }
}
window.addEventListener("load", generateFields);

const attachToolsEvent = function () {
    const tools = document.querySelectorAll('tool');
    tools.forEach(tool => {
        tool.addEventListener('click', () => {
            tools.forEach(t => t.classList.remove('active'));
            tool.classList.add('active');
        });
    });
};
window.addEventListener("load", attachToolsEvent);


const action = function () {
    const fieldParts = document.querySelectorAll('field-part');
    fieldParts.forEach(fieldPart => {
        fieldPart.addEventListener('click', () => {
            const activeTool = document.querySelector('tool.active');
            if (activeTool && activeTool.id === 'tool-hoe') {
                fieldPart.classList.remove('grass');
                fieldPart.classList.add('farmland');
            }
            if (activeTool && activeTool.id === 'tool-water' && fieldPart.classList.contains('farmland')) {

                fieldPart.classList.add('hydrated');
            }
        });
    });
};
window.addEventListener("load", action);



