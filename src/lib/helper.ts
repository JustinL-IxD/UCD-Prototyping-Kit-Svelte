import { goto } from '$app/navigation';

export function continueLocation(destination: string) {
	goto(`/${destination}`);
};
