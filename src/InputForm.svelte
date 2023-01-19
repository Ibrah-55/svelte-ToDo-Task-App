<script>
    import {toDoItems} from './store';
    import {onMount} from 'svelte'
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
    <input bind:value={newItem}  bind:this={newItemForm} type="text" placeholder="Add New Task">
    <button on:click={addToList}>Add</button>
    <h3>{useName}'s task List: </h3>
    