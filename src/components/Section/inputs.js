// const info = [
//   {info:
//     [{
//       name: "firstName",
//       placeholder: "First Name",
//       style: { gridColumn: "1/3", gridRow: "1" },
//     },
//     {
//       name: "lastName",
//       placeholder: "last Name",
//       style: { gridColumn: "1/3", gridRow: "2" },
//     },
//     {
//       name: "email",
//       placeholder: "E-mail",
//       style: { gridColumn: "1/3", gridRow: "3" },
//     },
//     {
//       name: "about",
//       placeholder: "About",
//       style: { gridColumn: "3/5", gridRow: "1/4", height: "90%" },
//     },
//     {
//       name: "phone",
//       placeholder: "Phone Number",
//       style: { gridColumn: "1/3", gridRow: "4" },
//     },
//     {
//       name: "address",
//       placeholder: "Address",
//       style: { gridColumn: "1/3", gridRow: "5" },
//     },
//     {
//       name: "position",
//       placeholder: "Desired Position",
//       style: { gridColumn: "3/5", gridRow: "4" },
//     },
//     {
//       name: "website",
//       placeholder: "Website",
//       style: { gridColumn: "3/5", gridRow: "5" },
//     },]
//   },
// ];

import { v4 } from "uuid";

// const exp = [
//   [
    // {
    //   name: "job",
    //   placeholder: "Job Title",
    //   style: { gridColumn: "1/3", gridRow: "1" },
    // },
    // {
    //   name: "company",
    //   placeholder: "Company Name",
    //   style: { gridColumn: "1/3", gridRow: "2" },
    // },
    // {
    //   name: "startDate",
    //   placeholder: "Start Date",
    //   style: { gridColumn: "1/3", gridRow: "3" },
    // },
    // {
    //   name: "endDate",
    //   placeholder: "End Date",
    //   style: { gridColumn: "1/3", gridRow: "4" },
    // },
    // {
    //   name: "responsabilities",
    //   placeholder: "Responsabilities",
    //   style: { gridColumn: "3/5", gridRow: "1/5", height: "90%" },
    // },
//   ],
// ];

// const education = [
//   [
//     {
//       name: "course",
//       placeholder: "Course",
//       // style: { gridColumn: "1/3", gridRow: "1" },
//     },
//     {
//       name: "schoolName",
//       placeholder: "School Name",
//       // style: { gridColumn: "1/3", gridRow: "2" },
//     },
//   ],
// ];

// const skill = [
//   [
//     {
//       name: "skill",
//       placeholder: "Skill",
//       // style: { gridColumn: "1/3", gridRow: "1" },
//     },
//   ],
// ];

// const lang = [
//   [
//     {
//       name: "lang",
//       placeholder: "Language",
//     },
//   ],
// ];

export const infoInput = [
  [
    {
      name: "firstName",
      placeholder: "First Name",
      style: { gridColumn: "1/3", gridRow: "1" },
    },
    {
      name: "lastName",
      placeholder: "last Name",
      style: { gridColumn: "1/3", gridRow: "2" },
    },
    {
      name: "email",
      placeholder: "E-mail",
      style: { gridColumn: "1/3", gridRow: "3" },
    },

    {
      name: "phone",
      placeholder: "Phone Number",
      style: { gridColumn: "1/3", gridRow: "4" },
    },
    {
      name: "address",
      placeholder: "Address",
      style: { gridColumn: "1/3", gridRow: "5" },
    },
    {
      name: "about",
      placeholder: "About",
      style: { gridColumn: "3/5", gridRow: "1/5", height: "90%" },
    },
    {
      name: "position",
      placeholder: "Desired Position",
      style: { gridColumn: "1/3", gridRow: "5" },
    },
    {
      name: "website",
      placeholder: "Website",
      style: { gridColumn: "3/5", gridRow: "5" },
    },
  ],
];

