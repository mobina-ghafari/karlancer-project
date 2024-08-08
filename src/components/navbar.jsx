import { useRef, useState , useEffect } from 'react';
import logoNav from '../img/logo1.png';
import logoNavSmall from '../img/logo2.png';
import Sidebar from './sidebar';

const Navbar =()=>{
  const [menu , setMenu] = useState(false);
  const menuRef = useRef(null);
  const [menuText , setMenuText] = useState("درفریلنسرها");
  const [menuNewText , setMenuNewText] = useState(
   [ {
      id:1,
    name:"فریلنسرها",
    text:"استخدام حرفه ای ترین فریلنسرها",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
    },
    {
      id:2,
    name:"پروژه ها",
    text:"کسب درآمد از طریق انجام پروژه",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0m-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
    </svg>
    },
    {
      id:3,
      name:"خدمات",
      text:"جستجو میان خدمات تخصصی",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bounding-box" viewBox="0 0 16 16">
      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1-2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z"/>
      </svg>
    },
    {
      id:4,
      name:"نمونه کارها",
      text:"بیش از۱۰۰ هزار نمونه کار",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
      <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
      </svg>
    },]
  )

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false); 
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

    return(
        <div className='container-fluid sticky-top bg-white '>
        <div className="row p-0 m-0">
        <div className='col-1 m-0 p-0'><Sidebar pageWrapId='page-wrap' outerContainerId='App' /></div>
        <div className='col-11 m-0 px-0 py-1'>
        <nav dir="rtl" className="d-flex justify-content-start  py-2">
            <div className="d-flex align-items-center ">
                <img src={logoNav} alt="" className='ms-3  my-nav-logo1' />
                <img src={logoNavSmall} width={"40px"} height={""} alt="" className='ms-3  my-nav-logo2'/>
                <div className='my-nav-search d-flex align-items-center justify-content-center ms-4'>
                    <button className='my-nav-btn-search-icon btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    </button>
                    <input type='text' placeholder='جستجو' className='my-nav-input-search' />
                    <div ref={menuRef} onClick={handleMenu} className="my-nav-input-search-btn-menu">
                      <span className='my-nav-name-search'>{menuText}</span>
                      {menu && 
                        <div className='my-nav-menu-search'>
                        {menuNewText.map((m,index)=>(<ul key={index}>
                          <li>
                          <a href='./' className='d-flex align-items-center'>
                            <div className='my-nav-menu-icon'>{m.icon}</div>
                            <div className='d-flex flex-column'>
                              <span>{m.name}</span>
                              <span>{m.text}</span>
                            </div>
                            </a>
                          </li>
                        </ul>))}
                      </div>}
                    </div>
                </div>
                <ul className='my-nav-ul d-flex ' style={{listStyle:"none"}}>
                    <li className='ms-4'>
                      <a href='./' className=''>
                        برونسپاری <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                      </a>
                    </li>
                    <li className='ms-4'>
                      <a href='./' className=''>
                      آموزش آنلاین <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                      </svg> 
                      </a>
                    </li>
                    <li className='ms-4'>
                      <a href='./' className=''>
                      کسب درآمد <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                      </svg>
                      </a>
                    </li>
                </ul>
            </div>
            <div className="d-flex align-items-center  my-nav-btns-margin">
                <button className='my-nav-btn-project btn '>ثبت پروژه رایگان</button>
                <button className='my-nav-btn-login btn mx-2'>ورود</button>
                <button className='my-nav-btn-register btn '>ثبت نام</button>
                <a href='./' className='my-nav-number me-4'>۰۲۱-۲۸۴۲۶۴۴۳</a>
            </div>
            <button className='my-nav-btn-project-small btn '>ثبت پروژه رایگان</button>
        </nav>
        </div>
        </div>
        </div>
    )

    function handleMenu (){
      setMenu(!menu);
    };
}

export default Navbar;

