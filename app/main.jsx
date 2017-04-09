var React = require("react");
var ReactDOM = require("react-dom");
var { SocialIcon }= require('react-social-icons');
var Project = require("./components/Main.js");
// var SchoolsList = require("./components/SchoolsList.jsx");
// var schoolsStore = require("./stores/schoolsStore");
// var _schools = schoolsStore.getSchools();
// schoolsStore.onChange(function(schools){
//     _schools = schools;
//     render();
// });


function render(){
    ReactDOM.render(
        <div>
        <div className="navbar navbar-inverse navbar-fixed-top scrollclass">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Kumar Gayatri</a>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#home-sec">Home</a></li>
                    <li><a href="#features-sec">Education</a></li>
                    <li><a href="#advance-sec">Experience</a></li>
                    <li><a href="#gallery-sec">Exposure</a></li>
                    <li><a href="#location-sec" disabled>Location</a></li>
                </ul>
            </div>

        </div>
    </div>
    <div id="home-sec">
        <div className="overlay">
            <div className="container">
                <div className="row-fluid pad-top scrollclass">
                    <img src="img/kumar-gayatri.jpg" className="center-block img-circle img-thumbnail img-responsive " style={{"width":"25%"}}/>
                </div>
                <div className="row-fluid text-center">

                    <h3 className="center-block">
                        <strong>Kumar Jayaram Gayatri</strong>
                    </h3>
                </div>
                <div className="row-fluid  scrollclass">
                    <h4 className="home-p center-block text-center">
                        Experienced<mark>full stack developer</mark>with an immense knowledge of<mark>Data Analysis and Machine Learning</mark>
                    </h4>
                    <div className="text-center">
                        <a className="btn btn-primary btn-lg btn-home" href="#features-sec">Explore More &nbsp; <i className="fa fa-toggle-on"></i></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <section id="features-sec">
        <div className="container">
            <div className="row text-center min-set">
                <div className="col-md-12">
                    <h2><mark className="head-glow"> Education </mark> </h2>
                    <hr className="sub-hr" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="card">
                        <h3>Master of Science</h3>
                        <img className="card-img-top" src="img/uta.jpg" alt="Card image cap" />
                        <div className="card-block">
                            <h4><strong>University of Texas at Arlington</strong></h4>
                            <hr />
                            <p><strong>GPA: 4.0</strong><br/>Computer Science <br/> <i>Graduation Date : <strong>August 2017</strong></i> <br/> <strong>Thesis : </strong> Cell annotation using deep learning</p>
                            <a href="#" className="btn btn-primary btn-space">More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card">
                        <h3>Bachelor of Engineering</h3>
                        <img className="card-img-top" src="img/bit.jpg" alt="Card image cap" />
                        <div className="card-block">
                            <h4><strong>Bangalore Institute of Technology</strong></h4>
                            <hr />
                            <p> <strong>GPA: 3.78</strong><br/> Computer Science <br/> <i>Graduation Date : <strong>June 2011</strong></i></p>
                            <a href="#" className="btn btn-primary btn-space">More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card">
                        <h3>Professional Courses</h3>
                        <img className="card-img-top" src="img/others.png" alt="Card image cap" />
                        <div className="card-block">
                            <h4><strong>Agile Development, TDD training, Clean code training, Leonidas React Development Training</strong></h4>
                            <hr />
                            <p>
                                <strong>Node.js and ReactJs</strong> by leonidas.fi <br/>
                                <strong>Clean code</strong> by uncle bob <br/>
                                <strong>TDD and Scrum</strong> training by Nokia Networks
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section id="advance-sec">
        <div className="container">
            <div className="row text-center min-set">
                <div className="col-md-12">
                    <h2><mark className="head-glow">Experience </mark></h2>
                    <hr className="sub-hr" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="card">
                        <h3>Full stack developer</h3>
                        <img className="card-img-top" src="img/Nokia.jpg" alt="Card image cap" />
                        <div className="card-block">
                            <h4><strong>Nokia Networks</strong></h4>
                            <hr />
                            <p>
                                Duration : <strong>4 years 4 months </strong> <br/>
                                Location : <strong>Bangalore, KA, India</strong> <br/>
                            </p>
                            <a href="#test" className="btn btn-primary btn-space" data-toggle="collapse" data-target="#test">More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card">
                        <h3>Data analyst</h3>
                        <img className="card-img-top" src="img/uta.jpg" alt="Card image cap" />
                        <div className="card-block">
                            <h4><strong>Research Assistant</strong></h4>
                            <hr />
                            <p>
                                Duration : <strong>12 months </strong> <br/>
                                Location : <strong>Arlington, TX, USA</strong> <br/>
                            </p>
                            <a href="#data-analyst-detail-sec" className="btn btn-primary btn-space" data-toggle="collapse" data-target="#data-analyst-detail-sec">More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card">
                        <h3>Student Worker</h3>
                        <img className="card-img-top" src="img/chartwells.png" alt="Card image cap" />
                        <div className="card-block">
                            <h4><strong>Student Worker</strong></h4>
                            <hr />
                            <p>
                                Duration : <strong>8 months </strong> <br/>
                                Location : <strong>Arlington, TX, USA</strong> <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="test" className="collapse text-center">
                <h3><mark className="head-glow">Responsibilities at Nokia</mark></h3>
                <p>
                o Developed dashboards for the telecom operators to monitor their network elements<br />
                o Proficient in building web user interfaces using ReactJS, jQuery, Ajax, HTML and CSS<br />
                o Implemented many internal web applications using react.js and flux architecture <br />
                o Designed RESTful services in Java with encrypting sensitive information <br />
                o Led the automation of the Front-End tests using Selenium web driver for cross browser compatibility
                </p>
            </div>
            <div id="data-analyst-detail-sec" className="collapse text-center">
                <h3><mark className="head-glow">Responsibilities at UTA</mark></h3>
                <p>
                o Modelled prostate cancer data using SVM and random forest algorithms to achieve 70% classNameification <br/>
                o Tested several Convolutional Neural Networks such as AlexNet, GoogleNet and ResNet in Tensor flow
                to classNameify the lung cancer images
                </p>
            </div>
        </div>
    </section>
    <div id="just-sec">
        <div className="overlay">
            <p><strong>Skills :</strong></p>
        </div>

    </div>
    <section id="gallery-sec">
        <div className="container ">
            <div className="row text-center min-set">
                <div className="col-md-12">
                    <h2><mark className="head-glow">Exposure</mark></h2>
                    <hr className="sub-hr" />
                </div>
            </div>
            <div id="port-folio">
                <div className="row ">
                    <ul id="filters">
                        <li><span className="filter active" data-filter="HTML BOOTSTRAP WORDPRESS">All </span></li>
                        <li><span className="filter">/</span></li>
                        <li><span className="filter" data-filter="HTML">HTML</span></li>
                        <li><span className="filter">/</span></li>
                        <li><span className="filter" data-filter="BOOTSTRAP">BOOTSTRAP</span></li>
                        <li><span className="filter">/</span></li>
                        <li><span className="filter" data-filter="WORDPRESS">WORDPRESS</span></li>
                    </ul>
                    <div className="col-md-4 col-sm-4">

                        <div className="portfolio-item BOOTSTRAP mix_all" data-cat="BOOTSTRAP">


                            <a className="preview" href="img/portfolio/11.jpg">

                                <img src="img/portfolio/11.jpg" className="img-responsive " alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">

                        <div className="portfolio-item HTML mix_all" data-cat="HTML">


                            <a className="preview" href="img/portfolio/22.jpg">

                                <img src="img/portfolio/22.jpg" className="img-responsive " alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">

                        <div className="portfolio-item WORDPRESS mix_all" data-cat="WORDPRESS">


                            <a className="preview" href="img/portfolio/33.jpg">

                                <img src="img/portfolio/33.jpg" className="img-responsive " alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">

                        <div className="portfolio-item BOOTSTRAP mix_all" data-cat="BOOTSTRAP">

                            <a className="preview" href="img/portfolio/44.jpg">

                                <img src="img/portfolio/44.jpg" className="img-responsive " alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">

                        <div className="portfolio-item HTML mix_all" data-cat="HTML">


                            <a className="preview" href="img/portfolio/55.jpg">

                                <img src="img/portfolio/55.jpg" className="img-responsive " alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">

                        <div className="portfolio-item HTML mix_all" data-cat="HTML">

                            <a className="preview" href="img/portfolio/66.jpg">

                                <img src="img/portfolio/66.jpg" className="img-responsive " alt="" />
                            </a>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>
    <section id="location-sec">
        <div className="container">
            <div className="row text-center min-set">
                <div className="col-md-12">
                    <h2><mark className="head-glow">OUR </mark>LOCATION </h2>
                    <hr className="sub-hr" />
                </div>
            </div>
            <div className="row">

                <div className="col-md-12 text-center">
                    <h3>BinaryTheme.com</h3>
                    <br />
                    <h4>234/78A , New Fake Street, </h4>
                    <h4>New York Lane, </h4>
                    <h4>United States</h4>
                    <br />
                    <a href="http://www.binarytheme.com/" target="_blank" style={{"color": "#fff", "font-size": "12px"}}>Design by : binarytheme.com</a>
                </div>
            </div>

        </div>
    </section>
    <section>
        <div id="cell-annotation">
            <div className="card-header">
                <h4 className="mb-0">
                    Easy Cell Annotation
                </h4>
                <h6>
                    UTA, CSE, SMILE Lab, Arlington, USA
                </h6>
            </div>
            <div className="card-block">
                <Project />
            </div>
        </div>
    </section> </div>,document.getElementById("container"));
}

render();
