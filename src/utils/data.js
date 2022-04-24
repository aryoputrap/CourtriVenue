import React from 'react';
import {
    Location,
    Toilet,
    Parking,
    Canteen,
    Field,
    Mosque,
    Hanger,
  } from '../asset';

export const data = [
    {
      id: 1,
      nama: 'Gor Senopati',
      alamat: 'JL.Salemba No.28, Setiabudi, Jakarta Selatan.',
      star: 1.5,
      loc: {latitude: -6.21781246208, longitude: 106.801503461},
      img:
        'https://cdn.idntimes.com/content-images/community/2020/09/lapangan-futsal-94db8dd85c516f7bffe3836900ae1e6e_600x400.jpg',
      dataimg: [
        {
          id: 1,
          value: 'Indoor | Lantai Vinyl',
          img: <Field />,
          status: true,
        },
        {
          id: 2,
          value: 'Toilet',
          img: <Toilet />,
          status: true,
        },
        {
          id: 3,
          value: 'Parkir',
          img: <Parking />,
          status: true,
        },
        {
          id: 4,
          value: 'Mushola',
          img: <Mosque />,
          status: true,
        },
        {
          id: 5,
          value: 'Kantin',
          img: <Canteen />,
          status: true,
        },
        {
          id: 6,
          value: 'Ruang Ganti',
          img: <Hanger />,
          status: true,
        },
      ],
    },
    {
      id: 2,
      nama: 'Lapangan Setiabudi-One',
      alamat: 'JL.Salemba No.128, Setiabudi, Jakarta Selatan.',
      star: 4,
      loc: {latitude: -6.21781246208, longitude: 106.801503461},
      img: 'https://www.kibrispdr.org/data/taman-jangkar-surabaya-22.jpg',
      dataimg: [
        {
          id: 1,
          value: 'Outdoor | Lantai Vinyl',
          img: <Field />,
          status: true,
        },
        {
          id: 2,
          value: 'Toilet',
          img: <Toilet />,
          status: true,
        },
        {
          id: 3,
          value: 'Parkir',
          img: <Parking />,
          status: true,
        },
        {
          id: 4,
          value: 'Mushola',
          img: <Mosque />,
          status: true,
        },
        {
          id: 5,
          value: 'Kantin',
          img: <Canteen />,
          status: false,
        },
        {
          id: 6,
          value: 'Ruang Ganti',
          img: <Hanger />,
          status: false,
        },
      ],
    },
    {
      id: 3,
      nama: 'Gor Senopati',
      alamat: 'JL.Salemba No.28, Setiabudi, Jakarta Selatan.',
      star: 4,
      loc: {latitude: -6.224453, longitude: 106.82843},
      img: 'https://blogpictures.99.co/bisnis-lapangan-futsal-headeer.jpg',
      dataimg: [
        {
          id: 1,
          value: 'Indoor | Lantai Vinyl',
          img: <Field />,
          status: true,
        },
        {
          id: 2,
          value: 'Toilet',
          img: <Toilet />,
          status: true,
        },
        {
          id: 3,
          value: 'Parkir',
          img: <Parking />,
          status: true,
        },
        {
          id: 4,
          value: 'Mushola',
          img: <Mosque />,
          status: false,
        },
        {
          id: 5,
          value: 'Kantin',
          img: <Canteen />,
          status: true,
        },
        {
          id: 6,
          value: 'Ruang Ganti',
          img: <Hanger />,
          status: true,
        },
      ],
    },
    {
      id: 4,
      nama: 'Gor Gelora Bung Karno',
      alamat: 'JL.Salemba No.28, Setiabudi, Jakarta Selatan.',
      star: 5,
      loc: {latitude: -6.21781246208, longitude: 106.801503461},
      img:
        'https://cdn.idntimes.com/content-images/community/2020/09/lapangan-futsal-lantai-vinly-2816349bf0032cc2ca49ce01c38dc50a.jpg',
      dataimg: [
        {
          id: 1,
          value: 'Indoor | Lantai Vinyl',
          img: <Field />,
          status: true,
        },
        {
          id: 2,
          value: 'Toilet',
          img: <Toilet />,
          status: true,
        },
        {
          id: 3,
          value: 'Parkir',
          img: <Parking />,
          status: false,
        },
        {
          id: 4,
          value: 'Mushola',
          img: <Mosque />,
          status: false,
        },
        {
          id: 5,
          value: 'Kantin',
          img: <Canteen />,
          status: false,
        },
        {
          id: 6,
          value: 'Ruang Ganti',
          img: <Hanger />,
          status: true,
        },
      ],
    },
  ]

export const dataMonth = [
    {
      name: 'Januari',
      value: 'Januari',
    },
    {
      name: 'Februari',
      value: 'Februari',
    },
    {
      name: 'Maret',
      value: 'Maret',
    },
    {
      name: 'April',
      value: 'April',
    },
    {
      name: 'Mei',
      value: 'Mei',
    },
    {
      name: 'Juni',
      value: 'Juni',
    },
    {
      name: 'Juli',
      value: 'Juli',
    },
    {
      name: 'Agustus',
      value: 'Agustus',
    },
    {
      name: 'September',
      value: 'September',
    },
    {
      name: 'Oktober',
      value: 'Oktober',
    },
    {
      name: 'November',
      value: 'November',
    },
    {
      name: 'Desember',
      value: 'Desember',
    },
]

