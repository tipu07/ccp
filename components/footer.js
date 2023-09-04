import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import Link from "next/link"
import { GirlsPhoto, IconEnvelope2, IconPhone } from "./images"

export default function Footer() {
	return (
		<>
			<footer id={style.footer}>
				<div className={style.image}>
					<Image width={1000} height={1000} src={GirlsPhoto} alt="" />
				</div>
				<div className={style.wrapper}>
					<div className={style.contain}>
						<Logo />
						<div className={style.info}>
							<h3>Contact Us Today!</h3>
							<ul>
								<li>
									<a href="tel:1-833-Crown45">
										<Image width={60} height={60} src={IconPhone} alt="" />
										1-833-Crown45
									</a>
								</li>
								<li>
									<a href="mailto:Info@crowncreditpro.com">
										<Image width={60} height={60} src={IconEnvelope2} alt="" />
										Info@crowncreditpro.com
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={style.copyright}>
						<div className={style.contain}>
							<p>
								© Copyright 2022 <Link href="/">crowncreditpro.com</Link>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
