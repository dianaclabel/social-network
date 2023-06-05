// importamos la funcion que vamos a testear
import { wallZone } from '../src/js/routes/components.js';

describe('renderizar feed', () => {
  it('debería ser una función', () => {
    wallZone();
  });
});
