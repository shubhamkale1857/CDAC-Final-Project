import Sidebar from "./Sidebar"

<<<<<<< Updated upstream
export const HomeComp = ()=>{
    return(
        <div className="container-fluid custom-bg">
            
            <h1 style={{fontFamily:"Antic Didone", color:"black", backgroundColor:"beige"}}>HEALTHY EATING AND EASY TRACKING FOR BUSY PEOPLE</h1>
            
        </div>
    )
}
=======
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
    <div className="container-fluid">
      <div className="row custom-bg" style={{ borderRadius: "0 0 70% 70%" }}>
        <div className="col">
          <h1 className="titlehome">BODY POSITIVITY IS A MYTH</h1>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Calculate BMI</h3>
          <form>
            <div className="form-group">
              <label htmlFor="weight">Weight (kg):</label>
              <input type="number" className="form-control" id="weight" onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="height">Height (cm):</label>
              <input type="number" className="form-control" id="height" onChange={(e) => setHeight(e.target.value)} />
            </div>
            <input type="button" value={'Calculate BMI'} className="btn btn-primary" onClick={calculateBmi} />
          </form>
          <span style={{ color: 'red' }}>{msg}</span>
          {bmi && (
            <div>
              <h3>Results:</h3>
              <div>
                <h4 style={{ color: bmi < 18.5 ? 'orange' : bmi < 25 ? 'green' : bmi < 35 ? 'orange' : 'red' }}>Your BMI is: {bmi}. You are {interpretBmi(bmi)}</h4>
              </div>
            </div>
          )}
          <br />
          <h4>BMI Range</h4>
          <div className="d-flex justify-content-between">
            <span>14</span>
            <span>16</span>
            <span>17</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>35</span>
            <span>40</span>
          </div>
          <br />
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td style={{ backgroundColor: 'red', height: 30 }}></td>
                <td style={{ backgroundColor: 'orange' }}></td>
                <td style={{ backgroundColor: 'yellow' }}></td>
                <td style={{ backgroundColor: 'green' }}></td>
                <td style={{ backgroundColor: 'yellow' }}></td>
                <td style={{ backgroundColor: 'orange' }}></td>
                <td style={{ backgroundColor: 'red' }}></td>
              </tr>
              <tr>
                <td colSpan={3} style={{ textAlign: 'center', color: 'orange' }}>Underweight</td>
                <td style={{ textAlign: 'center', color: 'green' }}>Normal</td>
                <td colSpan={2} style={{ textAlign: 'center', color: 'orange' }}>Overweight</td>
                <td style={{ textAlign: 'center', color: 'red' }}>Obese</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: 'grey', height: 150 }}></div>
      </div>
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
>>>>>>> Stashed changes
