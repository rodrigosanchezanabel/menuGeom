import { leerTeclado } from '../vista/entradaTeclado'

export const menuPpal = async () => {
    let n: number
    console.log('\n')
    console.log('1.- area')
    console.log('2.- perimetro')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
} 