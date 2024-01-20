package com.example.task.controller;

import com.example.task.model.TodoItem;
import com.example.task.service.TodoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo/")
public class TodoItemController {

    @Autowired
    private TodoItemService toDoItemService;

    @GetMapping("")
    public ResponseEntity<List<TodoItem>> getTodoItems(){
        return ResponseEntity.ok(toDoItemService.getTodoItems());
    }

    @PostMapping("")
    public ResponseEntity<TodoItem> createTodoItem(@RequestBody TodoItem item){
        return ResponseEntity.ok(toDoItemService.createTodoItem(item));
    }


    @PutMapping("/{id}")
    public void updateTodoItem(@PathVariable Long id, @RequestBody TodoItem todoItem) {
        toDoItemService.updateTodoItem(id, todoItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        try{
            toDoItemService.deleteTodoItem(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

}
