interface ImportMetaEnv {
  readonly VITE_APP_API: string;
  readonly VITE_APP_TITLE: string;
}

interface Window {
  project: {
    env: ImportMetaEnv;
  };
}
