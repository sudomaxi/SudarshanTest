<!DOCTYPE html>
<html>
<head>
  <title>BMI Calculator</title>
  <style>
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>BMI Calculator</h2>
    <form id="bmiForm">
      <label for="weight">Weight (in kg):</label>
      <input type="number" id="weight" required><br>

      <label for="height">Height (in cm):</label>
      <input type="number" id="height" required><br>

      <button type="submit">Calculate BMI</button>
    </form>
    <div id="result"></div>
  </div>

  <script>
    document.getElementById('bmiForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var weight = parseFloat(document.getElementById('weight').value);
      var height = parseFloat(document.getElementById('height').value);

      if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid weight and height values.';
        return;
      }

      var bmi = weight / Math.pow(height / 100, 2);
      bmi = bmi.toFixed(2);

      document.getElementById('result').textContent = 'Your BMI is: ' + bmi;
    });
  </script>
</body>
</html>
