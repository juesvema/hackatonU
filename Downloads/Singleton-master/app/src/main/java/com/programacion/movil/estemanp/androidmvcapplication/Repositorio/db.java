package com.programacion.movil.estemanp.androidmvcapplication.Repositorio;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

/**
 * Created by User on 14/09/2017.
 */

public class db extends SQLiteOpenHelper{

    public static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "Eventos.db";

    public db(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        sqLiteDatabase.execSQL("CREATE TABLE " + EventContract.EventEntry.TABLE_NAME + " ("
                + " _id integer primary key autoincrement,"
                + EventContract.EventEntry.nombre + " TEXT NOT NULL,"
                + EventContract.EventEntry.tipo + " TEXT NOT NULL,"
                + EventContract.EventEntry.encargado + " TEXT NOT NULL,"
                + EventContract.EventEntry.ciudad + " TEXT NOT NULL,"
                + EventContract.EventEntry.fecha + " TEXT NOT NULL,"
                + EventContract.EventEntry.hora + " TEXT NOT NULL,"
                + EventContract.EventEntry.requerimientos + " TEXT NOT NULL,"
                + EventContract.EventEntry.descripcion + " TEXT NOT NULL)"
        );
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {
        sqLiteDatabase.execSQL("DROP TABLE " + EventContract.EventEntry.TABLE_NAME );
        onCreate(sqLiteDatabase);
    }
}
