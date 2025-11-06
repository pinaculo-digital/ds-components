// import type { ColorTheme, Color, Shade } from './types';
import toast from "./toast.svelte.js";
import type { FieldSetup } from "./types.js";

// export function classesFromTheme(tema: ColorTheme) {
//   if (tema === 'inverted-soft-base') {
//     return { corBg: 'border border-soft-base', corTexto: 'text-soft-base' };
//   }

//   const inverted = tema.startsWith('inverted-');
//   const rest = inverted ? tema.slice(9) : tema; // remove "inverted-"
//   const [color, shade] = rest.split('-') as [Color, Shade];

//   const corBg = inverted ? `border border-${color}-base` : `bg-${color}-${shade}`;

//   let corTexto: string;
//   if (!inverted && shade === 'base') corTexto = 'text-static-white';
//   else if (inverted && shade === 'base') corTexto = `text-${color}-base`;
//   else if (shade === 'lighter') corTexto = `text-${color}-base`;
//   else /* light */ corTexto = `text-${color}-dark`;

//   if (tema === 'feature-lighter') corTexto = 'text-feature-dark';
//   if (tema === 'success-lighter') corTexto = 'text-success-dark';

//   return { corBg, corTexto };
// }

export function removeWrongFiles(params: {
  indexs: number[];
  files: FileList | undefined;
}) {
  const { indexs, files } = params;
  if (!files) return;

  const newFileList = new DataTransfer();
  Array.from(files)
    .filter((_, i) => indexs.includes(i))
    .forEach((file) => newFileList.items.add(file));

  return newFileList;
}

export function appendFiles(params: {
  files: FileList | undefined;
  data: FieldSetup<(File | null)[]>;
}) {
  const { files, data } = params;

  if (!files) return;

  // @ts-ignore
  const validate = data.validator(Array.from(files));
  const indexs: number[] = [];

  if (validate.error) {
    const errors: { message: string; path: (string | number)[] }[] = JSON.parse(
      validate.error.message
    );

    errors.forEach(({ message, path }) => {
      const index = path[1] as number; // se der algum erro, pode ser aqui.
      const file = files?.item(index);
      indexs.push(index);

      return toast.error(
        `${file?.name} com formato inválido (${file?.type})`,
        message
      );
    });
  }

  return removeWrongFiles({ indexs, files })?.files;
}
