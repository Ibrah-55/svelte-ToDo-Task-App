import { writable} from "svelte/store";


export const toDoItems = writable([
    {text: "Take Trash Out", status: true},
    {text: "Go shopping", status:  false},
    {text: "Deploy Application", status: true},
    {text: "Go bike Riding", status: false},

])
