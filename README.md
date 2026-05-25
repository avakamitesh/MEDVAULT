# MedVault 🏥
### Emergency Medical Bridge for First Responders

> Built for **BuildVerse 2026** · LNCT Group of Colleges, Bhopal  
> Track: Healthcare Innovation · Theme: Deep Tech, Real Impact

---

## 🔗 Live Demo
**[medvault.netlify.app](https://medvault.netlify.app)** ← replace with your actual Netlify URL

---

## 🚨 The Problem

Every year, 1.5 lakh+ people die in road accidents in India. When a first responder 
arrives at an accident site, they know nothing about the patient — no blood type, 
no allergies, no medications. Wrong treatment in the first 10 minutes can be fatal.

There is no system in India that gives paramedics instant access to patient 
medical history at the point of care.

**MedVault fixes this.**

---

## 💡 What MedVault Does

1. **Patient registers** their medical data → a QR code is generated
2. **First responder scans** the QR at an accident site → full patient card appears instantly
3. **AI triage engine** analyses symptoms → classifies as CRITICAL / URGENT / STABLE
4. **Hospital dashboard** receives an automated real-time alert → ER prepares before ambulance arrives

Works completely **offline** — no internet needed at crash sites.

---

## 🖥️ Pages

| File | What it does |
|------|-------------|
| `index.html` | Landing page — explains MedVault, routes to other pages |
| `register.html` | Patient registration form → generates real scannable QR code |
| `responder.html` | First responder app — QR scanner, patient card, AI triage, SOS button |
| `hospital.html` | Hospital dashboard — real-time incoming alerts, bed grid, sound notification |
| `utils.js` | Shared localStorage functions used by all pages |

---

## ⚙️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML + CSS + JavaScript | Entire frontend — no frameworks |
| localStorage | Patient database — works offline, no backend needed |
| qrcode.js (CDN) | Generates scannable QR codes from patient ID |
| jsQR (CDN) | Decodes QR codes from phone camera in real time |
| Google Gemini API | AI-powered symptom triage (CRITICAL / URGENT / STABLE) |
| Web Audio API | Alert beep sound on hospital dashboard |
| Geolocation API | GPS coordinates sent with SOS alert |
| Netlify | Free deployment — live URL for demo |

---

## 🚀 How to Run Locally

No installation needed. Just open the files:
