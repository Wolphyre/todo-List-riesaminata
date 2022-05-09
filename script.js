const task1 = new ToDo('compra il tabacco', ToDo.PRIORITY.veryHigh, ['droga']);
const task2 = new ToDo('compra il pane', ToDo.PRIORITY.medium, ['spesa', 'casa']);
const task3 = new DeadLineToDo('fai gli auguri alla nonna', new Date(2022, 6, 9), ToDo.PRIORITY.low, ['affetti']);
const task4 = new DeadLineToDo('chiama pietro');

const todoList = [task1, task2, task3, task4];

function displayToDo() {
    const container = document.getElementById('todo-container')
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo-div')
        container.appendChild(todoDiv);

        const firstContainer = document.createElement('div')
        firstContainer.classList.add('first-container')
        todoDiv.appendChild(firstContainer)

        const nameAndtagsContainer = document.createElement('div')
        nameAndtagsContainer.classList.add('nt-container')
        firstContainer.appendChild(nameAndtagsContainer)

        const todoNameSpan = document.createElement('Span')
        const nameNode = document.createTextNode(todo.title)
        todoNameSpan.appendChild(nameNode)
        nameAndtagsContainer.appendChild(todoNameSpan)

        const tagContainer = document.createElement('div')
        tagContainer.classList.add('tagContainer')
        nameAndtagsContainer.appendChild(tagContainer)

        for (const tag of todo.tags) {

            const tagSpan = document.createElement('span')
            const tagNode = document.createTextNode(tag)
            tagSpan.appendChild(tagNode)
            tagContainer.appendChild(tagSpan)
        }

        const doneButton = document.createElement('button')

        const doneNode = document.createTextNode('completato')

        doneButton.appendChild(doneNode)

        firstContainer.appendChild(doneButton)

        //* date container

        const dateContainer = document.createElement('div')
        dateContainer.classList.add('date-container')
        todoDiv.appendChild(dateContainer)


        const startDateSpan = document.createElement('span')

        const startDateNode = document.createTextNode(todo.creationDate.toISOString())

        startDateSpan.appendChild(startDateNode)
        dateContainer.appendChild(startDateSpan)

        if (todo.deadLineDate) {
            const endDateSpan = document.createElement('span')

            const endDateNode = document.createTextNode(todo.deadLineDate.toISOString())

            endDateSpan.appendChild(endDateNode)
            dateContainer.appendChild(endDateSpan)

        }

    }
}

displayToDo();