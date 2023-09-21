import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconArrowLeft, IconDownload2 } from "@/components/images"
import FieldsetUserDetails from "./fieldsetUserDetails"
import FieldsetCreditReports from "./fieldsetCreditReports"
import FieldsetDocuments from "./fieldsetDocuments"
import FieldsetAgreement from "./fieldsetAgreement"
import FieldsetPaymentMethods from "./fieldsetPaymentMethods"

export default function CreateApplicationDetail() {
	const [fieldset, setFieldset] = useState("UserDetails")
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.top_head}>
					<div className={`${style.btn_blk}`}>
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconArrowLeft} alt="" /> Back
						</button>
					</div>
					<div className={`${style.btn_blk} ms-auto`}>
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
					</div>
				</div>
				<div className={style.tab_head}>
					<ul>
						<li>
							<button type="button" className={fieldset === "UserDetails" ? style.active : ""} onClick={() => setFieldset("UserDetails")}>
								User Details
							</button>
						</li>
						<li>
							<button type="button" className={fieldset === "CreditReports" ? style.active : ""} onClick={() => setFieldset("CreditReports")}>
								Credit Reports
							</button>
						</li>
						<li>
							<button type="button" className={fieldset === "Documents" ? style.active : ""} onClick={() => setFieldset("Documents")}>
								Documents
							</button>
						</li>
						<li>
							<button type="button" className={fieldset === "Agreement" ? style.active : ""} onClick={() => setFieldset("Agreement")}>
								Agreement
							</button>
						</li>
						<li>
							<button type="button" className={fieldset === "PaymentMethods" ? style.active : ""} onClick={() => setFieldset("PaymentMethods")}>
								Payment Methods
							</button>
						</li>
					</ul>
				</div>
				{fieldset === "UserDetails" ? (
					<>
						<FieldsetUserDetails />
					</>
				) : fieldset === "CreditReports" ? (
					<>
						<FieldsetCreditReports />
					</>
				) : fieldset === "Documents" ? (
					<>
						<FieldsetDocuments />
					</>
				) : fieldset === "Agreement" ? (
					<>
						<FieldsetAgreement />
					</>
				) : fieldset === "PaymentMethods" ? (
					<>
						<FieldsetPaymentMethods />
					</>
				) : null}
			</div>
		</>
	)
}
