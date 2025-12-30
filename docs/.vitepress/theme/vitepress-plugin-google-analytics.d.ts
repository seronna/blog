declare module "vitepress-plugin-google-analytics" {
  interface GoogleAnalyticsOptions {
    id: string;
  }

  function googleAnalytics(options: GoogleAnalyticsOptions): void;

  export default googleAnalytics;
}
