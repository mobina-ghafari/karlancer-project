import logoNav from '../img/logo1.png';

const Navbar =()=>{
    return(
        <nav dir="rtl" className="navbar navbar-expand-lg navbar-light px-5">
            <div className="d-flex align-items-center ">
                <button className="my-nav-btn-sidebar btn d-flex align-items-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                </button>
                <img src={logoNav} width={"110px"} height={"41px"} alt="" className='mx-3' />
                <div className='my-nav-search d-flex align-items-center justify-content-center me-2'>
                    <button className='my-nav-btn-search-icon btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    </button>
                    <input type='text' placeholder='جستجو' className='my-nav-input-search' />
                    <button className='my-nav-btn-search-list btn'>در فریلنسرها <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                      </svg></button>
                </div>
                <ul className='my-nav-ul d-flex ' style={{listStyle:"none"}}>
                    <li className=''>
                      <a href='#' className=''>
                        برونسپاری <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                      </a>
                    </li>
                    <li className=''>
                      <a href='#' className=''>
                      آموزش آنلاین <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                      </svg> 
                      </a>
                    </li>
                    <li className=''>
                      <a href='#' className=''>
                      کسب درآمد <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                      </svg>
                      </a>
                    </li>
                </ul>
            </div>
            <div className="d-flex align-items-center me-5">
                <button className='my-nav-btn-project btn mx-1'>ثبت پروژه رایگان</button>
                <button className='my-nav-btn-login btn mx-1'>ورود</button>
                <button className='my-nav-btn-register btn mx-1'>ثبت نام</button>
                <a href='#' className='my-nav-number me-4'>۰۲۱-۲۸۴۲۶۴۴۳</a>
            </div>
        </nav>
    )
}

export default Navbar;