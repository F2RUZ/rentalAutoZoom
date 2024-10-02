import { useState } from "react"
import LinkLogo from '../../../assets/icons/next-icon.svg'
import './FaqAccardion.scss'


function FaqAccardion({ title, descr }) {
	const [show, setShow] = useState(false)
	return <>
		<div className="accardion">
			<div className="accardion-item">
				<button onClick={() => setShow(!show)} className={`${show ? "accordionRotate" : ""}`}>
					<img src={LinkLogo} alt="linklogo" />
				</button>
				<div className="accordion-text ">
					<h2 onClick={() => setShow(!show)}>{title}</h2>
					<div className={`accordion-description ${show ? "active" : ""}`}>
						<p>{descr} </p>
					</div>
				</div>
			</div>
		
				
			
		</div>
	</>
}

export default FaqAccardion
