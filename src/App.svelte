<script>
import { prevent_default } from "svelte/internal";
import InputForm from "./InputForm.svelte";
import ToDo from "./toDo.svelte";
import {onMount} from 'svelte';
import { MaterialApp, Button,  Footer, Row, TextField, Switch,NavigationDrawer, List, ListItem, Avatar, Divider,Icon, AppBar, Menu,Card, CardText, CardActions} from 'svelte-materialify';
import { mdiHomeCity, mdiAccount, mdiAccountGroup, mdiMenu, mdiDotsVertical } from '@mdi/js';

let mini = true;
function mouseenter() {
  mini = false;
}
function mouseleave() {
  mini = true;
}
let theme = 'light';

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
	const values= ['light', 'dark']
	function toggleTheme(){
		if(theme==='light')theme = 'Dark'
		else theme = 'light';
	}
</script>
<body>
<MaterialApp theme={theme}>
	<AppBar>
		<div slot="icon">
		  <Button fab depressed>
			<Icon path={mdiMenu} />
		  </Button>
		</div>
		<span slot="title">Title</span>
		<div style="flex-grow:1" />
			<button on:click={toggleTheme}><Switch inset>{theme}</Switch></button>

		<Menu right>
		  <div slot="activator">
			<Button fab depressed>
			  <Icon path={mdiDotsVertical} />
			</Button>
		  </div>
		  <ListItem>Item 1</ListItem>
		  <ListItem>Item 2</ListItem>
		  <ListItem>Item 3</ListItem>
		</Menu>
	  </AppBar>
	  
	{ #if name}
	<h5>Welcome, {fName}</h5>
<InputForm useName={uName}/>
<ToDo />
{:else}
<h5>Welcome to Todo Task App</h5>
<h6>Enter Your Name: </h6>
<form on:submit|preventDefault={handleSubmit}>
	<Row>

<div>

	<input bind:value={fName} bind:this={focusIn}  type="text" placeholder="First Name" required />

</div>
<div>
	<input dense rounded filled bind:value={lName} type="text" placeholder="Last Name" required /> 

</div>
</Row>

<Button class="primary-color" block on:click={handleSubmit}>Go to List</Button>
</form>
{/if}

</MaterialApp>
</body>
<style>
	body{
		color: #333;
	    margin: 0;
	    padding: 8px;
		background-color:black;
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

</style>