import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import ApplicationStatus from "./applicationStatus"
import BigPicture from "./bigPicture"

export default function ApplicationViewDetail() {
	const [tabContent, setTabContent] = useState("ApplicationStatus")
	return (
		<>
			<div className={style.tabs_block}>
				<ul>
					<li>
						<button type="button" className={tabContent === "ApplicationStatus" ? style.active : ""} onClick={() => setTabContent("ApplicationStatus")}>
							Application Status
						</button>
					</li>
					<li>
						<button type="button" className={tabContent === "BigPicture" ? style.active : ""} onClick={() => setTabContent("BigPicture")}>
							Big Picture
						</button>
					</li>
				</ul>
			</div>
			{tabContent === "ApplicationStatus" ? <ApplicationStatus /> : tabContent === "BigPicture" ? <BigPicture /> : null}
		</>
	)
}
