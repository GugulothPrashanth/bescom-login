import './LoginModule.css';

function LoginModule(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className="formsection">
                        <h1 className='form-heading'>Rooftop system details </h1>
                            <form className='formdata'>
                                <div className='m-3'>
                                    <label for="uname">User Name* &nbsp;&nbsp;&nbsp;</label>
                                    <input type='text'name='user name' id="uname"/>

                                </div>
                                <div className='m-3'>
                                    <label>Type of Scheme &nbsp; &nbsp; &nbsp;<span>*</span></label>
                                    <select id="dropdown" name="dropdown">
                                        <option value="option1">SOURA GRUHA YOJAN(SGY)</option>
                                        <option value="option2">SOURA GRUHA YOJAN(SGY)-2020-2021</option>
                                    </select>
                                </div>
                                
                                <div className='m-3'>
                                    <label>Type of Grid Connectivity &nbsp;&nbsp;&nbsp;<span>*</span></label>
                                    <input type="radio" id="Gr" />
                                    <label for="Gr"> Gross Metering &nbsp; </label>
                                    <input type="radio" id="Nm" />
                                    <label for="Nm"> Net Metering </label>
                                </div>

                                    <div className='m-3'>
                                        <label>Solar Proposed in kWp* &nbsp;&nbsp;&nbsp;</label>
                                        <input type="text"/>
                                    </div>
                                        
                                    <div className='m-3'>
                                        <label>Minimum Shadow free area in Sq. mtr*&nbsp;&nbsp;&nbsp;</label>
                                        <input type="text"/>
                                    </div>
                                    <div className='m-3'>
                                        <label>Typ of Connection<span>*</span>&nbsp;&nbsp;&nbsp;</label>
                                        <select id="dropdown" name="dropdown">
                                            <option value="option1">Single Phase</option>
                                            <option value="option2">3 Phase LT</option>
                                            <option value="option2">3 Phase HT</option>
                                        </select>
                                    </div>
                                    <div className='m-3'>
                                        <label>Aadhar Number* &nbsp;&nbsp;&nbsp;</label>
                                        <input type="text" name='Aadhar number'/>
                                    </div>
                                    <div className='m-3'>
                                        <label>Permanent Account Number* &nbsp;&nbsp;&nbsp;</label>
                                        <input type="text" name='pan number'/>
                                    </div>
                                    <div className='m-3'>
                                        <label>PIN code* &nbsp;&nbsp;&nbsp;</label>
                                        <input type="text" name='pin code'/>
                                    </div>
                                    <div className='m-3'>
                                        <input type='submit' name="submit"/>
                                    </div>
                            </form>
                    </div>
                </div>
            </div>

            
        </div>
        
    );
}

export default LoginModule;