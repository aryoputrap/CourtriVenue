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