import React from 'react'
import Header from './Header'
import MainCard from './MainCard'
import IconComp from './IconComp'
import PaymentCard from './PaymentCard'
import Postpaid from './Postpaid'
import BankCard from './BankCard'
import hdfc from './Images/hdfc.png';
import sbi from './Images/sbi.png';
import BusinessTool from './BusinessTool'
import Slider from './Slider'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            
            <MainCard
                heading="India's Most-loved Payments App"
                para="Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more."
                cardLogo='https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png'
                cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/850762/1656568118664.png'
            />
            <IconComp
                heading='Recharge & Pay Bills on Paytm.'
                id='one'
                img1={"https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"}
                img2={'https://assetscdn1.paytm.com/images/catalog/view_item/733300/1626778824903.png'}
                img3={"https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png"}
                img4={"https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png"}
                img5={"https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png"}
                img6={"https://assetscdn1.paytm.com/images/catalog/view_item/733304/1627454209116.png"}
                img7={"https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png"}

                p1='Recharge Prepaid Mobile'
                p2='Pay Rent Payment'
                p3='Pay Electricity Bill'
                p4='Recharge DTH Connection'
                p5='Book Gas Cylinder'
                p6='Pay Credit Bill Card'
                p7='All Payment Services'
                bgColor='#00baf2'
                hoverColor='#00aade'
            />
            <IconComp
                heading='Book & Buy on Paytm.'
                id='two'
                img1={"https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png"}
                img2={'https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png'}
                img3={"https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png"}
                img4={"https://assetscdn1.paytm.com/images/catalog/view_item/729997/1626260495975.png"}
                img5={"https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png"}
                img6={"https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png"}
                img7={"https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png"}

                p1='Movie Tickets'
                p2='Flight Tickets'
                p3='Bus Tickets'
                p4='Train Tickets'
                p5='Buy Insurance'
                p6='International Flights'
                p7='Invest In Stocks'
                bgColor='#0f4a8a'
                hoverColor='#0e3e71'
            />
            <div className="instruments-container">
                <h1>Paytm Payment Instruments</h1>
                <PaymentCard
                    heading="The Fastest Way to Pay In-store & Online."
                    para="Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps."
                    cardLogo='https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png'
                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png'
                    cardTitle='Paytm Wallet'
                />
                <PaymentCard
                    heading="Pay anyone directly from your bank account."
                    para="Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone."
                    cardLogo='https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png'
                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png'
                    cardTitle='UPI Money Transfer'
                />
                <Postpaid
                    heading="Want it?
                No more waiting for it."
                    para="With Paytm Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month."
                    cardLogo='https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png'
                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png'
                    btn='Learn More'
                />
                <div className="BankCard-container">
                    <BankCard
                        cardLogo={hdfc}
                        title='Unlimited Cashback
                        Every time'
                        para='Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers.'
                        cardImg={'https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png'}
                    />
                    <BankCard
                        cardLogo={sbi}
                        title={`India's Most
                        Sincere Credit Card`}
                        para='Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire'
                        cardImg={'https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png'}
                    />
                </div>

            </div>
            {/* instruments-container ends */}

            <h1 id='finance-head'>Financial Services by Paytm</h1>
            <div className="finance-div">
                <Postpaid
                    heading="India's most sincere bank."
                    para="Paytm Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."
                    cardLogo='https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png'
                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png'
                    btn='Learn More'
                />
            </div>
            <div className="paytm-money">
                <Postpaid
                    heading="Build Long-term Wealth & Achieve your Goals."
                    para="Investing on Paytm Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."
                    cardLogo='https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png'
                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/788781/1626077377376.png'
                    btn='Learn More'
                />
            </div>
            <div className="paytm-insurance">
                <Postpaid
                    heading="Insurance made easy."
                    para="Buying insurance does not have to be tedious, time-consuming & confusing. Paytm Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand."
                    cardLogo='https://assetscdn1.paytm.com/images/catalog/view/308775/1653901470333.jpeg'
                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png'
                    btn='Learn More'
                />
            </div>

            <div className="personal-loan">
                <Postpaid
                    heading="Get a Personal Loan in 2 Minutes."
                    para="Paytm offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."
                    cardLogo='https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png'
                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png'
                    btn='Learn More'
                />
            </div>
            <h1 id='business-head'>Business Services by Paytm</h1>
            <div className="business-services">
                <Postpaid
                    heading="Accept payments online with ease"
                    para="Grow your business with the payment gateway that powers India’s largest brands and even the Paytm App"

                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/853877/1626077000254.png'
                    btn='Learn More'
                />
                <Postpaid
                    heading="In-shop payments powered by Paytm."
                    para="Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants"

                    cardImg='https://assetscdn1.paytm.com/images/catalog/view_item/853880/1656675942486.png'
                    btn='Learn More'
                />
            </div>
            <div className="business-tool">
                <h1>Business Tools to help <br /> your business grow</h1>
                <div>
                    <BusinessTool toolImg={'https://assetscdn1.paytm.com/images/catalog/view_item/854033/1626081565192.png'}
                        toolHead='POS Billing
                    Software'
                        toolPara='Say Hello to Smart Retail Business Management'
                        LM='Learn More'
                    />
                    <BusinessTool toolImg={'https://assetscdn1.paytm.com/images/catalog/view_item/854035/1626081071077.png'}
                        toolHead='Paytm for
                    Business App'
                        toolPara='Everything you need to manage your business on your phone'
                        LM='Learn More'
                    />
                    <BusinessTool toolImg={'https://assetscdn1.paytm.com/images/catalog/view_item/854036/1656568216166.png'}
                        toolHead='Advertise on
                    Paytm'
                        toolPara={`Grow your business by advertising on India’s largest mobile business`}
                        LM='Learn More'
                    />
                    <BusinessTool toolImg={'https://assetscdn1.paytm.com/images/catalog/view_item/854038/1626081814411.png'}
                        toolHead='Business
                    Khata'
                        toolPara={`Managing Khata made easy`}
                        LM='Learn More'
                    />
                </div>
            </div>
            <div className="paytm-slider">
                <Slider
                    logo={'https://assetscdn1.paytm.com/images/catalog/view/307196/1626420555412.png'}
                    para='Get started on wealth creation journey with Zero brokerage fee & no hidden charges.'
                    LM='Learn More'

                    img1={'https://assetscdn1.paytm.com/images/catalog/view_item/728894/1618576143299.png'}
                    text1='Invest In Stocks'

                    img2={'https://assetscdn1.paytm.com/images/catalog/view_item/728895/1618575899205.png'}
                    text2='Apply For IPO'

                    img3={'https://assetscdn1.paytm.com/images/catalog/view_item/800760/1618831809222.png'}
                    text3='Invest In ETFs'

                    img4={'https://assetscdn1.paytm.com/images/catalog/view_item/728896/1618575990183.png'}
                    text4='Buy Gold'

                    img5={'https://assetscdn1.paytm.com/images/catalog/view_item/728899/1618576408440.png'}
                    text5='Invest In Mutual Funs'
                />



                <div className="second-slider">
                    <Slider
                        logo={'https://assetscdn1.paytm.com/images/catalog/view/307197/1626419838546.png'}
                        para='Best travel solutions with quick ticket bookings, great offers and easy refunds'
                        LM='Learn More'

                        img1={'https://assetscdn1.paytm.com/images/catalog/view_item/863734/1627552693557.png'}
                        text1='Flat 14% Cashback With Code WELCOMEFLIGHT'

                        img2={'https://assetscdn1.paytm.com/images/catalog/view_item/864144/1627566096011.png'}
                        text2='100% Refund With Paytm Cancellation Protect'

                        img3={'https://assetscdn1.paytm.com/images/catalog/view_item/864145/1627566172335.png'}
                        text3='Flat 10% Cashback With Code HAPPYBUS'

                        img4={'https://assetscdn1.paytm.com/images/catalog/view_item/864151/1627567062180.png'}
                        text4='Sanitised Bus Options With TravelSafe+'

                        img5={'https://assetscdn1.paytm.com/images/catalog/view_item/864152/1627566492097.png'}
                        text5='Hassle Free Train Ticket Bookings'
                    />
                </div>
            </div>
            <Footer />
            <div className="last"></div>
            <div className="second-last"></div>
        </div>
    )
}

export default Home