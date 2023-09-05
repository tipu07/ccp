import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BarChart, EquifaxImage, ExperianImage, IconEdit, TransUnionImage } from "@/components/images"
import MainBarChart from "./mainBarChart"

export default function ScoreBlock() {
	return (
		<>
			<div className={`${style.in_blk} ${style.score_blk}`}>
				<h5 className={style.subheading}>Scores</h5>
				<div className="row">
					<div className="col-md-6">
						<div className={style.score_inner_blk}>
							<div className={style.date}>Date</div>
							<div className={style.today}>
								Today 11 Apr 2018{" "}
								<div className={style.percent}>
									1.90% <div className={style.up}></div>
								</div>
							</div>
							<ul className={style.score_logo_list}>
								<li>
									<div className={style.num}>
										725 <div className={style.up}></div>
									</div>
									<div className={style.score_logo}>
										<Image width={300} height={100} src={EquifaxImage} alt="" />
									</div>
								</li>
								<li>
									<div className={style.num}>
										749 <div className={style.down}></div>
									</div>
									<div className={style.score_logo}>
										<Image width={300} height={100} src={ExperianImage} alt="" />
									</div>
								</li>
								<li>
									<div className={style.num}>
										746 <div className={style.up}></div>
									</div>
									<div className={style.score_logo}>
										<Image width={300} height={100} src={TransUnionImage} alt="" />
									</div>
								</li>
							</ul>
							<div className={style.today}>
								Today 11 Apr 2018{" "}
								<div className={style.percent}>
									-1.80% <div className={style.down}></div>
								</div>
							</div>
							<ul className={style.score_num_list}>
								<li>
									<div className={style.num}>
										725 <span>Equifax</span>
									</div>
								</li>
								<li>
									<div className={style.num}>
										749 <span>Experian</span>
									</div>
								</li>
								<li>
									<div className={style.num}>
										746 <span>TransUnion</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6">
						<div className={`${style.btn_blk} justify-content-end`}>
							<button type="button" className={`${style.site_btn} ${style.blank}`}>
								<Image width={100} height={100} src={IconEdit} alt="" />
								Add/Edit Scores
							</button>
						</div>
						<div className={style.bar_chart}>
							<MainBarChart />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
