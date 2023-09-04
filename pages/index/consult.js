import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import { AdvertPhoto, ConsultPhoto } from "@/components/images"
import Image from "next/image"

export default function Consult() {
	return (
		<>
			<section id={style.consult}>
				<div className={style.wrapper} style={{ backgroundImage: "url(" + ConsultPhoto.src + ")" }}>
					<div className={style.contain}>
						<div className={style.content}>
							<h2>Free Consultation</h2>
							<p>Discover how we can assist you. See how it works firsthand.</p>
							<div className={`${style.btn_blk} mt-5`}>
								<Link href="/register" className={`${style.site_btn} ${style.blank}`}>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={style.advert}>
					<div className={style.contain}>
						<div className={style.advert_inner}>
							<Image width={400} height={400} src={AdvertPhoto} alt="" />
							<div className={style.txt}>
								<h4>Trusted Professionals</h4>
								<p>Our extensive network of top realtors and mortgage brokers ensures you get the best options when buying a home.</p>
							</div>
							<span>AD</span>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
