<script>
    import {toDoItems} from './store';
    import {onMount} from 'svelte';
    import { MaterialApp, Button,Footer, Textarea } from 'svelte-materialify';

    export let useName;
    let newItem = ''   
    let newItemForm = null;
    
    onMount (() => {
        newItemForm.focus()
    })
    function addToList(){
        $toDoItems = [...$toDoItems, {text: newItem, status:false}]
        newItem = '';
    }

    </script>
    <body>
        <input bind:value={newItem} bind:this={newItemForm} type="text" placeholder="Add a new task" required>

        <button  class='button' on:click={addToList} required>Add</button>
   
    </body>
    <style>
        body{
            color: #333;
            margin: 0;
            padding: 8px;
            height: max-content;
            position: relative;
            width: 100%;
            height: 100%;
    
        }
        h5{
            text-align: center;
            color:red;
        }
        h6{
            color: yellowgreen;
        }
        .indigo{
            position: relative;
            bottom: 0;
            width: 100%;
            height: 2.5rem;
            left: 45%;
            clear: both;
        }
        input{
            margin-left: 1em;
            background-color: antiquewhite;
        }
        .button{
            color:green;
            border : none;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
        }
    
    </style>