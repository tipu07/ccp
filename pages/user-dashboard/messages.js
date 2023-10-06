import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import UserDashboardHeader from "@/components/userDashboardHeader"
import UserDashboardSidebar from "@/components/userDashboardSidebar"
import MessagesDetail from "./messages/messagesDetail"

export default function Messages() {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.message}>
				<UserDashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<UserDashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Client Inbox" />
					<MessagesDetail />
				</div>
			</section>
		</>
	)
}
