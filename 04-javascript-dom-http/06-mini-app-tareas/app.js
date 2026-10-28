const STORAGE_KEY = "frontend-practice-tasks";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task");
const pendingCount = document.getElementById("pending-count");
const taskList = document.getElementById("task-list");

const filterButtons = document.querySelectorAll("[data-filter]");

//Estado de la aplicación.
let tasks = loadTasks();
let currentFilter = "all";

//Se guarda la lista de tareas en el navegador.
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

//Se recuperan las tareas guardadas al abrir o recargar la página.
function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error("Error:", error.message);
      return [];
    }
  } else {
    return [];
  }
}

function render() {
  //Se actualiza contador de pendientes, las que completed es false.
  const pendingTasks = tasks.filter((task) => !task.completed);
  pendingCount.textContent = pendingTasks.length;
  //Se decide que tarea mostrar según el filtro.
  const visibleTasks = tasks.filter((task) => {
    if (currentFilter === "pending") {
      return !task.completed;
    }

    if (currentFilter === "completed") {
      return task.completed;
    }
    return true;
  });

  //Se limpia lista actual y dibujan tareas visibles.
  taskList.textContent = "";
  visibleTasks.forEach((task) => {
    const li = document.createElement("li");

    //Casilla para marcar o desmarcar como completa
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      toggleTask(task.id);
    });

    //Texto con el título de la tarea.
    const span = document.createElement("span");
    span.textContent = ` ${task.title} `;

    //Botón para eliminar la tarea.
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    //Se mantienen los 3 elementos dentro del <li> y éste dentro del <ul>.
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

//Se crea tarea.
function addTask(title) {
  const newTask = {
    id: crypto.randomUUID(),
    title: title,
    completed: false,
  };
  //Se añade la tarea al final de la lista.
  tasks.push(newTask);
  saveTasks();
  render();
}

//Se marca o desmarca como completada.
function toggleTask(id) {
  tasks.forEach((task) => {
    if (task.id === id) {
      //Se invierte su valor.
      task.completed = !task.completed;
    }
  });
  saveTasks();
  render();
}

//Se elimina la tarea.
function deleteTask(id) {
  //Nos quedamos con las tareas con ID distinto al que se quiere borrar.
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  render();
}

//Al enviar el formulario, evita la recarga, añade el título si no está vacío y limpia el campo.
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskInput.value.trim();
  if (title) {
    addTask(title);
    taskInput.value = "";
  }
});

//Se registra un listener por cada botón.
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    render();
  });
});

//Se muestran tareas recuperadas de "localStorage".
render();
