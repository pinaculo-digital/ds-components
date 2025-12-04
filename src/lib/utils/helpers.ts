import { BuildedInput } from './reflector.svelte.js';

export function removeWrongFiles(params: {
  indexs: number[];
  files: FileList | undefined;
}): DataTransfer | undefined {
  if (!params.files) return undefined;
  
  const dt = new DataTransfer();
  
  for (let i = 0; i < params.files.length; i++) {
    if (!params.indexs.includes(i)) {
      dt.items.add(params.files[i]);
    }
  }
  
  return dt;
}

export function appendFiles(params: {
  files: FileList | undefined;
  data: BuildedInput<(File | null)[]>;
}): FileList | undefined {
  if (!params.files) return undefined;
  
  const dt = new DataTransfer();
  
  // Adiciona arquivos existentes do data
  if (params.data.value) {
    for (const file of params.data.value) {
      if (file) dt.items.add(file);
    }
  }
  
  // Adiciona novos arquivos
  for (let i = 0; i < params.files.length; i++) {
    dt.items.add(params.files[i]);
  }
  
  return dt.files;
}