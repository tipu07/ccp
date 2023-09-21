import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockTotalCustomerIcon, CreditPlugIcon, DotsVertical, FacebookIcon, InstagramIcon } from "@/components/images"

export default function ConsultAnalytics() {
	return (
		<>
			<div className={style.consult_analytics}>
				<h4 className="mb-4">Free Consultation Analytics</h4>
				<div className={style.wrapper}>
					<div className={style.column}>
						<div className={style.consult_card}>
							<div className={style.title}>
								<button type="button" className={style.more}>
									<Image width={100} height={100} src={DotsVertical} alt="" />
								</button>
								<Image width={100} height={100} src={FacebookIcon} alt="" />
								Facbook
							</div>
							<div className={style.txt}>
								<div className={style.price_blk}>
									<div className={style.price}>1698</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.column}>
						<div className={style.consult_card}>
							<div className={style.title}>
								<button type="button" className={style.more}>
									<Image width={100} height={100} src={DotsVertical} alt="" />
								</button>
								<Image width={100} height={100} src={InstagramIcon} alt="" />
								Instagram
							</div>
							<div className={style.txt}>
								<div className={style.price_blk}>
									<div className={style.price}>136</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.column}>
						<div className={style.consult_card}>
							<div className={style.title}>
								<button type="button" className={style.more}>
									<Image width={100} height={100} src={DotsVertical} alt="" />
								</button>
								<Image width={100} height={100} src={CreditPlugIcon} alt="" />
								Credit Plug
							</div>
							<div className={style.txt}>
								<div className={style.price_blk}>
									<div className={style.price}>3220</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.column}>
						<div className={style.consult_card}>
							<div className={style.title}>
								<button type="button" className={style.more}>
									<Image width={100} height={100} src={DotsVertical} alt="" />
								</button>
								<Image width={100} height={100} src={BlockTotalCustomerIcon} alt="" />
								Referral
							</div>
							<div className={style.txt}>
								<div className={style.price_blk}>
									<div className={style.price}>235</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
