import React, { Component } from 'react'
import MyProgressBar from './MyProgressBar'
import PersonalData from './PersonalData';
import Experiences from './Experiences';
import Template from './Template';


export default class Content extends Component {
    constructor(props) {
        super(props);
        this.steps = [
            { title: "Personal Details", progress: 20 },
            { title: "Experiences", progress: 70 },
            { title: "Template", progress: 100 }];

        this.state = {
            step: 0,
            personalInfo: {
                first_name: '',
                last_name: '',
                email_address: '',
                phone: '',
                address: '',
                zip_code: '',
                city: 'Bejaad',
                avatar: ''
            },
            experience: {
                job_title: '',
                job_description: '',
                company: '',
                job_begin: '',
                job_end: ''
            }
        }
    }

    handleChange = (e, id) => {
        e.preventDefault();
        console.log("on change ", this.state.experience);
        switch (id) {
            case 'first_name':
                this.setState({
                    personalInfo:
                    {
                        first_name: e.target.value,
                        last_name: this.state.personalInfo.last_name,
                        email_address: this.state.personalInfo.email_address,
                        phone: this.state.personalInfo.phone,
                        address: this.state.personalInfo.address,
                        zip_code: this.state.personalInfo.zip_code,
                        city: this.state.personalInfo.city,
                        avatar: this.state.personalInfo.avatar
                    }
                });
                break;
            case 'last_name':
                this.setState({
                    personalInfo:
                    {
                        first_name: this.state.personalInfo.first_name,
                        last_name: e.target.value,
                        email_address: this.state.personalInfo.email_address,
                        phone: this.state.personalInfo.phone,
                        address: this.state.personalInfo.address,
                        zip_code: this.state.personalInfo.zip_code,
                        city: this.state.personalInfo.city,
                        avatar: this.state.personalInfo.avatar
                    }
                });
                break;
            case 'email_address':
                this.setState({
                    personalInfo:
                    {
                        first_name: this.state.personalInfo.first_name,
                        last_name: this.state.personalInfo.last_name,
                        email_address: e.target.value,
                        phone: this.state.personalInfo.phone,
                        address: this.state.personalInfo.address,
                        zip_code: this.state.personalInfo.zip_code,
                        city: this.state.personalInfo.city,
                        avatar: this.state.personalInfo.avatar
                    }
                });
                break;
            case 'phone':
                this.setState({
                    personalInfo:
                    {
                        first_name: this.state.personalInfo.first_name,
                        last_name: this.state.personalInfo.last_name,
                        email_address: this.state.personalInfo.email_address,
                        phone: e.target.value,
                        address: this.state.personalInfo.address,
                        zip_code: this.state.personalInfo.zip_code,
                        city: this.state.personalInfo.city,
                        avatar: this.state.personalInfo.avatar
                    }
                });
                break;
            case 'address':
                this.setState({
                    personalInfo:
                    {
                        first_name: this.state.personalInfo.first_name,
                        last_name: this.state.personalInfo.last_name,
                        email_address: this.state.personalInfo.email_address,
                        phone: this.state.personalInfo.phone,
                        address: e.target.value,
                        zip_code: this.state.personalInfo.zip_code,
                        city: this.state.personalInfo.city,
                        avatar: this.state.personalInfo.avatar
                    }
                });
                break;
            case 'zip_code':
                this.setState({
                    personalInfo:
                    {
                        first_name: this.state.personalInfo.first_name,
                        last_name: this.state.personalInfo.last_name,
                        email_address: this.state.personalInfo.email_address,
                        phone: this.state.personalInfo.phone,
                        address: this.state.personalInfo.address,
                        zip_code: e.target.value,
                        city: this.state.personalInfo.city,
                        avatar: this.state.personalInfo.avatar
                    }
                });
                break;
            case 'city':
                this.setState({
                    personalInfo:
                    {
                        first_name: this.state.personalInfo.first_name,
                        last_name: this.state.personalInfo.last_name,
                        email_address: this.state.personalInfo.email_address,
                        phone: this.state.personalInfo.phone,
                        address: this.state.personalInfo.address,
                        zip_code: this.state.personalInfo.zip_code,
                        city: e.target.value,
                        avatar: this.state.personalInfo.avatar
                    }
                });
                break;
            case 'avatar':
                this.setState({
                    personalInfo:
                    {
                        first_name: this.state.personalInfo.first_name,
                        last_name: this.state.personalInfo.last_name,
                        email_address: this.state.personalInfo.email_address,
                        phone: this.state.personalInfo.phone,
                        address: this.state.personalInfo.address,
                        zip_code: this.state.personalInfo.zip_code,
                        city: this.state.personalInfo.city,
                        avatar: 'image'
                    }
                });
                break;
            case 'job_title':
                this.setState({
                    experience:
                    {
                        job_title: e.target.value,
                        job_description: this.state.experience.job_description,
                        company: this.state.experience.company,
                        job_begin: this.state.experience.job_begin,
                        job_end: this.state.experience.job_end
                    }
                });
                break;
            case 'job_description':
                this.setState({
                    experience:
                    {
                        job_title: this.state.experience.job_title,
                        job_description: e.target.value,
                        company: this.state.experience.company,
                        job_begin: this.state.experience.job_begin,
                        job_end: this.state.experience.job_end
                    }
                });
                break;
            case 'company':
                this.setState({
                    experience:
                    {
                        job_title: this.state.experience.job_title,
                        job_description: this.state.experience.job_description,
                        company: e.target.value,
                        job_begin: this.state.experience.job_begin,
                        job_end: this.state.experience.job_end
                    }
                });
                break;
            case 'job_begin':
                this.setState({
                    experience:
                    {
                        job_title: this.state.experience.job_title,
                        job_description: this.state.experience.job_description,
                        company: this.state.experience.company,
                        job_begin: e.target.value,
                        job_end: this.state.experience.job_end
                    }
                });
                break;
            case 'job_end':
                this.setState({
                    experience:
                    {
                        job_title: this.state.experience.job_title,
                        job_description: this.state.experience.job_description,
                        company: this.state.experience.company,
                        job_begin: this.state.experience.job_begin,
                        job_end: e.target.value
                    }
                });
                break;
            default:
                break;
        }
    };

    handleNextbutton = () => {
        this.setState({
            step: Number(this.state.step + 1)
        })
    }
    handlePrevbutton = () => {
        this.setState({
            step: Number(this.state.step - 1)
        })
    }
    render() {
        return (
            <div className='Content'>
                <MyProgressBar complition={this.steps[this.state.step].progress} title={this.steps[this.state.step].title} />
                {this.state.step === 0 && <PersonalData personalInfo={this.state.personalInfo} handleChange={this.handleChange} />}
                {this.state.step === 1 && <Experiences experience={this.state.experience} handleChange={this.handleChange} />}
                {this.state.step === 2 && <Template userData={this.state.personalInfo} userExperiences={this.state.experience} />}
                <div className='steps-navigation'>
                    {this.state.step !== 0 && <button className='btn prev-btn' onClick={this.handlePrevbutton}>previous step</button>}
                    {this.state.step !== 2 && <button className='btn next-btn' onClick={this.handleNextbutton}>next step</button>}
                </div>
            </div >
        )
    }
}