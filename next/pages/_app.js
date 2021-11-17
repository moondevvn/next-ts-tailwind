import '../styles/style.scss'
import { Fragment } from 'react'
import { DefaultSeo } from 'next-seo'
import config from 'next/config'

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ? Component.Layout : Fragment
    const layoutProps = Component.LayoutProps ? Component.LayoutProps : {}
    const {
        publicRuntimeConfig: {
            seo: { title, siteName },
        },
    } = config()
    return (
        <>
            <DefaultSeo titleTemplate="%s" defaultTitle={title} />
            <Layout {...layoutProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
