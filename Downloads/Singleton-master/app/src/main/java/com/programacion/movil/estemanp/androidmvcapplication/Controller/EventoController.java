package com.programacion.movil.estemanp.androidmvcapplication.Controller;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.programacion.movil.estemanp.androidmvcapplication.Domain.Evento;
import com.programacion.movil.estemanp.androidmvcapplication.Repositorio.EventContract;
import com.programacion.movil.estemanp.androidmvcapplication.Repositorio.db;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 14/09/2017.
 */

public class EventoController extends db {

    public EventoController(Context context) {
        super(context);
    }

    public boolean create(Evento event) {

        SQLiteDatabase db = this.getWritableDatabase();
        boolean isCreate = db.insert(EventContract.EventEntry.TABLE_NAME, null, event.toContentValues()) > 0;
        db.close();
        return isCreate;
    }

    public Cursor getEventos() {
        return getReadableDatabase()
                .query(
                        EventContract.EventEntry.TABLE_NAME, null, null, null, null, null, null);
    }

    public boolean dropTable(){
        SQLiteDatabase db = this.getWritableDatabase();
        onUpgrade(db,1,2);
        return true;
    }

    public List<Evento> llenarEventos (){
        List<Evento> listEventos = new ArrayList<>();
        Cursor cursor = getEventos();
        cursor.moveToFirst();
        Evento userAux;
        while (!cursor.isAfterLast()) {
            userAux = new Evento(cursor);
            listEventos.add(userAux);
            cursor.moveToNext();
        }
        for (Evento event : listEventos) {
            System.out.println("event: " + event.get_id());
        }
        return listEventos;
    }
}
