import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconEdit, PhotoUser_01, ProfessionalWoman } from "@/components/images"
import Link from "next/link"

export default function PrivateNotesBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.private_notes_blk}`}>
				<h5 className={style.subheading}>Private Notes</h5>
				<div className={style.private_note_blk}>
					<div className={style.head}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_01} alt="" />
						</div>
						<div className={style.in}>
							<h5>Shayna fluker mcgee lorem</h5>
							<div className={style.time}>3 hours ago</div>
						</div>
						<button type="button" className={`${style.site_btn} ${style.sm} ${style.light} ${style.edit_btn}`}>
							<Image width={60} height={60} src={IconEdit} alt="" />
							Edit
						</button>
						<button type="button" className={`${style.site_btn} ${style.sm} ${style.light} ${style.more_btn}`}></button>
					</div>
					<div className={style.text}>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium odit harum officia ipsa quam officiis iste accusamus! Quis suscipit ipsam libero eligendi quasi voluptate neque maxime error aliquam eos.</p>
						<Image width={1000} height={1000} src={ProfessionalWoman} alt="" />
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium odit harum officia ipsa quam officiis iste accusamus! Quis suscipit ipsam libero eligendi quasi voluptate neque maxime error aliquam eos.</p>
					</div>
				</div>
				<div className={style.private_note_blk}>
					<div className={style.head}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={200} height={200} src={PhotoUser_01} alt="" />
						</div>
						<div className={style.in}>
							<h5>Shayna fluker mcgee lorem</h5>
							<div className={style.time}>3 hours ago</div>
						</div>
						<button type="button" className={`${style.site_btn} ${style.sm} ${style.light} ${style.edit_btn}`}>
							<Image width={60} height={60} src={IconEdit} alt="" />
							Edit
						</button>
						<button type="button" className={`${style.site_btn} ${style.sm} ${style.light} ${style.more_btn}`}></button>
					</div>
					<div className={style.text}>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium odit harum officia ipsa quam officiis iste accusamus! Quis suscipit ipsam libero eligendi quasi voluptate neque maxime error aliquam eos.</p>
					</div>
				</div>
				<div className={`${style.btn_blk} mt-4`}>
					<Link href="?" className={`${style.site_btn} ${style.light} w-100`}>
						+ New Notes
					</Link>
				</div>
			</div>
		</>
	)
}
