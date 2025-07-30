<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: PageProps = $props();
</script>

<div class="scene">
    <h2 class="text-xl pl-8 pt-8">Light</h2>
    <div class="avatars">
        {#each data.users as user}
            <div
                class="avatar"
                style="background-color: {user.avatar.light.background};"
            >
                <span
                    class="avatar_text"
                    style="color: {user.avatar.light.color}"
                >
                    {user.name}
                </span>
            </div>
        {/each}
    </div>
</div>

<div class="scene dark">
    <h2 class="text-xl pl-8 pt-8 text-white">Dark</h2>
    <div class="avatars dark">
        {#each data.users as user}
            <div
                class="avatar"
                style="background-color: {user.avatar.dark.background};"
            >
                <span
                    class="avatar_text"
                    style="color: {user.avatar.dark.color}"
                >
                    {user.name}
                </span>
            </div>
        {/each}
    </div>
</div>

<style lang="css">
    .scene {
        background-color: white;
    }

    .scene.dark {
        background-color: black;
    }

    .avatars {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
        padding: 32px;
    }

    .avatar {
        width: 40px;
        height: 40px;

        display: flex;
        align-items: center;

        background-color: #eee; /* by default */
        border-radius: 999px;
    }

    .avatar_text {
        color: black; /* by default */
        width: 100%;
        text-align: center;
    }

    /*
    .markers {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
        padding: 16px;
    }

    .marker {
        width: 12px;
        height: 12px;
        background-color: #eee;
        border-radius: 999px;
    } 
    */
</style>
