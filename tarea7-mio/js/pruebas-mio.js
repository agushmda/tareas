function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === 'Este campo debe tener una seleccion', 
        'Validar ciudad no valido que la ciudad tenga una seleccion',
    );
}

probarValidarCiudad();

function probarValidarDescripcion(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripcionRegalo no valido que la descripcion no este vacia'
    );

    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 100 caracteres',
        'Validar descripcionRegalo no valido que la descripcion sea menor a 100 caracteres'
    );
}
probarValidarDescripcion();

Test