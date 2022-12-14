
//Se va a disponer de que internamente se va a consumir este producto
export interface Producto {
    desc: String;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A10',
    precio : 150
}

const tableta: Producto = {
    desc: 'Pab Air',
    precio : 350
}


export function calcularISV(productos: Producto[] ):[number, number] {
    let total = 0;

    productos.forEach(({precio})=>{
        total += precio;
    })
        return [total, total* 0.15]
}

const articulos= [telefono, tableta]

//const [total, isv] = calcularISV(articulos);

//console.log('Total', total)
//console.log('ISV', isv)