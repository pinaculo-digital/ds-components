<script lang="ts" module>
  import InputWrapper from '../../assets/wrappers/InputWrapper.svelte';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import SelectBlock from '../inputs/SelectBlock.svelte';
  interface Props {
    uf: string;
    value: string;
    icon?: IconName;
  }
</script>

<script lang="ts">
  let { uf = $bindable(''), value = $bindable() }: Props = $props();

  let loading = $state(false);
  let currentUF = $state('');
  let cidades = $state([]);

  const pegarCidadePorUF = async () => {
    currentUF = uf;
    try {
      loading = true;

      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`).then(
        (response) => response.json()
      );

      cidades = response
        .filter((obj: any, index: number, self: any[]) => self.findIndex((o: any) => o.nome === obj.nome) === index)
        .map((obj: any) => {
          return {
            label: obj.nome,
            value: obj.nome,
          };
        })
        .sort((a: any, b: any) => a.label.localeCompare(b.label));

      loading = false;
    } catch (err) {
      loading = false;
    }
  };

  $effect(() => {
    if (uf !== currentUF) {
      pegarCidadePorUF();
    }
  });
</script>

<InputWrapper label="Cidade" required={true} {value}>
  <SelectBlock
    removableOnClick={false}
    options={cidades}
    bind:value
    placeholder="Selecione"
    {loading}
    disabled={uf ? false : true}
  />
</InputWrapper>