export const expInput = [
  [
    {
      name: "job",
      placeholder: "Job Title",
      style: { gridColumn: "1/3", gridRow: "1" },
    },
    {
      name: "company",
      placeholder: "Company Name",
      style: { gridColumn: "1/3", gridRow: "2" },
    },
    {
      name: "startDate",
      placeholder: "Start Date",
      style: { gridColumn: "1/3", gridRow: "3" },
    },
    {
      name: "endDate",
      placeholder: "End Date",
      style: { gridColumn: "1/3", gridRow: "4" },
    },
    {
      name: "responsabilities",
      placeholder: "Responsabilities",
      style: { gridColumn: "3/5", gridRow: "1/5", height: "90%" },
    },
  ],
];

export const educationInput = [[
  {
      name: "course",
      placeholder: "Course",
      // style: { gridColumn: "1/3", gridRow: "1" },
    },
    {
      name: "schoolName",
      placeholder: "School Name",
      // style: { gridColumn: "1/3", gridRow: "2" },
    }
]]

export const skillInput = [
  [
    {
      name: "skill",
      placeholder: "Skill",
      // style: { gridColumn: "1/3", gridRow: "1" },
    },
  ],
];

export const langInput = [[
  {
      name: "lang",
      placeholder: "Language",
    },
]]

export const inputArray = [
  {
    name: "Informations",
    input: [
      [
        {
          name: "firstName",
          placeholder: "First Name",
          style: { gridColumn: "1/3", gridRow: "1" },
        },
        {
          name: "lastName",
          placeholder: "last Name",
          style: { gridColumn: "1/3", gridRow: "2" },
        },
        {
          name: "email",
          placeholder: "E-mail",
          style: { gridColumn: "1/3", gridRow: "3" },
        },
        {
          name: "about",
          placeholder: "About",
          style: { gridColumn: "3/5", gridRow: "1/4", height: "90%" },
        },
        {
          name: "phone",
          placeholder: "Phone Number",
          style: { gridColumn: "1/3", gridRow: "4" },
        },
        {
          name: "address",
          placeholder: "Address",
          style: { gridColumn: "1/3", gridRow: "5" },
        },
        {
          name: "position",
          placeholder: "Desired Position",
          style: { gridColumn: "3/5", gridRow: "4" },
        },
        {
          name: "website",
          placeholder: "Website",
          style: { gridColumn: "3/5", gridRow: "5" },
        },
      ],
    ],
  },
  {
    name: "Experiences",
    input: [
      [
        {
          name: "job",
          placeholder: "Job Title",
          style: { gridColumn: "1/3", gridRow: "1" },
        },
        {
          name: "company",
          placeholder: "Company Name",
          style: { gridColumn: "1/3", gridRow: "2" },
        },
        {
          name: "startDate",
          placeholder: "Start Date",
          style: { gridColumn: "1/3", gridRow: "3" },
        },
        {
          name: "endDate",
          placeholder: "End Date",
          style: { gridColumn: "1/3", gridRow: "4" },
        },
        {
          name: "responsabilities",
          placeholder: "Responsabilities",
          style: { gridColumn: "3/5", gridRow: "1/5", height: "90%" },
        },
      ],
    ],
  },
  {
    name: "Educations",
    input: [
      [
        {
          name: "course",
          placeholder: "Course",
          style: { gridColumn: "1/3", gridRow: "1" },
        },
        {
          name: "schoolName",
          placeholder: "School Name",
          style: { gridColumn: "1/3", gridRow: "2" },
        },
      ],
    ],
  },
  {
    name: "Skills",
    input: [
      [
        {
          name: "skill",
          placeholder: "Skill",
          // style: { gridColumn: "1/3", gridRow: "1" },
        },
      ],
    ],
  },
  {
    name: "Languages",
    input: [
      [
        {
          name: "lang",
          placeholder: "Language",
        },
      ],
      
    ],
  },
];
