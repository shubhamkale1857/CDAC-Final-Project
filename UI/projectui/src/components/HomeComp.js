import {useState} from 'react';
export const HomeComp = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const[msg,setMsg] = useState("");

  const calculateBmi = () => {
    if (weight && height) {
      const newBmi = weight / (height / 100) ** 2;
      setBmi(newBmi.toFixed(2));
      setMsg("");
    } else {
      setBmi(0);
      setMsg('Please enter both weight and height.');
    }
  };

  return (
    <div>
      <div className="container-fluid custom-bg">
        <div  style={{
            fontFamily: 'Antic Didone',
            color: 'black',
            textShadow: '2px 2px 4px white',
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
            
          }}>
        <h1>
          BODY POSITIVITY IS A MYTH
        </h1></div>

        
        




      </div>
      <br/>
      <div style={{marginLeft:490}}>
        <h3>Calculate BMI</h3>  
          <form>
            <table className='table table-borderless w-50'>
              <tbody>
                <tr>
                  <td><label for="weight">Weight (kg):</label>
                  <input type="number" className="form-control"  id="weight"  onChange={(e) => setWeight(e.target.value)}/></td>
                  <td>
                  <label for="height">Height (cm):</label>
                <input  type="number"  className="form-control" id="height" onChange={(e) => setHeight(e.target.value)} /></td>   
                </tr>
                <tr>
                  <td><input type="button" value={'Calculate BMI'} className="btn btn-primary" onClick={calculateBmi}/></td>
                </tr>
              </tbody>
            </table>
          </form>
          <span style={{color:'red'}}>{msg}</span>
          <span style={{ display: bmi ? 'inline' : 'none' }}>
            <h3>Results:</h3>
            <div>
                <h4 style={{color: bmi<18.5 ? 'orange' : bmi < 25 ? 'green' : bmi < 35 ? 'orange' : 'red'}}>Your BMI is: {bmi}. You are {interpretBmi(bmi)}</h4>
              </div>
          </span>

          <br/>
          <h4>BMI Range</h4>
          <span>14</span>
          <span style={{marginLeft:30}}>16</span>
          <span style={{marginLeft:35}}>17</span>
          <span style={{marginLeft:40}}>18.5</span>
          <span style={{marginLeft:80}}>25</span>
          <span style={{marginLeft:55}}>30</span>
          <span style={{marginLeft:55}}>35</span>
          <span style={{marginLeft:75}}>40</span>
          
         <table className='table table-borderless w-50'>
              <tbody>
                <tr>
                  <td style={{backgroundColor:'red', height:30}}></td>
                  <td style={{backgroundColor:'orange'}}></td>
                  <td style={{backgroundColor:'yellow'}}></td>
                  <td style={{backgroundColor:'green'}}></td>
                  <td style={{backgroundColor:'yellow'}}></td>
                  <td style={{backgroundColor:'orange'}}></td>
                  <td style={{backgroundColor:'red'}}></td>
                </tr>
                <tr>
                  
                  <td colSpan={3} style={{textAlign:'center'}}>Underweight</td>
                 
                  <td style={{textAlign:'center'}}>Normal</td>
                  
                  <td colSpan={2} style={{textAlign:'center'}}>Overweight</td>

                  <td style={{textAlign:'center'}}>Obese</td>
                  
                </tr>
              </tbody>
         </table> 
         
      </div>
         <div style={{backgroundColor:'grey', height:150}}></div>
    </div>
    
  );
};

function interpretBmi(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 25) {
    return 'Normal weight';
  } else if (bmi > 25 && bmi < 35) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
