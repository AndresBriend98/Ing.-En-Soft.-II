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
test('has title', async ({page}) => {

  await page.goto('https://sistemacuenca.ucp.edu.ar/alumnosnotas/');
  
  await page.getByPlaceholder('Usuario').fill('44198040');
  await page.getByPlaceholder('Contraseña').fill('covid2020');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/Inicio.aspx');

  await page.getByRole('button', { name: 'close' }).click();
  await page.getByText('Cursado').click();
  await page.getByRole('link', { name: 'Link a Clases y Registro de Asistencia' }).click();

  await expect(page).toHaveURL('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/AsistenciaVirtual.aspx?Sel=1');
  await page.getByRole('row', { name: 'Ingeniería de Software II - A Entrar Submit', exact: true }).getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Su asistencia ya fue registrada el 10 Abr 2023 21:18:40:000')).toBeVisible();

  await page.getByRole('button', { name: 'Aceptar' }).click();

});
