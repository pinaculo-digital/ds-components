type Idiomas = 'PT-BR' | 'EN-US';
declare class LanguageManager {
    idioma: Idiomas;
    translator(conteudoPTBR: string, conteudoENUS: string): string;
}
declare const languageManager: LanguageManager;
export default languageManager;
