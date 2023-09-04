import React from "react"
import style from "@/styles/scss/web.module.scss"
import MembershipCardBlocks from "./membershipCardBlocks"
import Image from "next/image"
import { CopyIcon, SquareFacebook, SquareInstagram, SquareTiktok, SquareTwitter, SquareWhatsapp } from "@/components/images"

export default function MembershipCardDetail() {
	return (
		<>
			<div className={style.in_blk}>
				<MembershipCardBlocks />
				<div className="py-4"></div>
				<ul className={style.social_links}>
					<li>
						<a href="?">
							<Image width={100} height={100} src={SquareFacebook} alt="" />
						</a>
					</li>
					<li>
						<a href="?">
							<Image width={100} height={100} src={SquareTwitter} alt="" />
						</a>
					</li>
					<li>
						<a href="?">
							<Image width={100} height={100} src={SquareWhatsapp} alt="" />
						</a>
					</li>
					<li>
						<a href="?">
							<Image width={100} height={100} src={SquareInstagram} alt="" />
						</a>
					</li>
					<li>
						<a href="?">
							<Image width={100} height={100} src={SquareTiktok} alt="" />
						</a>
					</li>
				</ul>
				<div className="py-4"></div>
				<h4 className="mb-4">Share your affiliate link</h4>
				<div className={`${style.affiliate_link_blk} ${style.in_blk}`}>
					<div className={style.flex_blk}>
						<input type="text" name="" id="" className={style.input} value="Crowncreditpro/referral/kjhgtyj890/json" />
						<button type="button" className={`${style.site_btn} ${style.blank}`}>
							<Image width={100} height={100} src={CopyIcon} alt="" />
							Copy link
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
