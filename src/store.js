import { writable} from "svelte/store";


export const toDoItems = writable([
    {text: "Take Trash Out", status: false},
    {text: "Go shopping", status:  false},
    {text: "Deploy Application", status: false},
    {text: "Go bike Riding", status: false},

])
