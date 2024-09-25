import Img1 from "../../Assets/Bahai_Shrine.jpg";
import Img2 from "../../Assets/Basilica of Annunciation.jpg";
import Img3 from "../../Assets/Beattitudes in Jerusalem.jpg";
import Img4 from "../../Assets/bethany.jpg";
import Img5 from "../../Assets/Bethlehem.jpg";
import Img6 from "../../Assets/BurningBush.jpg";
import Img7 from "../../Assets/Cairo Museum.jpg";
import Img8 from "../../Assets/Cairo.jpg";
import Img9 from "../../Assets/Canaan.jpg";
import { SectionBody } from "../ImageSlider/HomeBody";
import { BangDineImg, BangEventImg, GuntDineImg, GuntEventImg, GuntStayImg, HydDineImg, HydEventImg, PondDineImg, PondEventImg, PondStayImg } from "./ImagesStore";
import { BangHeader, GuntHeader, HydHeader, HydStay, PondHeader } from "./Content";
import { HydDine } from "./Content";
import { HydEvents } from "./Content";
import { GuntStay } from "./Content";
import { GuntDine } from "./Content";
import { GuntEvents } from "./Content";
import { BangStay } from "./Content";
import { BangDine } from "./Content";
import { BangEvents } from "./Content";
import { PondStay } from "./Content";
import { PondDine } from "./Content";
import { PondEvents } from "./Content";
import { HydStayImg } from "./ImagesStore";
import HeaderContent from "../../Components/HeaderContent";
import HydFooter from "../../Components/Footer/HydFooter";
import GuntFooter from "../../Components/Footer/GuntFooter";
import BangFooter from "../../Components/Footer/BangFooter";
import PondFooter from "../../Components/Footer/PondFooter";

export const imageSlides = {
  hyderabad: [
    Img1,
    Img2,
    Img3
  ],
  guntur: [
    Img4,
    Img5,
    Img6
  ],
  bangalore: [
    Img7,
    Img8,
    Img9
  ]
};

export const stayDetails = {
  hyderabad: {
    description:
      <div>
        <HeaderContent head={HydHeader[0].head} para={HydHeader[0].para} />
        <SectionBody images={HydStayImg[0].Images} content={HydStay[0].content} /><hr />
        <SectionBody images={HydStayImg[1].Images} content={HydStay[1].content} /><hr />
        <SectionBody images={HydStayImg[2].Images} content={HydStay[2].content} />
        <HydFooter />
      </div>,
    popularStays: [
      'Taj Falaknuma Palace',
      'The Park Hyderabad',
      'ITC Kakatiya',
    ],
    tips: 'Be sure to explore local landmarks like Charminar and Golconda Fort, which are in close proximity to many hotels.',
  },
  guntur: {
    description:
      <div>
        <HeaderContent head={GuntHeader[0].head} para={GuntHeader[0].para} />
        <SectionBody images={GuntStayImg[0].Images} content={GuntStay[0].content} /><hr />
        <SectionBody images={GuntStayImg[1].Images} content={GuntStay[1].content} /><hr />
        <SectionBody images={GuntStayImg[2].Images} content={GuntStay[2].content} />
        <GuntFooter />
      </div>,
    popularStays: [
      'Hotel Grand Krishna',
      'The Surya Grand',
      'Hotel Swagath'
    ],
    tips: 'Check out local markets for traditional items and enjoy authentic Andhra meals at local restaurants.'
  },
  bangalore: {
    description:
      <div>
        <HeaderContent head={BangHeader[0].head} para={BangHeader[0].para} />
        <SectionBody images={BangDineImg[0].Images} content={BangStay[0].content} /><hr />
        <SectionBody images={BangDineImg[1].Images} content={BangStay[1].content} /><hr />
        <SectionBody images={BangDineImg[2].Images} content={BangStay[2].content} />
        <BangFooter />
      </div>,
    popularStays: [
      'The Leela Palace',
      'ITC Gardenia',
      'Hotel Shangri-La'
    ],
    tips: 'Explore areas like MG Road and Brigade Road for shopping and dining, and don’t miss out on the city’s famous breweries.'
  },
  pondicherry: {
    description:
      <div>
        <HeaderContent head={PondHeader[0].head} para={PondHeader[0].para} />
        <SectionBody images={PondStayImg[0].Images} content={PondStay[0].content} /><hr />
        <SectionBody images={PondStayImg[1].Images} content={PondStay[1].content} /><hr />
        <SectionBody images={PondStayImg[2].Images} content={PondStay[2].content} />
        <PondFooter />
      </div>,
    popularStays: [
      'The Leela Palace',
      'ITC Gardenia',
      'Hotel Shangri-La'
    ],
    tips: 'Explore areas like MG Road and Brigade Road for shopping and dining, and don’t miss out on the city’s famous breweries.'
  },
};

