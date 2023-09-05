import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit, PhotoLogon, PhotoUser_01, ProfessionalWoman } from "@/components/images"
import Link from "next/link"

export default function PublicFeedsBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.public_feeds_blk}`}>
				<h5 className={style.subheading}>Public Feeds</h5>
				<div className={style.feed_blk}>
					<div className={style.head}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_01} alt="" />
						</div>
						<div className={style.in}>
							<h5>Shayna fluker mcgee lorem</h5>
							<div className={style.time}>3 hours ago</div>
						</div>
						{/* <button type="button" className={`${style.site_btn} ${style.sm} ${style.light} ${style.x_btn}`}></button> */}
					</div>
					<div className={style.text}>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium odit harum officia ipsa quam officiis iste accusamus! Quis suscipit ipsam libero eligendi quasi voluptate neque maxime error aliquam eos.</p>
						<div className={style.img_blk}>
							<Image width={1000} height={1000} src={PhotoLogon} alt="" />
							<Image width={1000} height={1000} src={PhotoLogon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
