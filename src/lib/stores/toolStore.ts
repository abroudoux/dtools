import { writable } from "svelte/store";

import type { Tool } from "$lib/utils/types";
import { tools } from "$lib/utils/data";

export const selectedTool = writable<Tool>(tools[0]);
