let empleados = []

function Empleado(Nombre, Apellido, FechaNacimiento, Cargo) {
    this.nombre = Nombre;
    this.apellido = Apellido;
    this.fechaNacimiento = FechaNacimiento;
    this.cargo = Cargo;
}

function Agregar_empleado() {
    let nombre = document.getElementById('Nombre').value;
    let apellido = document.getElementById('Apellido').value;
    let fechaNacimiento = document.getElementById('FechaNacimiento').value;
    let cargo = document.getElementById('Cargo').value;

    let nuevoempleado = new Empleado(nombre, apellido, fechaNacimiento, cargo)
    empleados.push(nuevoempleado)
};

function Mostrar_empleado(){
    let lista = 'lista de empleados \n'
    for (let i in empleados){
        lista += `Nombre: ${empleados[i].nombre} `;
        lista += `Apellido: ${empleados[i].apellido} `;
        lista += `Fecha de Nacimiento: ${empleados[i].fechaNacimiento} `;
        lista += `Cargo: ${empleados[i].cargo} \n`;
    }
    alert(lista)
}