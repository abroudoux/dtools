import { writable } from "svelte/store";

import type { Tool } from "$lib/utils/types";

export const selectedTool = writable<Tool | null>(null);
