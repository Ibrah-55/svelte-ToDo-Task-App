<script>
    import {toDoItems} from './store';
    export let useName;
    let newItem = ''    
    function addToList(){
        $toDoItems = [...$toDoItems, {text: newItem, status:false}]
        newItem = '';
    }

    </script>
    <input bind:value={newItem} type="text" placeholder="Add New Task">
    <button on:click={addToList}>Add</button>
    <h3>{useName}'s task List: </h3>
    