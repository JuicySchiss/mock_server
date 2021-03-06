const express = require('express')
const router = express.Router()
const GET_todos = require('../mock_jsons/GetTodosResponse')
const GET_todosID = require('../mock_jsons/GetTodosIDResponse')
const GET_todosLists = require('../mock_jsons/GetTodosListsResponse')
const GET_todosListsID = require('../mock_jsons/GetTodosListsIDResponse')

// GET /todos
router.get('/', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)

    res.send(GET_todos)
})

// GET /todos/{id}
router.get('/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)

    res.send(GET_todosID)
})

// GET /todoLists
router.get('/todoLists', (req,res)=>{
    cconsole.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)

    res.send(GET_todosLists)
})

// GET /todoLists/{id}
router.get('/todoLists/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)

    res.send(GET_todosListsID)
})

// POST /todos
router.post('/todos', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

// POST /todos/todoLists
router.post('/todoLists', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

// PUT /todos/{id}
router.put('/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

// PUT /todos/todoLists/{id}
router.put('/todoLists/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

// DELETE /todos/{id}
router.delete('/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

// DELETE /todos/todoLists/{id}
router.delete('/todoLists/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

module.exports = router