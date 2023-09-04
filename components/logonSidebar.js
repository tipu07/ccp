import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function LogonSidebar(props) {
	const { bg_image } = props
	return (
		<>
			<div className={style.login_sidebar} style={{ backgroundImage: "url(" + bg_image.src + ")" }}>
				<div className={style.login_sidebar_txt}>
					<h1>
						We Sell Integrity
						<span>not Credit Repair</span>
					</h1>
					<p>If you don’t take good care of your credit, then your credit won’t take good care of you</p>
				</div>
			</div>
		</>
	)
}
