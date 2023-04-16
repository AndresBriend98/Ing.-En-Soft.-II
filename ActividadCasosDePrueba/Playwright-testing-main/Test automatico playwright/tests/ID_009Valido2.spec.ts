import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: {
      mode: 'on-first-retry', 
      size: { width: 640, height: 480 }
    }
  }
});

test('Debe solicitar constancia de parcial', async ({page}) => {
  // Navegar a la página de inicio de sesión
  await page.goto('https://sistemacuenca.ucp.edu.ar/alumnosnotas/');
  
  // Rellenar el campo de usuario y contraseña
  await page.getByPlaceholder('Usuario').fill('41153945');
  await page.getByPlaceholder('Contraseña').fill('3230');
  
  // Hacer clic en el botón de inicio de sesión
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verificar que se haya iniciado sesión correctamente
  await expect(page).toHaveURL('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/Inicio.aspx');

  // Cerrar el mensaje emergente si existe
  await page.getByRole('button', { name: 'close' }).click();

  // Hacer clic en el enlace "Trámites"
  await page.getByText('Trámites', { exact: true }).click();
  
  // Hacer clic en el enlace "Solicitar Trámite"
  await page.getByRole('link', { name: 'Solicitar Trámite' }).click();
  
  // Verificar que se haya navegado a la página correcta
  await expect(page).toHaveURL('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/SolicitarTramite.aspx?Sel=5')
  
  // Hacer clic en el enlace "Constancia de examen final/parcial"
  await page.getByRole('link', { name: 'Constancia de examen final/parcial.' }).click();
  
  // Verificar que se haya navegado a la página correcta
  await expect(page).toHaveURL('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/ConstanciaExamen.aspx?Sel=3')
  
  // Hacer clic en el campo de selección del tipo de examen
  await page.locator('#ctl00_ContentPlaceHolder1_cboTipoExamen_Input').click();
  
  // Hacer clic en la opción "parcial" en el menú desplegable
  await page.getByText('parcial', { exact: true }).click();
  // Verificar que se haya seleccionado la opción "parcial" en el menú desplegable
  await expect(page.locator('#ctl00_ContentPlaceHolder1_cboTipoExamen_Input')).toHaveValue('parcial');

  // Hacer clic en el botón de selección de fecha y materia
  await page.getByRole('row', { name: 'Fecha | Materia: combobox', exact: true }).getByText('select').click();
  
  // Seleccionar la fecha y materia específica
  await page.getByText('30/03/2023 | Economía y Costos').click();
  //Verificar que se haya seleccionado la fecha y materia específica
  await expect(page.locator('#ctl00_ContentPlaceHolder1_cboFechaMateria_Input')).toHaveValue('30/03/2023 | Economía y Costos');

  // Hacer clic en el botón de selección de destinatario
  await page.getByRole('row', { name: 'Dirigido a: combobox Solicitar', exact: true }).getByText('select').click();
  
  // Seleccionar el destinatario específico
  await page.getByText('A QUIEN CORRESPONDA', { exact: true }).click();
  //Verificar que se haya seleccionado el destinatario específico
  await expect(page.locator('#ctl00_ContentPlaceHolder1_cboDestinatario_Input')).toHaveValue('A QUIEN CORRESPONDA');
  
  // Hacer clic en el botón "Solicitar"
  await page.getByRole('button', { name: 'Solicitar' }).click();
  // Verificar que se hizo clic en el botón "Solicitar"
  await expect(page.locator('#ctl00_ContentPlaceHolder1_btnSolicitar')).toBeVisible();

  // Verificar que aparezca el mensaje esperado
  await expect(page.getByText('Trámite solicitado correctamente. Puede verificar y descargar desde la opción Constancias y Certificados cuando esté firmada.')).toBeVisible();
});