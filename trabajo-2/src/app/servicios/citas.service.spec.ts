import { Injectable } from '@angular/core';
import { CapacitorSQLite } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private database: any;

  private citas = [
    { texto: 'El éxito consiste en obtener lo que se desea.', autor: 'Ralph Waldo Emerson' },
    { texto: 'Las personas no son recordadas por su número de fracasos.', autor: 'Thomas Edison' },
    { texto: 'Ningún viento es bueno para el barco que no sabe adónde va.', autor: 'Séneca' }
  ];

  async inicializarBaseDatos() {
    const { sqlite } = CapacitorSQLite;
    this.database = await sqlite.createConnection('citasDB', false, 'no-encryption', 1);
    await this.database.open();
    await this.database.execute(`
      CREATE TABLE IF NOT EXISTS citas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        texto TEXT NOT NULL,
        autor TEXT NOT NULL
      );
    `);
  }

  async agregarCita(cita: { texto: string; autor: string }) {
    const query = `INSERT INTO citas (texto, autor) VALUES (?, ?)`;
    await this.database.run(query, [cita.texto, cita.autor]);
  }

  async obtenerTodasLasCitas() {
    const query = `SELECT * FROM citas`;
    const resultado = await this.database.query(query);
    return resultado.values;
  }

  async eliminarCita(id: number) {
    const query = `DELETE FROM citas WHERE id = ?`;
    await this.database.run(query, [id]);
  }
}
