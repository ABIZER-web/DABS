// You can expand this with features like real-time search, dropdown calendar, etc.
console.log("Doctor Appointment Page Loaded");
const doctorCards = document.querySelectorAll('.doctor-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 150); // staggered animation
    }
  });
}, {
  threshold: 0.4
});

doctorCards.forEach(card => observer.observe(card));
// Add event listeners for form submission

// Doctor Database
const doctors = [
  { name: "Dr. Ayesha Khan", specialty: "Cardiologist", phone: "9876543210", address: "Apollo Hospital, Mumbai" },
  { name: "Dr. Rohit Sharma", specialty: "Dermatologist", phone: "9123456780", address: "Fortis Clinic, Delhi" },
  { name: "Dr. Priya Mehta", specialty: "Pediatrician", phone: "9812345678", address: "AIIMS, Delhi" },
  { name: "Dr. Sameer Patel", specialty: "Orthopedic", phone: "9988776655", address: "Lilavati Hospital, Mumbai" },
  { name: "Dr. Neha Singh", specialty: "Gynecologist", phone: "9090909090", address: "CloudNine Hospital, Bangalore" },
  { name: "Dr. Raj Malhotra", specialty: "ENT Specialist", phone: "9911223344", address: "Medanta, Gurgaon" },
  { name: "Dr. Sneha Joshi", specialty: "Dentist", phone: "9822112233", address: "Smile Dental, Pune" },
  { name: "Dr. Vikram Nair", specialty: "Neurologist", phone: "9345678901", address: "KIMS, Hyderabad" },
  { name: "Dr. Mehul Shah", specialty: "General Physician", phone: "9765432109", address: "Apollo Clinic, Ahmedabad" },
  { name: "Dr. Anjali Deshmukh", specialty: "Psychiatrist", phone: "9833445566", address: "NIMHANS, Bangalore" },
  { name: "Dr. Ramesh Iyer", specialty: "Oncologist", phone: "9122334455", address: "Tata Memorial, Mumbai" },
  { name: "Dr. Kavita Rathi", specialty: "Ophthalmologist", phone: "9001122334", address: "LV Prasad Eye, Hyderabad" },
  { name: "Dr. Deepak Verma", specialty: "Urologist", phone: "9344556677", address: "Max Hospital, Delhi" },
  { name: "Dr. Shalini Gupta", specialty: "Endocrinologist", phone: "9222333444", address: "Manipal Hospital, Bangalore" },
  { name: "Dr. Arjun Reddy", specialty: "Dermatologist", phone: "9112233445", address: "Care Hospital, Hyderabad" },
  { name: "Dr. Nisha Kapoor", specialty: "Cardiologist", phone: "9334455667", address: "Ruby Hall Clinic, Pune" },
  { name: "Dr. Amit Bansal", specialty: "Orthopedic", phone: "9445566778", address: "Fortis, Chandigarh" },
  { name: "Dr. Swati Saxena", specialty: "Pediatrician", phone: "9556677889", address: "Apollo Children’s Hospital, Chennai" },
  { name: "Dr. Sunil Chawla", specialty: "Gastroenterologist", phone: "9667788990", address: "Sir Ganga Ram Hospital, Delhi" },
  { name: "Dr. Pooja Nair", specialty: "Neurologist", phone: "9778899001", address: "Aster CMI, Bangalore" }
];

// Live Search (Suggestions + Results)
function liveSearch() {
  const query = document.getElementById("search").value.toLowerCase();
  const suggestionBox = document.getElementById("suggestions");
  const resultBox = document.getElementById("doctor-result");

  suggestionBox.innerHTML = "";
  resultBox.innerHTML = "";

  if (query.length > 0) {
    // Filter Matches
    const matches = doctors.filter(
      doc =>
        doc.name.toLowerCase().includes(query) ||
        doc.specialty.toLowerCase().includes(query)
    );

    // Show Suggestions (max 5)
    matches.slice(0, 5).forEach(doc => {
      const li = document.createElement("li");
      li.textContent = `${doc.name} - ${doc.specialty}`;
      li.onclick = function () {
        document.getElementById("search").value = doc.name;
        suggestionBox.innerHTML = "";
        showResults([doc]); // show selected doctor
      };
      suggestionBox.appendChild(li);
    });

    // Show Results Immediately
    if (matches.length > 0) {
      showResults(matches);
    } else {
      resultBox.innerHTML = `<p class="not-found">❌ Doctor Not Found</p>`;
    }
  }
}

// Show Doctor Results
function showResults(matches) {
  const resultBox = document.getElementById("doctor-result");
  resultBox.innerHTML = "";

  matches.forEach(doc => {
    resultBox.innerHTML += `
      <div class="doctor-card">
        <h3>${doc.name}</h3>
        <p><strong>Specialty:</strong> ${doc.specialty}</p>
        <p><strong>Phone:</strong> ${doc.phone}</p>
        <p><strong>Address:</strong> ${doc.address}</p>
      </div>
    `;
  });
}