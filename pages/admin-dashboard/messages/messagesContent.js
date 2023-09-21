import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconSearch, PhotoUser_01 } from "@/components/images"
import MessagesData from "./messagesData"
import MessagesForm from "./messagesForm"

export default function MessagesContent() {
	return (
		<>
			<div className={style.content_block}>
				<div className={style.head}>
					<div className={`${style.ico_wrap} ${style.online}`}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_01} alt="" />
						</div>
					</div>
					<div className={style.txt}>
						<div className={style.title}>Json Crown</div>
						<span>Online</span>
					</div>
					<button type="button">
						<Image width={100} height={100} src={IconSearch} alt="" />
					</button>
					<button type="button" className={style.x_btn}></button>
				</div>
				<MessagesData />
				<MessagesForm />
			</div>
		</>
	)
}
