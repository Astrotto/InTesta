/**
 * Shim per l'import dei Single File Component (.vue) dai file .ts
 * (router e main.ts). Necessario con questa combinazione di versioni
 * del toolchain, in cui vue-tsc non risolve i .vue importati dai .ts.
 * I template interni ai .vue restano type-checkati dal plugin di vue-tsc.
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
