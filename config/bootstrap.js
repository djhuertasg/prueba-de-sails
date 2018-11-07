/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Uncomment the following to creating Temas and subtemas
//   await Tema.createEach([

//     {tema: 'C',definicion: '1. Estructura del sistema de salud colombiano'},
//     {tema: 'C',definicion: '2. Medidas preventivas y acciones de responsabilidad civil, penal o disciplinarias.'},
//     {tema: 'C',definicion: '3. Aspectos relacionados con gestión institucional'},
//     {tema: 'C',definicion: '4. Aspectos generales interpretación de estados financieros'},
//     {tema: 'I',definicion: '5. Obligaciones de reporte de información del interventor'},
//     {tema: 'I',definicion: '6. Actos y contratos'},
//     {tema: 'I',definicion: '7. Derechos de los afiliados, beneficiarios,usuarios'},
//     {tema: 'I',definicion: '8. Viabilidad económica y financiera de las empresas bajo vigilancia de SNS.'},
//     {tema: 'I',definicion: '9. Medidas especiales de la SNS y funciones del interventor en cada una de ellas'},
//     {tema: 'L',definicion: '10. Obligaciones de reporte de información del liquidador'},
//     {tema: 'L',definicion: '11. Actos y contratos'},
//     {tema: 'L',definicion: '12. Derechos de los afiliados, beneficiarios,usuarios'},
//     {tema:'L', definicion:'13. Componente financiero del proceso de liquidación'},
//     {tema: 'L',definicion: '14. Medidas especiales de la SNS y funciones del liquidador en cada una de ellas'},
//     {tema: 'L',definicion: '15. Gestión documental en procesos de liquidación'},
//     {tema: 'T',definicion: '16. Obligaciones de reporte de información del contalor'},
//     {tema: 'T',definicion: '17. Derechos de los afiliados, beneficiarios,usuarios y acreedores'},
//     {tema: 'T',definicion: '18. Medidas especiales de la SNS y funciones del contralor en cada una de ellas'},
//     {tema: 'T',definicion: '19. Seguimiento de expedientes'},
//     {tema: 'T',definicion: '20. Revisoría fiscal'}
//   ]);

//   await Subtema.createEach([
//     { definicion: '1.1 Reglamento, diferencias y particularidades de las IPS y EPS.', relation: 1 },
// { definicion: '1.2 Funciones de vigilancia, inspección y control en salud(Super, intendencia, Secretaría, Ministerio).', relation: 1 },
// { definicion: '1.3 Servicios del POS y no POS.', relation: 1 },
// { definicion: '1.4 Funciones del FOSYGA.', relation: 1 },
// { definicion: '1.5 Niveles del sistema a nivel nacional / territorial / municipal.', relation: 1 },
// { definicion: '1.6 Particularidades del sistema privado en prestación del servicio de salud.', relation: 1 },
// { definicion: '1.7 Niveles de complejidad de las IPS y centros hospitalarios(Categoría 1, 2 y 3).', relation: 1 },
// { definicion: '1.8 Funciones de la SNS para las medidas especiales.', relation: 1 },
// { definicion: '2.1 Medidas preventivas en casos de toma de posesión o intervención forzosa administrativa.', relation: 2 },
// { definicion: '2.2 Perjuicios a la entidad objeto de medida.', relation: 2 },
// { definicion: '2.3 Medidas disciplinarias.', relation: 2 },
// { definicion: '3.1 Representante legal.', relation: 3 },
// { definicion: '3.2 Tipo de sociedad EPS.', relation: 3 },
// { definicion: '3.3 Conocimientos del código de comercio.', relation: 3 },
// { definicion: '3.4 Certificaciones / habilitación servicios.', relation: 3 },
// { definicion: '3.5 Gestión institucional relacionados con las IPS y EPS.', relation: 3 },
// { definicion: '3.6 Relaciones Laborales.', relation: 3 },
// { definicion: '3.7 Medidas cautelares en procesos judiciales(embargos, inmuebles).', relation: 3 },
// { definicion: '4.1 Indicadores financieros(relación entre pasivos, activos y patrimonio)', relation: 4 },
// { definicion: '4.2 Interpretación de ingresos y egresos.', relation: 4 },
// { definicion: '4.3 Interpretación de estados financieros.', relation: 4 },

// { definicion: '5.1 Informes de gestión - Rendición de cuentas.', relation: 5 },
// { definicion: '5.2 Reportes de Información financiera.', relation: 5 },
// { definicion: '5.3 Planes de trabajo.', relation: 5 },
// { definicion: '5.4 Cronograma de actividades.', relation: 5 },
// { definicion: '6.1 Actos administrativos(Ejecución, evaluación y seguimiento)', relation: 6},
// { definicion: '6.2 Elaboración y ejecución de procesos contractuales con personas naturales y jurídicas.', relation: 6},
// { definicion: '6.3 Proveedores y acreedores.', relation: 6},
// { definicion: '7.1 Salud como derecho fundamental.', relation: 7},
// { definicion: '7.2 Continuidad en la garantía de los derechos de salud de los usuarios.', relation: 7},
// { definicion: '7.3 Aseguramiento de la salud.', relation: 7},
// { definicion: '7.4 Intervención de EPS e IPS.', relation: 7},
// { definicion: '8.1 Custodia de activos.', relation: 8},
// { definicion: '8.2 Mantenimiento de infraestructura y equipos.', relation: 8},
// { definicion: '8.3 Financiación, contabilidad y registro.', relation: 8},
// { definicion: '8.4 Gestión de inventarios.', relation: 8},
// { definicion: '9.1 Intervención Forzosa Administrativa para Administrar.', relation: 9},
// { definicion: '9.2 Intervención Forzosa Administrativa para Liquidar.', relation: 9},
// { definicion: '9.3 Toma de decisiones sobre liquidación.', relation: 9},
// { definicion: '9.4 Operación de las entidades objeto de medida.', relation: 9},