export const dineDetails = {
  hyderabad: {
    description:
      <div>
        <HeaderContent head={HydHeader[1].head} para={HydHeader[1].para} />
        <SectionBody images={HydDineImg[0].Images} content={HydDine[0].content} /><hr />
        <SectionBody images={HydDineImg[1].Images} content={HydDine[1].content} /><hr />
        <SectionBody images={HydDineImg[2].Images} content={HydDine[2].content} />
        <HydFooter />
      </div>,
    popularRestaurants: [
      'Paradise Restaurant',
      'Bawarchi',
      'Shadab Restaurant'
    ],
    tips: 'Don’t miss the iconic Hyderabadi Biryani, and be sure to try the local street food in areas like Mohammed Ali Road and Charminar.'
  },
  guntur: {
    description:
      <div>
        <HeaderContent head={GuntHeader[1].head} para={GuntHeader[1].para} />
        <SectionBody images={GuntDineImg[0].Images} content={GuntDine[0].content} /><hr />
        <SectionBody images={GuntDineImg[1].Images} content={GuntDine[1].content} /><hr />
        <SectionBody images={GuntDineImg[2].Images} content={GuntDine[2].content} />
        <GuntFooter />
      </div>,
    popularRestaurants: [
      'Sree Annapurna Restaurant',
      'Madhura Restaurant',
      'Vasudev Adiga\'s'
    ],
    tips: 'Try the spicy Andhra meals and enjoy traditional dishes like Gongura Pachadi and Guntur Chilli Chicken. Local eateries offer a taste of authentic Andhra flavors.'
  },
  bangalore: {
    description:
      <div>
        <HeaderContent head={BangHeader[1].head} para={BangHeader[1].para} />
        <SectionBody images={BangDineImg[0].Images} content={BangDine[0].content} /> <hr />
        <SectionBody images={BangDineImg[1].Images} content={BangDine[1].content} /><hr />
        <SectionBody images={BangDineImg[2].Images} content={BangDine[2].content} />
        <BangFooter />
      </div>,
    popularRestaurants: [
      'MTR (Mavalli Tiffin Room)',
      'Toit',
      'The Only Place'
    ],
    tips: 'Explore areas like Indiranagar and Koramangala for a range of dining options, from upscale restaurants to casual eateries. Don’t forget to try Bangalore’s famous filter coffee.'
  },
  pondicherry: {
    description:
      <div>
        <HeaderContent head={PondHeader[1].head} para={PondHeader[1].para} />
        <SectionBody images={PondDineImg[0].Images} content={PondDine[0].content} /><hr />
        <SectionBody images={PondDineImg[1].Images} content={PondDine[1].content} /><hr />
        <SectionBody images={PondDineImg[2].Images} content={PondDine[2].content} />
        <PondFooter />
      </div>,
    popularRestaurants: [
      'The Leela Palace',
      'ITC Gardenia',
      'Hotel Shangri-La'
    ],
    tips: 'Explore areas like MG Road and Brigade Road for shopping and dining, and don’t miss out on the city’s famous breweries.'
  },
};

export const eventDetails = {
  hyderabad: {
    description:
      <div>
        <HeaderContent head={HydHeader[2].head} para={HydHeader[2].para} />
        <SectionBody images={HydEventImg[0].Images} content={HydEvents[0].content} /><hr />
        <SectionBody images={HydEventImg[1].Images} content={HydEvents[1].content} /><hr />
        <SectionBody images={HydEventImg[2].Images} content={HydEvents[2].content} />
        <HydFooter />
      </div>,
    popularRestaurants: [
      'Paradise Restaurant',
      'Bawarchi',
      'Shadab Restaurant'
    ],
    tips: 'Don’t miss the iconic Hyderabadi Biryani, and be sure to try the local street food in areas like Mohammed Ali Road and Charminar.'
  },
  guntur: {
    description:
      <div>
        <HeaderContent head={GuntHeader[2].head} para={GuntHeader[2].para} />
        <SectionBody images={GuntEventImg[0].Images} content={GuntEvents[0].content} /><hr />
        <SectionBody images={GuntEventImg[1].Images} content={GuntEvents[1].content} /><hr />
        <SectionBody images={GuntEventImg[2].Images} content={GuntEvents[2].content} /><hr />
        <SectionBody images={GuntEventImg[2].Images} content={GuntEvents[3].content} />
        <GuntFooter />
      </div>,
    popularRestaurants: [
      'Sree Annapurna Restaurant',
      'Madhura Restaurant',
      'Vasudev Adiga\'s'
    ],
    tips: 'Try the spicy Andhra meals and enjoy traditional dishes like Gongura Pachadi and Guntur Chilli Chicken. Local eateries offer a taste of authentic Andhra flavors.'
  },
  bangalore: {
    description:
      <div>
        <HeaderContent head={BangHeader[2].head} para={BangHeader[2].para} />
        <SectionBody images={BangEventImg[0].Images} content={BangEvents[0].content} /><hr />
        <SectionBody images={BangEventImg[1].Images} content={BangEvents[1].content} /><hr />
        <SectionBody images={BangEventImg[2].Images} content={BangEvents[2].content} />
        <BangFooter />
      </div>,
    popularRestaurants: [
      'MTR (Mavalli Tiffin Room)',
      'Toit',
      'The Only Place'
    ],
    tips: 'Explore areas like Indiranagar and Koramangala for a range of dining options, from upscale restaurants to casual eateries. Don’t forget to try Bangalore’s famous filter coffee.'
  },
  pondicherry: {
    description:
      <div>
        <HeaderContent head={PondHeader[2].head} para={PondHeader[2].para} />
        <SectionBody images={PondEventImg[0].Images} content={PondEvents[0].content} /><hr />
        <SectionBody images={PondEventImg[1].Images} content={PondEvents[1].content} /><hr />
        <SectionBody images={PondEventImg[2].Images} content={PondEvents[2].content} />
        <PondFooter />
      </div>,
    popularRestaurants: [
      'The Leela Palace',
      'ITC Gardenia',
      'Hotel Shangri-La',
    ],
    tips: 'Explore areas like MG Road and Brigade Road for shopping and dining, and don’t miss out on the city’s famous breweries.'
  },
};