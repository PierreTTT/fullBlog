import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import FeaturedPost from '../components/featured-posts/featured-posts'
import Hero from '../components/hero/hero'
import styles from '../styles/Home.module.css'

const DUMMY_POSTS=[
  {
    slug:'how-to-eat-right',
    title:'Eating right',
    image:'eatingRight.png',
    description:'Step to eat right',
    date:'2022-02-10'
  },
  {
    slug:'food-to-avoid',
    title:'Food to avoid',
    image:'foodToAvoid.png',
    description:'What food to avoid',
    date:'2022-02-20'
  }
];

export default function HomePage() {
  return (
    <Fragment>
    <Hero/>
    <FeaturedPost posts={DUMMY_POSTS}/>
    </Fragment>
    )
}
