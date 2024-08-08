

const Header =()=>{
    return(
        <div className="container-fluid my-header">
            <div className="row">
                <div className="col-xl-7 col-lg-9 col-sm-10 col-xs-10 px-0 mx-auto text-center">
                    <div style={{marginTop:"40px"}}>
                        <div className="text-white mb-4 my-header-h">سایت دورکاری، برونسپاری پروژه و استخدام فریلنسر</div>
                        <span className="text-white my-header-span">فضایی برای رشد کسب و کار شما - پرداخت نهایی پس از رضایت از نتیجه کار</span>
                        <div className="row px-0 mt-4 mx-0">
                            <div className=" col-lg-10 col-md-8 col-xs-4 px-0 mx-auto">
                            <div className="d-flex my-header-search-issue-small">
                            <div className=" my-header-search-issue">
                            <span className="ms-3 my-header-search-span">جستجو در</span>
                            <div className="my-header-search-issue-input ms-1">
                            <input defaultChecked={true} type="radio" id="frelancer" name="issue"/>
                            <label htmlFor="frelancer"><span className="me-2">فریلنسر ها</span></label>
                            </div>
                            <div className="my-header-search-issue-input">
                            <input type="radio" id="projects" name="issue" />
                            <label htmlFor="projects"><span className="me-2">پروژه ها</span></label>
                            </div>
                        </div>
                            </div>
                        <input type="text" placeholder="جستجو رو شروع کن" className="my-header-search-input d-flex" />
                        <div className="d-flex justify-content-center">
                            <button className="my-header-btns">سئو</button>
                            <button className="my-header-btns">طراحی گرافیک</button>
                            <button className="my-header-btns">تولید محتوا</button>
                            <button className="my-header-btns">تایپ</button>
                            <button className="my-header-btns">برنامه نویسی</button>
                            <button className="my-header-btns btn-hide">طراحی سایت</button>
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