<script>
    import { toDoItems } from "./store.js"
    import { MaterialApp, Button, Footer} from 'svelte-materialify';

    const links = ['Home', 'About', 'Team', 'Services', 'Contact Us']
    function removeFromList(i) {
      $toDoItems.splice(i, 1)
      $toDoItems = $toDoItems
    }
  </script>
  <body>  
  {#each $toDoItems as item, index}
    <div class="toDoItems">
        <ul><li>
            <input bind:checked={item.status} type="checkbox">
            <span class:checked={item.status}>{item.text}</span>

        </li>
    </ul>
      <Button rounded class="primary-color" on:click={() => removeFromList(index)}>Delete</Button>

      <br/>
    </div>
  {/each} 

  </body>
  
  <style>
    .checked {
        text-decoration: line-through;
    }
    .toDoItems {
        text-align: left;
    }
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
	span{
		color: yellowgreen;
	}
	input{
		margin-left: 1em;
		background-color: antiquewhite;
	}

  </style>
  