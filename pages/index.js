import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Banner from "./index/banner"
import Choose from "./index/choose"
import Consult from "./index/consult"
import Steps from "./index/steps"
import { ColorfulPhoto } from "@/components/images"
import Score from "./index/score"
import Footer from "@/components/footer"
import Testimonials from "./index/testimonials"

export default function Index() {
	return (
		<>
			<Header pageTitle="Home" />
			<Banner />
			<Choose />
			<Consult />
			<section id={style.combo_section} style={{ backgroundImage: "url(" + ColorfulPhoto.src + ")" }}>
				<Steps />
				<Testimonials />
				<Score />
			</section>
			<Footer />
		</>
	)
}
