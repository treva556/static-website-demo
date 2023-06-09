// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Avatar,
//     Tooltip,
//   } from "@material-tailwind/react";
import image from '../pngs/soccer.png'

import React from "react";
export default function Card2() {
    return (
        <div class="max-w-xl bg-[#614F89] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  border-8 border-[#FEA4B9]">
        <a href="#">
            <img class="rounded-t-lg" src={image} alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#FEA4B9] dark:text-white text-center">  Football</h5>
            </a>
            <p class="mb-3 font-normal text-[#FEA4B9] dark:text-gray-400">  football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins. </p>
            <a href="#" class="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-[#FEA4B9] rounded-lg hover:bg-[#FEA4B9] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#FEA4B9] dark:hover:bg-[#FEA4B9] dark:focus:ring-[#FEA4B9] items-center">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    );
  }
  