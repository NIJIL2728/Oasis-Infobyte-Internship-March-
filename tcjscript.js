function convertTemperature() 
{
  const degree = parseFloat(document.getElementById('degree').value);
  const tempType = document.getElementById('temp-type').value;
  let result;

  if (tempType === 'fahrenheit') {
    result = (degree - 32) * (5 / 9); 
  } else if (tempType === 'kelvin') {
    result = degree - 273.15; 
  }

  document.getElementById('celsius').textContent = result.toFixed(2);
}


function displayCurrentTime() 
{
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; 

  document.getElementById('current-time').textContent = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

document.getElementById('convert-btn').addEventListener('click', convertTemperature);

displayCurrentTime();

setInterval(displayCurrentTime, 1000); 