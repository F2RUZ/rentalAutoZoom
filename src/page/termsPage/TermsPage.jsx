import React from 'react'
import "./TermsPage.scss"

const TermsPage = () => {
  return (
    <section className='terms'>
        <div className="container">
            <div className="terms-content">
                <h3 className='terms-title'>TERMS AND CONDITIONS</h3>
                <p className='terms-description'>The Lessor mentioned overleaf, called Auto Zoom Car Rental, hereby rents vehicle identified overleaf to Renter subject to all terms and conditions on the front page and this page and the Renter, on consideration thereof agrees to them as the essence of the agreement.</p>
                <div className="terms-items">
                    <div className="terms-item">
                        <h4>1. Delivery and Return</h4>
                        <p>The vehicle is delivered to the Renter in good overall condition and without apparent defects. Any complaints as to its condition must be made to the Lessor immediately upon delivery. The Renter agrees to return it with all documents and accessories and in the same condition to the Lessor at the location and on the date designated in this agreement. The Lessor reserves the right to repossess the vehicle without demand at Renter’s expense if vehicle is used in violation of this agreement.</p>
                    </div>
                    <div className="terms-item">
                        <h4>2. Damage, Loss, Theft etc.</h4>
                        <p>In the event of damages or loss of the vehicle or parts of it, including fire and breakage of glass, the Renter shall irrespective of his or the driver’s fault, pay the amount of all resulting loss and expenses to the Lessor (including but not limited to replacement or recovery costs, repair costs, compensation for decline in value and loss of the rental fee). If Standard Terms and Conditions of Rent are violated, any legal provisions (as well as customs regulations or insurance regulations) of loss of revenue the Lessor may charge a compensation corresponding to the rental charge, until the day the vehicle or a replacement vehicle will again be available to the Leas or. This liability of the Renter may be waived if renter accepts Loss Damage Waiver according to Clause 10 by placing his signature in the space “Accept” on the front page, provided that the renter complies in all other respects with the terms and conditions of this Rental Agreement.</p>
                    </div>
                    <div className="terms-item">
                        <h4>3. Charges</h4>
                        <p>Renter shall pay any charges shown on the page or mentioned in the current tariffs. a) The Cash deposit will be returned after 21 working days. b) The Customer has to pay all the expenses (damage, traffic fines, fuel) if the sum of the charges is more than 30% of the deposit.</p>
                    </div>
                    <div className="terms-item">
                        <h4>4. Indemnity</h4>
                        <p>The Lessor is only responsible for loss or damage suffered by Renter or Third Parties, if such loss or damage was caused intentionally or through negligence on Lessor’s part. In all other cases, the Lessor cannot accept any liability and shall be immune against such claims.</p>
                    </div>
                    <div className="terms-item">
                        <h4>5. Conditions of use</h4>
                        <p>– Rented vehicles are not to be driven while Renter or any other driver of vehicle is under the influence of alcohol, hallucinatory drugs, narcotics, barbiturates, or any other substance impairing consciousness or ability to react. Rented vehicles are not to be driven in contravention of any customs, traffic or other regulations;</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TermsPage