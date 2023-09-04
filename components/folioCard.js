import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"

export default function FolioCard(props) {
	const { text, name, designation, image } = props

	return (
		<>
			<div className={style.folio_blk}>
				<div className={style.txt_blk}>
					<p>{text}</p>
				</div>
				<div className={style.ico_blk}>
					<div className={`${style.ico} ${style.fill} ${style.round}`}>
						<Image width={400} height={400} src={image} alt="" />
					</div>
					<div className={style.name}>
						{name}
						<span>{designation}</span>
					</div>
				</div>
			</div>
		</>
	)
}
