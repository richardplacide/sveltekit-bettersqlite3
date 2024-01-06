<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h2 class="is-size-2">Albums</h2>
<hr>

    <table class="table">
        <thead>
            <tr>
                <th>Artist</th>
                <th>Album</th>
                
            </tr>
        </thead>
        <tbody>
            {#each data.albums as album}
                <tr>
                    <td>{album.artistName}</td>
                    <td><a href="/album/{album.albumId}">{album.albumTitle}</a></td>
                    
                </tr>
            {/each}
        </tbody>
    </table>