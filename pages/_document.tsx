import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  override render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='icon' type='image/png' sizes='32x32' href='favicon.png' />
          <link rel='manifest' href='/manifest.json' />
        </Head>

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
;(function () {
  var classNameLight = 'light-mode'
  var classNameDark = 'dark-mode'
  document.body.classList.add(classNameLight)
  document.body.classList.remove(classNameDark)
  localStorage.setItem('darkMode', false)
})();
`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
