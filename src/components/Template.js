import React from 'react'
import '../App.css'
import ReactToPrint from 'react-to-print'
import styled from 'styled-components'

// export default 
class CV extends React.PureComponent {
  render() {
    return (
      <div className='template' id="cv">
        <div className="pdf">
          <div className="user_info">
            <div className="user_avatar">
            </div>
            <div className="user_details">
              <div className='user_name'>
                <h1>{this.props.userData.first_name + " " + this.props.userData.last_name}</h1>
              </div>
              <h1 className='cv_title' >Software Developer</h1>
            </div>
          </div>
          <div className="main">
            <div className="skills">
              <div className='contact'>
                <div className='user_data'>
                  <h1>Contact</h1>
                  <h2>Email Address</h2>
                  <p>
                    {this.props.userData.email_address}</p>
                  <h2>phone Number</h2>
                  <p>
                    {this.props.userData.phone}</p>
                  <h2>local Address</h2>
                  <p>
                    {this.props.userData.address + " "}
                    {this.props.userData.city + " " + this.props.userData.zip_code}</p>
                </div>
              </div>
              <div className='skills_list'>
                <h1>Skills</h1>
                <div className="list">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>REACT JS</p>
                  <p>NODE JS</p>
                  <p>Flutter</p>
                  <p>ANGULAR</p>
                  <p>NEST JS</p>
                  <p>TYPESCRIPT</p>
                </div>
              </div>
              <div className='skills_list'>
                <h1>Certifications</h1>
                <div className="">
                  <p>Cloudera Certified Developer for Apache Hadoop (CCDH)</p>
                  <p>Oracle Java Certifications Associate Professional</p>
                </div>
              </div>
            </div>
            <div className="user_edu_and_exp">
              <div className="user-education">
                <h1>Education</h1>
                <h2>Bachelor of Computer Science</h2>
                <h3>Carnegie Mellon University</h3>
                <ul>
                  <li>Heavy focus on full stack engineering with modules on both front and back end processes.
                  </li>
                  <li>
                    Built a mock payment system for an Android ecommerce app for a senior year project.
                  </li>
                </ul>
              </div>
              <div className="user-experiance">
                <h1>Experience</h1>
                <h2>{this.props.userExperiences.job_title}</h2>
                <h3>{this.props.userExperiences.company}</h3>
                <h3>{this.props.userExperiences.job_begin}</h3>
                <p>{this.props.userExperiences.job_description}</p>
                <h2>{this.props.userExperiences.job_title}</h2>
                <h3>{this.props.userExperiences.company}</h3>
                <h3>{this.props.userExperiences.job_begin}</h3>
                <p>{this.props.userExperiences.job_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Download = styled.button`
  background-color: #6169cf;
	border: 2px solid #6169cf;
	border: none;
	width: 200px;
	height: 50px;
	border-radius: 4px;
	color: white;
	font-size: large;
	text-transform: capitalize;
	font-weight: 500;
  margin-top :10px;
  margin-left: 323px;
`

class Template extends React.Component {
  render() {
    return (
      <div>
        <CV userData={this.props.userData} userExperiences={this.props.userExperiences} ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() =>
            // <button className='btn' onClick={this.handlePrint}>print cv </button>
            <Download>Download Cv</Download>
          }
          content={() => this.componentRef}
        />
      </div>
    );
  }
}
export default Template;