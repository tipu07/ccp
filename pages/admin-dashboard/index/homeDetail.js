import React from "react"
import style from "@/styles/scss/web.module.scss"
import CardsBlock from "./cardsBlock"
import CustomerInfo from "./customerInfo"
import ConsultAnalytics from "./ConsultAnalytics"

export default function HomeDetail() {
	return (
		<>
			<h3 className="mb-4">Welcome Json Crown!!</h3>
			<CardsBlock />
			<CustomerInfo />
			<ConsultAnalytics />
		</>
	)
}
