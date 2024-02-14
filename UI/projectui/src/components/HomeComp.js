import {useState} from 'react';
export const HomeComp = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (weight && height) {
      const newBmi = weight / (height / 100) ** 2;
      setBmi(newBmi.toFixed(2));
    } else {
      alert('Please enter both weight and height.');
    }
  };

  return (
    <div>
      <div className="container-fluid custom-bg">
        <h1
          style={{
            fontFamily: 'Antic Didone',
            color: 'black',
            backgroundColor: 'beige',
          }}>
          HEALTHY EATING AND EASY TRACKING FOR BUSY PEOPLE
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mt-5">
          <form onSubmit={calculateBmi}>
            <div className="row">
              <div className="col-md-6 form-group">
                <label for="weight">Weight (kg):</label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="col-md-6 form-group">
                <label for="height">Height (cm):</label>
                <input
                  type="number"
                  className="form-control"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Calculate BMI
            </button>
          </form>
          {bmi !== 0 && (
            <div className="mt-3">
              Your BMI is: {bmi}. {interpretBmi(bmi)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function interpretBmi(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
