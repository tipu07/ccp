import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { DownloadCircleIcon, PDFImage } from "@/components/images"

export default function MessagesData() {
	return (
		<>
			<div className={style.message_data}>
				<div className={style.date}>15th September | 10:14 AM</div>
				<div className={`${style.bubble} ${style.you}`}>
					<div className={style.cnt}>Hello my friend, how is it going? Tell me more about the latest project calls. </div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.me}`}>
					<div className={style.cnt}>Hello Derek, can you please call me to discuss the details?</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.me} ${style.download_blk_wrap}`}>
					<div className={style.download_blk}>
						<Image width={100} height={100} src={PDFImage} alt="" />
						<div className={style.in}>
							<strong>Reports</strong>
							<span>2 Pages ● PDF ● 422 KB</span>
						</div>
						<button type="button">
							<Image width={60} height={60} src={DownloadCircleIcon} alt="" />
						</button>
					</div>
					<div className={style.cnt}>Hello Derek, can you please call me to discuss the details?</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.you}`}>
					<div className={style.cnt}>Alright Bye!!</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.me}`}>
					<div className={style.cnt}>Send the latest file</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.you} ${style.download_blk_wrap}`}>
					<div className={style.download_blk}>
						<Image width={100} height={100} src={PDFImage} alt="" />
						<div className={style.in}>
							<strong>Reports</strong>
							<span>2 Pages ● PDF ● 422 KB</span>
						</div>
						<button type="button">
							<Image width={60} height={60} src={DownloadCircleIcon} alt="" />
						</button>
					</div>
					<span className={style.time}>10:14 AM</span>
				</div>

				<div className={style.date}>15th September | 10:14 AM</div>
				<div className={`${style.bubble} ${style.you}`}>
					<div className={style.cnt}>Hello my friend, how is it going? Tell me more about the latest project calls. </div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.me}`}>
					<div className={style.cnt}>Hello Derek, can you please call me to discuss the details?</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.me} ${style.download_blk_wrap}`}>
					<div className={style.download_blk}>
						<Image width={100} height={100} src={PDFImage} alt="" />
						<div className={style.in}>
							<strong>Reports</strong>
							<span>2 Pages ● PDF ● 422 KB</span>
						</div>
						<button type="button">
							<Image width={60} height={60} src={DownloadCircleIcon} alt="" />
						</button>
					</div>
					<div className={style.cnt}>Hello Derek, can you please call me to discuss the details?</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.you}`}>
					<div className={style.cnt}>Alright Bye!!</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.me}`}>
					<div className={style.cnt}>Send the latest file</div>
					<span className={style.time}>10:14 AM</span>
				</div>
				<div className={`${style.bubble} ${style.you} ${style.download_blk_wrap}`}>
					<div className={style.download_blk}>
						<Image width={100} height={100} src={PDFImage} alt="" />
						<div className={style.in}>
							<strong>Reports</strong>
							<span>2 Pages ● PDF ● 422 KB</span>
						</div>
						<button type="button">
							<Image width={60} height={60} src={DownloadCircleIcon} alt="" />
						</button>
					</div>
					<span className={style.time}>10:14 AM</span>
				</div>
			</div>
		</>
	)
}
