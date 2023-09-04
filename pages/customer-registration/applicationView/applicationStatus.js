import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { InfoIcon, NoteIcon, PDFIcon } from "@/components/images"

export default function ApplicationStatus() {
	return (
		<>
			<div className="row">
				<div className="col-lg-9">
					<div className={`${style.in_blk} ${style.application_blk}`}>
						<div className={`${style.head} ${style.drop}`}>
							<div className={style.dot}></div>
							<div className={style.head_name}>
								Application Approved <small>Wed, 6 Aug 2021</small>
							</div>
						</div>
					</div>
					<div className={`${style.in_blk} ${style.application_blk}`}>
						<div className={`${style.head} ${style.drop}`}>
							<div className={style.dot}></div>
							<div className={style.head_name}>
								Applications sent to processing <small>Wed, 6 Aug 2021</small>
							</div>
						</div>
						<div className={style.content}>
							<ul>
								<li>
									<span>Documents Created</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
								<li>
									<span>Documents in Review</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
								<li>
									<span>Documents Dispatched</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
							</ul>
						</div>
					</div>
					<div className={`${style.in_blk} ${style.application_blk}`}>
						<div className={`${style.head} ${style.drop}`}>
							<div className={style.dot}></div>
							<div className={style.head_name}>
								Update from Bureau <small>Wed, 6 Aug 2021</small>
							</div>
						</div>
						<div className={style.content}>
							<ul>
								<li>
									<small>TransUnion</small>
									<span>
										Status Update <Image width={60} height={60} src={InfoIcon} alt="" />
									</span>
									<input type="text" className={style.input} placeholder="Comments" />
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
								<li>
									<small>Experian</small>
									<span>Status Update</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
								<li>
									<small>Equifax</small>
									<span>Status Update</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
							</ul>
						</div>
					</div>
					<div className={`${style.in_blk} ${style.application_blk}`}>
						<div className={`${style.head} ${style.drop}`}>
							<div className={style.dot}></div>
							<div className={style.head_name}>
								Redisputes <small>Wed, 6 Aug 2021</small>
							</div>
						</div>
						<div className={style.content}>
							<ul>
								<li>
									<span>Documents Redispatched</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
							</ul>
						</div>
					</div>
					<div className={`${style.in_blk} ${style.application_blk}`}>
						<div className={`${style.head} ${style.drop}`}>
							<div className={style.dot}></div>
							<div className={style.head_name}>
								Update from Bureau <small>Wed, 6 Aug 2021</small>
							</div>
						</div>
						<div className={style.content}>
							<ul>
								<li>
									<small>TransUnion</small>
									<span>
										Status Update <Image width={60} height={60} src={InfoIcon} alt="" />
									</span>
									<input type="text" className={style.input} placeholder="Comments" />
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
								<li>
									<small>Experian</small>
									<span>Status Update</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
								<li>
									<small>Equifax</small>
									<span>Status Update</span>
									<div className={style.date}>Wed, 6 Aug 2021 ● 11:30am</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.in_blk}>
						<h4>Active Packages</h4>
						<div className={style.package_blk}>
							<div className={style.ico}>
								<Image width={100} height={100} src={NoteIcon} alt="" />
							</div>
							<div className={style.txt}>
								<h5>Complete Credit Repair</h5>
								<p>Complete credit repair for Equifax, Experian & Transunion</p>
							</div>
						</div>
						<div className={`${style.btn_blk} mt-5 justify-content-end`}>
							<Link href="/" className={`${style.site_btn} ${style.blank}`}>
								+Add New Service
							</Link>
						</div>
					</div>
					<div className={style.in_blk}>
						<h4>Attachments</h4>
						<div className={style.attach_blk}>
							<div className={style.ico}>
								<Image width={140} height={140} src={PDFIcon} alt="" />
							</div>
							<div className={style.txt}>
								<p>ID.pdf</p>
							</div>
						</div>
						<div className={style.attach_blk}>
							<div className={style.ico}>
								<Image width={140} height={140} src={PDFIcon} alt="" />
							</div>
							<div className={style.txt}>
								<p>Social Security Card.pdf</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
