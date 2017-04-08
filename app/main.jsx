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
        <div className="container" style={{textAlign:"center"}}>
            <div className="container row" style={{textAlign:"center"}}>
                <img className="kumar-dp" src="images/kumar-gayatri.jpg" />
            </div>
            <div className="container row" style={{textAlign:"center"}}>
                <h3>Kumar Jayaram Gayatri</h3>
                <h5>Full Stack Developer | Data Analyst</h5>
                <SocialIcon url="http://www.linkedin.com/in/kumar-jayaram-gayatri-48103179"></SocialIcon>
                <SocialIcon url="http://github.com/kumarGayu"></SocialIcon>
            </div>
            <div className="container">
                <div id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="row" id="Education">
                        <div className="col-sm-4">
                            <div className="container card">
                                <h4 className="card-title">Master of Science</h4>
                                <img className="card-img-top" src="images/uta.jpg" alt="Card image cap" />
                                <div className="card-block">
                                    <h5 className="card-title">University of Texas at Arlington</h5>
                                    <a href="#" className="btn btn-primary btn-space">More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="container card">
                                <h4 className="card-title">Bachelor of Engineering</h4>
                                <img className="card-img-top" src="images/bit.jpg" alt="Card image cap" />
                                <div className="card-block">
                                    <h5 className="card-title">Bangalore Institute of Technology</h5>
                                    <a href="#" className="btn btn-primary btn-space">More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingTwo">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#profession" aria-expanded="false" aria-controls=
                                        "profession">
                                    Profession
                                </a>
                            </h5>
                        </div>
                        <div className="row collapse" id="profession" role="tabpanel" aria-labelledby="headingThree">
                            <div className="col-sm-4">
                                <div className="container card">
                                    <h4 className="card-title">Full stack developer</h4>
                                    <img className="card-img-top" src="images/Nokia.jpg" alt="Card image cap" />
                                    <div className="card-block">
                                        <h5 className="card-title">Nokia Networks</h5>
                                        <a href="#" className="btn btn-primary btn-space">More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="container card">
                                    <h4 className="card-title">Data analyst</h4>
                                    <img className="card-img-top" src="images/uta.jpg" alt="Card image cap" />
                                    <div className="card-block">
                                        <h5 className="card-title">Research Assistant</h5>
                                        <a href="#" className="btn btn-primary btn-space">More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="headingThree">
                            <h5 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#Projects" aria-expanded="false" aria-controls=
                                        "Projects">
                                    Projects
                                </a>
                            </h5>
                        </div>
                        <div className="row collapse" id="Projects" role="tabpanel" aria-labelledby="headingThree">
                        <div className="col-sm-4">
                                <div className="container card">
                                    <img className="card-img-top" src="images/deep-learning.jpg" alt="Card image cap" />
                                    <div className="card-block">
                                        <h5 className="card-title">Easy Cell Annotation</h5>
                                        <a href="#" className="btn btn-primary btn-space">More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="container card">
                                    <img className="card-img-top" src="images/map-integration.jpg" alt="Card image cap" />
                                    <div className="card-block">
                                        <h5 className="card-title">Google Map Integration</h5>
                                        <a href="#" className="btn btn-primary btn-space">More</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <div className="container card" style={{width: '75%'}}>
                <div className="card-header">
                    <h4 className="mb-0">
                        Nokia Networks,
                    </h4>
                    <h6>
                        Bangalore, India
                    </h6>
                </div>
                <div className="card-top">
                    <img className="card-img-top" src="images/Web_Development.jpg" alt="Card image cap" />
                </div>
                <div className="card-block">
                    <h5 className="card-title">Full Stack Developer</h5>
                    <p className="card-text">
                        <b>o</b> Developed dashboards for the telecom operators to monitor their network elements <br/>
                        <b>o</b> Proficient in building web user interfaces using ReactJS, jQuery, Ajax, HTML and CSS <br/>
                        <b>o</b> Implemented many internal web applications using react.js and flux architecture <br/>
                        <b>o</b> Designed RESTful services in Java with encrypting sensitive information <br/>
                        <b>o</b> Reduced the query execution time by 60% for a critical ETL job which scanned 2.5 Million tuples <br/>
                        <b>o</b> Led the automation of the Front-End tests using Selenium web driver for cross browser compatibility <br
                    />
                    </p>
                    <h5 className="card-title">Skills</h5>
                    <p className="card-text">
                        <b> Object Oriented JavaScript, Java, Python, C#, SQL, RESTful web services, Node.js, AngularJS, ReactJS, Gulp,
                            Bower, Browserify,
                            jQuery, AJAX, MongoDB, Cassandra, PostgreSQL, Oracle 11g and MySQL </b>
                    </p>
                    <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                    <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                </div>
            </div>
            <div className="container card" style={{width: '75%'}}>
            <div className="card-header">
                <h4 className="mb-0">
                    University of Texas at Arlington,
                </h4>
                <h6>
                    Texas, USA
                </h6>
            </div>
            <div className="card-top">
                <img className="card-img-top" src="images/data_analyst.jpg" alt="Card image cap" />
            </div>
            <div className="card-block">
                <h5 className="card-title">Research Assistant, Deep Learninng</h5>
                <p className="card-text">
                    <b>o</b> Modelled prostate cancer data using SVM and random forest algorithms to achieve 70% classification<br />
                    <b>o</b> Tested several Convolutional Neural Networks such as AlexNet, GoogleNet and ResNet in Tensor flow to
                    classify the lung cancer images <br />
                </p>
                <h5 className="card-title">Skills</h5>
                <p className="card-text">
                    <b> Matlab, Python, Tensorflow, SQL, MongoDB, Cassandra, PostgreSQL, Hadoop, Neural Networks, Deep Learning</b>
                </p>
                <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
                <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
            </div>
        </div>
        <div className="container card" style={{width: '75%'}}>
        <div className="card-block">
            <h4 className="card-title">Education</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
            <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
            <a href="#" className="btn btn-primary btn-space">Go somewhere</a>
        </div>
        </div>
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
        </div>
        </div>,document.getElementById("container")
        );
}

render();
