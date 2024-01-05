import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.jon.appflow-hosted-shlu-demo',
  appName: 'appflow-hosted-shlu-demo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LiveUpdates: {
      appId: '3df43548',
      channel: 'prod-0.0.1',
      autoUpdateMethod: 'none',
      maxVersions: 2,
      key: 'ionic_cloud_public.pem',
      // @ts-ignore
      strategy: 'zip'
    },
  }
};

export default config;
