import React from "react";

function Credit(props) {
	return (
    <div>
		<h1>Credit Page</h1>
		<p>Your Account Balance: {props.accBalance}</p>
			<form>
				<label>
					Amount: 
					<input type="number" />
				</label>
				<label>
					Description: 
					<input type="text" />
				</label>
				<input type="submit" />
			</form>
    </div>
  );
}

export default Credit;