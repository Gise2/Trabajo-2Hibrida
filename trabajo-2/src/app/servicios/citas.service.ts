import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  private sqliteConnection: SQLiteConnection | null = null;
  private database: SQLiteDBConnection | null = null;

  async inicializarBaseDatos() {
    if (!this.sqliteConnection) {
      this.sqliteConnection = new SQLiteConnection(CapacitorSQLite);
    }

    try {
      this.database = await this.sqliteConnection.createConnection('citasDB', false, 'no-encryption', 1);
      await this.database.open();
      await this.database.execute(`
        CREATE TABLE IF NOT EXISTS citas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          texto TEXT NOT NULL,
          autor TEXT NOT NULL
        );
      `);
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }

  async agregarCita(cita: { texto: string; autor: string }) {
    const query = `INSERT INTO citas (texto, autor) VALUES (?, ?)`;
    await this.database?.run(query, [cita.texto, cita.autor]);
  }

  async obtenerTodasLasCitas() {
    const query = `SELECT * FROM citas`;
    const resultado = await this.database?.query(query);
    return resultado?.values || [];
  }

  async eliminarCita(id: number) {
    const query = `DELETE FROM citas WHERE id = ?`;
    await this.database?.run(query, [id]);
  }
}
