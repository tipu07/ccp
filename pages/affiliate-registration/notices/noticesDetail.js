import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { SaveIcon } from "@/components/images"
import FormCustomerDetails from "./formCustomerDetails"
import FormSelectPlan from "./formSelectPlan"
import FormIdentityQA from "./formIdentityQA"
import FormAgreement from "./formAgreement"
import FormPoliciesProcedures from "./formPoliciesProcedures"
import FormPaymentDetails from "./formPaymentDetails"
import FormSuccess from "./formSuccess"

export default function NoticesDetail() {
	const [fieldset, setFieldset] = useState("CustomerDetails")
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={fieldset === "CustomerDetails" ? style.active : ""} onClick={() => setFieldset("CustomerDetails")}>
							Customer Details
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "SelectPlan" ? style.active : ""} onClick={() => setFieldset("SelectPlan")}>
							Select Plan
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "IdentityQA" ? style.active : ""} onClick={() => setFieldset("IdentityQA")}>
							Identity QA
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "Agreement" ? style.active : ""} onClick={() => setFieldset("Agreement")}>
							Agreement
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "PoliciesProcedures" ? style.active : ""} onClick={() => setFieldset("PoliciesProcedures")}>
							Policies and Procedures
						</button>
					</li>
					<li>
						<button type="button" className={fieldset === "PaymentDetails" ? style.active : ""} onClick={() => setFieldset("PaymentDetails")}>
							Payment Details
						</button>
					</li>
				</ul>
				<button className={style.save_btn}>
					<Image width={100} height={100} src={SaveIcon} alt="" />
					<span>Save as a draft</span>
				</button>
			</div>
			<form action="" method="post" className={style.application_form}>
				{fieldset === "CustomerDetails" ? (
					<>
						<FormCustomerDetails onFieldset={() => setFieldset("SelectPlan")} />
					</>
				) : fieldset === "SelectPlan" ? (
					<>
						<FormSelectPlan onFieldset={() => setFieldset("IdentityQA")} />
					</>
				) : fieldset === "IdentityQA" ? (
					<>
						<FormIdentityQA onFieldset={() => setFieldset("Agreement")} />
					</>
				) : fieldset === "Agreement" ? (
					<>
						<FormAgreement onFieldset={() => setFieldset("PoliciesProcedures")} />
					</>
				) : fieldset === "PoliciesProcedures" ? (
					<>
						<FormPoliciesProcedures onFieldset={() => setFieldset("PaymentDetails")} />
					</>
				) : fieldset === "PaymentDetails" ? (
					<>
						<FormPaymentDetails onFieldset={() => setFieldset("Success")} />
					</>
				) : fieldset === "Success" ? (
					<>
						<FormSuccess />
					</>
				) : null}
			</form>
		</>
	)
}
