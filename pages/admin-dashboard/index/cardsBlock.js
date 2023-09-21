import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { ArrowUpGreen, ArrowUpRed, DotsVertical } from "@/components/images"
import MainBarChart from "./mainBarChart"

export default function CardsBlock() {
	return (
		<>
			<div className={style.cards_block}>
				<div className={style.column}>
					<div className={style.card_blk}>
						<button type="button" className={style.more}>
							<Image width={100} height={100} src={DotsVertical} alt="" />
						</button>
						<div className={style.title}>Today’s revenue</div>
						<div className={style.price_blk}>
							<div className={style.price}>$1,280</div>
							<div className={`${style.percent} ${style.up}`}>
								<Image width={100} height={100} src={ArrowUpGreen} alt="" />
								10%
							</div>
						</div>
					</div>
					<div className={style.card_blk}>
						<button type="button" className={style.more}>
							<Image width={100} height={100} src={DotsVertical} alt="" />
						</button>
						<div className={style.title}>Today’s Due Amount</div>
						<div className={style.price_blk}>
							<div className={style.price}>$3000</div>
							<div className={`${style.percent} ${style.down}`}>
								<Image width={100} height={100} src={ArrowUpRed} alt="" />
								12%
							</div>
						</div>
					</div>
					<div className={style.card_blk}>
						<button type="button" className={style.more}>
							<Image width={100} height={100} src={DotsVertical} alt="" />
						</button>
						<div className={style.title}>Paid in last 30days</div>
						<div className={style.price_blk}>
							<div className={style.price}>$10,000</div>
							<div className={`${style.percent} ${style.up}`}>
								<Image width={100} height={100} src={ArrowUpGreen} alt="" />
								80%
							</div>
						</div>
					</div>
				</div>
				<div className={style.column}>
					<div className={`${style.card_blk} ${style.invoice_report}`}>
						<div className={style.top}>
							<h4>Invoice Report</h4>
							<button type="button" className={`${style.site_btn} ${style.sm} ${style.simple} border`}>
								View Report
							</button>
						</div>
						<ul className={style.month_list}>
							<li>
								<span className={style.active}>12 month</span>
							</li>
							<li>
								<span>3 month</span>
							</li>
							<li>
								<span>30 days</span>
							</li>
							<li>
								<span>7 days</span>
							</li>
						</ul>
						<div className={style.bar_chart}>
							<MainBarChart />
						</div>
					</div>
				</div>
				<div className={style.column}>
					<div className={style.card_blk}>
						<button type="button" className={style.more}>
							<Image width={100} height={100} src={DotsVertical} alt="" />
						</button>
						<div className={style.title}>Total Paid Amount</div>
						<div className={style.price_blk}>
							<div className={style.price}>$1,166,802.82</div>
							<div className={`${style.percent} ${style.up}`}>
								<Image width={100} height={100} src={ArrowUpGreen} alt="" />
								60%
							</div>
						</div>
					</div>
					<div className={style.card_blk}>
						<button type="button" className={style.more}>
							<Image width={100} height={100} src={DotsVertical} alt="" />
						</button>
						<div className={style.title}>Total Due Amount</div>
						<div className={style.price_blk}>
							<div className={style.price}>$680,199.00</div>
							<div className={`${style.percent} ${style.down}`}>
								<Image width={100} height={100} src={ArrowUpRed} alt="" />
								12%
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
