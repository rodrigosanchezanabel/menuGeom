import { menuPpal } from './vista/menuPpal'
import { leerTeclado } from './vista/entradaTeclado'
const main = async () => {
    let l: number
    do {
        l = await menuPpal()
        switch(l){
            case 1:
                console.log("Estoy calculando el area del rombo")
                await areaRombo()
                break
            case 2:
                console.log("Estoy calculando el perimetro del rombo")
                let l1: number
                l1 = parseInt( await leerTeclado('Introduce el valor del lado del rombo en cm'))
                console.log(`El perímetro del rombo es ${l1*4}`)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (l != 0)
}
const areaRombo = async () => {
    let d1: number
    let d2: number
    let l1: number
    d1 =  parseInt( await leerTeclado('Introduce el valor de la diagonal 1 del rombo en cm')) 
    d2 =  parseInt( await leerTeclado('Introduce el valor de la diagonal 2 del rombo en cm'))
    console.log(`El area del rombo es ${(d1 * d2)/2} cm2 `)
}

const perimetroRombo = async () => {
    let l1: number
    l1 = parseInt( await leerTeclado('Introduce el valor del lado del rombo en cm'))
    console.log(`El perímetro del rombo es ${l1*4}`)

}
main()