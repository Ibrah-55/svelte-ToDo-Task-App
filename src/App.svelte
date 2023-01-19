<script>
import { prevent_default } from "svelte/internal";
import InputForm from "./InputForm.svelte";
import ToDo from "./toDo.svelte";
import {onMount} from 'svelte';

let name= false;

let fName= '';
let focusIn = null;

let lName= '';
$: uName = fName +" " + lName;

    onMount(() => {
        focusIn.focus()
    })
function handleSubmit(){
	if(fName && lName){
		name= true;
		}
	}
</script>

<main>
	{ #if name}
	<h1>Welcome, {fName}</h1>
<InputForm useName={uName}/>
<ToDo />
{:else}
<h1>Welcome to Todo Task</h1>
<h3>Enter Your Name: </h3>
<form on:submit|preventDefault={handleSubmit}>
<div>
	<input bind:value={fName} bind:this={focusIn} type="text" placeholder="First Name" required>
</div>
<div>
	<input bind:value={lName} type="text" placeholder="Last Name" required>
</div>
<button on:click={handleSubmit()}> Submit</button>
</form>
{/if}

</main>

<style>
	main {
        height:100%;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: aquamarine;
		
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>