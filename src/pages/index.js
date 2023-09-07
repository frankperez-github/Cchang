import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/Components/Header'
import GeneralInformation from '@/Components/GeneralInformation'
import Services from '@/Components/Services'
import Projects from '@/Components/ProjectsSection'
import Contact from '@/Components/Contact'
import NavBar from '@/Components/NavBar'
import { useContext, useEffect } from 'react'
import SiteContext from '@/Context/siteContext'

export default function Home() {

  const {fetchProjects} = useContext(SiteContext)

  useEffect(()=>
  {
    fetchProjects()
    if(localStorage.getItem("ratedProjects") === null)
    {
      const ratedProjects = [{"id":0, "stars":-1}]
      localStorage.setItem("ratedProjects", JSON.stringify(ratedProjects))
    }
  }, [])

  return (
    <>
      <Head>
        <title>Cchang</title>
        <meta name="description" content="Generated by Frank Perez using create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <Header />
        <NavBar />
        <div className="desktopView">
          <GeneralInformation />
          <div className="desktopView rightColumn">
            <div className='leftSide'>
              <Services />
            </div>
            <div className='rightSide'>
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
