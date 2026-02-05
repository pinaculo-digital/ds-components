<script lang="ts" module>
  interface Props {
    value: string;
    onSearch: (v: string) => void;
    placeholder: string;
  }
</script>

<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  let { value = $bindable(), onSearch, placeholder }: Props = $props();
</script>

<div class="apply-class-focus flex max-w-[500px] grow items-center gap-4 rounded-[8px] px-6 py-2">
  <button>
    <Icon type="search-line" opticalSize={24} />
  </button>
  <input
    type="text"
    bind:value
    class="w-full outline-none"
    {placeholder}
    onkeydown={(e) => {
      if (e.key === 'Enter') {
        onSearch(value);
      }
    }}
  />
</div>
