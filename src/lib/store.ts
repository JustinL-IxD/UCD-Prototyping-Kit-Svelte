import { writable } from 'svelte/store';

interface Answers {
    name: string;
}

export const answers = writable<Answers>({ name: '' });