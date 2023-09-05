import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { AttachIcon, IconEdit, PDFIcon } from "@/components/images"
import Link from "next/link"

export default function DocumentBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.document_blk}`}>
				<h5 className={style.subheading}>Documents</h5>
				<div className={style.doc_blk}>
					<Image width={100} height={100} src={PDFIcon} alt="" />
					<div className={style.in}>
						<strong>Document Name</strong>
						<span>2 Pages ● PDF ● 422 KB</span>
					</div>
					<button type="button">
						<Image width={60} height={60} src={IconEdit} alt="" />
					</button>
				</div>
				<div className={style.doc_blk}>
					<Image width={100} height={100} src={PDFIcon} alt="" />
					<div className={style.in}>
						<strong>Document Name</strong>
						<span>2 Pages ● PDF ● 422 KB</span>
					</div>
					<button type="button">
						<Image width={60} height={60} src={IconEdit} alt="" />
					</button>
				</div>
				<div className={style.drag_upload_blk}>
					<Image width={100} height={100} src={PDFIcon} alt="" />
					<h5>Drag & drop the files here, or</h5>
					<p>Maximum files size 10 MB</p>
					<div className={`${style.btn_blk} mt-4`}>
						<Link href="/dashboard/message" className={`${style.site_btn} ${style.light} w-100`}>
							<Image width={100} height={100} src={AttachIcon} alt="" />
							Browse File
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
