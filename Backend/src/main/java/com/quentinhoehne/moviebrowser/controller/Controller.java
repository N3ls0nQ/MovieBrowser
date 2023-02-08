package com.quentinhoehne.moviebrowser.controller;

import com.quentinhoehne.moviebrowser.Movie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;

@RestController

public class Controller {
    Connection connection;
    Statement statement;

    @GetMapping("/movies")
    public ArrayList<Movie> GetMovies(HttpServletResponse response){
        response.addHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
        ArrayList<Movie> results = new ArrayList();
        try{
            connection = DriverManager.getConnection("jdbc:mysql://quentinspi.ddns.net:3306/informatik", "root", "password");

            System.out.println("Connected to DB!");

            statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("SELECT * FROM movies");

            while(resultSet.next()){
                results.add(
                        new Movie(
                                resultSet.getString("name"),
                                resultSet.getInt("year"),
                                resultSet.getString("image"),
                                resultSet.getInt("id")
                        )
                );
            }
            return results;

        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/movie")
    public ArrayList<Movie> FilterSearchResult(HttpServletResponse response, @RequestParam String search) {
        response.addHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");

        ArrayList<Movie> filteredMovies = new ArrayList<>();

        String q = "SELECT * FROM movies WHERE name LIKE '%" + search + "%'";

        try {
            ResultSet results = statement.executeQuery(q);
            while(results.next()){
                filteredMovies.add(
                        new Movie(
                                results.getString("name"),
                                results.getInt("year"),
                                results.getString("image"),
                                results.getInt("id")
                        )
                );
            }
            return filteredMovies;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }
}
