import SettingServices from "@services/SettingServices";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Fetch general metadata from backend API
    const setting = await SettingServices.getStoreSeoSetting();

    return { ...initialProps, setting };
  }

  render() {
    const setting = this.props.setting;
    return (
      <Html lang="en">
        <Head>
          <script async key="amp-script" src="https://cdn.ampproject.org/v0.js"></script>
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          ></script>
          <meta property="og:type" content="eCommerce Website" />
        </Head>
        <body>
          <amp-analytics type="gtag" data-credentials="include">
            <script
              type="application/json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  vars: {
                    gtag_id: 'AW-17464214794',
                    config: {
                      'AW-17464214794': {
                        groups: 'default',
                      },
                    },
                  },
                  triggers: {},
                }),
              }}
            />
          </amp-analytics>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