// { definicion: '10.1 Informes gestión - Rendición de cuentas.', relation: 10},
// { definicion: '10.2 Reportes de Información financiera de liquidación.', relation: 10},
// { definicion: '10.3 Planes de trabajo en liquidación.', relation: 10},
// { definicion: '10.4 Cronograma de actividades para liquidación.', relation: 10},
// { definicion: '11.1 Actos administrativos(Ejecución, evaluación y seguimiento)', relation: 11},
// { definicion: '11.2 Elaboración, ejecución y liquidación de contratos con personas naturales y jurídicas.', relation: 11},
// { definicion: '11.3 Proveedores y acreedores.', relation: 11},
// { definicion: '11.4 Contrato de mandato.', relation: 11},
// { definicion: '11.5 Conmutación pensional.', relation: 11},
// { definicion: '12.1 Salud como derecho fundamental.', relation: 12},
// { definicion: '12.2 Continuidad en la garantía de los derechos de salud de los usuarios.', relation: 12},
// { definicion: '12.3 Aseguramiento de la salud.', relation: 12},
// { definicion: '12.4 Liquidación de EPS e IPS.', relation: 12},
// { definicion: '13.1 Ejecución de activos pasivos.', relation: 13},
// { definicion: '13.2 Proceso de liquidación de la entidad pública.', relation: 13},
// { definicion: '13.3 Liquidación de la sociedad.', relation: 13},
// { definicion: '13.4 Control y custodia de activos.', relation: 13},
// { definicion: '13.5 Mantenimiento y custodia de la contabilidad y registros.', relation: 13},
// { definicion: '13.6 Graduación y calificación de acreencias.', relation: 13},
// { definicion: '14.1 Intervención Forzosa Administrativa para Liquidar.', relation: 14},
// { definicion: '15.1 Manejo de historias clínicas.', relation: 15},
// { definicion: '15.2 Manejo de archivo.', relation: 15},
// { definicion: '15.3 Otros archivos generales en procesos de liquidación.', relation: 15},

// { definicion: '16.1 Control sobre informes de gestión.', relation: 16},
// { definicion: '16.2 Control sobre Planes de trabajo.', relation: 16},
// { definicion: '16.3 Control sobre Cronograma de actividades.', relation: 16},
// { definicion: '16.4 Control sobre Indicadores de gestión.', relation: 16},
// { definicion: '17.1 Control sobre la continuidad en la garantía de los derechos de salud de los usuarios.', relation: 17},
// { definicion: '17.2 Control sobre el Aseguramiento del servicio de salud.', relation: 17},
// { definicion: '17.3 Salud como derecho fundamental.', relation: 17},
// { definicion: '18.1 Control sobre la Intervención Forzosa Administrativa para Administrar.', relation: 18},
// { definicion: '18.2 Control sobre Intervención Forzosa Administrativa para Liquidar.', relation: 18},
// { definicion: '18.3 Control sobre Operación de las entidades objeto de medida.', relation: 18},
// { definicion: '18.4 Vigilancia especial.', relation: 18},
// { definicion: '19.1 Custodia de los expedientes', relation: 19},
// { definicion: '19.2 Puesta de expedientes a disposición de los interesados', relation: 19},
// { definicion: '19.3 Control sobre el contenido de los expedientes', relation: 19},
// { definicion: '19.4 Vigilancia de los expedientes.', relation: 19},
// { definicion: '20.1 Inhabilidades del Revisor Fiscal.', relation: 20},
// { definicion: '20.2 Funciones del Revisor Fiscal.', relation: 20},
// { definicion: '20.3 Contenido de los informes del Revisor Fiscal; Estados Financieros.', relation: 20},
// { definicion: '20.4 Contenido del Informe del Revisor Fiscal presentado a la Asamblea o Junta de Socios.', relation: 20},
// { definicion: '20.5 Responsabilidad del Revisor Fiscal.', relation: 20},
// { definicion: '20.6 Deberes de intervención del Revisor Fiscal.', relation: 20},
// { definicion: '20.7 Reserva del Revisor Fiscal en el ejercicio de sus funciones.', relation: 20},
// { definicion: '20.8 Requisitos y restricciones para ejercer el cargo de Revisor Fiscal.', relation: 20},
// { definicion: '20.9 Régimen disciplinario frente a la junta central de contadores.', relation: 20},
// { definicion: '20.10 Deberes profesionales.', relation: 20},
// ]);
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
