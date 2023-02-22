import { Language } from "./Language"
import html from '../assets/html.png'
import css from '../assets/css.webp'
import javascript from '../assets/javascript.webp'
import typescript from '../assets/typescript.png'
import nuxt from '../assets/nuxt.png'
import vue from '../assets/vue.webp'
import react from '../assets/react.webp'
import mobx from '../assets/mobx.png'

export const Languages = () => {
  return (
    <section id="languages" className="bg-gray-200 flex flex-col items-center justify-center py-14 px-4 sm:py-20 sm:px-6">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold mb-16">This is my <span className="text-violet-700">technology stack</span></h1>
        <div className="flex flex-wrap items-center justify-center max-w-screen-md gap-x-10 gap-y-12">
            <Language image={html} name="HTML"/>
            <Language image={css} name="CSS"/>
            <Language image={javascript} name="JavaScript"/>
            <Language image={typescript} name="TypeScript"/>
            <Language image={nuxt} name="Nuxt"/>
            <Language image={vue} name="Vue"/>
            <Language image={react} name="React"/>
            <Language image={mobx} name="MobX"/>
        </div>
    </section>
  )
}