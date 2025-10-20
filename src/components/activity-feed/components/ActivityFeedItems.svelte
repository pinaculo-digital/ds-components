<script lang="ts">
  import { getColor, type ColorName } from '../../../lib/utils/colors/colors.utils'
  import { DataSanitizer } from '../../../lib/sanitizers/time'
  import type { Snippet } from 'svelte';
  import Avatar from '../../avatar/components/Avatar.svelte'

  interface Props {
    optionsMenu?: Snippet;
    children?: Snippet;
    date: Date;
    label: string;
    description: string;
    avatarUrl: string;
    bgColor?: ColorName;
  }

  let { optionsMenu, children, date, label, description, avatarUrl, bgColor = 'neutral-50' }: Props = $props();
</script>

<div class="flex items-center justify-between p-3" style="background-color: {getColor(bgColor).value};">
  <div class="flex items-start gap-3">
    <Avatar src={avatarUrl} name={label} />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <b class="text-label-small text-strong-950 gap-1">{label}</b>
        <div class="flex items-center gap-1">
          <span class="text-paragraph-x-small text-sub-600">{DataSanitizer.formatDistanceToNow(date)}</span>
          <span class="text-paragraph-x-small text-soft-400">∙</span>
          <span class="text-paragraph-x-small text-sub-600">{description}</span>
        </div>
      </div>
      {@render children?.()}
    </div>
  </div>
  {@render optionsMenu?.()}
</div>
