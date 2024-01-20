package com.example.task.service;

import com.example.task.model.TodoItem;
import com.example.task.repository.TodoItemRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoItemService {

    @Autowired
    private TodoItemRepository todoItemRepository;

    public List<TodoItem> getTodoItems() {
        List<TodoItem> todoItems = new ArrayList<>();
        todoItemRepository.findAll().forEach(todoItems::add);
        return todoItems;
    }

    public TodoItem createTodoItem(TodoItem item) {
        todoItemRepository.save(item);
        return item;
    }

    public void updateTodoItem(Long id, TodoItem todoItem) {
        TodoItem itemToUpdate = todoItemRepository.findById(id).orElseThrow();
        BeanUtils.copyProperties(todoItem, itemToUpdate, "id");
        todoItemRepository.save(itemToUpdate);
    }

    public void deleteTodoItem(Long id) {
        todoItemRepository.deleteById(id);
    }
}
