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
    <MaterialApp>
        <input bind:value={newItem} bind:this={newItemForm} type="text" placeholder="Add a new task">

        <Button on:click={addToList}>Add</Button>
    <h5>{useName}'s task List: </h5>
   
    </MaterialApp>