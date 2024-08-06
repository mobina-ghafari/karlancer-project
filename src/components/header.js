

const Header =()=>{
    return(
        <div className="container-fluid my-header">
            <div className="row">
                <div className="col-xl-7 col-lg-9 col-sm-12 col-xs-12 px-0 mx-auto text-center">
                    <div className="mt-5">
                        <h1 className="text-white mb-4">سایت دورکاری، برونسپاری پروژه و استخدام فریلنسر</h1>
                        <span className="text-white">فضایی برای رشد کسب و کار شما - پرداخت نهایی پس از رضایت از نتیجه کار</span>
                        <div className="row px-0 mt-5">
                            <div className="col-lg-10 col-md-8 col-xs-4 px-0 mx-auto">
                            <div className="d-flex justify-content-start">
                            <div className=" my-header-search-issue">
                            <span className="ms-3">جستجو در</span>
                            <div className="my-header-search-issue-input ms-1">
                            <input   checked type="radio" id="frelancer" name="issue"/>
                            <label for="frelancer"><span className="me-2">فریلنسر ها</span></label>
                            </div>
                            <div className="my-header-search-issue-input">
                            <input type="radio" id="projects" name="issue" />
                            <label for="projects"><span className="me-2">پروژه ها</span></label>
                            </div>
                        </div>
                            </div>
                        <input type="text" placeholder="جستجو رو شروع کن" className="my-header-search-input d-flex justify-content-start" />
                        <div>
                            <button className="my-header-btns">سئو</button>
                            <button className="my-header-btns">طراحی گرافیک</button>
                            <button className="my-header-btns">تولید محتوا</button>
                            <button className="my-header-btns">تایپ</button>
                            <button className="my-header-btns">برنامه نویسی</button>
                            <button className="my-header-btns">طراحی سایت</button>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;