import img1 from '../img/hint-1.png';
import img2 from '../img/hint-2.png';
import img3 from '../img/hint-3.png';
import img4 from '../img/hint-4.png';

const Projects =()=>{
    return(
        <div className="container-fluid mt-5">
            <div className="row p-0 m-0">
                <div className="col-xl-9 col-lg-11 col-md-12 col-sm-12 col-xs-12 mx-auto">
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='text-center'>نحوه برونسپاری پروژه‌ها</h1>
                    <span className='text-center'>با انجام این ۴ مرحله به راحتی می تونی پروژه‌ات رو<br /> از طریق کارلنسر انجام بدی</span>
                    </div>
                    <div className="row p-0 mx-0">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="d-flex flex-column justify-content-around mt-5">
                                <div className="my-project-img">
                                    <div className="my-project-circles">
                                        <div className="my-project-circle-blue"></div>
                                        <div className="my-project-circle-yellwo"></div>
                                        <div className="my-project-circle-red"></div>
                                    </div>
                                    <img src={img1} width={"100%"} height={"90%"} alt="" />
                                    <div className="my-project-img-btn">
                                       <div className="my-icon-1">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                       <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                       <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                       </svg>
                                       </div>
                                    </div>
                                </div>
                                <span className="my-project-span">ثبت پروژه رایگان</span>
                                <span className="my-project-p">به آسانی و با سرعت در چند<br /> کلیک پروژه خود را ثبت کنید</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="d-flex flex-column justify-content-around mt-5">
                                <div className="my-project-img">
                                    <div className="my-project-circles">
                                        <div className="my-project-circle-blue"></div>
                                        <div className="my-project-circle-yellwo"></div>
                                        <div className="my-project-circle-red"></div>
                                    </div>
                                    <img src={img2} width={"100%"} height={"90%"} alt="" />
                                    <div className="my-project-img-btn">
                                       <div className="my-icon-2">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
                                       <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                       </svg>
                                       </div>
                                    </div>
                                </div>
                                <span className="my-project-span">بررسی و مقایسه پیشنهادها</span>
                                <span className="my-project-p">امکان بررسی پیشنهادها، سوابق<br /> کاری و نظرات فریلنسرها</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="d-flex flex-column justify-content-around mt-5">
                                <div className="my-project-img">
                                    <div className="my-project-circles">
                                        <div className="my-project-circle-blue"></div>
                                        <div className="my-project-circle-yellwo"></div>
                                        <div className="my-project-circle-red"></div>
                                    </div>
                                    <img src={img3} width={"100%"} height={"90%"} alt="" />
                                    <div className="my-project-img-btn">
                                    <div className="my-icon-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                    </div>
                                    </div>
                                </div>
                                <span className="my-project-span">استخدام فریلنسر</span>
                                <span className="my-project-p">مناسب‌ترین فریلنسر را برای<br /> پروژه خود استخدام کنید</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="d-flex flex-column justify-content-around mt-5">
                                <div className="my-project-img">
                                    <div className="my-project-circles">
                                        <div className="my-project-circle-blue"></div>
                                        <div className="my-project-circle-yellwo"></div>
                                        <div className="my-project-circle-red"></div>
                                    </div>
                                    <img src={img4} width={"100%"} height={"90%"} alt="" />
                                    <div className="my-project-img-btn">
                                    <div className="my-icon-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                     <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                                     <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                    </svg>
                                    </div>
                                    </div>
                                </div>
                                <span className="my-project-span">تحویل پروژه</span>
                                <span className="my-project-p">نتیجه کار را تحویل بگیرید و از<br /> آن لذت ببرید</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;