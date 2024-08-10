import mainImg from '../img/main.png';

const Description =()=>{
    return(
        <div className="container-fluid mt-5 ">
            <div className="row p-0 m-0">
                <div className="col-xl-9 col-lg-11 col-md-9 mx-auto p-0 text-center">
                    <div className="row p-0 m-0">
                        <div className="col-xl-5 col-lg-6 p-0 m-0 text-end my-main-img-small">
                            <img className='my-main-img' src={mainImg} width={"75%"} height={"90%"} alt="" />
                        </div>
                        <div className="col-xl-7 col-lg-6 m-0 p-0 text-end">
                            <div>
                                <div className='my-main-h mb-4'>مزایای برونسپاری پروژه با کارلنسر</div>
                                <span className='my-main-span'>با کارلنسر می تونی فریلنسرها رو خیلی آسون پیدا کنی و انتخاب و مصاحبه شون کنی، به همین راحتی کار را به کاردان بسپار</span>
                                <div className="row p-0 mx-0 ">
                                    <div className="col-sm-6 mx-0 mt-5 p-0">
                                        <div className="d-flex ">
                                            <div><div className="my-main-list-btn" style={{border: "5px solid rgb(255,177,71)"}}></div></div>
                                            <div>
                                                <a className='my-main-list-span' href='./' style={{color:"#e4911f" , textDecoration:"none"}} >ثبت پروژه رایگان</a>
                                                <p className='my-main-list-p'>
                                                بدون هیچ هزینه‌ای و از هر مکانی <br/>پروژه خود را سفارش دهید.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mx-0 mt-5 p-0">
                                        <div className="d-flex ">
                                            <div><div className="my-main-list-btn" style={{border: "5px solid rgb(45,119,232)"}}></div></div>
                                            <div>
                                                <span className='my-main-list-span'>پشتیبانی سریع</span>
                                                <p className='my-main-list-p'>
                                                پاسخگویی سریع مشکلات از طریق تلفن و<br/> چت آنلاین امکان پذیر است.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mx-0 mt-5 p-0">
                                        <div className="d-flex ">
                                            <div><div className="my-main-list-btn" style={{border: "5px solid rgb(169,117,72)"}}></div></div>
                                            <div>
                                                <span className='my-main-list-span'>۲% پاداش برونسپاری پروژه</span>
                                                <p className='my-main-list-p'>
                                                با برونسپاری پروژه‌ها ۲% مبلغ پروژه را <br/>از کارلنسر هدیه میگیرید.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mx-0 mt-5 p-0">
                                        <div className="d-flex ">
                                            <div><div className="my-main-list-btn" style={{border: "5px solid rgb(45,214,184)"}}></div></div>
                                            <div>
                                                <span className='my-main-list-span'>حسن انجام کار</span>
                                                <p className='my-main-list-p'>
                                                با استفاده از پرداخت امن کارلنسر<br/> با خیال راحت پروژه‌ خود را برونسپاری کنید.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mx-0 mt-5 p-0">
                                        <div className="d-flex ">
                                            <div><div className="my-main-list-btn" style={{border: "5px solid rgb(255,71,87)"}}></div></div>
                                            <div>
                                                <span className='my-main-list-span'>دسترسی سریع به نیرو‌ی کار</span>
                                                <p className='my-main-list-p'>
                                                امکان بررسی و مقایسه پیشنهادها <br/>و استخدام حرفه‌ای ترین فریلنسرها
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mx-0 mt-5 p-0">
                                        <div className="d-flex ">
                                            <div><div className="my-main-list-btn" style={{border: "5px solid rgb(140,74,255)"}}></div></div>
                                            <div>
                                                <span className='my-main-list-span'>پرداخت نهایی پس از رضایت شما</span>
                                                <p className='my-main-list-p'>هزینه پروژه پیش از تایید نهایی نزد سیستم پرداخت امن کارلنسر به امانت می‌ماند.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;