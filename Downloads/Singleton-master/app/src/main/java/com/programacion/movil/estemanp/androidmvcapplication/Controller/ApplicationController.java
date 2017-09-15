package com.programacion.movil.estemanp.androidmvcapplication.Controller;

import android.app.Application;


import com.programacion.movil.estemanp.androidmvcapplication.Domain.User;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by estemanp on 19/08/16.
 */
public class ApplicationController {

    private static ApplicationController _instance;
    public static ApplicationController getInstance(){
        if(_instance==null){
            _instance = new ApplicationController();
        }
        return _instance;
    }
    private List<User> users;

    public  ApplicationController(){
        users= new ArrayList<>();
        fillDateBases();
    }

    private void fillDateBases(){
        //Add users
        fillUsers();
    }

    private void fillUsers(){
        User person1=new User("Christopher","Vargas","christopher","1234",24, "Admin");
        users.add(person1);

        User person2=new User("Juan","Ramirez","juan","1234",16, "User");
        users.add(person2);

        User person3=new User("Juanes","Velasquez","juesvema","1234",21, "Admin");
        users.add(person3);
    }

    public boolean isValidUser(String username, String password, String rol){
        Boolean resp=false;
        for (User person:users) {
            if(username.equals(person.getUserName())){
                if(password.equals(person.getPassword())){
                    if(rol.equals(person.getRol())) {
                        resp = true;
                    }
                }
            }
        }
        return resp;
    }
}
