package com.programacion.movil.estemanp.androidmvcapplication.View;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Toast;

import com.programacion.movil.estemanp.androidmvcapplication.Controller.ApplicationController;
import com.programacion.movil.estemanp.androidmvcapplication.Controller.EventoController;
import com.programacion.movil.estemanp.androidmvcapplication.Domain.User;
import com.programacion.movil.estemanp.androidmvcapplication.R;
import com.programacion.movil.estemanp.androidmvcapplication.View.Adapter.EventoAdapter;

import java.sql.SQLOutput;
import java.util.List;

public class LandingActivity extends AppCompatActivity {

    private RecyclerView recyclerStudents;
    private RecyclerView.LayoutManager mLayoutManager;
    private EventoAdapter eventoAdapter;
    private EventoController appController;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_landing);

        appController= new EventoController(getApplicationContext());

        recyclerStudents= (RecyclerView) findViewById(R.id.recyclerEventos);
        recyclerStudents.setHasFixedSize(true);
        mLayoutManager=new LinearLayoutManager(this);

        recyclerStudents.setLayoutManager(mLayoutManager);

        eventoAdapter = new EventoAdapter(this , appController.llenarEventos());
        recyclerStudents.setAdapter(eventoAdapter);
    }

}
