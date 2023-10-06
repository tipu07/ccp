import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockDesktopIcon, BlockTotalCustomerIcon, BlockUsersIcon, DotsVertical, GraphGreen, GraphRed, TrendDownIcon, TrendUpIcon } from "@/components/images"

export default function CustomerInfo() {
	return (
		<>
			<div className={style.customer_info}>
				<h4 className="mb-4">Customer Information</h4>
				<div className={style.wrapper}>
					<div className={style.column}>
						<div className={style.customer_card}>
							<div className={style.title}>
								<button type="button" className={style.more}>
									<Image width={100} height={100} src={DotsVertical} alt="" />
								</button>
								<Image width={100} height={100} src={BlockUsersIcon} alt="" />
								Total customers
							</div>
							<div className={style.txt}>
								<div className={style.price_blk}>
									<div className={style.price}>
										6,307
										<div className={`${style.percent} ${style.up}`}>
											<Image width={100} height={100} src={TrendUpIcon} alt="" />
											40%
										</div>
									</div>
									<div className={style.graph_img}>
										<Image width={300} height={300} src={GraphGreen} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.column}>
						<div className={style.customer_card}>
							<div className={style.title}>
								<button type="button" className={style.more}>
									<Image width={100} height={100} src={DotsVertical} alt="" />
								</button>
								<Image width={100} height={100} src={BlockDesktopIcon} alt="" />
								Active now
							</div>
							<div className={style.txt}>
								<div className={style.price_blk}>
									<div className={style.price}>
										3,182
										<div className={`${style.percent} ${style.up}`}>
											<Image width={100} height={100} src={TrendUpIcon} alt="" />
											20%
										</div>
									</div>
									<div className={style.graph_img}>
										<Image width={300} height={300} src={GraphGreen} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.column}>
						<div className={style.customer_card}>
							<div className={style.title}>
								<button type="button" className={style.more}>
									<Image width={100} height={100} src={DotsVertical} alt="" />
								</button>
								<Image width={100} height={100} src={BlockTotalCustomerIcon} alt="" />
								Total decline
							</div>
							<div className={style.txt}>
								<div className={style.price_blk}>
									<div className={style.price}>
										1,210
										<div className={`${style.percent} ${style.down}`}>
											<Image width={100} height={100} src={TrendDownIcon} alt="" />
											10%
										</div>
									</div>
									<div className={style.graph_img}>
										<Image width={300} height={300} src={GraphRed} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
