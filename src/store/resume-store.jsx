import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  resumeData: {
    name: '',
    email: '',
    phone: '',
    address: '',
    portfolio: '',
    linkedin: '',
    github: '',
    aboutMe: '',
    skills: [], // { value: string }
    experience: [], // { company, role, duration, achievements[], techStack[] }
    education: [], // { institution, degree, field, startDate, endDate }
    projects: [], // { title, description, link, techStack[] }
    certifications: [], // { title, issuer, year }
    languages: [],
    interests: [],
    socialClubs: []
  },

  selectedTemplate: 'classic',

  updateField: (field, value) => set((state) => ({
    resumeData: { ...state.resumeData, [field]: value }
  })),

  addArrayItem: (arrayField, item) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      [arrayField]: [...state.resumeData[arrayField], item]
    }
  })),

  updateArrayItem: (arrayField, index, item) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      [arrayField]: state.resumeData[arrayField].map((el, i) => (i === index ? item : el))
    }
  })),

  removeArrayItem: (arrayField, index) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      [arrayField]: state.resumeData[arrayField].filter((_, i) => i !== index)
    }
  })),

  setTemplate: (template) => set({ selectedTemplate: template })
}));
