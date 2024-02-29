document.addEventListener('DOMContentLoaded', function () {
   const calculateBtn = document.getElementById('calculateBtn');
   calculateBtn.addEventListener('click', function () {
      const todayHoursInput = document.getElementById('todayHours').value;
      const previousDaysHoursInput =
         document.getElementById('previousDaysHours').value;

      const totalWorkingHours = calculateTotalWorkingHours(
         todayHoursInput,
         previousDaysHoursInput
      );

      const resultDiv = document.getElementById('result');
      resultDiv.textContent = `Total working hours: ${totalWorkingHours}`;
   });
});

function calculateTotalWorkingHours(todayHours, previousDaysHours) {
   // Function to convert time string (HH:MM:SS) into total minutes
   function timeStringToMinutes(timeString) {
      const [hours, minutes, seconds] = timeString.split(':').map(Number);
      return hours * 60 + minutes + seconds / 60;
   }

   // Convert time strings to total minutes
   const todayMinutes = timeStringToMinutes(todayHours);
   const previousDaysMinutes = timeStringToMinutes(previousDaysHours);

   // Calculate total minutes
   const totalMinutes = todayMinutes + previousDaysMinutes;

   // Convert total minutes back to HH:MM format
   const totalHours = Math.floor(totalMinutes / 60);
   const remainingMinutes = Math.round(totalMinutes % 60);

   return `${totalHours}:${
      remainingMinutes < 10 ? '0' : ''
   }${remainingMinutes}`;
}
