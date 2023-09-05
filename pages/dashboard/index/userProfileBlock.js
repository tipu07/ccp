import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { EquifaxImage, ExperianImage, PhotoUser_01, TransUnionImage } from "@/components/images"

export default function UserProfileBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.user_profile_blk}`}>
				<div className={style.ico_blk}>
					<div className={`${style.ico} ${style.fill} ${style.round}`}>
						<Image width={300} height={300} src={PhotoUser_01} alt="" />
					</div>
					<span>Active</span>
				</div>
				<div className={style.text}>
					<div className={style.top}>
						<div className={style.name}>
							Jennifer Kem<span>ID: 23847</span>
						</div>
						<ul className={style.score_logo_list}>
							<li>
								<div className={style.score_logo}>
									<Image width={300} height={100} src={EquifaxImage} alt="" />
								</div>
							</li>
							<li>
								<div className={style.score_logo}>
									<Image width={300} height={100} src={ExperianImage} alt="" />
								</div>
							</li>
							<li>
								<div className={style.score_logo}>
									<Image width={300} height={100} src={TransUnionImage} alt="" />
								</div>
							</li>
						</ul>
					</div>
					<div className={style.btm}>
						<ul className={style.listing}>
							<li>jenniferkem@gmail.com</li>
							<li>+329482348204</li>
						</ul>
						<div className={style.btn_blk}>
							<button type="button" className={style.site_btn}>
								View Credentials
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
