<script module>
  import OptionsButton from '../buttons/OptionsButton.svelte';
  import Avatar from '../avatar/Avatar.svelte';

  import type { Snippet } from 'svelte';
  import handleDate from '../../lib/sanitizers/time.js';

  interface Props {
    children?: Snippet;
    date?: Date;
    textLeft?: string;
    textCenter?: string;
    textRight?: string;
    avatarUrl?: string;
    onClick?: VoidFunction;
    buttonActions?: { label: string; action?: VoidFunction }[];
  }
</script>

<script lang="ts">
  const defaultProps = {
    date: new Date(),
    textLeft: 'User',
    textCenter: 'Action',
    textRight: 'Description',
    description: 'Description',
    avatarUrl: '/images/avatar-pinaculo.png',
    onClick: () => {},
  };

  let {
    children,
    date = defaultProps.date,
    textLeft = defaultProps.textLeft,
    textCenter = defaultProps.textCenter,
    textRight = defaultProps.textRight,
    avatarUrl = defaultProps.avatarUrl,
    onClick = defaultProps.onClick,
    buttonActions = [{ label: 'Option 1' }, { label: 'Option 2' }],
  }: Props = $props();
</script>

<div class="flex flex-col gap-6">
  <div class="flex w-full items-center justify-between">
    <div class="flex w-full items-start gap-3">
      {#if avatarUrl}
        <Avatar src={avatarUrl} name={textLeft} size={24} />
      {/if}
      <div class="flex w-full flex-col gap-2.5">
        <div class="flex items-center gap-1">
          <p class="text-label-small text-strong-950">{textLeft}</p>
          <span class="text-paragraph-small text-sub-600">{textCenter}</span>
          <p class="text-label-small text-strong-950">{textRight}</p>
          <span class="text-paragraph-small text-neutral-300">・</span>
          <span class="text-paragraph-small text-soft-400">{handleDate.formatDistanceToNow(date)}</span>
        </div>
        {@render children?.()}
      </div>
      {#if buttonActions}
        <OptionsButton options={buttonActions} {onClick} />
      {/if}
    </div>
  </div>
</div>
