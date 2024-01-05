import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'appflow-hosted-shlu-demo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
