import React, { Component } from 'react'


export default class PersonalData extends Component {
    render() {
        console.log('personal data ', this.props.personalInfo);
        return (
            <div className='component'>
                <h1 className='component-title'>
                    personal details
                </h1>
                <div className="inputs">
                    <form action="">
                        <div className="first_part">
                            <div className="avatar">
                                <div className="avatar_image">
                                    <img src="https://img.icons8.com/ios-filled/100/ffffff/camera--v2.png" alt="profile" />
                                </div>
                                <input type="file" name="profile_img" id="profile_img" title=' ' 
                                value={this.props.personalInfo.avatar}  
                                onChange={(e) => {this.props.handleChange(e,"")}}
                                />
                            </div>
                            <div className="input_names">
                                <label htmlFor="first_name">first name</label>
                                <input type="text" name="first_name" id="first_name" 
                                value={this.props.personalInfo.first_name}  
                                onChange={(e) => {this.props.handleChange(e,"first_name")}}
                                />
                                <label htmlFor="last_name">last name</label>
                                <input type="text" name="last_name" id="last_name" 
                                value={this.props.personalInfo.last_name}  
                                onChange={(e) => {this.props.handleChange(e,"last_name")}}
                                />
                            </div>
                        </div>
                        <div className="second_part">
                            <div>
                                <label htmlFor="email_adress">email adress</label>
                                <input type="email" name="email_address" id="email_address" 
                                value={this.props.personalInfo.email_address}  
                                onChange={(e) => {this.props.handleChange(e,"email_address")}}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">phone number</label>
                                <input type="number" name="phone" id="phone" 
                                value={this.props.personalInfo.phone}  
                                onChange={(e) => {this.props.handleChange(e,"phone")}}
                                />
                            </div>
                        </div>
                        <div className="third_part">
                            <label htmlFor="address">address</label>
                            <input type="text" name="address" id="adress" 
                            value={this.props.personalInfo.address}  
                            onChange={(e) => {this.props.handleChange(e,"address")}}
                            />
                        </div>
                        <div className="fourth_part">
                            <div>
                                <label htmlFor="zip_code">zip code</label>
                                <input type="number" name="zip_code" id="zip_code" 
                                value={this.props.personalInfo.zip_code}  
                                onChange={(e) => {this.props.handleChange(e,"zip_code")}}
                                />
                            </div>
                            <div>
                                <label htmlFor="city">city/town</label>
                                <input type="text" name="city" id="city" 
                                value={this.props.personalInfo.city}  
                                onChange={(e) => {this.props.handleChange(e,"city")}}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
