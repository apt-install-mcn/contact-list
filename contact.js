let contactos = [];

function añadirContacto(contacto) {
    contactos.push(contacto);
}

function borrarContacto(nombre) {
    const indice = contactos.findIndex(contacto => contacto.nombres === nombre);
    if (indice !== -1) {
        contactos.splice(indice, 1);
    }
}

function imprimirContactos() {
    for (let contacto of contactos) {
        console.log("ID: " + contacto.id);
        console.log("Nombres: " + contacto.nombres);
        console.log("Apellidos: " + contacto.apellidos);
        console.log("Teléfono: " + contacto.teléfono);
        console.log("Ubicación:");
        console.log("  Ciudad: " + contacto.ubicaciones.ciudad);
        console.log("  Dirección: " + contacto.ubicaciones.dirección);
        console.log("------------");
    }
}

const nuevoContacto = {
    id: 1,
    nombres: "Moises",
    apellidos: "Carrillo",
    teléfono: "123-456-7890",
    ubicaciones: {
        ciudad: "Bogotá",
        dirección: "Calle Principal 123"
    }
};

añadirContacto(nuevoContacto);

const otroContacto = {
    id: 2,
    nombres: "Maria",
    apellidos: "Paula",
    teléfono: "987-654-3210",
    ubicaciones: {
        ciudad: "Medellín",
        dirección: "Avenida Secundaria 456"
    }
};

añadirContacto(otroContacto);

borrarContacto("Maria Paula");

imprimirContactos();
