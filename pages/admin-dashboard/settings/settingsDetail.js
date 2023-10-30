import React from "react"
import style from "@/styles/scss/web.module.scss"
import SettingsForm from "./settingsForm"

export default function SettingsDetail() {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.top_head}>
					<div className={style.txt}>
						<h4>Personal info</h4>
						<p className="small">Update your photo and personal details here.</p>
					</div>
					<div className={`${style.btn_blk} ms-auto`}>
						<button className={`${style.site_btn} ${style.simple} ${style.stroke}`}>Cancel</button>
						<button className={`${style.site_btn}`}>Save</button>
					</div>
				</div>
				<hr />
				<SettingsForm />
			</div>
		</>
	)
}
