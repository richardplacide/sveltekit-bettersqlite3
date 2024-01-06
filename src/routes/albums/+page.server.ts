import { getAlbums } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (() => {
    const albums = getAlbums();

    return {
        albums
    };
}) satisfies PageServerLoad;