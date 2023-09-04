import React from "react"
import style from "@/styles/scss/web.module.scss"
import FolioSlider from "@/components/folioSlider"

export default function Testimonials() {
	return (
		<>
			<div id={style.testimonials}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.txt}>
							<h5 className={`${style.text_prime} text-uppercase mb-4`}>Testimonials</h5>
							<h3 className="m-0">
								Join our satisfied customers <br />
								who have experienced <br />
								the Crown Credit Pro difference.
							</h3>
						</div>
						<div className={style.slider}>
							<FolioSlider />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
