import NextHead from 'next/head'

export default function Head() {
    return (
        <NextHead>
            <link
                rel="shortcut icon"
                type="image/x-icon"
                href="/favicon/favicon.ico"
            />
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-141061998-1"
            ></script>
            <script>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-141061998-1');`}
            </script>
        </NextHead>
    )
}
