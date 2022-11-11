// service centralisé qui permet l'appel à la base de donnée CRUD
// ici on emule une base de donnée
let tasks = [];

function create(task) {
    // en mettant task avant le spread operator (...tasks), les derniers saisies apparaissent en premier
    tasks = [task, ...tasks];
    console.log('task', tasks);
}

function read() {
    return tasks;
}

export default {
    // propriété create qui correspond à la méthode create ligne 5
    create : create,
    read : read,
}