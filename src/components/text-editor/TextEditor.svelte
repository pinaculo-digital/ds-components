<script lang="ts" module>
  import Icon from '../../assets/icon/Icon.svelte';

  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  interface Format {
    command: string;
    icon: IconName;
  }
</script>

<script lang="ts">
  const formatOptions: Format[] = [
    { command: 'bold', icon: 'bold' },
    { command: 'italic', icon: 'italic' },
    { command: 'underline', icon: 'underline' },
    { command: 'strikeThrough', icon: 'strikethrough' },
    { command: 'insertUnorderedList', icon: 'list-unordered' },
    { command: 'insertOrderedList', icon: 'list-ordered' },
  ];
  const textOptions = [
    { label: 'Parágrafo', value: 'p' },
    { label: 'Header', value: 'h1' },
  ];

  let currentTag = $state('p');
  let content = $state('');

  function format(command: string, value = null) {
    document.execCommand(command, false, value!);
  }
  function changeBlockType(tag: string) {
    document.execCommand('formatBlock', false, tag);
    currentTag = tag;
  }
</script>

{#snippet divider()}
  <div class="bg-soft-200 h-4 w-0.5"></div>
{/snippet}

<div class="flex w-full flex-col gap-4">
  <div class="border-soft-200 flex w-fit items-center gap-1 rounded-lg border p-0.5">
    <select
      class="text-sub-600 text-sm font-medium"
      onchange={(e) => changeBlockType((e.target as HTMLSelectElement).value)}
      bind:value={currentTag}
    >
      {#each textOptions as { label, value }}
        <option class="text-sub-600 text-sm font-medium" {value}>{label}</option>
      {/each}
    </select>

    {@render divider()}

    <div class="">tamanho de fonte</div>

    {@render divider()}

    {#each formatOptions as { command, icon }}
      <button onclick={() => format(command)}>
        <Icon type={icon} />
      </button>
    {/each}

    {@render divider()}
  </div>
  <div
    class="editor border-soft-200 h-96 w-full rounded-xl border p-3 focus:outline-none"
    contenteditable="true"
    oninput={(e) => (content = (e.target as HTMLDivElement).innerHTML)}
    bind:innerHTML={content}
  ></div>
</div>
