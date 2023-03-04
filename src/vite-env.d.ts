/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_CONTENTFUL_SPACE: string
    readonly VITE_CONTENTFUL_ENVIRONMENT: string
    readonly VITE_CONTENTFUL_ACCESS_TOKEN: string 
    readonly VITE_CONTENTFUL_BASE_URL: string 
    //@note: more env variables...
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  