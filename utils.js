// MedVault Utils — Emergency Medical Bridge

function generateId() {
  return "MV-" + Math.floor(1000 + Math.random() * 9000);
}

function savePatient(data) {
  localStorage.setItem("mv_patient_" + data.id, JSON.stringify(data));
}

function getPatient(id) {
  const raw = localStorage.getItem("mv_patient_" + id);
  return raw ? JSON.parse(raw) : null;
}

function getAllPatients() {
  const patients = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("mv_patient_")) {
      try {
        patients.push(JSON.parse(localStorage.getItem(key)));
      } catch (e) {}
    }
  }
  return patients;
}

function sendAlert(obj) {
  localStorage.setItem("mv_alert", JSON.stringify({ ...obj, ts: Date.now(), seen: false }));
}

function getAlert() {
  const raw = localStorage.getItem("mv_alert");
  return raw ? JSON.parse(raw) : null;
}

function clearAlert() {
  localStorage.removeItem("mv_alert");
}

// Pre-load demo patients
(function preloadDemoPatients() {
  const demos = [
    {
      id: "MV-001",
      name: "Rajesh Kumar",
      age: 42,
      blood: "B+",
      allergies: "Penicillin|Sulfa drugs",
      conditions: "Type 2 Diabetes|Hypertension",
      medications: "Metformin 500mg|Amlodipine 5mg",
      emergency: "Sunita Kumar - 9876543210",
      status: "critical"
    },
    {
      id: "MV-002",
      name: "Priya Sharma",
      age: 31,
      blood: "O+",
      allergies: "None",
      conditions: "None",
      medications: "None",
      emergency: "Vikram Sharma - 8765432109",
      status: "stable"
    },
    {
      id: "MV-003",
      name: "Arjun Mehta",
      age: 58,
      blood: "A+",
      allergies: "Aspirin",
      conditions: "Hypertension|Atrial Fibrillation",
      medications: "Warfarin 5mg|Atenolol 50mg",
      emergency: "Kavya Mehta - 7654321098",
      status: "urgent"
    }
  ];
  demos.forEach(p => {
    if (!localStorage.getItem("mv_patient_" + p.id)) {
      savePatient(p);
    }
  });
})();
