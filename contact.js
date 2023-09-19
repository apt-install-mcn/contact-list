// Define un array para almacenar los contactos
const contactos = [];

// Función para crear un contacto
function crearContacto(contacto) {
    // Genera un ID único (puedes usar una función para esto)
    const id = generarIDUnico();
    
    // Asigna el ID al contacto
    contacto.id = id;

    // Agrega el contacto al array de contactos
    contactos.push(contacto);
}

// Función para eliminar un contacto por su ID
function eliminarContacto(id) {
    // Encuentra el índice del contacto con el ID dado
    const indice = contactos.findIndex(contacto => contacto.id === id);
    
    // Si se encontró el contacto, elimínalo del array
    if (indice !== -1) {
        contactos.splice(indice, 1);
    }
}

// Ejemplo de uso
const nuevoContacto = {
    nombres: "Juan",
    apellidos: "Pérez",
    teléfono: "123-456-7890",
    ubicaciones: {
        ciudad: "Ciudad Ejemplo",
        dirección: "Calle Principal 123"
    }
};

crearContacto(nuevoContacto);
console.log(contactos); // Mostrará el array de contactos con el nuevo contacto

eliminarContacto(1); // Supongamos que 1 es el ID del contacto que deseas eliminar
console.log(contactos); // Mostrará el array de contactos sin el contacto eliminado
