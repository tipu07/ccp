import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEnvelope2, IconPhone } from "../images"

export default function HeaderStrip() {
	return (
		<>
			<div className={style.header_strip}>
				<div className={style.contain}>
					<div className={style.inner}>
						<p className="m-0">Get your free credit report consultation today</p>
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
			</div>
		</>
	)
}
