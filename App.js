import React from 'react';
import ReactDOM from 'react-dom';

var LoginComponent = React.createClass({
	render:function(){
		return (
				<div>
					<span className="project-head">PH</span>
					<div className="login">
						<a href="#">
							<img src="images/logo.png" alt="To The New" />
						</a>
				    	<form>
				    		<ul>
				    			<li>
				                    <label className="form-label">Login</label>
				                    <input type="text" className="form-input" />
				                </li>
				                <li>
				                    <label className="form-label" >Password</label>
				                    <input type="password" className="form-input" />
				                </li>
				                <li>
				                    <button type="submit" className="primary-button">Submit</button>
				                </li>
				    		</ul>
				    	</form>   
				    </div>
				</div>
			);
	}
});

  ReactDOM.render(<LoginComponent />, document.getElementById("app"));

 