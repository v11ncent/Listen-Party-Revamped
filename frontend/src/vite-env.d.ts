/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_SERVER_URL: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_SECRET: string;
  readonly VITE_AUTH0_CALLBACK_URL: string;
  readonly VITE_API_CREATE_LOBBY: string;
}
