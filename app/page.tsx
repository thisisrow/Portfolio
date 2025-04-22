import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { GithubStats } from '@/components/sections/github-stats';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import SplashCursor from '@/components/SplashCursor'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <GithubStats />
      <Contact />
      <Footer />
      <SplashCursor />
    </main>
  );
}