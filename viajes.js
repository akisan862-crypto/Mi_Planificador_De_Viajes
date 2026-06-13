// viajes.js

const COSTOS_DESTINO = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600,
    "Roma": 450,
    "Tokio": 800
};

const COSTOS_TRANSPORTE = {
    "Avión": 200,
    "Tren": 100,
    "Autobús": 50
};

const destinos = [];

const calcularCosto = (destino, transporte, personas = 1) => {
    const costoBase = COSTOS_DESTINO[destino] || 0;
    const costoTransporte = COSTOS_TRANSPORTE[transporte] || 0;
    const subtotal = costoBase + costoTransporte;
    let costoTotal = subtotal * personas;

    if (personas >= 3) {
        costoTotal *= 0.90; // 10% de descuento
    }
    return costoTotal;
};

const registrarDestino = (destino, fecha, transporte, personas = 1) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: calcularCosto(destino, transporte, personas)
    };
    destinos.push(nuevoViaje);
};

const mostrarItinerario = () => {
    console.log("============ MI ITINERARIO DE VIAJES ============");
    destinos.forEach(({ destino, fecha, transporte, personas, costo }) => {
        console.log(`Destino    : ${destino}`);
        console.log(`Fecha      : ${fecha}`);
        console.log(`Transporte : ${transporte}`);
        console.log(`Pasajeros  : ${personas}`);
        console.log(`Costo Final: $${costo.toFixed(2)}`);
        console.log("-------------------------------------------------");
    });
};

// Exportamos las funciones para que app.js las pueda usar
export { registrarDestino, mostrarItinerario };