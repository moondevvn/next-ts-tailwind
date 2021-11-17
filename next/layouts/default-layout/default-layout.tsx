import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Spinner } from '../../components/shared/spinner'
import { ROLE } from '../../lib/type'
import { DefaultHead } from '../default-head'
import { Footer } from './components/footer'
import { Header } from './components/header'

export function DefaultLayout({ ...props }) {
    return (
        <div className="w-full">
            <DefaultHead />
            <NextSeo defaultTitle={'Moon Dev'} title={props.title ? props.title : ''} />
            <Header />
            <div
                className="w-full h-full flex flex-col"
                style={{ minHeight: 'calc(100vh - 96px)' }}
            >
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
