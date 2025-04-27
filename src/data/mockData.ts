// Mock patient data
export const patients = [
  {
    id: "P10001",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, CA 94123",
    dob: "15 Sep 1985",
    age: 38,
    gender: "female",
    status: "Active",
    lastVisit: "22 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    vitals: {
      heartRate: "72",
      bloodPressure: "120/80",
      temperature: "98.6",
      respiratoryRate: "16"
    },
    medicalHistory: {
      conditions: ["Hypertension", "Asthma"],
      allergies: ["Penicillin", "Peanuts"],
      medications: [
        { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
        { name: "Albuterol", dosage: "90mcg", frequency: "As needed" }
      ]
    },
    appointments: [
      { 
        date: "22/04/2025", 
        time: "9:30 AM", 
        reason: "Annual Check-up", 
        doctor: "Williams", 
        status: "Completed",
        room: "103"
      },
      { 
        date: "15/05/2025", 
        time: "2:00 PM", 
        reason: "Blood Pressure Follow-up", 
        doctor: "Smith", 
        status: "Scheduled",
        room: "105"
      }
    ]
  },
  {
    id: "P10002",
    name: "Michael Smith",
    email: "michael.s@example.com",
    phone: "(555) 234-5678",
    address: "456 Oak Ave, Somewhere, NY 10001",
    dob: "03 Jun 1975",
    age: 48,
    gender: "male",
    status: "Active",
    lastVisit: "18 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    vitals: {
      heartRate: "68",
      bloodPressure: "135/85",
      temperature: "98.4",
      respiratoryRate: "14"
    },
    medicalHistory: {
      conditions: ["Type 2 Diabetes", "High Cholesterol"],
      allergies: ["Sulfa drugs"],
      medications: [
        { name: "Metformin", dosage: "1000mg", frequency: "Twice daily" },
        { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily" }
      ]
    },
    appointments: [
      { 
        date: "18/04/2025", 
        time: "10:15 AM", 
        reason: "Diabetes Management", 
        doctor: "Johnson", 
        status: "Completed",
        room: "202"
      },
      { 
        date: "20/05/2025", 
        time: "1:30 PM", 
        reason: "Cholesterol Check", 
        doctor: "Williams", 
        status: "Scheduled",
        room: "104"
      }
    ]
  },
  {
    id: "P10003",
    name: "Sarah Davis",
    email: "sarah.d@example.com",
    phone: "(555) 345-6789",
    address: "789 Pine Ln, Elsewhere, TX 75001",
    dob: "22 Nov 1992",
    age: 32,
    gender: "female",
    status: "Active",
    lastVisit: "20 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    vitals: {
      heartRate: "76",
      bloodPressure: "118/75",
      temperature: "98.9",
      respiratoryRate: "18"
    },
    medicalHistory: {
      conditions: ["Anxiety", "Migraines"],
      allergies: ["Latex"],
      medications: [
        { name: "Sertraline", dosage: "50mg", frequency: "Once daily" },
        { name: "Sumatriptan", dosage: "50mg", frequency: "As needed" }
      ]
    },
    appointments: [
      { 
        date: "20/04/2025", 
        time: "11:00 AM", 
        reason: "Migraine Follow-up", 
        doctor: "Garcia", 
        status: "Completed",
        room: "101"
      },
      { 
        date: "18/05/2025", 
        time: "3:45 PM", 
        reason: "Anxiety Check-in", 
        doctor: "Taylor", 
        status: "Scheduled",
        room: "203"
      }
    ]
  },
  {
    id: "P10004",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    phone: "(555) 456-7890",
    address: "101 Cedar St, Anyplace, FL 33101",
    dob: "14 Aug 1965",
    age: 58,
    gender: "male",
    status: "Inactive",
    lastVisit: "05 Mar 2025",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    vitals: {
      heartRate: "70",
      bloodPressure: "140/90",
      temperature: "98.7",
      respiratoryRate: "16"
    },
    medicalHistory: {
      conditions: ["Hypertension", "Osteoarthritis"],
      allergies: ["Aspirin"],
      medications: [
        { name: "Amlodipine", dosage: "5mg", frequency: "Once daily" },
        { name: "Acetaminophen", dosage: "500mg", frequency: "As needed" }
      ]
    },
    appointments: [
      { 
        date: "05/03/2025", 
        time: "9:00 AM", 
        reason: "Joint Pain Consultation", 
        doctor: "Brown", 
        status: "Completed",
        room: "106"
      },
      { 
        date: "25/04/2025", 
        time: "11:30 AM", 
        reason: "Blood Pressure Check", 
        doctor: "Johnson", 
        status: "Cancelled",
        room: "102"
      }
    ]
  },
  {
    id: "P10005",
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "(555) 567-8901",
    address: "202 Birch Dr, Someplace, WA 98101",
    dob: "30 Mar 1980",
    age: 44,
    gender: "female",
    status: "Active",
    lastVisit: "15 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    vitals: {
      heartRate: "65",
      bloodPressure: "122/78",
      temperature: "98.5",
      respiratoryRate: "15"
    },
    medicalHistory: {
      conditions: ["Hypothyroidism"],
      allergies: ["Shellfish"],
      medications: [
        { name: "Levothyroxine", dosage: "75mcg", frequency: "Once daily" }
      ]
    },
    appointments: [
      { 
        date: "15/04/2025", 
        time: "1:15 PM", 
        reason: "Thyroid Function Test", 
        doctor: "Martinez", 
        status: "Completed",
        room: "204"
      },
      { 
        date: "10/05/2025", 
        time: "10:45 AM", 
        reason: "Medication Review", 
        doctor: "Williams", 
        status: "Scheduled",
        room: "105"
      }
    ]
  },
  {
    id: "P10006",
    name: "David Brown",
    email: "david.b@example.com",
    phone: "(555) 678-9012",
    address: "303 Maple Ave, Nowhere, IL 60601",
    dob: "05 Dec 1990",
    age: 34,
    gender: "male",
    status: "Active",
    lastVisit: "21 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    vitals: {
      heartRate: "72",
      bloodPressure: "125/82",
      temperature: "98.6",
      respiratoryRate: "14"
    },
    medicalHistory: {
      conditions: ["Allergic Rhinitis", "Eczema"],
      allergies: ["Dust Mites", "Pollen"],
      medications: [
        { name: "Cetirizine", dosage: "10mg", frequency: "Once daily" },
        { name: "Hydrocortisone Cream", dosage: "1%", frequency: "As needed" }
      ]
    },
    appointments: [
      { 
        date: "21/04/2025", 
        time: "3:30 PM", 
        reason: "Allergy Consultation", 
        doctor: "Taylor", 
        status: "Completed",
        room: "201"
      },
      { 
        date: "22/05/2025", 
        time: "2:15 PM", 
        reason: "Skin Check", 
        doctor: "Martinez", 
        status: "Scheduled",
        room: "104"
      }
    ]
  },
  {
    id: "P10007",
    name: "Amanda Thompson",
    email: "amanda.t@example.com",
    phone: "(555) 789-0123",
    address: "404 Willow Ln, Somewhere, AZ 85001",
    dob: "18 Jul 1972",
    age: 52,
    gender: "female",
    status: "Active",
    lastVisit: "14 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    vitals: {
      heartRate: "68",
      bloodPressure: "130/85",
      temperature: "98.4",
      respiratoryRate: "16"
    },
    medicalHistory: {
      conditions: ["Fibromyalgia", "Depression"],
      allergies: ["Ibuprofen"],
      medications: [
        { name: "Duloxetine", dosage: "60mg", frequency: "Once daily" },
        { name: "Pregabalin", dosage: "75mg", frequency: "Twice daily" }
      ]
    },
    appointments: [
      { 
        date: "14/04/2025", 
        time: "11:45 AM", 
        reason: "Pain Management", 
        doctor: "Johnson", 
        status: "Completed",
        room: "103"
      },
      { 
        date: "12/05/2025", 
        time: "9:15 AM", 
        reason: "Medication Adjustment", 
        doctor: "Taylor", 
        status: "Scheduled",
        room: "202"
      }
    ]
  },
  {
    id: "P10008",
    name: "James Anderson",
    email: "james.a@example.com",
    phone: "(555) 890-1234",
    address: "505 Elm St, Elsewhere, GA 30301",
    dob: "27 Feb 1995",
    age: 30,
    gender: "male",
    status: "Critical",
    lastVisit: "23 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    vitals: {
      heartRate: "90",
      bloodPressure: "145/95",
      temperature: "101.2",
      respiratoryRate: "22"
    },
    medicalHistory: {
      conditions: ["Pneumonia", "Asthma"],
      allergies: ["Codeine"],
      medications: [
        { name: "Azithromycin", dosage: "500mg", frequency: "Once daily" },
        { name: "Albuterol", dosage: "90mcg", frequency: "Every 4-6 hours as needed" },
        { name: "Prednisone", dosage: "20mg", frequency: "Once daily" }
      ]
    },
    appointments: [
      { 
        date: "23/04/2025", 
        time: "8:30 AM", 
        reason: "Pneumonia Follow-up", 
        doctor: "Garcia", 
        status: "Completed",
        room: "101"
      },
      { 
        date: "25/04/2025", 
        time: "10:00 AM", 
        reason: "Respiratory Assessment", 
        doctor: "Williams", 
        status: "Scheduled",
        room: "101"
      }
    ]
  },
  {
    id: "P10009",
    name: "Lisa Garcia",
    email: "lisa.g@example.com",
    phone: "(555) 901-2345",
    address: "606 Oak Dr, Anytown, MA 02101",
    dob: "09 Oct 1988",
    age: 36,
    gender: "female",
    status: "Active",
    lastVisit: "19 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    vitals: {
      heartRate: "74",
      bloodPressure: "115/75",
      temperature: "98.6",
      respiratoryRate: "16"
    },
    medicalHistory: {
      conditions: ["Endometriosis", "Iron Deficiency Anemia"],
      allergies: ["None"],
      medications: [
        { name: "Oral Contraceptive", dosage: "", frequency: "Once daily" },
        { name: "Iron Supplement", dosage: "65mg", frequency: "Once daily" }
      ]
    },
    appointments: [
      { 
        date: "19/04/2025", 
        time: "2:45 PM", 
        reason: "Gynecological Check-up", 
        doctor: "Miller", 
        status: "Completed",
        room: "205"
      },
      { 
        date: "17/05/2025", 
        time: "11:15 AM", 
        reason: "Anemia Follow-up", 
        doctor: "Brown", 
        status: "Scheduled",
        room: "102"
      }
    ]
  },
  {
    id: "P10010",
    name: "Thomas Martin",
    email: "thomas.m@example.com",
    phone: "(555) 012-3456",
    address: "707 Pine Ave, Someplace, CO 80201",
    dob: "12 Apr 1960",
    age: 65,
    gender: "male",
    status: "Active",
    lastVisit: "16 Apr 2025",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    vitals: {
      heartRate: "64",
      bloodPressure: "138/88",
      temperature: "98.2",
      respiratoryRate: "14"
    },
    medicalHistory: {
      conditions: ["Coronary Artery Disease", "GERD"],
      allergies: ["Contrast Dye"],
      medications: [
        { name: "Atorvastatin", dosage: "40mg", frequency: "Once daily" },
        { name: "Aspirin", dosage: "81mg", frequency: "Once daily" },
        { name: "Omeprazole", dosage: "20mg", frequency: "Once daily" }
      ]
    },
    appointments: [
      { 
        date: "16/04/2025", 
        time: "9:45 AM", 
        reason: "Cardiac Check-up", 
        doctor: "Johnson", 
        status: "Completed",
        room: "203"
      },
      { 
        date: "23/05/2025", 
        time: "1:00 PM", 
        reason: "Stress Test", 
        doctor: "Smith", 
        status: "Scheduled",
        room: "106"
      }
    ]
  }
];