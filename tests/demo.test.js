
describe('Pruebas en <DemoComponent />', () => {
    test('Esta es una prueba que no debe fallar', () => {
        // 1. Inicializacion
        const message1 = 'Hola mundo';

        // 2. Estuimmulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento
        expect(message1).toBe(message2);
    });
});