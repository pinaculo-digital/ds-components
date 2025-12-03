
<script lang="ts" module>
  interface Props {
    uf: string;
    value: string;
  }
</script>

<script lang="ts">
  import { SelectBlock } from 'pina-components';

  let { uf = 'CE', value = $bindable() }: Props = $props();

  let cidades = $state([]);
  let loading = $state(false);

  const pegarCidadePorUF = async () => {
    try {
      loading = true;

      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`
      ).then((response) => response.json());

      cidades = response
        .filter((obj: any, index: number, self: any[]) => 
          self.findIndex((o: any) => o.nome === obj.nome) === index
        )
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
    if (uf) {
      pegarCidadePorUF();
    }
  });
</script>

<SelectBlock options={cidades} bind:value placeholder="Selecione" {loading} disabled={uf ? false : true} />
