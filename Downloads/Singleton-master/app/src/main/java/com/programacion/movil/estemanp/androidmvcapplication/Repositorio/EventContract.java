package com.programacion.movil.estemanp.androidmvcapplication.Repositorio;

import android.provider.BaseColumns;

/**
 * Created by User on 14/09/2017.
 */

public class EventContract {
    public static abstract class EventEntry implements BaseColumns {
        public static final String TABLE_NAME ="events";

        public static final String _ID = "_id";
        public static final String nombre = "nombre";
        public static final String tipo = "tipo";
        public static final String encargado = "encargado";
        public static final String ciudad = "lugar";
        public static final String fecha = "fecha";
        public static final String hora = "hora";
        public static final String requerimientos = "requerimiento";
        public static final String descripcion = "descripcion";
    }
}
