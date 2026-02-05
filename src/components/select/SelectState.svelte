<script lang="ts" module>
  import InputWrapper from '../../assets/wrappers/InputWrapper.svelte';
  import SelectBlock from '../inputs/SelectBlock.svelte';

  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import { onMount } from 'svelte';

  interface Props {
    value: string;
    icon?: IconName;
  }
</script>

<script lang="ts">
  let { value = $bindable() }: Props = $props();

  let cidades = $state([]);
  let loading = $state(false);

  const pegarCidadePorUF = async () => {
    try {
      loading = true;

      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`).then((response) =>
        response.json()
      );

      cidades = response
        .filter((obj: any, index: number, self: any[]) => self.findIndex((o: any) => o.nome === obj.nome) === index)
        .map((obj: any) => {
          return {
            label: obj.nome,
            value: obj.sigla,
          };
        })
        .sort((a: any, b: any) => a.label.localeCompare(b.label));

      loading = false;
    } catch (err) {
      loading = false;
    }
  };

  onMount(pegarCidadePorUF);
</script>

<InputWrapper label="Estado" required={true} {value}>
  <SelectBlock removableOnClick={false} options={cidades} bind:value placeholder="Selecione" {loading} />
</InputWrapper>
