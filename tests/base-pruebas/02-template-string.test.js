import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en el archivo 02-template-string.test.js", () => {

    test("Prueba en el método 'getSaludo' debe retornar 'Hola Ivan'", () => {

        const nombre = "Ivan";
        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola " + nombre);
    });

});