export const dataDay = [
  {
    name: 'Senin',
    value: 'Senin',
  },
  {
    name: 'Selasa',
    value: 'Selasa',
  },
  {
    name: 'Rabu',
    value: 'Rabu',
  },
  {
    name: 'Kamis',
    value: 'Kamis',
  },
  {
    name: 'Jumat',
    value: 'Jumat',
  },
  {
    name: 'Sabtu',
    value: 'Sabtu',
  },
  {
    name: 'Minggu',
    value: 'Minggu',
  },  
]

export const menuData = [
  {
    title: 'Reguler 1',
    range: 'Rp 80.000 - Rp 110.000',
    data: [
      // {key: null, value: null},
      {key: '07:00', value: 'booked', price: 80000},
      {key: '08:00', value: false, price: 80000},
      {key: '09:00', value: false, price: 80000},
      {key: '10:00', value: false, price: 80000},
      {key: '11:00', value: false, price: 80000},
      {key: '12:00', value: false, price: 80000},
      // {key: '13:00', value: false, price: 80000},
      // {key: '14:00', value: false, price: 80000},
      // {key: '15:00', value: 'booked', price: 80000},
      // {key: '16:00', value: false, price: 80000},
      // {key: '17:00', value: false, price: 80000},
      // {key: '18:00', value: false, price: 80000},
      // {key: '19:00', value: false, price: 110000},
      // {key: '20:00', value: false, price: 110000},
      // {key: null, value: null},
    ],
  },
  {
    title: 'Reguler II',
    range: 'Rp 70.000 - Rp 100.000',
    data: [
      {key: '07:00', value: 'booked', price: 70000},
      {key: '08:00', value: 'booked', price: 70000},
      {key: '09:00', value: false, price: 70000},
      {key: '10:00', value: false, price: 70000},
      {key: '11:00', value: false, price: 70000},
      {key: '12:00', value: false, price: 70000},
      // {key: '13:00', value: false, price: 70000},
      // {key: '14:00', value: false, price: 70000},
      // {key: '15:00', value: false, price: 70000},
      // {key: '16:00', value: false, price: 70000},
      // {key: '17:00', value: false, price: 70000},
      // {key: '18:00', value: false, price: 70000},
      // {key: '19:00', value: false, price: 70000},
      // {key: '20:00', value: false, price: 70000},
      // {key: '21:00', value: false, price: 100000},
      // {key: '22:00', value: false, price: 100000},
      // {key: '23:00', value: false, price: 100000},
      // {key: '24:00', value: false, price: 100000},
    ],
  },
  {
    title: 'Reguler III',
    range: 'Rp 120.000 - Rp 150.000',
    data: [
      {key: '07:00', value: false, price: 120000},
      {key: '08:00', value: false, price: 120000},
      {key: '09:00', value: false, price: 120000},
      {key: '10:00', value: false, price: 120000},
      {key: '11:00', value: false, price: 120000},
      {key: '12:00', value: false, price: 120000},
      {key: '13:00', value: false, price: 120000},
      {key: '14:00', value: false, price: 120000},
      {key: '15:00', value: false, price: 120000},
      {key: '16:00', value: false, price: 120000},
      {key: '17:00', value: false, price: 120000},
      {key: '18:00', value: false, price: 120000},
      {key: '19:00', value: false, price: 120000},
      {key: '20:00', value: false, price: 120000},
      {key: '21:00', value: false, price: 150000},
      {key: '22:00', value: false, price: 150000},
      {key: '23:00', value: false, price: 150000},
      {key: '24:00', value: false, price: 150000},
    ],
  },
  {
    title: 'VIP I',
    range: 'Rp 200.000 - Rp 230.000',
    data: [
      {key: '07:00', value: false, price: 200000},
      {key: '08:00', value: false, price: 200000},
      {key: '09:00', value: false, price: 200000},
      {key: '10:00', value: false, price: 200000},
      {key: '11:00', value: false, price: 200000},
      {key: '12:00', value: false, price: 200000},
      {key: '13:00', value: false, price: 200000},
      {key: '14:00', value: false, price: 200000},
      {key: '15:00', value: false, price: 200000},
      {key: '16:00', value: false, price: 200000},
      {key: '17:00', value: false, price: 200000},
      {key: '18:00', value: false, price: 200000},
      {key: '19:00', value: false, price: 200000},
      {key: '20:00', value: false, price: 200000},
      {key: '21:00', value: false, price: 200000},
      {key: '22:00', value: false, price: 230000},
      {key: '23:00', value: false, price: 230000},
      {key: '24:00', value: false, price: 230000},
    ],
  },
]