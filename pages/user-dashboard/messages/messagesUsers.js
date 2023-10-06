import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { ClockIcon, PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04, PhotoUser_05, PhotoUser_06, StarIcon } from "@/components/images"

export default function MessagesUsers() {
	return (
		<>
			<div className={style.users_block}>
				<div className={style.head}>
					<div className={style.title}>All Messages</div>
				</div>
				<div className={style.user_outer}>
					<div className={style.user_blk}>
						<div className={`${style.ico_wrap} ${style.online}`}>
							<div className={`${style.ico} ${style.fill} ${style.round}`}>
								<Image width={200} height={200} src={PhotoUser_01} alt="" />
							</div>
						</div>
						<div className={style.txt}>
							<div className={style.title}>Json Crown</div>
							<p>Hey, have you done the latest design elements that I sent you yesterday? I am waiting for your response.</p>
							<div className={style.date}>
								<Image width={100} height={100} src={ClockIcon} alt="" /> Today | 08:32 AM
							</div>
						</div>
						<div className={style.star}>
							<Image width={50} height={50} src={StarIcon} alt="" />
						</div>
					</div>
					<div className={style.user_blk}>
						<div className={`${style.ico_wrap} ${style.online}`}>
							<div className={`${style.ico} ${style.fill} ${style.round}`}>
								<Image width={200} height={200} src={PhotoUser_02} alt="" />
							</div>
						</div>
						<div className={style.txt}>
							<div className={style.title}>Json Crown</div>
							<p>Hey, have you done the latest design elements that I sent you yesterday? I am waiting for your response.</p>
							<div className={style.date}>
								<Image width={100} height={100} src={ClockIcon} alt="" /> Today | 08:32 AM
							</div>
						</div>
						<div className={style.star}>
							<Image width={50} height={50} src={StarIcon} alt="" />
						</div>
					</div>
					<div className={style.user_blk}>
						<div className={`${style.ico_wrap} ${style.online}`}>
							<div className={`${style.ico} ${style.fill} ${style.round}`}>
								<Image width={200} height={200} src={PhotoUser_03} alt="" />
							</div>
						</div>
						<div className={style.txt}>
							<div className={style.title}>Json Crown</div>
							<p>Hey, have you done the latest design elements that I sent you yesterday? I am waiting for your response.</p>
							<div className={style.date}>
								<Image width={100} height={100} src={ClockIcon} alt="" /> Today | 08:32 AM
							</div>
						</div>
						<div className={style.star}>
							<Image width={50} height={50} src={StarIcon} alt="" />
						</div>
					</div>
					<div className={style.user_blk}>
						<div className={`${style.ico_wrap} ${style.offline}`}>
							<div className={`${style.ico} ${style.fill} ${style.round}`}>
								<Image width={200} height={200} src={PhotoUser_04} alt="" />
							</div>
						</div>
						<div className={style.txt}>
							<div className={style.title}>Json Crown</div>
							<p>Hey, have you done the latest design elements that I sent you yesterday? I am waiting for your response.</p>
							<div className={style.date}>
								<Image width={100} height={100} src={ClockIcon} alt="" /> Today | 08:32 AM
							</div>
						</div>
						<div className={style.star}>
							<Image width={50} height={50} src={StarIcon} alt="" />
						</div>
					</div>
					<div className={style.user_blk}>
						<div className={`${style.ico_wrap} ${style.offline}`}>
							<div className={`${style.ico} ${style.fill} ${style.round}`}>
								<Image width={200} height={200} src={PhotoUser_05} alt="" />
							</div>
						</div>
						<div className={style.txt}>
							<div className={style.title}>Json Crown</div>
							<p>Hey, have you done the latest design elements that I sent you yesterday? I am waiting for your response.</p>
							<div className={style.date}>
								<Image width={100} height={100} src={ClockIcon} alt="" /> Today | 08:32 AM
							</div>
						</div>
						<div className={style.star}>
							<Image width={50} height={50} src={StarIcon} alt="" />
						</div>
					</div>
					<div className={style.user_blk}>
						<div className={`${style.ico_wrap} ${style.online}`}>
							<div className={`${style.ico} ${style.fill} ${style.round}`}>
								<Image width={200} height={200} src={PhotoUser_06} alt="" />
							</div>
						</div>
						<div className={style.txt}>
							<div className={style.title}>Json Crown</div>
							<p>Hey, have you done the latest design elements that I sent you yesterday? I am waiting for your response.</p>
							<div className={style.date}>
								<Image width={100} height={100} src={ClockIcon} alt="" /> Today | 08:32 AM
							</div>
						</div>
						<div className={style.star}>
							<Image width={50} height={50} src={StarIcon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
