import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import FeaturedPost from '../components/featured-posts/featured-posts'
import Hero from '../components/hero/hero'
import styles from '../styles/Home.module.css'
import { DUMMY_POSTS } from '../utils/DUMMY_DATA'



export default function HomePage() {
  return (
    <Fragment>
    <Hero/>
    <FeaturedPost posts={DUMMY_POSTS}/>
    </Fragment>
    )
}
