export async function Peticion(url, metodo, datos) {
    try {
        const respuesta =  await fetch(url,{
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return {respuesta: await respuesta, status: await respuesta.ok}
    } catch (error) {
        return {respuesta: "Error en la comunicacion", status: false}
    }
   
}