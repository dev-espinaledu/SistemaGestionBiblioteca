// Clase Libro
class Libro {
    constructor(titulo, autor, codigoLibro) {
        this.titulo = titulo;
        this.autor = autor;
        this.codigoLibro = codigoLibro;
        this.disponible = true;
    }
    prestar() {
        if (this.disponible) {
            this.disponible = false;
            return true;
        } else {
            return false;
        }
    }
    devolver() {
        this.disponible = true;
    }
}
// Clase Usuario
class Usuario {
    constructor(nombre, idUsuario) {
        this.nombre = nombre;
        this.idUsuario = idUsuario;
        this.librosPrestados = [];
    }
    agregarPrestamo(libro) {
        this.librosPrestados.push(libro);
    }
    eliminarPrestamo(libro) {
        this.librosPrestados = this.librosPrestados.filter(l => l.codigoLibro !== libro.codigoLibro);
    }
}
// Clase Prestamo
class Prestamo {
    constructor(libro, usuario, fechaPrestamo) {
        this.libro = libro;
        this.usuario = usuario;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = null;
    }
    registrarPrestamo() {
        if (this.libro.prestar()) {
            this.usuario.agregarPrestamo(this.libro);
            console.log(`Préstamo registrado: ${this.libro.titulo} a ${this.usuario.nombre}`);
        } else {
            console.log(`El libro ${this.libro.titulo} no está disponible.`);
        }
    }
    registrarDevolucion() {
        this.libro.devolver();
        this.usuario.eliminarPrestamo(this.libro);
        this.fechaDevolucion = new Date();
        console.log(`Devolución registrada: ${this.libro.titulo} por ${this.usuario.nombre}`);
    }
}
// Instancias
const libro1 = new Libro("50 Días en el Desierto", "Johan Muñoz", "123456");
const usuario1 = new Usuario("Stiven Salas", "001");

const prestamo1 = new Prestamo(libro1, usuario1, new Date());
prestamo1.registrarPrestamo();

const prestamo2 = new Prestamo(libro1, usuario1, new Date());
prestamo2.registrarPrestamo();

prestamo1.registrarDevolucion();
prestamo2.registrarPrestamo();
