import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { BannerPhoto, MainPhoto } from "@/components/images"

export default function Banner() {
	return (
		<>
			<section id={style.banner} style={{ backgroundImage: "url(" + BannerPhoto.src + ")" }}>
				<div className={style.image}>
					<Image width={2000} height={2000} src={MainPhoto} alt="" />
				</div>
				<div className={style.contain}>
					<div className={style.outer}>
						<div className={style.content}>
							<h1>We prioritize integrity over credit repair.</h1>
							<p>We believe in providing genuine solutions to help you achieve financial success. Your credit is a valuable asset, and we are here to ensure it works for you, not against you.</p>
							<div className={style.btn_blk}>
								<Link href="/register" className={`${style.site_btn} ${style.blank}`}>
									Get Started
								</Link>
								<Link href="?" className={`${style.site_btn} ${style.simple_stroke}`}>
									Free Consultation
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
