import imgBlog1 from "../img/blog-4.jpg";
import imgBlog2 from "../img/blog-5.jpg";

const Blog =()=>{
    return(
        <div className="container-fluid mt-5 py-4 my-blog" style={{backgroundColor:"#e9eaeb"}}>
            <div className="row">
                <div className="col-xl-9 col-lg-11 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div className="row">
                        <h2 className="text-center mt-3">پست‌های وبلاگ کارلنسر</h2>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="my-blog-card">
                                <img src={imgBlog1} alt="" className="my-blog-card-img" />
                                <a href="./" className="my-blog-card-a">چرا به نفع شماست از سیستم پرداخت امن کارلنسر، برای انجام پروژه هایتان استفاده کنید؟</a>
                                <div className="my-blog-card-text1">
                                    <p className="my-blog-card-text-p">
                                    اگر کارفرما یا صاحب کسب و کاری در هر اندازه ای هستید مطمئنا هر چند وقت یکبار نیاز به خدماتی برای کسب و کارتان دارید. برای مثال ممکن است نیاز به طراحی کاتالوگ و بروشور، طراحی یک لوگو یا بنر برای تبلیغات ، طراحی سایت و اپلیکیشن ، تولید محتوا برای سایت، خدمات طراحی گرافیک مانند طراحی چند پست حرفه ای برای صفحه اینستاگرامتان داشته باشید. یا حتی ممکن است برای یک مکاتبه اداری یا دانشگاهی نیاز به ترجمه آلمانی یا ترجمه به سایر زبان ها داشته باشید. بسیاری از این خدمات به صورت پروژه و موقت است . به همین دلیل توجیهی برای استخدام یک کارمند به صورت دایم برای آنها وجود ندارد.
                                    </p>
                                </div>
                                <button className="my-blog-card-btn">ادامه مطلب</button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="my-blog-card">
                                <img src={imgBlog2} alt="" className="my-blog-card-img" />
                                <a href="./" className="my-blog-card-a">قابلیت “پروژه تمام وقت” کارلنسر چیست و چه فایده‌ای دارد؟</a>
                                <div className="my-blog-card-text2">
                                    <p className="my-blog-card-text-p">
                                    اگر از کاربران سایت کارلنسر و مخصوصا کارفرما باشید، احتمالا با قابلیت پروژه تمام وقت (در گزینه‌های ارتقای پروژه) برخورد کرده اید. ولی این قابلیت چه کاربردی دارد و چرا کارلنسر آن را در سایت اضافه کرده است؟ در این مقاله ی کوتاه، با آن آشنا خواهیم شد.
                                    </p>
                                </div>
                                <button className="my-blog-card-btn">ادامه مطلب</button>
                            </div>
                        </div>
                        <div><button className="my-blog-btn-end">مشاهده همه پست های بلاگ</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;