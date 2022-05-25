import React, { Component } from 'react'

export default class Experiences extends Component {
    render() {
        console.log("component state ",this.props.experience);
        return (
            <div className='component experinces' >
                <h1 className='component-title'>
                    Experience
                </h1>
                <div className="inputs">
                    <form action="">
                        <div className="first_part">
                            <div className="input_names">
                                <div>
                                    <label htmlFor="job_title">job title</label>
                                    <input type="text" name="job_title" id="job_title"
                                        value={this.props.experience.job_title}
                                        onChange={(e) => this.props.handleChange(e,"job_title")}
                                        />
                                </div>
                                <div>
                                    <label htmlFor="job_description">job description</label>
                                    <textarea name="job_description" id="job_description" cols="30" rows="4"
                                        value={this.props.experience.job_description}
                                        onChange={(e) => this.props.handleChange(e,"job_description")}
                                        >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="third_part">
                            <label htmlFor="company">company name</label>
                            <input type="text" name="company" id="company" 
                            value={this.props.experience.company} 
                            onChange={(e) => this.props.handleChange(e,"company")}
                            />
                        </div>
                        <div className="second_part">
                            <div>
                                <label htmlFor="job_begin">start date</label>
                                <input type="datetime-local" name="job_begin" id="job_begin" 
                                value={this.props.experience.job_begin}
                                onChange={(e) => this.props.handleChange(e,"job_begin")}
                                />
                            </div>
                            <div>
                                <label htmlFor="job_end">end date</label>
                                <input type="datetime-local" name="job_end" id="job_end" 
                                value={this.props.experience.job_end}
                                onChange={(e) => this.props.handleChange(e,"job_end")}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
