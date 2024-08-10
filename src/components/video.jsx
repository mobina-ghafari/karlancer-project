import videOne from '../video/karlancer.mp4';
import videTwo from '../video/second-video.mp4';
import imgVideoOne from '../img/videoOne.jpg';
import imgVideTwo from '../img/videoTwo.png';
import { useRef, useState } from 'react';


const Video =()=>{
    const [isPlaying , setIsPlaying] = useState(false);
    const [isPlayingSecond , setIsPlayingSecond] = useState(false)
    const videoRef = useRef(null);
    const videoRefSecond = useRef(null);

    return(
        <div className="container-fluid mt-5">
            <div className="row m-0 p-0">
                <div className="col-xl-9 col-lg-12 col-md-9 p-0 mx-auto">
                    <div className="row p-0 m-0">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-xl-end text-lg-center text-md-center text-sm-center text-xs-center">
                            <div className="">
                                <h1 className="mb-4">کارلنسر چیکار میکنه؟</h1>
                                <p className="" style={{lineHeight:"40px" , fontSize:"13px"}}>
                                کارلنسر به عنوان یک سایت فریلنسینگ امکان کسب درآمد از طریق دورکاری <br/>رو برای فریلنسرها فراهم کرده. همچنین برونسپاری پروژه‌های طراحی وب و برنامه<br/> نویسی، تولید محتوا، طراحی گرافیک، تایپ، ترجمه و بسیاری مهارت های دیگه<br/> هم از طریق کارلنسر امکان پذیره. اگر مایلید فریلنسر بشید و از طریق دورکاری <br/>کسب درآمد کنید یا با برونسپاری پروژه هاتون رو انجام بدید همین امروز به<br/> کارلنسر بپیوندید.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="d-flex justify-content-center mt-4">
                                <div className="my-video-bg-light">
                                    <div className="my-video-bg-dark">
                                        <div className="my-video-circles">
                                            <div className="my-video-circle-blue"></div>
                                            <div className="my-video-circle-yellwo"></div>
                                            <div className="my-video-circle-red"></div>
                                        </div>
                                        <video className='mt-2 my-video' ref={videoRef} onEnded={handleVideoEnd} poster={imgVideoOne} onPause={handlePlayPuse} controls={isPlaying?true:false}>
                                            <source src={videOne} type='video/mp4' />
                                        </video>
                                        {!isPlaying && (
                                            <button className='my-video-btn' onClick={handlePlayPuse}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                             <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                            </svg>
                                            </button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* video2 */}
                    <div className="row p-0 mx-0" style={{marginTop:"70px"}}>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-xl-end text-lg-center text-md-center text-sm-center text-xs-center">
                            <div className="">
                                <h1 className="mb-4">حالا چرا کارلنسر؟</h1>
                                <p className="" style={{lineHeight:"40px" , fontSize:"13px"}}>
                                برونسپاری پروژه ها به فریلنسرهای حرفه ای مزایای زیادی برای کسب و کار شما<br /> داره. فریلنسرها به دلیل نداشتن هزینه های سربار اداری، دفتر کار و تبلیغات <br />می تونن پروژه شما را با هزینه بسیار کمتری از شرکت ها انجام بدن. همچنین به جای <br />مراجعه به چندین شرکت و مجموعه می تونید با ثبت پروژه توی کارلنسر بیش از<br /> دهها پیشنهاد از متخصصن حرفه ای دریافت کنید و با استفاده از سیستم<br /> پرداخت امن با خیال راحت کار رو به کاردونش بسپرید.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                            <div className="d-flex justify-content-center mt-4">
                                <div className="my-video-bg-light">
                                    <div className="my-video-bg-dark">
                                        <div className="my-video-circles">
                                            <div className="my-video-circle-blue"></div>
                                            <div className="my-video-circle-yellwo"></div>
                                            <div className="my-video-circle-red"></div>
                                        </div>
                                        <video className='mt-2 my-video' ref={videoRefSecond} onEnded={handleVideoEndSecond} poster={imgVideTwo} onPause={handlePlayPuseSecond} controls={isPlayingSecond?true:false}>
                                            <source src={videTwo} type='video/mp4' />
                                        </video>
                                        {!isPlayingSecond && (
                                            <button className='my-video-btn' onClick={handlePlayPuseSecond}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                             <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                            </svg>
                                            </button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function handlePlayPuse(){
        if(videoRef.current){
            if(isPlaying){
                videoRef.current.pause();
            }else{
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying)
        }
    }

    function handleVideoEnd (){
        setIsPlaying(false);
    }

    function handlePlayPuseSecond(){
        if(videoRefSecond.current){
            if(isPlayingSecond){
                videoRefSecond.current.pause();
            }else{
                videoRefSecond.current.play();
            }
            setIsPlayingSecond(!isPlayingSecond)
        }
    }

    function handleVideoEndSecond (){
        setIsPlayingSecond(false);
    }
}

export default Video;