import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function NotesBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.notes_blk}`}>
				<h5 className={style.subheading}>Notes Log</h5>
				<div className={`${style.inner} ${style.gold_bg}`}>
					<h5>Public notes updated</h5>
					<div className={style.date}>18 January, 2023 17:10:34</div>
					<hr />
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti dolorum fugit. Ut eius amet impedit voluptatem hic aut temporibus, porro minima nostrum tempore corrupti, adipisci eaque atque ea repudiandae.</p>
					<div className={style.added}>Added By: Juan Petter</div>
				</div>
				<div className={`${style.inner} ${style.yellow_bg}`}>
					<h5>Public notes updated</h5>
					<div className={style.date}>18 January, 2023 17:10:34</div>
					<hr />
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti dolorum fugit. Ut eius amet impedit voluptatem hic aut temporibus, porro minima nostrum tempore corrupti, adipisci eaque atque ea repudiandae.</p>
					<div className={style.added}>Added By: Juan Petter</div>
				</div>
			</div>
		</>
	)
}
