class ToDo {
    static PRIORITY = {
        low: { order: 0, name: 'bassa', color: 'green' },
        medium: { order: 1, name: 'media', color: 'yellow' },
        high: { order: 2, name: 'alta', color: 'orange' },
        veryHigh: { order: 3, name: 'molto alta', color: 'red' }
    }

    constructor(name, priority = ToDo.PRIORITY.low, tags = []) {
        this.name = name;
        this._priority = priority;
        this.tags = tags;
        this._creationDate = new Date().getTime();
    }

    get creationDate() {
        const date = new Date(this._creationDate);
        return date;
    }

    set creationDate(date) {
        const timeStamp = this.getTime();
        this._creationDate = timeStamp;
    }

    get priority() {
        return this._priority;
    }

    set priority(newPriority) {
        this._priority = newPriority;
    }

    toString() {

        const toDoString = 'Nome: ' + this.name + '\n' +
            'Priorità: ' + this.priority.name + '\n' +
            'Tag: ' + this.tags + '\n' +
            'Data di creazione: ' + this.creationDate;
        return toDoString;
    }

    static getFormattedDate(date) {
        const dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ' ' + date.getMinutes()
        return dateString

    }
}


class DeadLineToDo extends ToDo {

    constructor(name, deadLineDate = null, priority = ToDo.PRIORITY.low, tags = []) {
        super(name, priority, tags);
        if (deadLineDate === null) {
            this._deadLineDate = this._creationDate + (1000 * 60 * 60 * 24);
            // const tomorrow = new Date(this._creationDate.getTime());
            // tomorrow.setDate.apply(tomorrow.getDate()+1);
            // this._deadLineDate = tomorrow.getTime();
        } else {
            this._deadLineDate = deadLineDate.getTime();
        }
    }

    get deadLineDate() {
        const date = new Date(this._deadLineDate);
        return date;
    }

    set deadLineDate(newDate) {
        const timeStamp = newDate.getTime();
        this._deadLineDate = timeStamp;
    }

    get priority() {
        const nowTimeStamp = new Date().getTime();
        const deltaTime = this._deadLineDate - nowTimeStamp;

        const day = 1000 * 60 * 60 * 24

        let deadlinePriority;

        if (deltaTime <= day) {
            deadlinePriority = ToDo.PRIORITY.veryHigh;
        } else if (deltaTime <= (2 * day)) {
            deadlinePriority = ToDo.PRIORITY.high;
        } else if (deltaTime <= (3 * day)) {
            deadlinePriority = ToDo.PRIORITY.medium
        } else {
            deadlinePriority = ToDo.PRIORITY.low
        }

        if (this._priority.order > deadlinePriority.order) {
            return this._priority;
        } else {
            return deadlinePriority;
        }
    }

    toString() {

        const toDoString = super.toString() + '\n' +
            'Data di scadenza: ' + this.deadLineDate;
        return toDoString;
    }
}





